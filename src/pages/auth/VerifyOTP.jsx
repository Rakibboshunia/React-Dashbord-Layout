import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import OTPInput from "../../components/auth/OTPInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo3.png";
import BackNextActions from "../../components/auth/BackNextActions";

export default function VerifyOTP() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-7">
          <img src={Logo} className="mx-auto h-30 scale-[1.3]" />
          <h2 className="text-3xl font-semibold">Check your Email</h2>
          <p className="text-md text-gray-500">
            We sent a code to your email address. Please check your email for the 6 digit code.
          </p>
        </div>

        <div className="mt-8 pb-2 space-y-4">
          <OTPInput />

          <PrimaryButton>Verify</PrimaryButton>
        </div>

        {/* Resend */}
        <div className="text-center mt-4 gap-3">
          <p className="text-sm text-gray-500">
            Didn't receive the code?
            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
            >
              Resend
            </button>
          </p>
        </div>

        <BackNextActions 
          backTo="/forgot-password" 
          nextTo="/reset-password" 
        />
      </AuthCard>
    </AuthLayout>
  );
}
