import type { Message } from "../../constants/messages";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({
  message,
}: MessageBubbleProps) => {
  return (
    <div
      className={`message-bubble ${
        message.own
          ? "own-message"
          : "other-message"
      }`}
    >
      <p>{message.text}</p>

      <div className="message-footer">
        <span>{message.time}</span>

        {message.own && (
          <span className="read-status">
            {message.read ? "✓✓" : "✓"}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;