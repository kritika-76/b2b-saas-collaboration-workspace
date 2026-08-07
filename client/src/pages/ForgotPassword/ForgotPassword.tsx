import ForgotBanner from "../../components/auth/ForgotBanner";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import "../../styles/forgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-page">

      <ForgotBanner />

      <ForgotPasswordForm />

    </div>
  );
};

export default ForgotPassword;