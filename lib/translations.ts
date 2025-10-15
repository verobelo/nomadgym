export const translations = {
  en: {
    // Nav
    comingSoon: 'Coming Soon to Spain',

    // Hero Section
    heroTitle1: 'Your Journey. Your Route.',
    heroTitle2: 'Your Gym.',
    heroSubtitle:
      'One pass. Unlimited access to partner gyms across Spain. Perfect for tourists, vanlifers, and eternal wanderers.',
    knowMore: 'Know more',

    // How It Works
    howItWorks: 'How It Works',
    howItWorksSubtitle:
      'Getting started is simple. Train anywhere in just 3 easy steps.',
    step1Title: 'Buy Your Entry Pack',
    step1Description:
      'Choose from 5, 10, or 15+ entries. More options are coming.',
    step2Title: 'Find Gyms Near You',
    step2Description:
      'Browse our network of partner gyms across Spain. Filter by location, amenities, and availability.',
    step3Title: 'Train When You Want',
    step3Description:
      "Show up, scan your pass, and train. It's that simple. No contracts, no hassle.",

    // Why Choose
    whyChoose: 'Why Choose NomadGym?',
    whyChooseSubtitle:
      'The flexibility you need. The savings you want. The freedom you deserve.',
    flexibility: 'Total Flexibility',
    flexibilityDesc: 'Train at any partner gym. No fixed locations.',
    saveMoney: 'Save Money',
    saveMoneyDesc: 'Pay less. No expensive monthly memberships.',
    networkGyms: 'Network of Gyms',
    networkGymsDesc:
      'Access hundreds of gyms across Spain. Check gym availability in the gyms list.',

    // For Gym Owners
    forGymOwners: 'For Gym Owners',
    growYourGym: 'Grow Your Gym with',
    growYourGymSubtitle:
      'Join our network and attract a new wave of fitness enthusiasts. Perfect for filling off-peak hours and reaching travelers.',
    attractCustomers: 'Attract New Customers',
    attractCustomersDesc:
      'Reach tourists, digital nomads, and vanlifers exploring Spain.',
    fillOffPeak: 'Fill Off-Peak Hours',
    fillOffPeakDesc:
      "Maximize your gym's capacity during quieter times of the day.",
    noRisk: 'No Risk, Pay Per Use',
    noRiskDesc: 'Only pay for actual visits. No upfront costs or commitments.',
    partnerMyGym: 'Partner My Gym',

    // Waitlist
    readyToStart: 'Ready to Start Your Fitness Journey?',
    joinWaitlist:
      'Join the waitlist and be the first to know when we launch in Spain.',
    enterEmail: 'Enter your email',
    joinWaitlistBtn: 'Join Waitlist',
    joining: 'Joining...',
    consentText:
      'I agree to receive information about NomadGym launch and accept the',
    privacyPolicy: 'Privacy Policy',
    successMessage: "You're on the list! We'll be in touch soon.",

    // Footer
    trainAnywhere:
      'Train at any gym in Spain with a single pass. Perfect for travelers and digital nomads.',
    contact: 'Contact',
    followUs: 'Follow us on',
    allRights: 'All rights reserved.',
  },
  es: {
    // Nav
    comingSoon: 'Próximamente en España',

    // Hero Section
    heroTitle1: 'Tu Viaje. Tu Ruta.',
    heroTitle2: 'Tu Gimnasio.',
    heroSubtitle:
      'Un pase. Acceso ilimitado a gimnasios asociados en toda España. Ideal para turistas, vanlifers y nómadas eternos.',
    knowMore: 'Saber más',

    // How It Works
    howItWorks: 'Cómo Funciona',
    howItWorksSubtitle:
      'Empezar es simple. Entrena en cualquier lugar en solo 3 pasos fáciles.',
    step1Title: 'Compra Tu Pack de Entradas',
    step1Description:
      'Elige entre 5, 10 o 15+ entradas. Más opciones próximamente.',
    step2Title: 'Encuentra Gimnasios Cerca de Ti',
    step2Description:
      'Navega por nuestra red de gimnasios asociados en España. Filtra por ubicación, servicios y disponibilidad.',
    step3Title: 'Entrena Cuando Quieras',
    step3Description:
      'Preséntate, escanea tu pase y entrena. Así de simple. Sin contratos, sin complicaciones.',

    // Why Choose
    whyChoose: '¿Por Qué Elegir NomadGym?',
    whyChooseSubtitle:
      'La flexibilidad que necesitas. El ahorro que quieres. La libertad que mereces.',
    flexibility: 'Flexibilidad Total',
    flexibilityDesc:
      'Entrena en cualquier gimnasio asociado. Sin ubicaciones fijas.',
    saveMoney: 'Ahorra Dinero',
    saveMoneyDesc: 'Paga menos. Sin costosas membresías mensuales.',
    networkGyms: 'Red de Gimnasios',
    networkGymsDesc:
      'Accede a cientos de gimnasios en toda España. Consulta la disponibilidad en la lista de gimnasios.',

    // For Gym Owners
    forGymOwners: 'Para Propietarios de Gimnasios',
    growYourGym: 'Haz Crecer Tu Gimnasio con',
    growYourGymSubtitle:
      'Únete a nuestra red y atrae una nueva ola de entusiastas del fitness. Perfecto para llenar horas valle y atraer a viajeros.',
    attractCustomers: 'Atrae Nuevos Clientes',
    attractCustomersDesc:
      'Alcanza turistas, nómadas digitales y vanlifers explorando España.',
    fillOffPeak: 'Llena Horas Valle',
    fillOffPeakDesc:
      'Maximiza la capacidad de tu gimnasio durante los momentos más tranquilos del día.',
    noRisk: 'Sin Riesgo, Pago Por Uso',
    noRiskDesc:
      'Solo paga por visitas reales. Sin costos iniciales ni compromisos.',
    partnerMyGym: 'Asocia Mi Gimnasio',

    // Waitlist
    readyToStart: '¿Listo para Comenzar Tu Viaje de Fitness?',
    joinWaitlist:
      'Únete a la lista de espera y sé el primero en saber cuándo lancemos en España.',
    enterEmail: 'Escribe tu correo electrónico',
    joinWaitlistBtn: 'Unirse a la Lista de Espera',
    joining: 'Uniéndose...',
    consentText:
      'Acepto recibir información sobre el lanzamiento de NomadGym y acepto la',
    privacyPolicy: 'Política de Privacidad',
    successMessage: '¡Estás en la lista! Nos pondremos en contacto pronto.',

    // Footer
    trainAnywhere:
      'Entrena en cualquier gimnasio de España con un solo pase. Perfecto para viajeros y nómadas digitales.',
    contact: 'Contacto',
    followUs: 'Síguenos en',
    allRights: 'Todos los derechos reservados.',
  },
} as const;

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;
