export interface ProfileData {
  id: number;

  name: string;

  role: string;

  email: string;

  phone: string;

  location: string;

  department: string;

  experience: string;

  joinDate: string;

  bio: string;

  avatar: string;

  skills: string[];

  completedProjects: number;

  completedTasks: number;

  teamMembers: number;
}

export const defaultProfile: ProfileData = {
  id: 1,

  name: "Kritika",

  role: "Frontend Developer",

  email: "kritika@example.com",

  phone: "+91 9876543210",

  location: "Nagpur, India",

  department: "Development",

  experience: "2 Years",

  joinDate: "January 2026",

  bio:
    "Frontend Developer passionate about React, TypeScript and UI Design.",

  avatar:
    "https://i.pravatar.cc/300?img=47",

  skills: [
    "React",
    "TypeScript",
    "CSS",
    "JavaScript",
    "HTML",
    "Git"
  ],

  completedProjects: 18,

  completedTasks: 146,

  teamMembers: 12,
};