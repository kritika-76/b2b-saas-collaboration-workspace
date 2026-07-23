import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { useEffect, useRef } from "react";
import type { Contact } from "../../constants/contacts";
import type { Message } from "../../constants/messages";

interface ChatWindowProps {
  contact: Contact;
  messages: Message[];
  onSend: (text: string) => void;
  isTyping: boolean;
}

const ChatWindow = ({
  contact,
  messages,
  onSend,
  isTyping,
}: ChatWindowProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);
  return (
    <section className="chat-window">
<ChatHeader
  contact={contact}
  isTyping={isTyping}
/>
<div className="messages-container">

  {messages.length === 0 ? (
    <div className="empty-chat">
      <h2>💬</h2>

      <h3>No messages yet</h3>

      <p>
        Start chatting with {contact.name}
      </p>
    </div>
  ) : (
    <>      {messages.map((message) => (
    <MessageBubble
      key={message.id}
      message={message}
    />
  ))}

      <div ref={messagesEndRef}></div>
    </>
  )}</div>

      <MessageInput onSend={onSend} />
    </section>
  );
};

export default ChatWindow;