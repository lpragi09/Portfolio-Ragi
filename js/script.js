document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const body = document.body;

    // --- Elementos da Navbar para o menu mobile ---
    const menuToggle = document.getElementById('menuToggle');
    const navbarCenter = document.querySelector('.navbar-center');
    const navLinks = document.querySelectorAll('.navbar-center a');

    // --- Elemento da iluminação do cursor ---
    const mouseGlow = document.querySelector('.mouse-glow');
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    const speed = 0.3; // Ajuste este valor para controlar o "arrasto" da luz (0.1 é um bom começo)

    // --- Função para animar a iluminação ---
    function animateGlow() {
        // Interpola a posição da luz para que ela siga o mouse com um pequeno atraso
        glowX += (mouseX - glowX) * speed;
        glowY += (mouseY - glowY) * speed;

        // Aplica a nova posição ao elemento
        if (mouseGlow) {
            mouseGlow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
        }

        // Continua a animação no próximo frame
        requestAnimationFrame(animateGlow);
    }

    // --- Event Listener para rastrear o movimento do mouse ---
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Inicia a animação da iluminação
    animateGlow();


    // --- Objeto de Tradução ---
    const translations = {
        // ... (Seu objeto de traduções existente) ...
        'en': {
            'nav-home': 'Home',
            'nav-projects': 'Projects',
            'nav-experience': 'Career',
            'nav-skills': 'Skills',
            'nav-contact': 'Contact',
            'hero-title': 'Luiz Paulo Moreno Ragi',
            'hero-subtitle': 'Trainee Full Stack Web Developer | Tech Enthusiast | Always Learning',
            'section-skills': 'Skills',
            'section-experience': 'Career',
            'section-projects': 'Projects',
            'section-contact': 'Contact',
            'contact-name-placeholder': 'Your Name',
            'contact-email-placeholder': 'Your Email',
            'contact-message-placeholder': 'Your Message',
            'contact-button': 'Send Message',
            'skill-html-title': 'HTML5',
            'skill-html-desc': 'Semantic content structuring.',
            'skill-css-title': 'CSS3',
            'skill-css-desc': 'Responsive and animated styling.',
            'skill-js-title': 'JavaScript',
            'skill-js-desc': 'Programming logic and web interactivity.',
            'skill-react-title': 'React',
            'skill-react-desc': 'User interface creation.',
            'skill-node-title': 'Node.js',
            'skill-node-desc': 'Back-end development with JavaScript.',
            'skill-yolo-title': 'YoloV8',
            'skill-yolo-desc': 'Image identifications using Ultralytics',
            'exp-ufla-title': 'Federal University of Lavras (UFLA)',
            'exp-ufla-desc1': 'Bachelor in Engineering - Currently Enrolled',
            'exp-ufla-desc2': '2024 - Present',
            'exp-unilavras-title': 'University Center of Lavras (Unilavras)',
            'exp-unilavras-desc1': 'Systems Analysis and Development - Currently Enrolled',
            'exp-unilavras-desc2': '2025 - Present',
            'exp-inatel-title': 'National Institute of Telecommunications (INATEL)',
            'exp-inatel-desc1': 'Python Course - 72 Hours',
            'exp-inatel-desc2': '2023 - 2023',
            'proj-portfolio-title': 'Project 1: Personal Portfolio Website',
            'proj-portfolio-desc': 'Development of a responsive web portfolio using HTML, CSS, and JavaScript to showcase my skills and projects.',
            'proj-coffee-title': 'Project 2: Coffee brand website',
            'proj-coffee-desc': 'Development of a responsive website using HTML, CSS and JavaScript to display a coffee shop.',
            'proj-yolo-title': 'Project 3: Image identification using YoloV8.',
            'proj-yolo-desc': 'Identification of boats in Guanabara Bay using Ultralytics YoloV8',
            'dynamic-exp-title': 'Dynamic Experience Item',
            'dynamic-exp-desc1': 'Dynamic Description 1',
            'dynamic-exp-desc2': 'Dynamic Description 2',
            'contact-prompt' : 'Contact us'
        },
        'pt': {
            'nav-home': 'Início',
            'nav-projects': 'Projetos',
            'nav-experience': 'Carreira',
            'nav-skills': 'Habilidades',
            'nav-contact': 'Contato',
            'hero-title': 'Luiz Paulo Moreno Ragi',
            'hero-subtitle': 'Desenvolvedor Trainee Web Full Stack | Entusiasta de Tecnologia | Sempre aprendendo',
            'section-skills': 'Habilidades',
            'section-experience': 'Carreira',
            'section-projects': 'Projetos',
            'section-contact': 'Contato',
            'contact-name-placeholder': 'Seu Nome',
            'contact-email-placeholder': 'Seu E-mail',
            'contact-message-placeholder': 'Sua Mensagem',
            'contact-button': 'Enviar Mensagem',
            'skill-html-title': 'HTML5',
            'skill-html-desc': 'Estruturação de conteúdo semântico.',
            'skill-css-title': 'CSS3',
            'skill-css-desc': 'Estilização responsiva e animada.',
            'skill-js-title': 'JavaScript',
            'skill-js-desc': 'Lógica de programação e interatividade web.',
            'skill-react-title': 'React',
            'skill-react-desc': 'Criação de interfaces de usuário.',
            'skill-node-title': 'Node.js',
            'skill-node-desc': 'Desenvolvimento de back-end com JavaScript.',
            'skill-yolo-title': 'YoloV8',
            'skill-yolo-desc': 'Identificações de imagens utilizando Ultralytics',
            'exp-ufla-title': 'Universidade Federal de Lavras (UFLA)',
            'exp-ufla-desc1': 'Bacharelado em Engenharia - Cursando',
            'exp-ufla-desc2': '2024 - Presente',
            'exp-unilavras-title': 'Centro Universitário de Lavras (Unilavras)',
            'exp-unilavras-desc1': 'Análise e Desenvolvimento de Sistemas - Cursando',
            'exp-unilavras-desc2': '2025 - Presente',
            'exp-inatel-title': 'Instituto Nacional de Telecomunicações (INATEL)',
            'exp-inatel-desc1': 'Curso de Python - 72 Horas',
            'exp-inatel-desc2': '2023 - 2023',
            'proj-portfolio-title': 'Projeto 1: Site de Portfólio Pessoal',
            'proj-portfolio-desc': 'Desenvolvimento de um portfólio web responsivo utilizando HTML, CSS e JavaScript para exibir minhas habilidades e projetos.',
            'proj-coffee-title': 'Projeto 2: Site marca de café',
            'proj-coffee-desc': 'Desenvolvimento de um site web responsivo utilizando HTML, CSS e JavaScript para exibir um coffe shop.',
            'proj-yolo-title': 'Projeto 3: Indetificação de imagens utilizando YoloV8.',
            'proj-yolo-desc': 'Identificação de barcos na Baia de Guanabara utilizando Ultralytics YoloV8',
            'dynamic-exp-title': 'Item de Experiência Dinâmico',
            'dynamic-exp-desc1': 'Descrição Dinâmica 1',
            'dynamic-exp-desc2': 'Descrição Dinâmica 2',
            'contact-prompt' : 'Entre em Contato'
        }
    };

    // --- Função para carregar e aplicar o tema salvo ---
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            body.classList.remove('dark-theme');
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    };

    // --- Event Listener para mudança de tema ---
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- Função auxiliar para aplicar traduções a um conjunto de elementos ---
    const applyTranslationsToElements = (elements, lang) => {
        elements.forEach(element => {
            const textKey = element.getAttribute('data-i18n');
            if (textKey && translations[lang] && translations[lang][textKey]) {
                element.textContent = translations[lang][textKey];
            }

            const placeholderKey = element.getAttribute('data-i18n-placeholder');
            if (placeholderKey && translations[lang] && translations[lang][placeholderKey]) {
                element.placeholder = translations[lang][placeholderKey];
            }
        });
    };

    // --- Função principal para mudar o idioma ---
    const setLanguage = (lang) => {
        languageToggle.innerHTML = `<i class="fas fa-globe"></i> ${lang === 'en' ? 'EN/PT' : 'PT/EN'}`;

        const allTranslatableElements = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
        applyTranslationsToElements(allTranslatableElements, lang);

        localStorage.setItem('language', lang);
    };

    // --- Função para carregar o idioma salvo ---
    const loadLanguage = () => {
        const savedLang = localStorage.getItem('language') || 'pt';
        setLanguage(savedLang);
    };

    // Event Listener para mudança de idioma
    languageToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'pt';
        if (currentLang === 'pt') {
            setLanguage('en');
        } else {
            setLanguage('pt');
        }
    });

    // Carrega o tema e o idioma ao carregar a página
    loadTheme();
    loadLanguage();

    // --- Configuração do MutationObserver ---
    const observer = new MutationObserver((mutationsList) => {
        const currentLang = localStorage.getItem('language') || 'pt';
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        applyTranslationsToElements([node], currentLang);
                        const translatableChildren = node.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
                        if (translatableChildren.length > 0) {
                            applyTranslationsToElements(translatableChildren, currentLang);
                        }
                    }
                });
            }
        }
    });

    // Começa a observar o corpo do documento para mudanças nos filhos e nos descendentes
    observer.observe(document.body, { childList: true, subtree: true });

    // --- Lógica do Menu Hamburguer ---
    if (menuToggle && navbarCenter) {
        menuToggle.addEventListener('click', () => {
            navbarCenter.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    navbarCenter.classList.remove('active');
                }
            });
        });
    }

    // --- Lógica para animar as barras de habilidades ao rolar (NOVO) ---
    const skillsSection = document.getElementById('habilidades');
    const skillLevels = document.querySelectorAll('.skill-level');
    let skillsAnimated = false; // Flag para garantir que a animação rode apenas uma vez

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            // Se a seção de habilidades está visível e a animação ainda não rodou
            if (entry.isIntersecting && !skillsAnimated) {
                skillLevels.forEach(skill => {
                    const level = skill.getAttribute('data-level'); // Pega o valor do data-level (ex: "95%")
                    skill.style.width = level; // Aplica o valor como largura da barra
                });
                skillsAnimated = true; // Marca a animação como concluída
                observer.unobserve(skillsSection); // Para de observar a seção para otimizar a performance
            }
        });
    };

    // Cria o observador que vai "vigiar" a seção de habilidades
    const skillObserver = new IntersectionObserver(animateSkills, {
        root: null, // Observa em relação à viewport
        threshold: 0.4 // Dispara a animação quando 40% da seção estiver visível
    });

    // Inicia a observação se a seção de habilidades existir
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }


    // Smooth scroll para os links da navbar
    document.querySelectorAll('.navbar a[href^="#"], .navbar-center a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                if (navbarCenter.classList.contains('active') && window.innerWidth <= 992) {
                    navbarCenter.classList.remove('active');
                }
            }
        });
    });

    // --- Exemplo de como você poderia adicionar um elemento dinamicamente (para teste) ---
    window.addDynamicItem = () => {
        const experienceSection = document.getElementById('experiencia');
        const newExperienceDiv = document.createElement('div');
        newExperienceDiv.classList.add('experience-item');
        newExperienceDiv.innerHTML = `
            <h3 data-i18n="dynamic-exp-title">Título de Novo Item Dinâmico</h3>
            <p data-i18n="dynamic-exp-desc1">Descrição para um novo item dinâmico.</p>
            <p data-i18n="dynamic-exp-desc2">Detalhes adicionais.</p>
        `;
        experienceSection.appendChild(newExperienceDiv);
        console.log("Conteúdo dinâmico adicionado. O MutationObserver deve ter traduzido automaticamente.");
    };
    // --- Lógica para animação de surgimento dos elementos no scroll (ATUALIZADO) ---
const fadeInElements = document.querySelectorAll('.fade-in-element');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Se o elemento entrou na tela, adiciona a classe para animar
            entry.target.classList.add('is-visible');
        } else {
            // Se o elemento saiu da tela, remove a classe para "resetar" a animação
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
});

// Inicia a observação para cada elemento
fadeInElements.forEach(el => {
    fadeInObserver.observe(el);
});
});