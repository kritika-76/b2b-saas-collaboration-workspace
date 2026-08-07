import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // Empty validation
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error(
        "Please enter a valid email address."
      );
      return;
    }

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setLoading(false);

    setSuccess(true);

    toast.success(
      "Password reset link sent successfully!"
    );
  };

  // Success Screen
  if (success) {
    return (
      <div className="forgot-form-container">
        <div className="success-card">

          <div className="success-icon">
            ✓
          </div>

          <h2>Email Sent!</h2>

          <p>
            We've sent a password reset link to:
          </p>

          <strong>{email}</strong>

          <p className="success-note">
            If you don't receive the email within
            a few minutes, please check your spam
            folder.
          </p>

          <Link
            to="/login"
            className="success-btn"
          >
            Back to Login
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="forgot-form-container">

      <form
        className="forgot-form"
        onSubmit={handleSubmit}
      >

        <div className="forgot-logo">
          WORK<span>Sphere</span>
        </div>

        <h2>Forgot Password?</h2>

        <p className="forgot-subtitle">
          Enter your registered email address.
          We'll send a password reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="forgot-btn"
        >
          {loading
            ? "Sending Reset Link..."
            : "Send Reset Link"}
        </button>

        <Link
          to="/login"
          className="back-login"
        >
          ← Back to Login
        </Link>

      </form>

    </div>
  );
};

export default ForgotPasswordForm;