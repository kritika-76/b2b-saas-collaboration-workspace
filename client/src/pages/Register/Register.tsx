import RegisterBanner from "../../components/auth/RegisterBanner";
import RegisterForm from "../../components/auth/RegisterForm";

import "../../styles/register.css";

const Register = () => {
  return (
    <div className="register-page">

      <RegisterBanner />

      <RegisterForm />

    </div>
  );
};

export default Register;