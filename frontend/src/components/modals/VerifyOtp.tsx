import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { message } from "antd";
import { verifyOtp } from "@/services/user/user.api";

interface VerifyOtpProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  email: string;
  onVerified: () => void;
}

const VerifyOtp = ({ open, setOpen, email, onVerified }: VerifyOtpProps) => {
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    if (!otp) return message.warning("Please enter the OTP.");

    try {
      const response = await verifyOtp({ email, otp }); // Call your backend OTP verification
      if (response.status === 200) {
        onVerified();
        setOpen(false);
        setOtp(""); // clear input
      }
    } catch (err: any) {
      message.error(err?.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter the OTP</DialogTitle>
          <DialogDescription>
            Please enter the 6-digit code sent to {email}.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Input
            type="text"
            maxLength={6}
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button onClick={handleVerify} className="w-full">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyOtp;
