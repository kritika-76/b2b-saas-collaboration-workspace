import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

export interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast = ({
  message,
  type = "success",
  onClose,
}: ToastProps) => {
  return (
    <div className={`toast ${type}`}>
      <div className="toast-left">
        {type === "success" ? (
          <FiCheckCircle />
        ) : (
          <FiAlertCircle />
        )}

        <span>{message}</span>
      </div>

      <button
        className="toast-close"
        onClick={onClose}
      >
        <FiX />
      </button>
    </div>
  );
};

export default Toast;