export interface Member {
  id: number;
  name: string;
  role: string;
  email: string;
  department: string;
  status: "Online" | "Offline";
  avatar: string;
}

export const teamMembers: Member[] = [
  {
    id: 1,
    name: "Kritika",
    role: "Frontend Developer",
    email: "kritika@example.com",
    department: "Development",
    status: "Online",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer",
    email: "rahul@example.com",
    department: "Development",
    status: "Offline",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Aman",
    role: "UI/UX Designer",
    email: "aman@example.com",
    department: "Design",
    status: "Online",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];