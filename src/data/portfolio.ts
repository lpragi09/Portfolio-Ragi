import type { ProjectId } from "@/lib/i18n/translations";

export type Project = {
  id: ProjectId;
  image: string;
  tech: Array<
    "html" | "css" | "js" | "react" | "node" | "typescript" | "python" | "yolo" | "cpp"
  >;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "proj-portfolio",
    image: "/img/projeto_1.jpg",
    tech: ["html", "css", "js"],
    url: "https://ragiportfolio.netlify.app"
  },
  {
    id: "proj-coffee",
    image: "/img/projeto_2.jpg",
    tech: ["html", "css", "js"],
    url: "https://cofferagi.netlify.app"
  },
  {
    id: "proj-yolo",
    image: "/img/projeto_3.jpg",
    tech: ["yolo"]
  },
  {
    id: "proj-api",
    image: "/img/projeto_4.jpg",
    tech: ["node"],
    url: "https://agendamentoragi.netlify.app"
  },
  {
    id: "proj-dashboard",
    image: "/img/projeto_5.jpg",
    tech: ["react", "node"],
    url: "https://portal-ragi.netlify.app"
  }
];

export type SkillId =
  | "html"
  | "css"
  | "js"
  | "react"
  | "node"
  | "typescript"
  | "python"
  | "yolo"
  | "cpp";

export type SkillCategory = "frontend" | "backend" | "language" | "styling";

export type Skill = {
  id: SkillId;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { id: "html", category: "frontend" },
  { id: "css", category: "styling" },
  { id: "js", category: "language" },
  { id: "react", category: "frontend" },
  { id: "node", category: "backend" },
  { id: "typescript", category: "language" },
  { id: "python", category: "language" },
  { id: "yolo", category: "backend" },
  { id: "cpp", category: "language" }
];

