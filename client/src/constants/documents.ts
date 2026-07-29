export interface Document {
  id: number;
  title: string;
  category: string;
  owner: string;
  date: string;
  favorite: boolean;
}

export const documents: Document[] = [
  {
    id: 1,
    title: "Project Proposal",
    category: "Business",
    owner: "Kritika",
    date: "28 Jul 2026",
    favorite: true,
  },
  {
    id: 2,
    title: "UI Design",
    category: "Design",
    owner: "Aman",
    date: "27 Jul 2026",
    favorite: false,
  },
  {
    id: 3,
    title: "API Documentation",
    category: "Development",
    owner: "Rahul",
    date: "26 Jul 2026",
    favorite: true,
  },
];