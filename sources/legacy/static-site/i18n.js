// Internationalization (i18n) for Marcelo Jr's Portfolio
const translations = {
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        // Hero Section
        'hero.greeting': 'Olá, eu sou',
        'hero.subtitle': 'Arquiteto de Soluções | Especialista em Cloud Computing e AWS',
        'hero.description': 'Formado em Sistemas para Internet pelo IFPB em 2014, sou apaixonado por design e desenvolvimento de software. Com mais de 10 anos de experiência, crio soluções robustas e escaláveis para os setores bancário, industrial e fintech, unindo criatividade e eficiência.',
        'hero.contact_btn': 'Entre em Contato',
        'hero.projects_btn': 'Ver Projetos',

        // About Section
        'about.title': 'Sobre Mim',
        'about.subtitle': 'Conheça um pouco da minha trajetória',
        'about.description1': 'Ao longo da minha carreira tive a oportunidade de atuar em diversos projetos, desde indústrias, processadoras de cartões de crédito, fintechs e até grandes bancos.',
        'about.description2': 'Me especializei em arquitetura de software, sempre buscando aplicar boas práticas e padrões modernos de projeto para criar soluções robustas, escaláveis e sustentáveis. Gosto de pensar a tecnologia como um motor de transformação capaz de impulsionar empresas a crescer e inovar.',
        'about.description3': 'O que me motiva é ajudar organizações a superar desafios complexos e transformar ideias em resultados reais para os clientes. A cada projeto, busco unir estratégia, inovação e simplicidade para entregar soluções que façam diferença de verdade.',
        'about.stats.experience': 'Anos de Experiência',
        'about.stats.projects': 'Projetos Concluídos',
        'about.stats.companies': 'Empresas de Referência',

        // Experience Section
        'experience.title': 'Experiência Profissional',
        'experience.subtitle': 'Minha trajetória profissional',
        'experience.current': 'Atual',
        'experience.itau.title': 'Arquiteto de Soluções',
        'experience.itau.company': 'Itaú Unibanco',
        'experience.itau.period': 'Mar 2022 - Presente',
        'experience.itau.description': 'Ajudando os times no Itaú a construir serviços e aplicações resilientes, escaláveis, seguras e de alta performance trabalhando, principalmente, com componentes e serviços da AWS. Atuando num contexto modernizado onde uma arquitetura complexa de microserviços é predominante, com suporte a convivência com sistemas legados. Um conglomerado de dados robusto é gerenciado por modelo Data Mesh.',
        'experience.dock.title': 'Senior Software Engineering',
        'experience.dock.company': 'Dock',
        'experience.dock.period': 'Nov 2020 - Mar 2022',
        'experience.dock.description': 'Atuei na squad Athos responsável por manter os produtos de Marketplace. Desenvolvimento, implementação e manutenção de microserviços e APIs para soluções de Banking as a Service (BaaS) numa arquitetura serverless provida na cloud AWS.',
        'experience.leads2b.title': 'Software Engineering',
        'experience.leads2b.company': 'Leads2b',
        'experience.leads2b.period': 'Jan 2020 - Out 2020',
        'experience.leads2b.description': 'Integrando o time de produtos, estava responsável por desenvolver e manter todo ecossistema web que compõe a plataforma da Leads2b. Mantendo APIs em uma arquitetura mista com um monolito escrito em PHP (Codeigniter) e alguns microserviços escritos em Javascript (Nodejs).',
        'experience.conductor.title': 'Software Engineer',
        'experience.conductor.company': 'Conductor Tecnologia',
        'experience.conductor.period': 'Fev 2019 - Dez 2019',
        'experience.conductor.description': 'Atuei no time de Conciliação, sendo responsável pela manutenção e evolução de serviços e sistemas que processavam a conciliação de transações de cartão de crédito. A maior parte dos serviços estava implementada em PL/SQL (procedures e functions) sobre SQL Server, mas também contribui para a criação e manutenção de serviços em Java com Spring Boot, garantindo confiabilidade e performance nos processos críticos.',
        'experience.assert.title': 'Fullstack Software Engineer',
        'experience.assert.company': 'Assert Polo Embrapii',
        'experience.assert.period': 'Abr 2017 - Jan 2019',
        'experience.assert.description': 'Integrei um time focado em conceber e implementar soluções web de cunho industrial para grandes multinacionais, como Arima e Proeletronic. Desenvolvi serviços em Node.js e Vue.js, construindo APIs RESTful escaláveis e aplicando bancos de dados NoSQL como MongoDB, além de Postgres. Atuei no design de microserviços e na entrega de aplicações que conectavam processos industriais a plataformas digitais de forma eficiente.',
        'experience.evomaster.title': 'Software Engineer',
        'experience.evomaster.company': 'Evomaster Tecnologia',
        'experience.evomaster.period': 'Jan 2015 - Abr 2017',
        'experience.evomaster.description': 'Fui responsável pelo desenvolvimento e manutenção de um ecossistema de serviços web que compunha uma plataforma de gerenciamento imobiliário. Trabalhei em um sistema monolítico em PHP (arquitetura MVC) com Postgres como banco de dados, aplicando princípios de design de software para garantir evolução contínua. Projeto em destaque: Havite.',

        // Skills Section
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologias e ferramentas que domino',
        'skills.backend': 'Backend',
        'skills.devops': 'DevOps & Cloud',
        'skills.database': 'Banco de Dados',

        // Projects Section
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Alguns dos meus trabalhos mais relevantes',
        'projects.modernization.title': 'Modernização da Arquitetura de Solução',
        'projects.modernization.description': 'Atuei na modernização da arquitetura dos serviços de empréstimos pessoais no Itaú, transformando sistemas monolíticos on-premise em microserviços escaláveis e resilientes, aplicando padrões modernos de design. A iniciativa incluiu a implementação de uma infraestrutura completa em AWS, com automação via Terraform, pipelines de CI/CD e monitoramento contínuo das aplicações em produção, garantindo maior eficiência operacional e redução de riscos.',
        'projects.payments.title': 'Sistema e Pagamentos Financeiros',
        'projects.payments.description': 'Participei do desenvolvimento de APIs para soluções BaaS na Dock, criando microserviços serverless de pagamentos com alta disponibilidade em ambiente AWS. O projeto teve como foco a escalabilidade, segurança e confiabilidade das transações financeiras, permitindo integração rápida com parceiros e suporte a grande volume de operações.',
        'projects.leads2b.title': 'Plataforma de CRM Leads2b',
        'projects.leads2b.description': 'Contribuí para o desenvolvimento de um CRM inteligente que integra prospecção, marketing, vendas e atendimento em uma única plataforma. A solução incorporava inteligência artificial para acelerar a estratégia de Go-to-Market de empresas B2B, otimizando processos de aquisição de clientes e aumentando a eficiência comercial.',
        'projects.conductor.title': 'Sistema de Conciliação Financeira',
        'projects.conductor.description': 'Desenvolvimento e manutenção de sistemas de conciliação de transações de cartão de crédito na Conductor, utilizando PL/SQL e Java Spring Boot para garantir confiabilidade e performance em processos críticos de processamento financeiro.',

        // Contact Section
        'contact.title': 'Vamos Conversar?',
        'contact.subtitle': 'Entre em contato para discutirmos oportunidades',
        'contact.description': 'Estou disponível para consultorias em arquitetura de software, modernização de sistemas e desenvolvimento de projetos freelancers. Se você tem um desafio tecnológico ou busca orientação especializada, posso apoiar na definição de estratégias, desenho de soluções e implementação de sistemas robustos e escaláveis que gerem valor real para o seu negócio.',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hi, I\'m',
        'hero.subtitle': 'Solutions Architect | Cloud Computing and AWS Specialist',
        'hero.description': 'Graduated in Internet Systems from IFPB in 2014, I am passionate about design and software development. With over 10 years of experience, I create robust and scalable solutions for banking, industrial, and fintech sectors, combining creativity and efficiency.',
        'hero.contact_btn': 'Get in Touch',
        'hero.projects_btn': 'View Projects',

        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Get to know a bit about my journey',
        'about.description1': 'Throughout my career, I have had the opportunity to work on diverse projects, from industries to credit card processors, fintechs, and even large banks.',
        'about.description2': 'I am specialized in software architecture, applying best practices and modern design patterns to develop robust, scalable, and sustainable solutions. My purpose is to support companies in overcoming technological challenges, driving innovation, and generating real value for their clients.',
        'about.description3': 'What motivates me is helping organizations overcome complex challenges and turn ideas into real results for customers. In each project, I seek to unite strategy, innovation, and simplicity to deliver solutions that truly make a difference.',
        'about.stats.experience': 'Years of Experience',
        'about.stats.projects': 'Completed Projects',
        'about.stats.companies': 'Reference Companies',

        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'My professional journey',
        'experience.current': 'Current',
        'experience.itau.title': 'Solutions Architect',
        'experience.itau.company': 'Itaú Unibanco',
        'experience.itau.period': 'Mar 2022 - Present',
        'experience.itau.description': 'Helping Itaú teams build resilient, scalable, secure, and high-performance services and applications, working mainly with AWS components and services. Operating in a modernized context where a complex microservices architecture is predominant, with support for coexistence with legacy systems. A robust data conglomerate is managed by a Data Mesh model.',
        'experience.dock.title': 'Senior Software Engineering',
        'experience.dock.company': 'Dock',
        'experience.dock.period': 'Nov 2020 - Mar 2022',
        'experience.dock.description': 'I worked in the Athos squad responsible for maintaining Marketplace products. Development, implementation, and maintenance of microservices and APIs for Banking as a Service (BaaS) solutions in a serverless architecture provided in AWS cloud.',
        'experience.leads2b.title': 'Software Engineering',
        'experience.leads2b.company': 'Leads2b',
        'experience.leads2b.period': 'Jan 2020 - Oct 2020',
        'experience.leads2b.description': 'Integrating the product team, I was responsible for developing and maintaining the entire web ecosystem that makes up the Leads2b platform. Maintaining APIs in a mixed architecture with a monolith written in PHP (Codeigniter) and some microservices written in Javascript (Nodejs).',
        'experience.conductor.title': 'Software Engineer',
        'experience.conductor.company': 'Conductor Tecnologia',
        'experience.conductor.period': 'Feb 2019 - Dec 2019',
        'experience.conductor.description': 'I worked in the Reconciliation team, being responsible for maintaining and evolving services and systems that processed credit card transaction reconciliation. Most services were implemented in PL/SQL (procedures and functions) on SQL Server, but I also contributed to creating and maintaining services in Java with Spring Boot, ensuring reliability and performance in critical processes.',
        'experience.assert.title': 'Fullstack Software Engineer',
        'experience.assert.company': 'Assert Polo Embrapii',
        'experience.assert.period': 'Apr 2017 - Jan 2019',
        'experience.assert.description': 'I joined a team focused on conceiving and implementing industrial web solutions for large multinationals, such as Arima and Proeletronic. I developed services in Node.js and Vue.js, building scalable RESTful APIs and applying NoSQL databases like MongoDB, as well as Postgres. I worked on microservices design and delivering applications that connected industrial processes to digital platforms efficiently.',
        'experience.evomaster.title': 'Software Engineer',
        'experience.evomaster.company': 'Evomaster Tecnologia',
        'experience.evomaster.period': 'Jan 2015 - Apr 2017',
        'experience.evomaster.description': 'I was responsible for developing and maintaining a web services ecosystem that comprised a real estate management platform. I worked on a monolithic system in PHP (MVC architecture) with Postgres as the database, applying software design principles to ensure continuous evolution. Featured project: Havite.',

        // Skills Section
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Technologies and tools I master',
        'skills.backend': 'Backend',
        'skills.devops': 'DevOps & Cloud',
        'skills.database': 'Database',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Some of my most relevant work',
        'projects.modernization.title': 'Solution Architecture Modernization',
        'projects.modernization.description': 'I worked on modernizing the architecture of personal loan services at Itaú, transforming on-premise monolithic systems into scalable and resilient microservices, applying modern design patterns. The initiative included implementing a complete infrastructure on AWS, with Terraform automation, CI/CD pipelines, and continuous monitoring of production applications, ensuring greater operational efficiency and risk reduction.',
        'projects.payments.title': 'Financial Payment System',
        'projects.payments.description': 'I participated in the development of APIs for BaaS solutions at Dock, creating serverless payment microservices with high availability in AWS environment. The project focused on scalability, security, and reliability of financial transactions, enabling rapid integration with partners and support for high-volume operations.',
        'projects.leads2b.title': 'Leads2b CRM Platform',
        'projects.leads2b.description': 'I contributed to the development of an intelligent CRM that integrates prospecting, marketing, sales, and customer service in a single platform. The solution incorporated artificial intelligence to accelerate the Go-to-Market strategy for B2B companies, optimizing customer acquisition processes and increasing commercial efficiency.',
        'projects.conductor.title': 'Financial Reconciliation System',
        'projects.conductor.description': 'Development and maintenance of credit card transaction reconciliation systems at Conductor, using PL/SQL and Java Spring Boot to ensure reliability and performance in critical financial processing operations.',

        // Contact Section
        'contact.title': 'Let\'s Talk?',
        'contact.subtitle': 'Get in touch to discuss opportunities',
        'contact.description': 'I am available for consulting in software architecture, system modernization, and freelance project development. If you have a technological challenge or seek specialized guidance, I can support you in strategy definition, solution design, and implementation of robust and scalable systems that generate real value for your business.',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub'
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'pt';

// Function to translate text
function translateText(key, lang = currentLang) {
    return translations[lang][key] || translations['pt'][key] || key;
}

// Function to update all translatable elements
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translateText(key, lang);
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
