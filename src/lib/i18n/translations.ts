export type Lang = "pt" | "en";

export type ProjectId =
  | "proj-portfolio"
  | "proj-coffee"
  | "proj-yolo"
  | "proj-api"
  | "proj-dashboard";

type Dict = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  about: {
    intro: string;
    journeyTitle: string;
    characteristicsTitle: string;
  };
  timeline: Record<
    "2023" | "2024" | "2025",
    { title: string; desc: string }
  >;
  characteristics: {
    fullstack: { title: string; desc: string };
    performance: { title: string; desc: string };
    teamwork: { title: string; desc: string };
    learning: { title: string; desc: string };
  };
  sections: {
    projects: string;
    skills: string;
  };
  projects: Record<ProjectId, { title: string; desc: string }>;
  skills: {
    categories: Record<
      "frontend" | "backend" | "language" | "styling" | "database" | "state",
      string
    >;
    names: Record<
      | "html"
      | "css"
      | "js"
      | "react"
      | "node"
      | "typescript"
      | "python"
      | "yolo"
      | "cpp",
      string
    >;
  };
  footer: {
    copyright: string;
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", skills: "Skills" },
    hero: {
      subtitle: "Trainee Full Stack Web Developer | Tech Enthusiast | Always Learning",
      cta: "Contact me"
    },
    about: {
      intro:
        "Passionate developer creating incredible web experiences and solving problems through technology.",
      journeyTitle: "My Journey",
      characteristicsTitle: "Characteristics"
    },
    timeline: {
      "2023": {
        title: "Journey Start",
        desc: "Began my web development studies, focusing on HTML, CSS, JavaScript, and Python."
      },
      "2024": {
        title: "First Projects",
        desc: "Developed personal projects and started working with React and Node.js."
      },
      "2025": {
        title: "Specialization",
        desc: "Deepened my knowledge in Full Stack development and modern technologies."
      }
    },
    characteristics: {
      fullstack: {
        title: "Full Stack Development",
        desc: "Experience with various modern technologies and frameworks"
      },
      performance: { title: "Performance", desc: "Focus on fast and optimized apps" },
      teamwork: { title: "Teamwork", desc: "Effective collaboration and clear communication" },
      learning: { title: "Continuous Learning", desc: "Always seeking new knowledge and technologies" }
    },
    sections: { projects: "My Projects", skills: "Skills" },
    projects: {
      "proj-portfolio": {
        title: "Personal Portfolio Website",
        desc: "Development of a responsive web portfolio to showcase my skills and projects."
      },
      "proj-coffee": {
        title: "Coffee Brand Website",
        desc: "Development of a responsive website to display a coffee shop."
      },
      "proj-yolo": {
        title: "Image Identification using YoloV8",
        desc: "Identification of boats in Guanabara Bay using Ultralytics YoloV8"
      },
      "proj-api": {
        title: "Website",
        desc: "A website created for scheduling a barbershop using Node.js, React and MongoDB."
      },
      "proj-dashboard": {
        title: "Portal-Login",
        desc: "A website made for login and first access, using HTML, CSS and JS."
      }
    },
    skills: {
      categories: {
        frontend: "frontend",
        backend: "backend",
        language: "language",
        styling: "styling",
        database: "database",
        state: "state"
      },
      names: {
        html: "HTML",
        css: "CSS",
        js: "JavaScript",
        react: "React",
        node: "Node.js",
        typescript: "TypeScript",
        python: "Python",
        yolo: "YOLOv8",
        cpp: "C++"
      }
    },
    footer: { copyright: "© 2025 Luiz Paulo Moreno Ragi. All rights reserved." }
  },
  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", skills: "Habilidades" },
    hero: {
      subtitle: "Desenvolvedor Trainee Web Full Stack | Entusiasta de Tecnologia | Sempre aprendendo",
      cta: "Contate-me"
    },
    about: {
      intro:
        "Desenvolvedor apaixonado por criar experiências web incríveis e solucionar problemas através da tecnologia.",
      journeyTitle: "Minha Jornada",
      characteristicsTitle: "Características"
    },
    timeline: {
      "2023": {
        title: "Início da Jornada",
        desc: "Comecei meus estudos em desenvolvimento web, focando em HTML, CSS, JavaScript e Python."
      },
      "2024": {
        title: "Primeiros Projetos",
        desc: "Desenvolvi projetos pessoais e comecei a trabalhar com React e Node.js."
      },
      "2025": {
        title: "Especialização",
        desc: "Aprofundei meus conhecimentos em desenvolvimento Full Stack e tecnologias modernas."
      }
    },
    characteristics: {
      fullstack: {
        title: "Desenvolvimento Full Stack",
        desc: "Experiência com diversas tecnologias e frameworks modernos"
      },
      performance: { title: "Performance", desc: "Foco em criar aplicações rápidas e otimizadas" },
      teamwork: { title: "Trabalho em Equipe", desc: "Colaboração efetiva e comunicação clara" },
      learning: { title: "Aprendizado Contínuo", desc: "Sempre buscando novos conhecimentos e tecnologias" }
    },
    sections: { projects: "Meus Projetos", skills: "Skills & Habilidades" },
    projects: {
      "proj-portfolio": {
        title: "Site de Portfólio Pessoal",
        desc: "Desenvolvimento de um portfólio web responsivo para exibir minhas habilidades e projetos."
      },
      "proj-coffee": {
        title: "Site Marca de Café",
        desc: "Desenvolvimento de um site responsivo para exibir uma cafeteria."
      },
      "proj-yolo": {
        title: "Identificação de Imagens com YoloV8",
        desc: "Identificação de barcos na Baía de Guanabara utilizando Ultralytics YoloV8."
      },
      "proj-api": {
        title: "Website",
        desc: "Um website criado para agendamentos de uma barbearia utilizando Node.js, React e MongoDB."
      },
      "proj-dashboard": {
        title: "Portal-Login",
        desc: "Um site feito para login e primeiro acesso, utilizando HTML, CSS e JS."
      }
    },
    skills: {
      categories: {
        frontend: "front-end",
        backend: "back-end",
        language: "linguagem",
        styling: "estilização",
        database: "banco de dados",
        state: "estado"
      },
      names: {
        html: "HTML",
        css: "CSS",
        js: "JavaScript",
        react: "React",
        node: "Node.js",
        typescript: "TypeScript",
        python: "Python",
        yolo: "YOLOv8",
        cpp: "C++"
      }
    },
    footer: { copyright: "© 2025 Luiz Paulo Moreno Ragi. Todos os direitos reservados." }
  }
};

