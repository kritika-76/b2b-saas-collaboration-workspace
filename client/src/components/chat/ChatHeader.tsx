import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
} from "react-icons/fi";

import type { Contact } from "../../constants/contacts";

interface ChatHeaderProps {
  contact: Contact;
  isTyping: boolean;
}

const ChatHeader = ({
  contact,
  isTyping,
}: ChatHeaderProps) => {
  return (
    <div className="chat-header">
      <div className="chat-user">
        <div className="chat-avatar">
          {contact.avatar}
        </div>

        <div>
          <h3>{contact.name}</h3>

<p
  className={
    isTyping
      ? "typing-status"
      : contact.status === "online"
      ? "online-status"
      : "offline-status"
  }
>
  {isTyping
    ? "Typing..."
    : contact.status === "online"
    ? "🟢 Online"
    : "⚫ Offline"}
</p>
        </div>
      </div>

      <div className="chat-actions">
        <button>
          <FiPhone />
        </button>

        <button>
          <FiVideo />
        </button>

        <button>
          <FiMoreVertical />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;