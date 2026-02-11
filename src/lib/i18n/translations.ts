export type Lang = "pt" | "en";

export type ProjectId =
  | "proj-portfolio"
  | "proj-coffee"
  | "proj-api"
  | "proj-imobiliaria"
  | "proj-cs";

type Dict = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
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
    contact: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successDesc: string;
  };
  projects: Record<ProjectId, { title: string; desc: string }>;
  skills: {
    blurb: string;
    categories: Record<
      "frontend" | "backend" | "language" | "styling" | "database" | "state" | "platform",
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
      | "cpp"
      | "nextjs"
      | "tailwind"
      | "supabase"
      | "vercel",
      string
    >;
  };
  footer: {
    copyright: string;
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      subtitle: "Full Stack Web Developer | Tech Enthusiast | Always Learning",
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
    sections: { projects: "My Projects", skills: "Skills", contact: "Contact" },
    contact: {
      title: "Let’s talk about the opportunity",
      subtitle:
        "If you’re reviewing my portfolio for a job or internship, send the role, stack and context. I’ll reply quickly with availability and next steps.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "E-mail",
      emailPlaceholder: "you@example.com",
      whatsappLabel: "WhatsApp (optional)",
      whatsappPlaceholder: "+55 (xx) xxxxx-xxxx",
      messageLabel: "Message",
      messagePlaceholder:
        "Ex.: Company + role (link), stack, compensation range, main challenge and timeline...",
      submit: "Send",
      successTitle: "Received. Thanks!",
      successDesc: "I’ll get back to you shortly."
    },
    projects: {
      "proj-portfolio": {
        title: "Personal Portfolio Website",
        desc: "Development of a responsive web portfolio to showcase my skills and projects."
      },
      "proj-coffee": {
        title: "Coffee Brand Website",
        desc: "Responsive coffee brand website built with the same stack as this project: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-api": {
        title: "Website Barber",
        desc: "Barbershop website built with the same stack as this project: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-imobiliaria": {
        title: "Real Estate Website",
        desc: "Website built for a client, using the same stack as this project: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-cs": {
        title: "Counter-Strike Channel Website",
        desc: "Website built for a Counter-Strike content creator client, using the same stack as this project: Next.js 14 + TypeScript + Tailwind + Supabase."
      }
    },
    skills: {
      blurb:
        "Stack used here: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase (RLS) + Vercel Analytics/Speed Insights.",
      categories: {
        frontend: "frontend",
        backend: "backend",
        language: "language",
        styling: "styling",
        database: "database",
        state: "state",
        platform: "platform"
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
        cpp: "C++",
        nextjs: "Next.js",
        tailwind: "Tailwind CSS",
        supabase: "Supabase (RLS)",
        vercel: "Vercel Analytics"
      }
    },
    footer: { copyright: "© 2026 Luiz Paulo Moreno Ragi. All rights reserved." }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato"
    },
    hero: {
      subtitle: "Desenvolvedor Web Full Stack | Entusiasta de Tecnologia | Sempre aprendendo",
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
    sections: { projects: "Meus Projetos", skills: "Skills & Habilidades", contact: "Contato" },
    contact: {
      title: "Recrutador(a), vamos falar da vaga",
      subtitle:
        "Se você está no meu portfólio para me recrutar (emprego ou estágio), me envie o link da vaga, stack e contexto do time. Eu respondo rápido com disponibilidade e próximos passos.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "E-mail",
      emailPlaceholder: "voce@exemplo.com",
      whatsappLabel: "WhatsApp (opcional)",
      whatsappPlaceholder: "(xx) xxxxx-xxxx",
      messageLabel: "Mensagem",
      messagePlaceholder:
        "Ex.: Empresa + vaga (link), modelo (PJ/CLT), stack, faixa, desafio principal e prazo...",
      submit: "Enviar",
      successTitle: "Recebido. Obrigado!",
      successDesc: "Já já eu te respondo com os próximos passos."
    },
    projects: {
      "proj-portfolio": {
        title: "Site de Portfólio Pessoal",
        desc: "Desenvolvimento de um portfólio web responsivo para exibir minhas habilidades e projetos."
      },
      "proj-coffee": {
        title: "Site Marca de Café",
        desc: "Site responsivo de marca de café, feito com a mesma stack deste projeto: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-api": {
        title: "Website Barber",
        desc: "Site de barbearia feito com a mesma stack deste projeto: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-imobiliaria": {
        title: "Website Imobiliária",
        desc: "Site feito para um cliente, com a mesma stack deste projeto: Next.js 14 + TypeScript + Tailwind + Supabase."
      },
      "proj-cs": {
        title: "Website Canal Counter-Strike",
        desc: "Site feito para um cliente criador de conteúdo de Counter-Strike, com a mesma stack deste projeto: Next.js 14 + TypeScript + Tailwind + Supabase."
      }
    },
    skills: {
      blurb:
        "Stack usada aqui: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase (RLS) + Vercel Analytics/Speed Insights.",
      categories: {
        frontend: "front-end",
        backend: "back-end",
        language: "linguagem",
        styling: "estilização",
        database: "banco de dados",
        state: "estado",
        platform: "plataforma"
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
        cpp: "C++",
        nextjs: "Next.js",
        tailwind: "Tailwind CSS",
        supabase: "Supabase (RLS)",
        vercel: "Vercel Analytics"
      }
    },
    footer: { copyright: "© 2026 Luiz Paulo Moreno Ragi. Todos os direitos reservados." }
  }
};

