document.addEventListener('DOMContentLoaded', () => {

    // --- Seletores Globais ---
    const languageToggle = document.getElementById('language-toggle');
    const menuToggle = document.getElementById('menuToggle');
    const navbarCenter = document.querySelector('.navbar-center');
    const mouseGlow = document.querySelector('.mouse-glow');
    const body = document.body;

    // --- Estado da Aplicação ---
    let currentLang = localStorage.getItem('language') || 'pt';

    // --- DADOS DOS PROJETOS ---
    const projectsData = [
        { id: 'proj-portfolio', image: 'img/projeto_1.jpg', tech: ['html', 'css', 'js'] },
        { id: 'proj-coffee', image: 'img/projeto_2.jpg', tech: ['html', 'css', 'js'] },
        { id: 'proj-yolo', image: 'img/projeto_3.jpg', tech: ['yolo'] },
        { id: 'proj-api', image: 'img/projeto_4.jpg', tech: ['node'] },
        { id: 'proj-dashboard', image: 'img/projeto_5.jpg', tech: ['react', 'node'] },
    ];

    // --- DADOS DAS HABILIDADES ---
    const skillsData = [
        { id: 'html', iconClass: 'fab fa-html5', level: 50, category: 'frontend' },
        { id: 'css', iconClass: 'fab fa-css3-alt', level: 50, category: 'styling' },
        { id: 'js', iconClass: 'fab fa-js-square', level: 50, category: 'language' },
        { id: 'react', iconClass: 'fab fa-react', level: 50, category: 'frontend' },
        { id: 'node', iconClass: 'fab fa-node-js', level: 50, category: 'backend' },
        { id: 'typescript', iconClass: 'fas fa-code', level: 50, category: 'language' },
        { id: 'python', iconClass: 'fab fa-python', level: 50, category: 'language' },
        { id: 'yolo', iconClass: 'fas fa-robot', level: 50, category: 'backend' },
        { id: 'cpp', iconClass: 'fas fa-microchip', level: 50, category: 'language' },
    ];

    // --- TRADUÇÕES ---
    const translations = {
        'en': {
            // ATUALIZADO: Adicionada a tradução do título principal
            'hero-title': 'Hello! 👋<br>I\'m <span class="highlight">Luiz Ragi</span> <br>a <span class="highlight">Full-Stack Dev</span>',
            'nav-home': 'Home', 'nav-about': 'About', 'nav-projects': 'Projects', 'nav-skills': 'Skills',
            'hero-subtitle': 'Trainee Full Stack Web Developer | Tech Enthusiast | Always Learning',
            'speech-bubble': 'Welcome! ❤️',
            'about-title': 'About <span class="highlight">Me</span>',
            'about-intro-text': 'Passionate developer creating incredible web experiences and solving problems through technology.',
            'about-journey-title': 'My Journey',
            'timeline-2023-title': 'Journey Start', 'timeline-2023-desc': 'Began my web development studies, focusing on HTML, CSS, JavaScript, and Python.',
            'timeline-2024-title': 'First Projects', 'timeline-2024-desc': 'Developed personal projects and started working with React and Node.js.',
            'timeline-2025-title': 'Specialization', 'timeline-2025-desc': 'Deepened my knowledge in Full Stack development and modern technologies.',
            'about-characteristics-title': 'Characteristics',
            'char-fullstack-title': 'Full Stack Development', 'char-fullstack-desc': 'Experience with various modern technologies and frameworks',
            'char-performance-title': 'Performance', 'char-performance-desc': 'Focus on creating fast and optimized applications',
            'char-teamwork-title': 'Teamwork', 'char-teamwork-desc': 'Effective collaboration and clear communication',
            'char-learning-title': 'Continuous Learning', 'char-learning-desc': 'Always seeking new knowledge and technologies',
            'section-projects': 'My <span class="highlight">Projects</span>',
            'proj-portfolio-title': 'Personal Portfolio Website', 'proj-portfolio-desc': 'Development of a responsive web portfolio to showcase my skills and projects.',
            'proj-coffee-title': 'Coffee Brand Website', 'proj-coffee-desc': 'Development of a responsive website to display a coffee shop.',
            'proj-yolo-title': 'Image Identification using YoloV8', 'proj-yolo-desc': 'Identification of boats in Guanabara Bay using Ultralytics YoloV8',
            'proj-api-title': 'WebSite', 'proj-api-desc': 'A Website created for scheduling a barbershop using NodeJs, React and MongoDB.',
            'proj-dashboard-title': 'Portal-Login', 'proj-dashboard-desc': 'A WebSite made for login and first access, using HTML, CSS and Js.',
            'skill-cat-frontend': 'frontend', 'skill-cat-backend': 'backend', 'skill-cat-language': 'language', 'skill-cat-styling': 'styling', 'skill-cat-database': 'database', 'skill-cat-state': 'state',
            'skill-name-html': 'HTML', 'skill-name-css': 'CSS', 'skill-name-js': 'JavaScript', 'skill-name-react': 'React', 'skill-name-node': 'Node.js', 'skill-name-typescript': 'TypeScript', 'skill-name-python': 'Python', 'skill-name-yolo': 'YOLOv8', 'skill-name-cpp': 'C++',
            'footer-copyright': '© 2025 Luiz Paulo Moreno Ragi. All rights reserved.',
        },
        'pt': {
            // ATUALIZADO: Adicionada a tradução do título principal
            'hero-title': 'Olá! 👋<br>Eu sou o <span class="highlight">Luiz Ragi</span> <br>sou <span class="highlight">Dev Full-Stack</span>',
            'nav-home': 'Início', 'nav-about': 'Sobre', 'nav-projects': 'Projetos', 'nav-skills': 'Habilidades',
            'hero-subtitle': 'Desenvolvedor Trainee Web Full Stack | Entusiasta de Tecnologia | Sempre aprendendo',
            'speech-bubble': 'Seja bem-vindo! ❤️',
            'about-title': 'Sobre <span class="highlight">Mim</span>',
            'about-intro-text': 'Desenvolvedor apaixonado por criar experiências web incríveis e solucionar problemas através da tecnologia.',
            'about-journey-title': 'Minha Jornada',
            'timeline-2023-title': 'Início da Jornada', 'timeline-2023-desc': 'Comecei meus estudos em desenvolvimento web, focando em HTML, CSS, JavaScript e Python.',
            'timeline-2024-title': 'Primeiros Projetos', 'timeline-2024-desc': 'Desenvolvi projetos pessoais e comecei a trabalhar com React e Node.js.',
            'timeline-2025-title': 'Especialização', 'timeline-2025-desc': 'Aprofundei meus conhecimentos em desenvolvimento Full Stack e tecnologias modernas.',
            'about-characteristics-title': 'Características',
            'char-fullstack-title': 'Desenvolvimento Full Stack', 'char-fullstack-desc': 'Experiência com diversas tecnologias e frameworks modernos',
            'char-performance-title': 'Performance', 'char-performance-desc': 'Foco em criar aplicações rápidas e otimizadas',
            'char-teamwork-title': 'Trabalho em Equipe', 'char-teamwork-desc': 'Colaboração efetiva e comunicação clara',
            'char-learning-title': 'Aprendizado Contínuo', 'char-learning-desc': 'Sempre buscando novos conhecimentos e tecnologias',
            'section-projects': 'Meus <span class="highlight">Projetos</span>',
            'proj-portfolio-title': 'Site de Portfólio Pessoal', 'proj-portfolio-desc': 'Desenvolvimento de um portfólio web responsivo para exibir minhas habilidades e projetos.',
            'proj-coffee-title': 'Site Marca de Café', 'proj-coffee-desc': 'Desenvolvimento de um site responsivo para exibir uma cafeteria.',
            'proj-yolo-title': 'Identificação de Imagens com YoloV8', 'proj-yolo-desc': 'Identificação de barcos na Baia de Guanabara utilizando Ultralytics YoloV8.',
            'proj-api-title': 'WebSite', 'proj-api-desc': 'Um Website criado para agendamentos de uma barbearia utilizando NodeJs, React e MongoDB',
            'proj-dashboard-title': 'Portal-Login', 'proj-dashboard-desc': 'Um site feito para login e primeiro acesso, utilizando HTML, CSS e Js',
            'skill-cat-frontend': 'front-end', 'skill-cat-backend': 'back-end', 'skill-cat-language': 'linguagem', 'skill-cat-styling': 'estilização', 'skill-cat-database': 'banco de dados', 'skill-cat-state': 'estado',
            'skill-name-html': 'HTML', 'skill-name-css': 'CSS', 'skill-name-js': 'JavaScript', 'skill-name-react': 'React', 'skill-name-node': 'Node.js', 'skill-name-typescript': 'TypeScript', 'skill-name-python': 'Python', 'skill-name-yolo': 'YOLOv8', 'skill-name-cpp': 'C++',
            'footer-copyright': '© 2025 Luiz Paulo Moreno Ragi. Todos os direitos reservados.',
        }
    };

    // --- Módulo de Tema ---
    const themeManager = {
        init() { this.load(); themeToggle.addEventListener('click', () => this.toggle()); },
        load() { this.set(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'); },
        toggle() { this.set(body.classList.contains('dark-theme') ? 'light' : 'dark'); },
        set(theme) {
            body.classList.toggle('dark-theme', theme === 'dark');
            localStorage.setItem('theme', theme);
            themeToggle.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    };

    // --- Módulo de Idioma ---
    const languageManager = {
        init() {
            this.load();
            languageToggle.addEventListener('click', () => this.toggle());
        },
        load() {
            this.set(localStorage.getItem('language') || 'pt', false);
        },
        toggle() {
            this.set(currentLang === 'pt' ? 'en' : 'pt', true);
        },
        set(lang, needsContentRender) {
            currentLang = lang;
            languageToggle.innerHTML = `<i class="fas fa-globe"></i> ${lang === 'en' ? 'EN/PT' : 'PT/EN'}`;
            this.translateAllStatic();
            localStorage.setItem('language', lang);
            if (needsContentRender) {
                setupExpandingGallery();
                skillsManager.renderSkills();
            }
        },
        translateAllStatic() {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (key && translations[currentLang]?.[key]) {
                    element.innerHTML = translations[currentLang][key];
                }
            });
        }
    };

    // --- Módulo de Habilidades ---
    const skillsManager = {
        init() {
            this.renderSkills();
        },
        renderSkills() {
            const container = document.querySelector('.skills-grid-container');
            if (!container) return;
            container.innerHTML = skillsData.map(skill => {
                const name = translations[currentLang][`skill-name-${skill.id}`] || skill.id;
                const category = translations[currentLang][`skill-cat-${skill.category}`] || skill.category;
                return `
                        <div class="skill-bar-card">
                            <div class="skill-header">
                                <div class="skill-info">
                                    <i class="skill-icon ${skill.iconClass}"></i>
                                    <div class="skill-title-group">
                                        <div class="skill-name">${name}</div>
                                        <div class="skill-category">${category}</div>
                                    </div>
                                </div>
                                <div class="skill-percentage">${skill.level}%</div>
                            </div>
                            <div class="progress-bar-container">
                                <div class="progress-bar-level bar-${skill.id}" data-level="${skill.level}%"></div>
                            </div>
                        </div>
                    `;
            }).join('');
        }
    };

    // --- Módulo de UI e Navegação ---
    const UIManager = {
        init() {
            this.setupMenu();
            this.setupSmoothScroll();
            this.initGlowEffect();
        },
        setupMenu() {
            menuToggle.addEventListener('click', () => navbarCenter.classList.toggle('active'));
            navbarCenter.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navbarCenter.classList.remove('active');
                    }
                });
            });
        },
        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                });
            });
        },
        initGlowEffect() {
            let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
            const speed = 0.2;
            document.addEventListener('mousemove', e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animate() {
                glowX += (mouseX - glowX) * speed;
                glowY += (mouseY - glowY) * speed;
                mouseGlow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
                requestAnimationFrame(animate);
            }
            if (window.matchMedia('(pointer: fine)').matches) {
                animate();
            }
        }
    };

    // --- Módulo de Animações de Scroll ---
    const scrollAnimations = {
        init() {
            this.setupFadeIn();
            this.setupSkillsAnimation();
        },
        setupFadeIn() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('is-visible', entry.isIntersecting);
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));
        },
        // ATUALIZADO: Lógica da animação de skills corrigida
        setupSkillsAnimation() {
            const skillsSection = document.getElementById('habilidades');
            if (!skillsSection) return;

            const observer = new IntersectionObserver((entries, observer) => {
                // Roda a animação apenas quando a seção estiver visível
                if (entries[0].isIntersecting) {
                    const skillBars = skillsSection.querySelectorAll('.progress-bar-level');
                    skillBars.forEach(bar => {
                        // Anima apenas as barras que ainda não foram animadas (width está 0 ou vazio)
                        if (!bar.style.width || bar.style.width === '0px') {
                            bar.style.width = bar.dataset.level;
                        }
                    });
                }
            }, { threshold: 0.4 });

            // Observa a seção de habilidades
            observer.observe(skillsSection);
        }
    };

    // --- LÓGICA DA GALERIA EXPANSÍVEL ---
    function setupExpandingGallery() {
        const container = document.getElementById('expanding-gallery-container');
        if (!container) return;

        container.innerHTML = '';

        projectsData.forEach((project) => {
            const title = translations[currentLang][`${project.id}-title`] || 'Project Title';
            const desc = translations[currentLang][`${project.id}-desc`] || 'Project description.';

            const panel = document.createElement('div');
            panel.classList.add('panel');
            panel.style.backgroundImage = `url('${project.image}')`;

            panel.innerHTML = `
                <div class="panel-content">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            `;
            container.appendChild(panel);
        });
    }

    // --- Inicialização de todos os módulos ---
    languageManager.init();
    skillsManager.init();
    UIManager.init();
    scrollAnimations.init();
    setupExpandingGallery();
});