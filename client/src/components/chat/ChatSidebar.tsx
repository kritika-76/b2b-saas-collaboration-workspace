import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import ContactCard from "./ContactCard";

import type { Contact } from "../../constants/contacts";
import type { Message } from "../../constants/messages";

interface ChatSidebarProps {
  contacts: Contact[];
  conversations: Record<number, Message[]>;
  selectedContact: Contact;
  onSelectContact: (contact: Contact) => void;
}

const ChatSidebar = ({
  contacts,
  conversations,
  selectedContact,
  onSelectContact,
}: ChatSidebarProps) => {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="chat-sidebar">
      <h2>Chats</h2>

      <div className="chat-search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="contacts-list">
        {filteredContacts.map((contact) => (
        <ContactCard
  key={contact.id}
  contact={contact}
  active={selectedContact.id === contact.id}
  onClick={() => onSelectContact(contact)}
  lastMessage={
    conversations[contact.id]?.[
      conversations[contact.id].length - 1
    ]?.text || ""
  }
  lastTime={
    conversations[contact.id]?.[
      conversations[contact.id].length - 1
    ]?.time || ""
  }
/>
        ))}
      </div>
    </aside>
  );
};

export default ChatSidebar;