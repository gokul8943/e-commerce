import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { Mail } from "lucide-react";
import { useState } from "react";
import { message } from 'antd';
import { useNavigate } from "react-router-dom";
import { register, sendOtp } from "@/services/user/user.api";
import VerifyOtp from "@/components/modals/VerifyOtp";

const SignupPage = () => {
  const navigate = useNavigate();
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = async () => {
    if (!formData.email) {
      return message.warning("Please enter your email first.");
    }

    try {
      const response = await sendOtp({ email: formData.email });
      if (response.status === 200) {
        message.success("OTP sent to your email.");
        setOtpModalOpen(true);
      }
    } catch (error: any) {
      message.error(error?.response?.data?.message || "Failed to send OTP.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmailVerified) {
      return message.warning("Please verify your email before submitting.");
    }

    register(formData)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          message.success("Registered successfully");
          navigate("/user/login");
        }
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Choose your preferred signup method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Name"
                    required
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <Button
                    type="button"
                    className="bg-slate-900"
                    onClick={handleSendOtp}
                  >
                    Verify
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-slate-900">
                  Create Account
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Button onClick={() => navigate("/sign-in")} variant="link" className="px-1">
                Sign in
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* OTP Modal */}
      <VerifyOtp
        open={otpModalOpen}
        setOpen={setOtpModalOpen}
        email={formData.email}
        onVerified={() => {
          setIsEmailVerified(true);
          message.success("Email verified!");
        }}
      />
    </div>
  );
};

export default SignupPage;
