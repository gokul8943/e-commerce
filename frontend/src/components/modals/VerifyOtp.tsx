import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useState } from "react"

const VerifyOtp = () => {
    const [otp, setOtp] = useState("")

    const handleVerify = () => {
        console.log("Verifying OTP:", otp)
        // Add your OTP verification logic here
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button>Verify OTP</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter the OTP</DialogTitle>
                        <DialogDescription>
                            Please enter the 6-digit code sent to your email/phone.
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
        </div>
    )
}

export default VerifyOtp
