import type { Translation } from './types';

export const pt: Translation = {
  nav: {
    items: [
      { id: 'home', label: 'Início' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Projetos' },
      { id: 'testimonials', label: 'Depoimentos' },
      { id: 'about', label: 'Sobre' },
      { id: 'contact', label: 'Contato' },
    ],
    mobileMenuOpen: 'Abrir menu',
    mobileMenuClose: 'Fechar menu',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Leonardo Sales',
    phrases: [
      'Desenvolvedor Full Stack',
      'Especialista em React & TypeScript',
      'Parceiro de produto, não só de código',
    ],
    description:
      'Ajudo empresas e fundadores a transformar ideias em produtos digitais rápidos, escaláveis e bem cuidados — do primeiro protótipo à entrega em produção, com foco em performance e experiência do usuário.',
    ctaContact: 'Iniciar um projeto',
    ctaProjects: 'Ver projetos',
    socialLabels: {
      github: 'GitHub de Leonardo Sales',
      linkedin: 'LinkedIn de Leonardo Sales',
      mail: 'Enviar e-mail para Leonardo Sales',
    },
    profileAlt: 'Foto de perfil de Leonardo Sales, desenvolvedor full stack',
  },
  skills: {
    heading: 'O que posso construir para você',
    subheading: 'Um conjunto completo de ferramentas para levar sua ideia da tela ao produto em produção',
    cards: [
      {
        title: 'React & TypeScript',
        description: 'Aplicações web robustas e escaláveis, com tipagem forte e os padrões mais atuais do ecossistema React.',
      },
      {
        title: 'React Native',
        description: 'Apps mobile multiplataforma para iOS e Android, sem duplicar esforço de desenvolvimento.',
      },
      {
        title: 'Prototipação no Figma',
        description: 'Protótipos interativos e sistemas de design que aproximam produto, design e código.',
      },
      {
        title: 'APIs & Backend',
        description: 'APIs REST documentadas com Swagger, bancos de dados em MongoDB e integrações com Firebase e Node.js.',
      },
      {
        title: 'Performance Web',
        description: 'Otimização de carregamento, Core Web Vitals e uma boa experiência em qualquer dispositivo.',
      },
      {
        title: 'Ferramentas Modernas',
        description: 'Vite, Next.js, Tailwind CSS, Docker e Nginx — o stack certo para cada tipo de projeto.',
      },
    ],
    techLabel: 'Tecnologias com que trabalho',
  },
  projects: {
    heading: 'Projetos em destaque',
    subheading: 'Uma seleção recente que mostra como transformo requisitos reais em produtos em produção',
    items: [
      {
        title: 'Cila hair | Agendamentos',
        description:
          'Sistema de agendamentos criado para um salão de beleza reduzir faltas e centralizar reservas. React, TypeScript e Firebase como backend serverless, com calendário em tempo real, mapa dinâmico da localização e uma experiência visual refinada.',
      },
      {
        title: 'Mini blog',
        description:
          'Plataforma de publicação em tempo real, pensada para eliminar recarregamentos de página e entregar uma experiência de leitura e escrita instantânea — arquitetura tratada como um fluxo de dados vivo.',
      },
      {
        title: 'Cubo Mágico 3D',
        description:
          'Um cubo mágico totalmente em 3D, renderizado com Three.js — gire e veja-o de qualquer ângulo com movimento suave e realista. Jogável direto do navegador, sem instalação: a lógica do quebra-cabeça foi construída em TypeScript e JavaScript puro, com interface em React.',
      },
    ],
    ctaDemo: 'Ver demo',
    ctaCode: 'Código',
  },
  testimonials: {
    heading: 'O que dizem sobre trabalhar comigo',
    subheading: 'Depoimentos de clientes e parceiros de projeto',
    emptyState: 'Ainda não há depoimentos publicados — seja o primeiro a deixar o seu!',
    formHeading: 'Deixe seu depoimento',
    nameLabel: 'Nome',
    emailLabel: 'E-mail',
    emailHelper: 'Seu e-mail não é exibido publicamente — serve só para evitar envios duplicados.',
    messageLabel: 'Mensagem',
    websiteLabel: 'Site (opcional)',
    ratingLabel: 'Avaliação',
    rateStarAria: 'Avaliar com {n} de 5 estrelas',
    ratingValueAria: 'Avaliação: {n} de 5 estrelas',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu.email@exemplo.com',
    messagePlaceholder: 'Como foi a experiência de trabalhar comigo?',
    websitePlaceholder: 'https://seusite.com',
    submitIdle: 'Enviar depoimento',
    submitLoading: 'Enviando...',
    visitWebsite: 'Visitar o site de {name}',
    seed: [
      {
        name: 'Marina Costa',
        message:
          'Leonardo entregou o dashboard interno da nossa startup antes do prazo, com um cuidado enorme na experiência do usuário. Traduziu muito bem os requisitos de negócio em telas rápidas e intuitivas.',
        rating: 5,
        website: null,
      },
      {
        name: 'Rafael Andrade',
        message:
          'Contratamos o Leonardo para modernizar o app mobile da nossa clínica. O React Native ficou estável em iOS e Android, e ele ainda sugeriu melhorias de fluxo que não tínhamos pensado.',
        rating: 5,
        website: 'https://clinicavitanova.com.br',
      },
      {
        name: 'Juliana Prado',
        message:
          'Trabalhamos juntos na prototipação no Figma e depois na implementação do e-commerce. A comunicação foi excelente do início ao fim, e o site ficou muito mais rápido que a versão anterior.',
        rating: 4,
        website: null,
      },
    ],
    toast: {
      pendingReview: 'Obrigado! Seu depoimento foi recebido e será publicado após uma breve revisão.',
      duplicate: 'Esse e-mail já enviou um depoimento anteriormente.',
      invalidWebsite: 'O link do site informado não parece válido.',
      genericError: 'Algo deu errado. Tente novamente em instantes.',
    },
  },
  feedbackWidget: {
    message: 'Já trabalhou comigo, deixe seu feedback',
    cta: 'Deixar feedback',
    dismissAria: 'Fechar aviso de depoimento',
  },
  about: {
    heading: 'Sobre mim',
    subheading: 'Um parceiro técnico para quem quer entregar certo da primeira vez',
    bioParagraphs: [
      'Sou desenvolvedor full stack e ajudo empresas e fundadores a transformar ideias em produtos digitais reais — do primeiro protótipo à entrega em produção.',
      'Trabalho com React e TypeScript no front-end, Node.js e Python no back-end, e uso minhas habilidades de design no Figma para garantir que o que foi desenhado seja exatamente o que é entregue.',
      'Fora do código, estudo novas tecnologias e me mantenho atualizado sobre boas práticas — porque entregar um produto de qualidade também é sobre continuar aprendendo.',
    ],
    stats: [
      { value: '15+', label: 'Projetos entregues' },
      { value: '1000+', label: 'Xícaras de café' },
      { value: '100%', label: 'Satisfação dos clientes' },
      { value: '4+', label: 'Anos de experiência' },
    ],
    processHeading: 'Meu processo de desenvolvimento',
    processSteps: [
      { step: '01', title: 'Descoberta', desc: 'Entendendo suas necessidades e objetivos de negócio' },
      { step: '02', title: 'Design', desc: 'Criando protótipos e wireframes alinhados ao produto' },
      { step: '03', title: 'Desenvolvimento', desc: 'Construindo com boas práticas e código limpo' },
      { step: '04', title: 'Entrega', desc: 'Testes, deploy e acompanhamento pós-lançamento' },
    ],
  },
  contact: {
    heading: 'Entre em contato',
    subheading: 'Tem um projeto em mente? Vamos conversar sobre como tirá-lo do papel',
    formHeading: 'Vamos falar sobre o seu projeto',
    formIntro:
      'Estou sempre de portas abertas para conhecer novos projetos e oportunidades. Me conte sobre sua ideia, seu desafio técnico ou uma vaga em aberto — vamos ver como posso ajudar.',
    infoLabels: { email: 'E-mail', phone: 'Telefone', location: 'Localização' },
    nameLabel: 'Nome',
    emailLabel: 'E-mail',
    messageLabel: 'Mensagem',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'seu.email@exemplo.com',
    messagePlaceholder: 'Conte sobre o seu projeto...',
    submitIdle: 'Enviar mensagem',
    submitLoading: 'Enviando...',
    toast: {
      sent: 'Recebido! Vou analisar sua ideia e te chamo em breve.',
      service_unavailable: 'Serviço indisponível temporariamente. Tente novamente em breve.',
      send_error: 'O envio falhou. Aguarde alguns instantes e reenvie.',
    },
  },
  footer: {
    madeWith: 'Feito com React, TypeScript e Motion',
  },
};
