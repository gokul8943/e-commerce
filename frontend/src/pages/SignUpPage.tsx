import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { Mail } from "lucide-react";
import { useState } from "react";
import { message } from 'antd'
import { useNavigate } from "react-router-dom";
import { register } from "@/services/user/user.api";

const SignupPage = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      register(formData)
        .then((response) => {
          console.log('drres', response);

          if (response.status === 200 || response.status === 201) {
            message.success("Register Sucessfully",),
              navigate("/user/login");
          }
        })
        .catch((error) => {
          console.log(error);
          message.error(error.response.data.message);
        })
    } catch (error) {
      console.log(error);
      message.error("Internal server error")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        {/* Logo and Header */}
        <Card>
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>Choose your preferred signup method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Email Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Name"
                      required
                      onChange={handleInputChange}
                      name="name"
                    />
                  </div>
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
                    />
                  </div>
                  <Button className="bg-slate-900">Verify</Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
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
                    placeholder="password"
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
              {/* Social Signup Buttons */}
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Sign up with Google
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Button onClick={() => navigate('/sign-in')} variant="link" className="px-1">
                Sign in
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;