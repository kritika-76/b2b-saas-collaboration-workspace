import type { Contact } from "../../constants/contacts";

interface ContactCardProps {
  contact: Contact;
  active: boolean;
  onClick: () => void;

  lastMessage: string;
  lastTime: string;
}

const ContactCard = ({
  contact,
  active,
  onClick,
  lastMessage,
  lastTime,
}: ContactCardProps) => {
  return (
    <div
      className={`contact-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="contact-avatar">
        {contact.avatar}
      </div>

     <div className="contact-info">
  <div className="contact-header">
    <h4>{contact.name}</h4>

    {contact.unread > 0 && (
      <span className="unread-badge">
        {contact.unread}
      </span>
    )}
  </div>
<p className="last-message">
  {lastMessage}
</p>

<span className="last-time">
  {lastTime}
</span>      </div>

     <p>
  {contact.status === "online"
    ? "Online"
    : "Offline"}
</p>
    </div>
  );
};

export default ContactCard;