export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  department: string;
  bio: string;

  avatar: string;
  coverImage: string;

  isOnline: boolean;

  github: string;
  linkedin: string;
  portfolio: string;
  twitter: string;

  resume: string | null;

  skills: string[];

  projects: number;
  tasks: number;
  experience: string;
joined: string;
}

export const defaultProfile: ProfileData = {
  name: "Kritika Bendwar",
  role: "Frontend Developer",

  email: "kritika@gmail.com",

  phone: "+91 9876543210",

  location: "Nagpur, India",

  department: "Engineering",

  bio:
    "Frontend developer passionate about building beautiful user experiences.",

  avatar:
    "https://i.pravatar.cc/300?img=5",

  coverImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",

  isOnline: true,

  github: "https://github.com/",

  linkedin: "https://linkedin.com/",

  portfolio: "https://portfolio.com",

  twitter: "https://twitter.com/",

  resume: null,

  skills: [
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "Git",
  ],

  projects: 18,

  tasks: 142,

  experience: "2 Years Experience",

joined: "Joined March 2025",
};