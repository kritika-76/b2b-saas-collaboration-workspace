import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DEMO_USER } from "../../constants/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [error, setError] = useState("");
useEffect(() => {
  const loggedIn =
    localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    navigate("/");
  }
}, [navigate]);
  useEffect(() => {
    const savedEmail =
      localStorage.getItem("rememberEmail");

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

const handleLogin = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  setError("");

  if (!email || !password) {
    toast.error("Please fill all fields");
    return;
  }

  setLoading(true);

  await new Promise((resolve) =>
    setTimeout(resolve, 1800)
  );

  if (
    email === DEMO_USER.email &&
    password === DEMO_USER.password
  ) {

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "loggedUser",
      DEMO_USER.name
    );

    if (rememberMe) {

      localStorage.setItem(
        "rememberEmail",
        email
      );

    } else {

      localStorage.removeItem(
        "rememberEmail"
      );

    }

    toast.success("Login Successful!");

    navigate("/");

  } else {

    toast.error("Invalid Credentials");

  }

  setLoading(false);

};

  return (
    <div className="login-form-container">
<div className="login-logo">

WORK<span>Sphere</span>

</div>
      <h2>Welcome Back 👋</h2>

      <p>
        Login to continue to WorkSphere
      </p>

      <div className="demo-account">

<h4>Demo Account</h4>

<p>Email: admin@worksphere.com</p>

<p>Password: admin123</p>

</div>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <div className="password-box">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>

        </div>

      <div className="remember-row">

  <label className="remember-me">

    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) =>
        setRememberMe(e.target.checked)
      }
    />

    <span>Remember Me</span>

  </label>

  <Link
    to="/forgot-password"
    className="forgot-link"
  >
    Forgot Password?
  </Link>

</div>

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

       <button
type="submit"
className="login-btn"
disabled={loading}
>

{loading
? "Signing In..."
: "Login"}

</button>

<p className="register-link">
  Don't have an account?{" "}
  <Link to="/register">Register</Link>
</p>

      </form>

    </div>
  );
};

export default LoginForm;