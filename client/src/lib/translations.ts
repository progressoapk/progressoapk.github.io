export type Lang = "pt" | "en";

interface FeatureText {
  title: string;
  body: string;
  tag: string;
}

interface FaqText {
  question: string;
  answer: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  html: {
    langSwitchLabel: string;
  };
  nav: {
    brandAria: string;
    features: string;
    howItWorks: string;
    security: string;
    faq: string;
    download: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaDownload: string;
    ctaHowItWorks: string;
    note: string;
    tagline: string;
    scrollCue: string;
  };
  phone: {
    aria: string;
    greeting: string;
    subGreeting: string;
    todayShift: string;
    statusUpcoming: string;
    place: string;
    startShift: string;
    upcomingShifts: string;
    viewCalendar: string;
    weekdays: string[];
    publishedShift: string;
    tomorrowShift: string;
    navHome: string;
    navHours: string;
    navProfile: string;
    checkConfirmed: string;
    locationVerified: string;
    synced: string;
    justNow: string;
  };
  modal: {
    close: string;
    eyebrow: string;
    title: string;
    description: string;
    androidLabel: string;
    androidCta: string;
    soonOn: string;
    appStore: string;
    footnote: string;
  };
  trust: { number: string; title: string; description: string }[];
  intro: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  features: FeatureText[];
  workflow: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    scheduleLabel: string;
    scheduleMonth: string;
    publishedPill: string;
    weekdaysShort: string[];
    legendShift: string;
    legendToday: string;
    quote: string;
    paragraph: string;
    steps: { number: string; title: string; description: string }[];
  };
  highlight: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    linkText: string;
    cards: { kicker: string; title: string; description: string }[];
  };
  privacy: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    list: string[];
  };
  faqSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
  };
  faqs: FaqText[];
  closing: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
  };
  footer: {
    tagline: string;
    exploreLabel: string;
    supportLabel: string;
    siteLink: string;
    rights: string;
    builtFor: string;
  };
  errorPage: {
    backHome: string;
    goBack: string;
    reload: string;
    notFound: {
      code: string;
      title: string;
      description: string;
    };
    serverError: {
      code: string;
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Lang, Translations> = {
  pt: {
    meta: {
      title: "Progresso App — O seu turno, sob controlo",
      description:
        "App oficial Progresso: registe turnos, consulte horas e acompanhe o seu trabalho, diretamente do telemóvel.",
      ogLocale: "pt_PT",
    },
    html: { langSwitchLabel: "EN" },
    nav: {
      brandAria: "Progresso — início",
      features: "Funcionalidades",
      howItWorks: "Como funciona",
      security: "Segurança",
      faq: "Perguntas frequentes",
      download: "Descarregar",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      eyebrow: "APP OFICIAL PROGRESSO",
      titleLine1: "O seu turno,",
      titleLine2: "sob controlo.",
      description:
        "Registe turnos, consulte horas e acompanhe o seu trabalho — tudo simples, seguro e direto no seu telemóvel.",
      ctaDownload: "Descarregar a app",
      ctaHowItWorks: "Ver como funciona",
      note: "Acesso exclusivo para colaboradores Progresso",
      tagline: "RÜCKSCHRITT ZUM FORTSCHRITT",
      scrollCue: "deslize para explorar",
    },
    phone: {
      aria: "Pré-visualização do aplicativo Progresso",
      greeting: "BOM DIA, RITA",
      subGreeting: "O seu dia começa aqui.",
      todayShift: "Turno de hoje",
      statusUpcoming: "Por iniciar",
      place: "Centro · Almodôvar",
      startShift: "Iniciar turno",
      upcomingShifts: "Próximos turnos",
      viewCalendar: "Ver calendário →",
      weekdays: ["SEG", "TER", "QUA", "QUI", "SEX"],
      publishedShift: "Turno publicado",
      tomorrowShift: "Amanhã · 08:00 — 17:00",
      navHome: "Início",
      navHours: "Horas",
      navProfile: "Perfil",
      checkConfirmed: "Ponto confirmado",
      locationVerified: "Local verificado",
      synced: "Sincronizado",
      justNow: "Agora mesmo",
    },
    modal: {
      close: "Fechar",
      eyebrow: "A APP PROGRESSO",
      title: "Tenha o seu trabalho por perto.",
      description:
        "Escolha o seu dispositivo para continuar.",
      androidLabel: "Descarregar para",
      androidCta: "Android (APK)",
      soonOn: "Em breve na",
      appStore: "App Store",
      footnote: "Só colaboradores cadastrados pela empresa conseguem entrar.",
    },
    trust: [
      { number: "01", title: "Mais clareza", description: "horas e turnos num só lugar" },
      { number: "02", title: "Mais tranquilidade", description: "ponto validado e dados protegidos" },
      { number: "03", title: "Mais autonomia", description: "o seu trabalho, no seu ritmo" },
    ],
    intro: {
      eyebrow: "TUDO O QUE PRECISA",
      titleLine1: "Menos papel.",
      titleLine2: "Mais progresso.",
      description:
        "O app Progresso foi pensado para tornar o seu dia de trabalho mais simples, previsível e transparente. Tudo o que precisa para gerir o seu turno está a um toque de distância.",
    },
    features: [
      {
        title: "Bater o ponto com segurança",
        body: "Inicie e termine o seu turno com um toque. O app confirma que está no local de trabalho antes de registar, para que cada hora fique correta e comprovada.",
        tag: "01 / Presença",
      },
      {
        title: "O seu calendário de turnos",
        body: "Consulte todos os turnos do mês num calendário simples. Assim que o Team Leader publica a escala, ela aparece automaticamente no seu app.",
        tag: "02 / Escala",
      },
      {
        title: "Diga quando não pode trabalhar",
        body: 'Marque diretamente no app os dias em que não pode trabalhar ("Day X") ou prefere não trabalhar ("Day TX"). Faça isso até ao dia 15 do mês anterior.',
        tag: "03 / Disponibilidade",
      },
      {
        title: "Horas e valores, sempre à vista",
        body: "Acompanhe as horas que já trabalhou e o valor a receber, com atualização automática — sem esperar por relatórios em papel.",
        tag: "04 / Transparência",
      },
      {
        title: "Banco de horas",
        body: "Se o seu tipo de contrato utiliza banco de horas, consulte o saldo acumulado sempre atualizado, no mesmo lugar onde vê as suas horas.",
        tag: "05 / Contrato",
      },
      {
        title: "Reuniões por vídeo",
        body: "Receba o convite da sua equipa e entre na videochamada com um toque, sem precisar de instalar outra aplicação.",
        tag: "06 / Equipa",
      },
      {
        title: "O seu perfil",
        body: "Atualize os seus dados, escolha entre seis idiomas e decida se a escala atualiza sozinha ou apenas quando tocar para atualizar.",
        tag: "07 / Preferências",
      },
      {
        title: "Os seus dados, protegidos",
        body: "O acesso é reservado a colaboradores cadastrados pela empresa. Em conformidade com o RGPD, pode pedir para consultar ou apagar os seus dados no Perfil.",
        tag: "08 / Privacidade",
      },
      {
        title: "Funciona mesmo sem internet",
        body: "Registe turnos sem ligação. O app guarda a informação no telemóvel e sincroniza automaticamente quando a internet voltar.",
        tag: "09 / Offline",
      },
      {
        title: "Sempre atualizado, sem perder nada",
        body: "Receba um aviso quando houver uma nova versão e escolha atualizar na hora ou depois. Os seus dados guardados nunca são apagados.",
        tag: "10 / Evolução",
      },
    ],
    workflow: {
      eyebrow: "COMO FUNCIONA",
      titleLine1: "Do primeiro toque",
      titleLine2: "à escala certa.",
      description:
        "Uma rotina mais clara começa com informação certa, no momento certo. O app acompanha o seu fluxo sem complicar.",
      scheduleLabel: "A SUA ESCALA",
      scheduleMonth: "Setembro 2026",
      publishedPill: "Escala publicada",
      weekdaysShort: ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"],
      legendShift: "turno publicado",
      legendToday: "hoje",
      quote: "A sua escala aparece automaticamente assim que é publicada.",
      paragraph:
        "Não precisa de pedir, procurar ou esperar por papel. Abra o calendário, confira o seu próximo turno e mantenha tudo sob controlo.",
      steps: [
        { number: "01", title: "A escala é publicada", description: "O Team Leader fecha o planeamento da equipa." },
        { number: "02", title: "Você recebe a atualização", description: "Os seus turnos aparecem no calendário." },
        { number: "03", title: "O seu dia fica mais simples", description: "Consulte, registe e acompanhe — sem papel." },
      ],
    },
    highlight: {
      eyebrow: "FEITO PARA O RITMO REAL",
      titleLine1: "Trabalhe com",
      titleLine2: "mais confiança.",
      description:
        "Da entrada no local de trabalho à atualização do seu saldo, o app foi desenhado para acompanhar as situações que fazem parte do seu dia — mesmo quando a ligação falha.",
      linkText: "Saber mais sobre o app",
      cards: [
        { kicker: "COMUNICAÇÃO", title: "Reuniões sem sair do app", description: "Receba um convite, toque para entrar e mantenha-se ligado à sua equipa." },
        { kicker: "DO SEU JEITO", title: "Seis idiomas, uma experiência", description: "Português, inglês, espanhol, francês, italiano e alemão à sua escolha." },
        { kicker: "SEM INTERRUPÇÕES", title: "Continua a funcionar offline", description: "Registe o turno agora. A sincronização acontece quando a internet voltar." },
      ],
    },
    privacy: {
      eyebrow: "PRIVACIDADE NO CENTRO",
      titleLine1: "Os seus dados",
      titleLine2: "são seus.",
      description:
        "O acesso é sempre reservado a quem foi cadastrado pela empresa. Em linha com o RGPD, você pode pedir a consulta ou eliminação dos seus dados a qualquer momento, diretamente no Perfil.",
      list: [
        "Sem criação de conta livre",
        "Pedido de dados pelo Perfil",
        "Atualizações sem apagar registos",
      ],
    },
    faqSection: {
      eyebrow: "AINDA TEM DÚVIDAS?",
      titleLine1: "Comece com",
      titleLine2: "clareza.",
      description: "As respostas às perguntas que mais importam no seu primeiro dia com o app.",
      cta: "Descarregar a app",
    },
    faqs: [
      {
        question: "Quem pode entrar no aplicativo?",
        answer:
          "O aplicativo é exclusivo para colaboradores cadastrados pela empresa. Não existe criação de conta livre: quando estiver registado, receberá as instruções de acesso da equipa responsável.",
      },
      {
        question: "Preciso de internet para bater o ponto?",
        answer:
          "Não necessariamente. Pode registar o seu turno mesmo sem ligação. O app guarda a informação com segurança no telemóvel e sincroniza assim que a internet voltar.",
      },
      {
        question: "Em que idiomas o app está disponível?",
        answer:
          "Pode utilizar o app em português, inglês, espanhol, francês, italiano ou alemão. A escolha é feita diretamente no seu Perfil.",
      },
      {
        question: "Quando devo indicar que não posso trabalhar?",
        answer:
          'Para ajudar na organização da escala, indique os dias "Day X" ou "Day TX" até ao dia 15 do mês anterior. Assim a equipa tem tempo suficiente para planear.',
      },
    ],
    closing: {
      eyebrow: "UM PASSO DE CADA VEZ",
      titleLine1: "O próximo turno",
      titleLine2: "começa aqui.",
      description: "Mais simples para si. Mais claro para todos. E em breve, ainda mais atualizações.",
      cta: "Descarregar a app",
    },
    footer: {
      tagline: "O seu turno, sob controlo.",
      exploreLabel: "EXPLORAR",
      supportLabel: "SUPORTE",
      siteLink: "Site Progresso",
      rights: "Todos os direitos reservados.",
      builtFor: "Construído para avançar.",
    },
    errorPage: {
      backHome: "Voltar ao início",
      goBack: "Voltar atrás",
      reload: "Tentar novamente",
      notFound: {
        code: "404",
        title: "Página não encontrada",
        description: "A página que procura não existe, foi movida ou o endereço está incorreto.",
      },
      serverError: {
        code: "500",
        title: "Ocorreu um erro",
        description: "Algo correu mal do nosso lado. Tente novamente ou volte ao início.",
      },
    },
  },
  en: {
    meta: {
      title: "Progresso App — Your Shift, Under Control",
      description:
        "Official Progresso app: log shifts, check your hours, and keep track of your work, right from your phone.",
      ogLocale: "en_US",
    },
    html: { langSwitchLabel: "PT" },
    nav: {
      brandAria: "Progresso — home",
      features: "Features",
      howItWorks: "How it works",
      security: "Security",
      faq: "FAQ",
      download: "Download",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "OFFICIAL PROGRESSO APP",
      titleLine1: "Your shift,",
      titleLine2: "under control.",
      description:
        "Log shifts, check your hours, and keep track of your work — simple, secure, and right on your phone.",
      ctaDownload: "Download the app",
      ctaHowItWorks: "See how it works",
      note: "Exclusive access for Progresso employees",
      tagline: "RÜCKSCHRITT ZUM FORTSCHRITT",
      scrollCue: "scroll to explore",
    },
    phone: {
      aria: "Preview of the Progresso app",
      greeting: "GOOD MORNING, RITA",
      subGreeting: "Your day starts here.",
      todayShift: "Today's shift",
      statusUpcoming: "Not started",
      place: "Center · Almodôvar",
      startShift: "Start shift",
      upcomingShifts: "Upcoming shifts",
      viewCalendar: "View calendar →",
      weekdays: ["MON", "TUE", "WED", "THU", "FRI"],
      publishedShift: "Shift published",
      tomorrowShift: "Tomorrow · 08:00 — 17:00",
      navHome: "Home",
      navHours: "Hours",
      navProfile: "Profile",
      checkConfirmed: "Clock-in confirmed",
      locationVerified: "Location verified",
      synced: "Synced",
      justNow: "Just now",
    },
    modal: {
      close: "Close",
      eyebrow: "THE PROGRESSO APP",
      title: "Keep your work close at hand.",
      description:
        "Choose your device to continue.",
      androidLabel: "Download for",
      androidCta: "Android (APK)",
      soonOn: "Coming soon on",
      appStore: "App Store",
      footnote: "Only employees registered by the company can sign in.",
    },
    trust: [
      { number: "01", title: "More clarity", description: "hours and shifts in one place" },
      { number: "02", title: "More peace of mind", description: "verified clock-ins and protected data" },
      { number: "03", title: "More autonomy", description: "your work, at your own pace" },
    ],
    intro: {
      eyebrow: "EVERYTHING YOU NEED",
      titleLine1: "Less paper.",
      titleLine2: "More progress.",
      description:
        "The Progresso app was designed to make your workday simpler, more predictable, and more transparent. Everything you need to manage your shift is one tap away.",
    },
    features: [
      {
        title: "Clock in with confidence",
        body: "Start and end your shift with a single tap. The app confirms you're on-site before logging it, so every hour is accurate and verified.",
        tag: "01 / Attendance",
      },
      {
        title: "Your shift calendar",
        body: "See every shift for the month in one simple calendar. As soon as your Team Leader publishes the schedule, it appears automatically in your app.",
        tag: "02 / Schedule",
      },
      {
        title: "Tell us when you can't work",
        body: 'Mark the days you can\'t work ("Day X") or would rather not ("Day TX") directly in the app. Do it by the 15th of the previous month.',
        tag: "03 / Availability",
      },
      {
        title: "Hours and pay, always in view",
        body: "Track the hours you've worked and the amount you'll be paid, updated automatically — no more waiting for paper reports.",
        tag: "04 / Transparency",
      },
      {
        title: "Time bank",
        body: "If your contract type uses a time bank, check your accumulated balance, always up to date, in the same place you see your hours.",
        tag: "05 / Contract",
      },
      {
        title: "Video meetings",
        body: "Get your team's invite and join the video call with one tap, no need to install another app.",
        tag: "06 / Team",
      },
      {
        title: "Your profile",
        body: "Update your details, choose between six languages, and decide whether the schedule refreshes automatically or only when you tap to update.",
        tag: "07 / Preferences",
      },
      {
        title: "Your data, protected",
        body: "Access is reserved for employees registered by the company. In line with GDPR, you can request to view or delete your data from your Profile.",
        tag: "08 / Privacy",
      },
      {
        title: "Works even without internet",
        body: "Log shifts with no connection. The app saves the information on your phone and syncs automatically once you're back online.",
        tag: "09 / Offline",
      },
      {
        title: "Always up to date, nothing lost",
        body: "Get notified when a new version is available and choose to update right away or later. Your saved data is never deleted.",
        tag: "10 / Evolution",
      },
    ],
    workflow: {
      eyebrow: "HOW IT WORKS",
      titleLine1: "From the first tap",
      titleLine2: "to the right schedule.",
      description:
        "A clearer routine starts with the right information, at the right time. The app follows your flow without complicating it.",
      scheduleLabel: "YOUR SCHEDULE",
      scheduleMonth: "September 2026",
      publishedPill: "Schedule published",
      weekdaysShort: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      legendShift: "published shift",
      legendToday: "today",
      quote: "Your schedule appears automatically as soon as it's published.",
      paragraph:
        "No need to ask, search, or wait for paper. Open the calendar, check your next shift, and keep everything under control.",
      steps: [
        { number: "01", title: "The schedule is published", description: "The Team Leader finalizes the team's planning." },
        { number: "02", title: "You receive the update", description: "Your shifts appear on the calendar." },
        { number: "03", title: "Your day gets simpler", description: "Check, log, and track it — without paper." },
      ],
    },
    highlight: {
      eyebrow: "BUILT FOR THE REAL PACE",
      titleLine1: "Work with",
      titleLine2: "more confidence.",
      description:
        "From arriving at the workplace to updating your balance, the app was designed to keep up with the situations that are part of your day — even when the connection drops.",
      linkText: "Learn more about the app",
      cards: [
        { kicker: "COMMUNICATION", title: "Meetings without leaving the app", description: "Get an invite, tap to join, and stay connected to your team." },
        { kicker: "YOUR WAY", title: "Six languages, one experience", description: "Portuguese, English, Spanish, French, Italian, and German, your choice." },
        { kicker: "NO INTERRUPTIONS", title: "Keeps working offline", description: "Log your shift now. Syncing happens once you're back online." },
      ],
    },
    privacy: {
      eyebrow: "PRIVACY AT THE CENTER",
      titleLine1: "Your data",
      titleLine2: "is yours.",
      description:
        "Access is always reserved for those registered by the company. In line with GDPR, you can request to view or delete your data at any time, directly from your Profile.",
      list: [
        "No open account creation",
        "Data requests through your Profile",
        "Updates without deleting records",
      ],
    },
    faqSection: {
      eyebrow: "STILL HAVE QUESTIONS?",
      titleLine1: "Start with",
      titleLine2: "clarity.",
      description: "Answers to the questions that matter most on your first day with the app.",
      cta: "Download the app",
    },
    faqs: [
      {
        question: "Who can access the app?",
        answer:
          "The app is exclusive to employees registered by the company. There's no open account creation: once you're registered, you'll receive access instructions from the team in charge.",
      },
      {
        question: "Do I need internet to clock in?",
        answer:
          "Not necessarily. You can log your shift even without a connection. The app securely stores the information on your phone and syncs as soon as you're back online.",
      },
      {
        question: "What languages is the app available in?",
        answer:
          "You can use the app in Portuguese, English, Spanish, French, Italian, or German. The choice is made directly in your Profile.",
      },
      {
        question: "When should I report that I can't work?",
        answer:
          'To help organize the schedule, mark the "Day X" or "Day TX" days by the 15th of the previous month. This gives the team enough time to plan.',
      },
    ],
    closing: {
      eyebrow: "ONE STEP AT A TIME",
      titleLine1: "Your next shift",
      titleLine2: "starts here.",
      description: "Simpler for you. Clearer for everyone. And soon, even more updates.",
      cta: "Download the app",
    },
    footer: {
      tagline: "Your shift, under control.",
      exploreLabel: "EXPLORE",
      supportLabel: "SUPPORT",
      siteLink: "Progresso website",
      rights: "All rights reserved.",
      builtFor: "Built to move forward.",
    },
    errorPage: {
      backHome: "Back to home",
      goBack: "Go back",
      reload: "Try again",
      notFound: {
        code: "404",
        title: "Page not found",
        description: "The page you're looking for doesn't exist, was moved, or the address is incorrect.",
      },
      serverError: {
        code: "500",
        title: "Something went wrong",
        description: "An error occurred on our end. Try again or go back home.",
      },
    },
  },
};

export const LANG_STORAGE_KEY = "progresso_lang";
