import type { ProjectId } from "@/lib/i18n/translations";

export type Project = {
  id: ProjectId;
  image: string;
  tech: Array<
    "html" | "css" | "js" | "react" | "node" | "typescript" | "python" | "yolo" | "cpp"
  >;
  url?: string;
  client?: boolean;
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
    image: "/img/site_cofferagi.svg",
    tech: ["html", "css", "js"],
    url: "https://cofferagi-rework.vercel.app"
  },
  {
    id: "proj-api",
    image: "/img/site_barber.svg",
    tech: ["react", "node", "typescript"],
    url: "https://maganhabarb.vercel.app/"
  },
  {
    id: "proj-imobiliaria",
    image: "/img/site_imobiliaria.svg",
    tech: ["typescript", "react"],
    url: "https://www.terrasruraisimoveis.com.br",
    client: true
  },
  {
    id: "proj-cs",
    image: "/img/site_cs.svg",
    tech: ["typescript", "react"],
    url: "https://canalsoares.vercel.app/",
    client: true
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
  | "cpp"
  | "nextjs"
  | "tailwind"
  | "supabase"
  | "vercel";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "language"
  | "styling"
  | "database"
  | "platform";

export type Skill = {
  id: SkillId;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { id: "nextjs", category: "frontend" },
  { id: "tailwind", category: "styling" },
  { id: "supabase", category: "database" },
  { id: "vercel", category: "platform" },
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

