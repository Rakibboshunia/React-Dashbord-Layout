import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo3.png";
import BackNextActions from "../../components/auth/BackNextActions";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-7">
          <img src={Logo} className="mx-auto h-30 scale-[1.3]" />
          <h2 className="text-center text-3xl font-semibold">
            Set a new password
          </h2>
          <p className="text-gray-500">
            Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <AuthInput
            label="New Password"
            type="password"
            placeholder="********"
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="********"
          />
          <PrimaryButton>Reset Password</PrimaryButton>
        </div>

        <BackNextActions 
          backTo="/verify-otp" 
          nextTo="/success" 
        />
      </AuthCard>
    </AuthLayout>
  );
}
