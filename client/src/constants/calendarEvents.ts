export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  color: string;
}

export const initialCalendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Sprint Planning",
    date: "July 24, 2026",
    time: "09:00 AM",
    color: "#6366F1",
  },
  {
    id: 2,
    title: "UI Review Meeting",
    date: "July 25, 2026",
    time: "11:30 AM",
    color: "#10B981",
  },
  {
    id: 3,
    title: "Client Discussion",
    date: "July 26, 2026",
    time: "03:00 PM",
    color: "#F97316",
  },
  {
    id: 4,
    title: "Backend Sync",
    date: "July 27, 2026",
    time: "05:30 PM",
    color: "#EF4444",
  },
  {
    id: 5,
    title: "Team Stand-up",
    date: "July 28, 2026",
    time: "10:00 AM",
    color: "#3B82F6",
  },
];