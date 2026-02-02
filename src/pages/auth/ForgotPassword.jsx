import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo3.png";
import BackNextActions from "../../components/auth/BackNextActions";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-7">
          <img src={Logo} className="mx-auto h-30 scale-[1.3]" />
          <h2 className="text-3xl font-semibold">Forgot Password?</h2>
          <p className="text-md text-gray-500">
            Please enter your email to get verification code
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <AuthInput label="Email Address" placeholder="admin@email.com" />

          {/* Buttons */}
          <div className="flex items-center justify-between pt-2">
            <PrimaryButton>Continue</PrimaryButton>
          </div>

          <BackNextActions 
            backTo="/login" 
            nextTo="/verify-otp" 
          />
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
