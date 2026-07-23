import { useState } from "react";

import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";

import { contacts } from "../../constants/contacts";
import {
  chatMessages,
  type Message,
} from "../../constants/messages";

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(
    contacts[0]
  );

  const [conversations, setConversations] =
    useState(chatMessages);

  const [isTyping, setIsTyping] =
    useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      own: true,
      read: true,
    };

    setConversations((prev) => ({
      ...prev,
      [selectedContact.id]: [
        ...prev[selectedContact.id],
        newMessage,
      ],
    }));

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="chat-page">
      <ChatSidebar
        contacts={contacts}
        conversations={conversations}
        selectedContact={selectedContact}
        onSelectContact={setSelectedContact}
      />

      <ChatWindow
        contact={selectedContact}
        messages={
          conversations[selectedContact.id]
        }
        onSend={sendMessage}
        isTyping={isTyping}
      />
    </div>
  );
};

export default Chat;