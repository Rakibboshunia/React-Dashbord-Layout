import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo3.png";
import BackNextActions from "../../components/auth/BackNextActions";

export default function Success() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-8">
          <div className="space-y-8">
            <img src={Logo} className="mx-auto h-30 scale-[1.3]" />
            <h2 className="text-3xl font-semibold">
              Password Updated Successfully!
            </h2>
            <p className="text-gray-500">
              You new password has been saved successfully. You can now continue securely.
            </p>
          </div>

          <PrimaryButton>Sign In</PrimaryButton>
        </div>

        <BackNextActions 
          backTo="/reset-password" 
          showNext={false} 
        />

      </AuthCard>
    </AuthLayout>
  );
}
