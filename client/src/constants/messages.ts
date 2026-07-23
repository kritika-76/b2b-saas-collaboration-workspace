export interface Message {
  id: number;
  text: string;
  time: string;
  own: boolean;
  read: boolean;
}

export const chatMessages: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      text: "Hi Kritika 👋",
      time: "10:20 AM",
      own: false,
      read: true,
    },
    {
      id: 2,
      text: "Hello Rahul!",
      time: "10:21 AM",
      own: true,
      read: true,
    },
    {
      id: 3,
      text: "I've completed the dashboard UI.",
      time: "10:25 AM",
      own: false,
      read: true,
    },
  ],

  2: [
    {
      id: 1,
      text: "Can you review the latest design?",
      time: "09:30 AM",
      own: false,
      read: true,
    },
    {
      id: 2,
      text: "Sure, I'll review it today.",
      time: "09:35 AM",
      own: true,
      read: true,
    },
  ],

  3: [
    {
      id: 1,
      text: "Product API is ready.",
      time: "Yesterday",
      own: false,
      read: true,
    },
  ],

  4: [
    {
      id: 1,
      text: "Client meeting at 4 PM.",
      time: "Yesterday",
      own: false,
      read: true,
    },
  ],
};