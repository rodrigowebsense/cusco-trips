'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
export const translations = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar Ahora',

    // Header
    'header.phone': '+51 984 123 456',
    'header.email': 'cuscotripsperu@gmail.com',
    'header.hours': 'Horario: 9h-19h | Tours diarios',

    // Home page
    'home.hero.title': 'Descubre los',
    'home.hero.subtitle': 'Andes Peruanos',
    'home.hero.description': 'Aventuras auténticas por el corazón del antiguo Imperio Inca. Explora Machu Picchu y paisajes espectaculares con nuestro equipo especializado.',
    'home.hero.explore': 'Explorar Tours',
    'home.hero.contact': 'Contáctanos',
    'home.hero.watchVideo': 'Ver Video',

    'home.features.title': '¿Por qué elegir CuscoTrips?',
    'home.features.subtitle': 'Más de 15 años de experiencia ofreciendo aventuras inolvidables por los caminos sagrados de los Andes.',
    'home.features.guides.title': 'Guías Especializados',
    'home.features.guides.desc': 'Guías locales experimentados con conocimiento profundo de la cultura e historia andina.',
    'home.features.safety.title': 'Seguridad Garantizada',
    'home.features.safety.desc': 'Equipos de primera calidad y protocolos de seguridad rigurosos.',
    'home.features.groups.title': 'Grupos Pequeños',
    'home.features.groups.desc': 'Experiencias personalizadas con grupos reducidos para mayor calidad.',
    'home.features.award.title': 'Empresa Premiada',
    'home.features.award.desc': 'Reconocida como una de las mejores operadoras de turismo del Perú.',

    'home.tours.title': 'Tours Destacados',
    'home.tours.subtitle': 'Nuestras aventuras más populares por los destinos más espectaculares del Perú.',
    'home.tours.viewAll': 'Ver Todos los Tours',

    'home.stats.travelers': 'Viajeros Satisfechos',
    'home.stats.experience': 'Años de Experiencia',
    'home.stats.tours': 'Tours Únicos',
    'home.stats.rating': 'Calificación Promedio',

    'home.testimonials.title': 'Lo que dicen nuestros viajeros',

    'home.cta.title': '¿Listo para tu aventura andina?',
    'home.cta.description': 'Contáctanos y planifica el viaje de tus sueños por los caminos sagrados de los Andes peruanos.',
    'home.cta.quote': 'Solicitar Cotización',

    // Tours page
    'tours.title': 'Nuestros Tours',
    'tours.subtitle': 'Descubre experiencias únicas por los Andes peruanos. Desde trekkings desafiantes hasta tours culturales, tenemos la aventura perfecta para ti.',
    'tours.search': 'Buscar tours...',
    'tours.all': 'Todos los Tours',
    'tours.trekking': 'Trekking',
    'tours.cultural': 'Cultural',
    'tours.adventure': 'Aventura',
    'tours.spiritual': 'Espiritual',
    'tours.allDifficulties': 'Todas las Dificultades',
    'tours.easy': 'Fácil',
    'tours.moderate': 'Moderado',
    'tours.challenging': 'Desafiante',
    'tours.difficult': 'Difícil',
    'tours.found': 'tours encontrados',
    'tours.notFound': 'Ningún tour encontrado',
    'tours.notFoundDesc': 'Intenta ajustar tus filtros o término de búsqueda.',
    'tours.clearFilters': 'Limpiar Filtros',
    'tours.customTitle': '¿No encontraste el tour ideal?',
    'tours.customDesc': 'Nuestro equipo puede crear una experiencia personalizada especialmente para ti.',
    'tours.createCustom': 'Crear Tour Personalizado',
    'tours.showing': 'Mostrando',
    'tours.of': 'resultados',
    'tours.tours': 'tours',
    'tours.loadMore': 'Cargar Más',
    'tours.loading': 'Cargando más tours...',

    // Tour card
    'tour.viewDetails': 'Ver Detalles',
    'tour.person': '/persona',
    'tour.upTo': 'Hasta',
    'tour.people': 'personas',

    // Tour detail
    'tour.backToTours': 'Volver a tours',
    'tour.overview': 'Descripción',
    'tour.itinerary': 'Itinerario',
    'tour.included': 'Incluido',
    'tour.gallery': 'Galería',
    'tour.about': 'Sobre este tour',
    'tour.highlights': 'Destacados',
    'tour.day': 'Día',
    'tour.notIncluded': 'No Incluido',
    'tour.duration': 'Duración',
    'tour.maxGroup': 'Grupo máximo',
    'tour.bestSeason': 'Mejor época',
    'tour.bookNow': 'Reservar Ahora',
    'tour.requestInfo': 'Solicitar Información',
    'tour.share': 'Compartir',
    'tour.needHelp': '¿Necesitas ayuda?',
    'tour.support247': 'Nuestro equipo está disponible 24/7 para ayudar con tu reserva.',
    'tour.reviews': 'reseñas',

    // Contact page
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos aquí para ayudarte a planificar tu aventura perfecta por los Andes peruanos. Nuestro equipo especializado está listo para responder tus preguntas.',
    'contact.requestInfo': 'Solicitar Información',
    'contact.fullName': 'Nombre Completo',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.groupSize': 'Tamaño del Grupo',
    'contact.selectGroup': 'Selecciona',
    'contact.1person': '1 persona',
    'contact.2people': '2 personas',
    'contact.3to5': '3-5 personas',
    'contact.6to10': '6-10 personas',
    'contact.10plus': 'Más de 10 personas',
    'contact.tourInterest': 'Tour de Interés',
    'contact.selectTour': 'Selecciona un tour',
    'contact.salkantay': 'Trilha Salkantay 5 Días',
    'contact.incaTrail': 'Trilha Inca Clásica 4 Días',
    'contact.cuscoTour': 'City Tour Cusco',
    'contact.rainbow': 'Montaña Colorida',
    'contact.custom': 'Tour Personalizado',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntanos sobre el viaje de tus sueños, fechas preferidas, intereses especiales, etc.',
    'contact.send': 'Enviar Mensaje',
    'contact.whyChoose': '¿Por qué elegirnos?',
    'contact.quickResponse': 'Respuesta Rápida',
    'contact.quickResponseDesc': 'Respondemos todas las consultas en hasta 2 horas durante horario comercial.',
    'contact.multilingual': 'Atención Multiidioma',
    'contact.multilingualDesc': 'Nuestro equipo habla Portugués, Español, Inglés y Quechua.',
    'contact.personalized': 'Consultoría Personalizada',
    'contact.personalizedDesc': 'Creamos experiencias a medida para tu grupo y preferencias.',
    'contact.support247Title': 'Soporte 24/7',
    'contact.emergencySupport': 'Para emergencias durante tu viaje',
    'contact.whatsapp': 'WhatsApp disponible',
    'contact.faq': 'Preguntas Frecuentes',

    // Footer
    'footer.description': 'Descubre la magia del Perú con nuestros guías expertos y experiencias auténticas. Tu aventura de toda la vida te espera.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.popularTours': 'Tours Populares',
    'footer.contact': 'Contacto',
    'footer.address': 'Av. El Sol 123, Cusco, Perú',
    'footer.followUs': 'Síguenos',
    'footer.copyright': '© 2024 Cusco Trips. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',

    // Common
    'common.required': 'requerido',
    'common.optional': 'opcional',

    // Page Meta
    'meta.home.title': 'CuscoTrips - Tours y Aventuras por los Andes Peruanos',
    'meta.home.description': 'Descubre los Andes peruanos con CuscoTrips. Tours auténticos a Machu Picchu, Salkantay Trek, Trilha Inca y más. Más de 15 años de experiencia en turismo de aventura.',
    'meta.tours.title': 'Tours por los Andes Peruanos - CuscoTrips',
    'meta.tours.description': 'Explora nuestros tours únicos por los Andes peruanos. Trekking, tours culturales y aventuras espirituales. Encuentra tu experiencia perfecta en Cusco y Machu Picchu.',
    'meta.contact.title': 'Contacto - CuscoTrips Tours',
    'meta.contact.description': 'Contáctanos para planificar tu aventura perfecta por los Andes peruanos. Atención personalizada, respuesta rápida y soporte 24/7 para tu viaje.',
    'meta.tourDetail.title': '{tourName} - CuscoTrips Tours',
    'meta.tourDetail.description': 'Descubre {tourName} con CuscoTrips. {tourDescription}',
    'meta.notFound.title': 'Página no encontrada - CuscoTrips',
    'meta.notFound.description': 'La página que buscas no existe. Explora nuestros tours auténticos por los Andes peruanos y encuentra tu próxima aventura.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',

    // Header
    'header.phone': '+51 984 123 456',
    'header.email': 'cuscotripsperu@gmail.com',
    'header.hours': 'Hours: 9am-7pm | Daily tours',

    // Home page
    'home.hero.title': 'Discover the',
    'home.hero.subtitle': 'Peruvian Andes',
    'home.hero.description': 'Authentic adventures through the heart of the ancient Inca Empire. Explore Machu Picchu and spectacular landscapes with our specialized team.',
    'home.hero.explore': 'Explore Tours',
    'home.hero.contact': 'Contact Us',
    'home.hero.watchVideo': 'Watch Video',

    'home.features.title': 'Why choose CuscoTrips?',
    'home.features.subtitle': 'Over 15 years of experience offering unforgettable adventures along the sacred paths of the Andes.',
    'home.features.guides.title': 'Specialized Guides',
    'home.features.guides.desc': 'Experienced local guides with deep knowledge of Andean culture and history.',
    'home.features.safety.title': 'Guaranteed Safety',
    'home.features.safety.desc': 'Top-quality equipment and rigorous safety protocols.',
    'home.features.groups.title': 'Small Groups',
    'home.features.groups.desc': 'Personalized experiences with reduced groups for higher quality.',
    'home.features.award.title': 'Award-Winning Company',
    'home.features.award.desc': 'Recognized as one of Peru\'s best tourism operators.',

    'home.tours.title': 'Featured Tours',
    'home.tours.subtitle': 'Our most popular adventures through Peru\'s most spectacular destinations.',
    'home.tours.viewAll': 'View All Tours',

    'home.stats.travelers': 'Satisfied Travelers',
    'home.stats.experience': 'Years of Experience',
    'home.stats.tours': 'Unique Tours',
    'home.stats.rating': 'Average Rating',

    'home.testimonials.title': 'What our travelers say',

    'home.cta.title': 'Ready for your Andean adventure?',
    'home.cta.description': 'Contact us and plan your dream trip through the sacred paths of the Peruvian Andes.',
    'home.cta.quote': 'Request Quote',

    // Tours page
    'tours.title': 'Our Tours',
    'tours.subtitle': 'Discover unique experiences through the Peruvian Andes. From challenging treks to cultural tours, we have the perfect adventure for you.',
    'tours.search': 'Search tours...',
    'tours.all': 'All Tours',
    'tours.trekking': 'Trekking',
    'tours.cultural': 'Cultural',
    'tours.adventure': 'Adventure',
    'tours.spiritual': 'Spiritual',
    'tours.allDifficulties': 'All Difficulties',
    'tours.easy': 'Easy',
    'tours.moderate': 'Moderate',
    'tours.challenging': 'Challenging',
    'tours.difficult': 'Difficult',
    'tours.found': 'tours found',
    'tours.notFound': 'No tours found',
    'tours.notFoundDesc': 'Try adjusting your filters or search term.',
    'tours.clearFilters': 'Clear Filters',
    'tours.customTitle': 'Didn\'t find the ideal tour?',
    'tours.customDesc': 'Our team can create a personalized experience especially for you.',
    'tours.createCustom': 'Create Custom Tour',
    'tours.showing': 'Showing',
    'tours.of': 'results',
    'tours.tours': 'tours',
    'tours.loadMore': 'Load More',
    'tours.loading': 'Loading more tours...',

    // Tour card
    'tour.viewDetails': 'View Details',
    'tour.person': '/person',
    'tour.upTo': 'Up to',
    'tour.people': 'people',

    // Tour detail
    'tour.backToTours': 'Back to tours',
    'tour.overview': 'Overview',
    'tour.itinerary': 'Itinerary',
    'tour.included': 'Included',
    'tour.gallery': 'Gallery',
    'tour.about': 'About this tour',
    'tour.highlights': 'Highlights',
    'tour.day': 'Day',
    'tour.notIncluded': 'Not Included',
    'tour.duration': 'Duration',
    'tour.maxGroup': 'Max group',
    'tour.bestSeason': 'Best season',
    'tour.bookNow': 'Book Now',
    'tour.requestInfo': 'Request Information',
    'tour.share': 'Share',
    'tour.needHelp': 'Need help?',
    'tour.support247': 'Our team is available 24/7 to help with your booking.',
    'tour.reviews': 'reviews',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you plan the perfect adventure through the Peruvian Andes. Our specialized team is ready to answer your questions.',
    'contact.requestInfo': 'Request Information',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.groupSize': 'Group Size',
    'contact.selectGroup': 'Select',
    'contact.1person': '1 person',
    'contact.2people': '2 people',
    'contact.3to5': '3-5 people',
    'contact.6to10': '6-10 people',
    'contact.10plus': 'More than 10 people',
    'contact.tourInterest': 'Tour of Interest',
    'contact.selectTour': 'Select a tour',
    'contact.salkantay': 'Salkantay Trek 5 Days',
    'contact.incaTrail': 'Classic Inca Trail 4 Days',
    'contact.cuscoTour': 'Cusco City Tour',
    'contact.rainbow': 'Rainbow Mountain',
    'contact.custom': 'Custom Tour',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your dream trip, preferred dates, special interests, etc.',
    'contact.send': 'Send Message',
    'contact.whyChoose': 'Why choose us?',
    'contact.quickResponse': 'Quick Response',
    'contact.quickResponseDesc': 'We respond to all inquiries within 2 hours during business hours.',
    'contact.multilingual': 'Multilingual Service',
    'contact.multilingualDesc': 'Our team speaks Portuguese, Spanish, English and Quechua.',
    'contact.personalized': 'Personalized Consultation',
    'contact.personalizedDesc': 'We create tailor-made experiences for your group and preferences.',
    'contact.support247Title': '24/7 Support',
    'contact.emergencySupport': 'For emergencies during your trip',
    'contact.whatsapp': 'WhatsApp available',
    'contact.faq': 'Frequently Asked Questions',

    // Footer
    'footer.description': 'Discover the magic of Peru with our expert guides and authentic experiences. Your lifetime adventure awaits.',
    'footer.quickLinks': 'Quick Links',
    'footer.popularTours': 'Popular Tours',
    'footer.contact': 'Contact',
    'footer.address': 'Av. El Sol 123, Cusco, Peru',
    'footer.followUs': 'Follow Us',
    'footer.copyright': '© 2024 Cusco Trips. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Common
    'common.required': 'required',
    'common.optional': 'optional',

    // Page Meta
    'meta.home.title': 'CuscoTrips - Tours and Adventures through the Peruvian Andes',
    'meta.home.description': 'Discover the Peruvian Andes with CuscoTrips. Authentic tours to Machu Picchu, Salkantay Trek, Inca Trail and more. Over 15 years of experience in adventure tourism.',
    'meta.tours.title': 'Tours through the Peruvian Andes - CuscoTrips',
    'meta.tours.description': 'Explore our unique tours through the Peruvian Andes. Trekking, cultural tours and spiritual adventures. Find your perfect experience in Cusco and Machu Picchu.',
    'meta.contact.title': 'Contact - CuscoTrips Tours',
    'meta.contact.description': 'Contact us to plan your perfect adventure through the Peruvian Andes. Personalized service, quick response and 24/7 support for your trip.',
    'meta.tourDetail.title': '{tourName} - CuscoTrips Tours',
    'meta.tourDetail.description': 'Discover {tourName} with CuscoTrips. {tourDescription}',
    'meta.notFound.title': 'Page not found - CuscoTrips',
    'meta.notFound.description': 'The page you are looking for does not exist. Explore our authentic tours through the Peruvian Andes and find your next adventure.',
  },
  pt: {
    // Navegação
    'nav.home': 'Início',
    'nav.tours': 'Passeios',
    'nav.contact': 'Contato',
    'nav.book': 'Reserve Agora',

    // Cabeçalho
    'header.phone': '+51 984 123 456',
    'header.email': 'cuscotripsperu@gmail.com',
    'header.hours': 'Horário: 9h às 19h | Passeios diários',

    // Página inicial
    'home.hero.title': 'Descubra os',
    'home.hero.subtitle': 'Andes Peruanos',
    'home.hero.description': 'Aventuras autênticas pelo coração do antigo Império Inca. Explore Machu Picchu e paisagens espetaculares com nossa equipe especializada.',
    'home.hero.explore': 'Explorar Passeios',
    'home.hero.contact': 'Fale Conosco',
    'home.hero.watchVideo': 'Assistir Vídeo',

    'home.features.title': 'Por que escolher a CuscoTrips?',
    'home.features.subtitle': 'Mais de 15 anos de experiência oferecendo aventuras inesquecíveis pelos caminhos sagrados dos Andes.',
    'home.features.guides.title': 'Guias Especializados',
    'home.features.guides.desc': 'Guias locais experientes com profundo conhecimento da cultura e história andina.',
    'home.features.safety.title': 'Segurança Garantida',
    'home.features.safety.desc': 'Equipamentos de alta qualidade e protocolos rigorosos de segurança.',
    'home.features.groups.title': 'Grupos Pequenos',
    'home.features.groups.desc': 'Experiências personalizadas com grupos reduzidos para maior qualidade.',
    'home.features.award.title': 'Empresa Premiada',
    'home.features.award.desc': 'Reconhecida como uma das melhores operadoras de turismo do Peru.',

    'home.tours.title': 'Passeios em Destaque',
    'home.tours.subtitle': 'Nossas aventuras mais populares pelos destinos mais espetaculares do Peru.',
    'home.tours.viewAll': 'Ver Todos os Passeios',

    'home.stats.travelers': 'Viajantes Satisfeitos',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.tours': 'Passeios Exclusivos',
    'home.stats.rating': 'Avaliação Média',

    'home.testimonials.title': 'O que dizem nossos viajantes',

    'home.cta.title': 'Pronto para sua aventura andina?',
    'home.cta.description': 'Fale conosco e planeje sua viagem dos sonhos pelos caminhos sagrados dos Andes peruanos.',
    'home.cta.quote': 'Solicitar Orçamento',

    // Página de passeios
    'tours.title': 'Nossos Passeios',
    'tours.subtitle': 'Descubra experiências únicas pelos Andes Peruanos. De trilhas desafiadoras a passeios culturais, temos a aventura perfeita para você.',
    'tours.search': 'Buscar passeios...',
    'tours.all': 'Todos os Passeios',
    'tours.trekking': 'Trilhas',
    'tours.cultural': 'Cultural',
    'tours.adventure': 'Aventura',
    'tours.spiritual': 'Espiritual',
    'tours.allDifficulties': 'Todas as Dificuldades',
    'tours.easy': 'Fácil',
    'tours.moderate': 'Moderado',
    'tours.challenging': 'Desafiador',
    'tours.difficult': 'Difícil',
    'tours.found': 'passeios encontrados',
    'tours.notFound': 'Nenhum passeio encontrado',
    'tours.notFoundDesc': 'Tente ajustar seus filtros ou termo de busca.',
    'tours.clearFilters': 'Limpar Filtros',
    'tours.customTitle': 'Não encontrou o passeio ideal?',
    'tours.customDesc': 'Nossa equipe pode criar uma experiência personalizada especialmente para você.',
    'tours.createCustom': 'Criar Passeio Personalizado',
    'tours.showing': 'Mostrando',
    'tours.of': 'resultados',
    'tours.tours': 'tours',
    'tours.loadMore': 'Carregar Mais',
    'tours.loading': 'Carregando mais tours...',

    // Cartão de passeio
    'tour.viewDetails': 'Ver Detalhes',
    'tour.person': '/pessoa',
    'tour.upTo': 'Até',
    'tour.people': 'pessoas',

    // Detalhes do passeio
    'tour.backToTours': 'Voltar para passeios',
    'tour.overview': 'Visão Geral',
    'tour.itinerary': 'Itinerário',
    'tour.included': 'Incluído',
    'tour.gallery': 'Galeria',
    'tour.about': 'Sobre este passeio',
    'tour.highlights': 'Destaques',
    'tour.day': 'Dia',
    'tour.notIncluded': 'Não Incluído',
    'tour.duration': 'Duração',
    'tour.maxGroup': 'Grupo máximo',
    'tour.bestSeason': 'Melhor época',
    'tour.bookNow': 'Reserve Agora',
    'tour.requestInfo': 'Solicitar Informações',
    'tour.share': 'Compartilhar',
    'tour.needHelp': 'Precisa de ajuda?',
    'tour.support247': 'Nossa equipe está disponível 24/7 para ajudar com sua reserva.',
    'tour.reviews': 'avaliações',

    // Página de contato
    'contact.title': 'Fale Conosco',
    'contact.subtitle': 'Estamos aqui para ajudá-lo a planejar a aventura perfeita pelos Andes Peruanos. Nossa equipe especializada está pronta para responder suas perguntas.',
    'contact.requestInfo': 'Solicitar Informações',
    'contact.fullName': 'Nome Completo',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.groupSize': 'Tamanho do Grupo',
    'contact.selectGroup': 'Selecionar',
    'contact.1person': '1 pessoa',
    'contact.2people': '2 pessoas',
    'contact.3to5': '3 a 5 pessoas',
    'contact.6to10': '6 a 10 pessoas',
    'contact.10plus': 'Mais de 10 pessoas',
    'contact.tourInterest': 'Passeio de Interesse',
    'contact.selectTour': 'Selecione um passeio',
    'contact.salkantay': 'Trilha Salkantay 5 Dias',
    'contact.incaTrail': 'Trilha Inca Clássica 4 Dias',
    'contact.cuscoTour': 'City Tour em Cusco',
    'contact.rainbow': 'Montanha Arco-Íris',
    'contact.custom': 'Passeio Personalizado',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-nos sobre sua viagem dos sonhos, datas preferidas, interesses especiais, etc.',
    'contact.send': 'Enviar Mensagem',
    'contact.whyChoose': 'Por que nos escolher?',
    'contact.quickResponse': 'Resposta Rápida',
    'contact.quickResponseDesc': 'Respondemos todas as mensagens em até 2 horas durante o horário comercial.',
    'contact.multilingual': 'Atendimento Multilíngue',
    'contact.multilingualDesc': 'Nossa equipe fala português, espanhol, inglês e quéchua.',
    'contact.personalized': 'Atendimento Personalizado',
    'contact.personalizedDesc': 'Criamos experiências sob medida para seu grupo e preferências.',
    'contact.support247Title': 'Suporte 24/7',
    'contact.emergencySupport': 'Para emergências durante sua viagem',
    'contact.whatsapp': 'WhatsApp disponível',
    'contact.faq': 'Perguntas Frequentes',

    // Rodapé
    'footer.description': 'Descubra a magia do Peru com nossos guias especialistas e experiências autênticas. Sua aventura dos sonhos te aguarda.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.popularTours': 'Tours Populares',
    'footer.contact': 'Contato',
    'footer.address': 'Av. El Sol 123, Cusco, Peru',
    'footer.followUs': 'Siga-nos',
    'footer.copyright': '© 2024 Cusco Trips. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',

    // Common
    'common.required': 'obrigatório',
    'common.optional': 'opcional',

    // Page Meta
    'meta.home.title': 'CuscoTrips - Passeios e Aventuras pelos Andes Peruanos',
    'meta.home.description': 'Descubra os Andes peruanos com a CuscoTrips. Passeios autênticos para Machu Picchu, Trilha Salkantay, Trilha Inca e mais. Mais de 15 anos de experiência em turismo de aventura.',
    'meta.tours.title': 'Passeios pelos Andes Peruanos - CuscoTrips',
    'meta.tours.description': 'Explore nossos passeios únicos pelos Andes peruanos. Trilhas, passeios culturais e aventuras espirituais. Encontre sua experiência perfeita em Cusco e Machu Picchu.',
    'meta.contact.title': 'Contato - CuscoTrips Passeios',
    'meta.contact.description': 'Fale conosco para planejar sua aventura perfeita pelos Andes peruanos. Atendimento personalizado, resposta rápida e suporte 24/7 para sua viagem.',
    'meta.tourDetail.title': '{tourName} - CuscoTrips Passeios',
    'meta.tourDetail.description': 'Descubra {tourName} com a CuscoTrips. {tourDescription}',
    'meta.notFound.title': 'Página não encontrada - CuscoTrips',
    'meta.notFound.description': 'A página que você procura não existe. Explore nossos passeios autênticos pelos Andes peruanos e encontre sua próxima aventura.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
