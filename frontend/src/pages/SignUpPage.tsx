import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { ShoppingBag, Github, Mail } from "lucide-react";

const SignupPage = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <div className="bg-primary rounded-full p-2">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold">ShopHub</h1>
          <p className="text-gray-500">Create an account to start shopping</p>
        </div>

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
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Button variant="link" className="px-1 h-auto">
                      Terms of Service
                    </Button>
                    {" "}and{" "}
                    <Button variant="link" className="px-1 h-auto">
                      Privacy Policy
                    </Button>
                  </Label>
                </div>

                <Button type="submit" className="w-full">
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
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with Github
                </Button>
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
              <Button variant="link" className="px-1">
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