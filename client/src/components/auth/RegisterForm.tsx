import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface RegisteredUser {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordStrength =
    password.length === 0
      ? ""
      : password.length < 6
      ? "Weak"
      : password.length < 10
      ? "Medium"
      : "Strong";

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // Name validation
    if (!name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    // Email validation
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      toast.error(
        "Password must contain at least 6 characters."
      );
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Terms
    if (!terms) {
      toast.error(
        "Please accept the Terms & Conditions."
      );
      return;
    }

    setLoading(true);

    // Simulate registration
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    // Check existing user
    const savedUser =
      localStorage.getItem("worksphere-user");

    if (savedUser) {
      const existingUser: RegisteredUser =
        JSON.parse(savedUser);

      if (
        existingUser.email.toLowerCase() ===
        email.trim().toLowerCase()
      ) {
        setLoading(false);

        toast.error(
          "An account with this email already exists."
        );

        return;
      }
    }

    // Create new user
    const newUser: RegisteredUser = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    localStorage.setItem(
      "worksphere-user",
      JSON.stringify(newUser)
    );

    setLoading(false);

    toast.success(
      "Account created successfully!"
    );

    // Redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="register-form-container">

      <form
        className="register-form"
        onSubmit={handleRegister}
      >

        {/* Logo */}

        <div className="register-logo">
          WORK<span>Sphere</span>
        </div>

        <h2>Create Account</h2>

        <p className="register-subtitle">
          Create your account to get started.
        </p>

        {/* Full Name */}

        <div className="form-group">

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        {/* Email */}

        <div className="form-group">

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        {/* Password */}

        <div className="form-group">

          <label>Password</label>

          <div className="register-password-box">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Create a password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              className="register-eye-btn"
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

          {password && (
            <div
              className={`password-strength ${passwordStrength.toLowerCase()}`}
            >
              Password strength:{" "}
              <strong>
                {passwordStrength}
              </strong>
            </div>
          )}

        </div>

        {/* Confirm Password */}

        <div className="form-group">

          <label>Confirm Password</label>

          <div className="register-password-box">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="register-eye-btn"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>

          </div>

        </div>

        {/* Terms */}

        <label className="terms-row">

          <input
            type="checkbox"
            checked={terms}
            onChange={(e) =>
              setTerms(e.target.checked)
            }
          />

          <span>
            I agree to the{" "}
            <a href="#">
              Terms & Conditions
            </a>
          </span>

        </label>

        {/* Register Button */}

        <button
          type="submit"
          className="register-btn"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

        {/* Login Link */}

        <p className="login-link">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default RegisterForm;