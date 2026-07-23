import { useState } from "react";
import {
  FiSmile,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";

interface MessageInputProps {
  onSend: (text: string) => void;
}

const MessageInput = ({
  onSend,
}: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="message-input">
      <button>
        <FiSmile />
      </button>

      <button>
        <FiPaperclip />
      </button>

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button
        className="send-btn"
        onClick={handleSend}
      >
        <FiSend />
      </button>
    </div>
  );
};

export default MessageInput;