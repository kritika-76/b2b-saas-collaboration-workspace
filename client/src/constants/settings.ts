export interface UserSettings {
  name: string;
  email: string;
  phone: string;
  role: string;
  bio: string;

  darkMode: boolean;
  notifications: boolean;
  language: string;
  timezone: string;

  avatar: string;
}

export const defaultSettings: UserSettings = {
  name: "Kritika",
  email: "kritika@gmail.com",
  phone: "+91 9876543210",
  role: "Frontend Developer",
  bio: "Passionate Frontend Developer who loves building modern web applications.",

  darkMode: false,
  notifications: true,
  language: "English",
  timezone: "Asia/Kolkata",
  avatar: "",
};