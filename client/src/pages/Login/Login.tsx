import LoginBanner from "../../components/auth/LoginBanner";
import LoginForm from "../../components/auth/LoginForm";
import "../../styles/login.css";

const Login = () => {
  return (
    <div className="login-page">
      <LoginBanner />
      <LoginForm />
    </div>
  );
};

export default Login;