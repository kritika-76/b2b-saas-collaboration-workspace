export interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "offline";
  unread: number;
}

export const contacts: Contact[] = [
{
  id: 1,
  name: "Rahul Sharma",
  role: "Frontend Developer",
  avatar: "...",
  status: "online",
  unread: 2,
},
{
  id: 2,
  name: "Priya Singh",
  role: "UI Designer",
  avatar: "...",
  status: "offline",
  unread: 0,
},
  {
    id: 3,
    name: "Amit Kumar",
    role: "Backend Developer",
    avatar: "A",
    status: "online",
    unread: 0,
  },
  {
    id: 4,
    name: "Sneha Verma",
    role: "Project Manager",
    avatar: "S",
  status: "online",
    unread: 1,  },
];