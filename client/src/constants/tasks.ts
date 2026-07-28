export interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "progress" | "completed";
  priority: "high" | "medium" | "low";
  dueDate: string;
  assignee: string;
}

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Create Login Page",
    description: "Design responsive login screen.",
    status: "todo",
    priority: "high",
    dueDate: "2026-07-28",
    assignee: "Kritika",
  },
  {
    id: 2,
    title: "Dashboard UI",
    description: "Build dashboard cards.",
    status: "progress",
    priority: "medium",
    dueDate: "2026-07-29",
    assignee: "Rahul",
  },
  {
    id: 3,
    title: "Backend Integration",
    description: "Connect API endpoints.",
    status: "completed",
    priority: "low",
    dueDate: "2026-07-30",
    assignee: "Aman",
  },
];