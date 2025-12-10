import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'it' | 'en' | 'de' | 'fr' | 'es';

type TranslationDict = Record<string, string>;
type TranslationMap = Record<Language, TranslationDict>;

const TRANSLATIONS: TranslationMap = {
  it: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.ecosystem': 'Ecosistema',
    'nav.coreBanking': 'Core Banking',
    'nav.riskAI': 'Risk & AI',
    'nav.about': 'About',
    'nav.reviews': 'Recensioni',
    'nav.contact': 'Contatti',

    // Hero
    'home.hero.brandTagline': 'Secure • Smart • Monégasque',
    'home.hero.title':
      'Groupe HSM — Il livello di governance per la finanza moderna',
    'home.hero.lead':
      'Un ecosistema finanziario unificato, premium e orientato a sicurezza, controllo e qualità dell’esperienza digitale.',
    'home.hero.ctaPrimary': 'Guarda il walkthrough',
    'home.hero.ctaSecondary': 'Esplora l’ecosistema',
    'home.hero.meta1': 'Governance Layer Black & Gold',
    'home.hero.meta2': 'HBSM Core Banking',
    'home.hero.meta3': 'Risk & Security • AI',

    // Hero panel
    'home.panel.title': "Panoramica dell’applicativo",
    'home.panel.lead':
      'Dashboard, conti, carte, transazioni, sicurezza, AI Spending Analyzer e Financial Health Score in un ambiente coerente e governabile.',
    'home.panel.card1.title': 'Governance Layer',
    'home.panel.card1.body':
      'Interfaccia unificata Black & Gold per orchestrare l’esperienza finanziaria.',
    'home.panel.card2.title': 'Core Banking',
    'home.panel.card2.body':
      'Conti, carte, depositi, bonifici, supporto utente e routing sicuro.',
    'home.panel.card3.title': 'Risk & Security',
    'home.panel.card3.body':
      'Sessioni, dispositivi, eventi di sicurezza e azioni rapide di protezione.',
    'home.panel.card4.title': 'AI & Insight',
    'home.panel.card4.body':
      'Analisi predittiva della spesa e Financial Health Score integrato.',

    // Video section
    'home.video.title': 'Walkthrough completo',
    'home.video.lead':
      'Una preview di 2:50 minuti che mostra le fondamenta dell’ecosistema HSM: governance, core banking, sicurezza e moduli AI, con focus sul Governance Layer Black & Gold e sui moduli AI.',
    'home.video.caption':
      'Estratto della demo interna HSM: login sicuro, MFA, Governance Layer Black & Gold e panoramica delle principali funzionalità di core banking.',

    // Roadmap
    'home.roadmap.title': 'Roadmap HSM',
    'home.roadmap.lead':
      'Le fondamenta dell’ecosistema sono operative. I prossimi step sono orientati a rafforzare il dominio bancario, la sicurezza e i layer di AI & governance.',
    'home.roadmap.phase1.badge': 'Fase 1',
    'home.roadmap.phase1.title':
      'Fondamenta Core Banking & Governance Layer',
    'home.roadmap.phase1.body':
      'Implementazione del dominio bancario (conti, carte, transazioni, depositi), Governance Layer Black & Gold e primo Risk Center integrato nell’applicativo.',
    'home.roadmap.phase2.badge': 'Fase 2',
    'home.roadmap.phase2.title':
      'Risk & Security esteso + AI Spending Analyzer',
    'home.roadmap.phase2.body':
      'Estensione del modulo Risk Center, azioni avanzate sulle sessioni e potenziamento dell’AI Spending Analyzer con insight più granulari sui pattern di spesa.',
    'home.roadmap.phase3.badge': 'Fase 3',
    'home.roadmap.phase3.title':
      'Financial Health Score & integrazione ecosistema',
    'home.roadmap.phase3.body':
      'Evoluzione del Financial Health Score, integrazione più stretta tra core banking, moduli AI e futuro layer assicurativo in un’esperienza unica governata dalla holding HSM.',

    // REVIEWS
    'reviews.title': 'Recensioni su HSM',
    'reviews.lead':
      'Lascia un feedback sul concept, sul sito o sulla piattaforma.',
    'reviews.loginCta': 'Accedi con Google per recensire',
    'reviews.ratingLabel': 'Valutazione',
    'reviews.commentLabel': 'Commento',
    'reviews.commentPlaceholder':
      'Scrivi cosa ti è piaciuto, cosa miglioreresti...',
    'reviews.publish': 'Pubblica recensione',
    'reviews.empty':
      'Non ci sono ancora recensioni. Sii il primo a lasciare un feedback!',

    // TESTIMONIALS / SENJA
    'testimonials.title': 'Dicono di HSM',
    'testimonials.lead':
      'Alcune opinioni e testimonianze raccolte su HSM.',
    'testimonials.page.intro':
      'HSM è ancora un concept in evoluzione. Le recensioni e i commenti qui raccolti servono a capire se l’impostazione, il design e i moduli sviluppati vanno nella direzione giusta.',
    'testimonials.page.bullet1':
      'Feedback su UX, tono e posizionamento del brand.',
    'testimonials.page.bullet2':
      'Opinioni sull’idea di Governance Layer, Core Banking e Risk Center.',
    'testimonials.page.bullet3':
      'Suggerimenti su cosa vorresti vedere in una futura versione reale.',
    'testimonials.page.note':
      'Le recensioni sono raccolte tramite Senja e mostrate in tempo reale in questa sezione.',

    // ECOSYSTEM
    'ecosystem.title': 'Ecosistema HSM',
    'ecosystem.lead':
      'HSM è progettato come un ecosistema coordinato: holding, core banking e assurance con una governance unica e un’identità premium coerente.',
    'ecosystem.card1.title': 'Groupe HSM — Holding',
    'ecosystem.card1.body':
      'Coordina brand, strategia e governance. Layer centrale che gestisce identità, accessi e routing verso le divisioni bancarie e assicurative.',
    'ecosystem.card2.title': 'HBSM — Core Banking',
    'ecosystem.card2.body':
      'Modulo bancario digitale: conti, carte, transazioni, depositi e servizi di supporto, costruiti con architettura moderna e sicurezza enterprise.',
    'ecosystem.card3.title': 'HASM — Assurance',
    'ecosystem.card3.body':
      'Modulo assicurativo pensato come layer separato: polizze, premi, sinistri e area cliente, integrati nella governance HSM.',

    // PLATFORM — Core Banking
    'platform.title': 'HBSM — Core Banking',
    'platform.lead':
      'Una piattaforma di digital banking con login sicuro, conti, carte, depositi, transazioni e supporto, progettata per una UX chiara e istituzionale.',
    'platform.card1.title': 'Accesso & Sicurezza',
    'platform.card1.item1': 'Login con email e password.',
    'platform.card1.item2': 'MFA TOTP e unlock code dedicato.',
    'platform.card1.item3': 'JWT e flussi pronti per WebAuthn.',
    'platform.card2.title': 'Conti & Depositi',
    'platform.card2.item1': 'Gestione conti correnti e IBAN fittizi.',
    'platform.card2.item2':
      'Conto deposito collegato, versamenti e prelievi.',
    'platform.card2.item3': 'Andamento e analytics sul saldo.',
    'platform.card3.title': 'Carte & Transazioni',
    'platform.card3.item1':
      'Card virtuali con limiti, canali e freeze/blocco.',
    'platform.card3.item2':
      'Storico movimenti con tagging e color coding.',
    'platform.card3.item3':
      'Bonifici SEPA, trasferimenti interni e audit.',
    'platform.card4.title': 'Supporto & Compliance',
    'platform.card4.item1':
      'Supporto conversazionale lato utente e staff.',
    'platform.card4.item2':
      'Sezioni informative su Monaco e regolatori.',
    'platform.card4.item3':
      'Layout e contenuti orientati alla trasparenza.',

    // RISK & AI
    'risk.title': 'Risk Center & AI Suite',
    'risk.lead':
      'Un layer dedicato alla sicurezza delle sessioni e all’analisi intelligente dei comportamenti finanziari, integrato nativamente nel core banking.',
    'risk.card1.title': 'Risk Center',
    'risk.card1.item1':
      'Tracciamento sessioni, device, IP e attività recenti.',
    'risk.card1.item2':
      'Eventi di sicurezza: login, MFA, tentativi falliti.',
    'risk.card1.item3':
      'Security Actions Hub: chiusura sessioni, reset, report.',
    'risk.card2.title': 'AI Spending Analyzer',
    'risk.card2.item1':
      'Analisi dei pattern di spesa a partire dalle transazioni.',
    'risk.card2.item2':
      "Categorizzazioni dinamiche e insight sull'utilizzo dei conti.",
    'risk.card2.item3':
      'Modulo pensato per evolvere verso analisi predittiva.',
    'risk.card3.title': 'Financial Health Score',
    'risk.card3.item1':
      'Indicatore sintetico dello stato finanziario personale.',
    'risk.card3.item2':
      'Basato su dati transazionali e modelli AI.',
    'risk.card3.item3':
      'UI immediata: punteggio, stato e suggerimenti.',

    // ABOUT
    'about.title': 'Groupe HSM',
    'about.lead':
      'Un concept fintech che unisce estetica monegasca, solidità europea e precisione del digitale moderno.',
    'about.card1.title': 'Identità',
    'about.card1.body':
      'HSM nasce come ecosistema coordinato: holding, banking e assurance con una governance centrale e un’immagine Black & Gold istituzionale.',
    'about.card2.title': 'Visione',
    'about.card2.body':
      'Creare un ambiente finanziario moderno, sicuro e governabile, in cui l’utente ha una vista chiara su conti, sicurezza e salute finanziaria.',
    'about.card3.title': 'Monaco-inspired',
    'about.card3.body':
      'Il riferimento monegasco è un linguaggio visivo e di posizionamento: sobrietà, cura dei dettagli e attenzione al rischio.',

    // CONTACT
    'contact.title': 'Contatti & partnership',
    'contact.lead':
      'HSM è aperta a conversazioni con partner, istituzioni e investitori interessati all’ecosistema e ai moduli sviluppati.',
    'contact.name.label': 'Nome e cognome',
    'contact.name.placeholder': 'Inserisci il tuo nome',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'nome@azienda.com',
    'contact.reason.label': 'Motivo del contatto',
    'contact.reason.option.partnership': 'Partnership',
    'contact.reason.option.investors': 'Investitori',
    'contact.reason.option.other': 'Altro',
    'contact.message.label': 'Messaggio',
    'contact.message.placeholder': 'Scrivi un breve messaggio...',
    'contact.submit': 'Invia',
    'contact.success':
      'Messaggio inviato (demo). Verrai ricontattato tramite email se necessario.',
    'contact.disclaimer':
      'Il form è dimostrativo. Puoi sostituirlo in futuro con un’integrazione reale (es. email o backend dedicato).',

    // CONTACT – vecchie chiavi
    'contact.badge.request': 'Richiesta di contatto',
    'contact.mailto.success':
      'Abbiamo aperto il tuo client email con il messaggio pre-compilato. Puoi rivederlo e inviarlo quando vuoi.',
    'contact.mailto.disclaimer':
      'Il form non salva dati sui server HSM: genera semplicemente una email indirizzata a irondaryl@proton.me dal tuo client.',
    'contact.direct.title': 'Contatti diretti',
    'contact.direct.body':
      'Per partnership, ecosistema HSM o demo della piattaforma puoi usare direttamente i contatti qui sotto oppure il form sulla destra.',
    'contact.direct.email.label': 'Email',
    'contact.direct.scopes.label': 'Ambiti',
    'contact.direct.scopes.value':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.pill':
      'Contatto diretto con il creator del concept HSM.',

    // CONTACT – nuove chiavi (nuovo componente)
    'contact.direct.emailLabel': 'Email',
    'contact.direct.areasLabel': 'Ambiti',
    'contact.direct.areasValue':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.footer':
      'Contatto diretto con il creator del concept HSM.',
    'contact.form.badge': 'Richiesta di contatto',
    'contact.form.successEmailOpened':
      'Abbiamo aperto il tuo client email con il messaggio pre-compilato. Puoi rivederlo e inviarlo quando vuoi.',
    'contact.disclaimer.emailOnly':
      'Il form non salva dati sui server HSM: genera semplicemente una email indirizzata a ',
    'contact.reviewsCta': 'Lascia una recensione su HSM',
  },

  en: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.ecosystem': 'Ecosystem',
    'nav.coreBanking': 'Core Banking',
    'nav.riskAI': 'Risk & AI',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',

    // Hero
    'home.hero.brandTagline': 'Secure • Smart • Monégasque',
    'home.hero.title':
      'Groupe HSM — The governance layer for modern finance',
    'home.hero.lead':
      'A unified, premium financial ecosystem focused on security, control and the quality of the digital experience.',
    'home.hero.ctaPrimary': 'Watch the walkthrough',
    'home.hero.ctaSecondary': 'Explore the ecosystem',
    'home.hero.meta1': 'Black & Gold Governance Layer',
    'home.hero.meta2': 'HBSM Core Banking',
    'home.hero.meta3': 'Risk & Security • AI',

    // Hero panel
    'home.panel.title': 'Application overview',
    'home.panel.lead':
      'Dashboard, accounts, cards, transactions, security, AI Spending Analyzer and Financial Health Score in a coherent and governable environment.',
    'home.panel.card1.title': 'Governance Layer',
    'home.panel.card1.body':
      'Unified Black & Gold interface orchestrating the financial experience.',
    'home.panel.card2.title': 'Core Banking',
    'home.panel.card2.body':
      'Accounts, cards, deposits, payments, customer support and secure routing.',
    'home.panel.card3.title': 'Risk & Security',
    'home.panel.card3.body':
      'Sessions, devices, security events and rapid protection actions.',
    'home.panel.card4.title': 'AI & Insight',
    'home.panel.card4.body':
      'Predictive spending analytics and integrated Financial Health Score.',

    // Video
    'home.video.title': 'Full walkthrough',
    'home.video.lead':
      'A 2:50 preview showcasing the foundations of the HSM ecosystem: governance, core banking, security and AI modules, with a focus on the Black & Gold Governance Layer.',
    'home.video.caption':
      'Excerpt from the internal HSM demo: secure login, MFA, Black & Gold Governance Layer and an overview of the main core banking features.',

    // Roadmap
    'home.roadmap.title': 'HSM roadmap',
    'home.roadmap.lead':
      'The foundations of the ecosystem are live. Next steps focus on strengthening the banking domain, security and AI & governance layers.',
    'home.roadmap.phase1.badge': 'Phase 1',
    'home.roadmap.phase1.title':
      'Core Banking foundation & Governance Layer',
    'home.roadmap.phase1.body':
      'Implementation of the banking domain (accounts, cards, transactions, deposits), Black & Gold Governance Layer and the first integrated Risk Center.',
    'home.roadmap.phase2.badge': 'Phase 2',
    'home.roadmap.phase2.title':
      'Extended Risk & Security + AI Spending Analyzer',
    'home.roadmap.phase2.body':
      'Extending the Risk Center module, advanced session actions and a more granular AI Spending Analyzer for spending patterns.',
    'home.roadmap.phase3.badge': 'Phase 3',
    'home.roadmap.phase3.title':
      'Financial Health Score & ecosystem integration',
    'home.roadmap.phase3.body':
      'Evolution of the Financial Health Score and tighter integration between core banking, AI modules and the future insurance layer in a single governed experience.',

    // REVIEWS
    'reviews.title': 'Reviews about HSM',
    'reviews.lead':
      'Leave feedback about the concept, the site or the platform.',
    'reviews.loginCta': 'Sign in with Google to leave a review',
    'reviews.ratingLabel': 'Rating',
    'reviews.commentLabel': 'Comment',
    'reviews.commentPlaceholder':
      'Write what you liked, what could be improved...',
    'reviews.publish': 'Publish review',
    'reviews.empty':
      'There are no reviews yet. Be the first to leave your feedback!',

    // TESTIMONIALS / SENJA
    'testimonials.title': 'What people say about HSM',
    'testimonials.lead':
      'A collection of testimonials and feedback about HSM.',
    'testimonials.page.intro':
      'HSM is still an evolving concept. The reviews and comments collected here help us understand whether the setup, design and developed modules are going in the right direction.',
    'testimonials.page.bullet1':
      'Feedback on UX, tone and brand positioning.',
    'testimonials.page.bullet2':
      'Opinions on the idea of the Governance Layer, Core Banking and Risk Center.',
    'testimonials.page.bullet3':
      'Suggestions about what you would like to see in a future real version.',
    'testimonials.page.note':
      'Reviews are collected through Senja and displayed in real time in this section.',

    // ECOSYSTEM
    'ecosystem.title': 'HSM ecosystem',
    'ecosystem.lead':
      'HSM is designed as a coordinated ecosystem: holding, core banking and assurance with a single governance layer and a coherent premium identity.',
    'ecosystem.card1.title': 'Groupe HSM — Holding',
    'ecosystem.card1.body':
      'Coordinates brand, strategy and governance. Central layer managing identity, access and routing towards the banking and insurance divisions.',
    'ecosystem.card2.title': 'HBSM — Core Banking',
    'ecosystem.card2.body':
      'Digital banking module: accounts, cards, transactions, deposits and support services, built with modern architecture and enterprise-grade security.',
    'ecosystem.card3.title': 'HASM — Assurance',
    'ecosystem.card3.body':
      'Insurance module designed as a separate layer: policies, premiums, claims and customer area, integrated into HSM governance.',

    // PLATFORM — Core Banking
    'platform.title': 'HBSM — Core Banking',
    'platform.lead':
      'A digital banking platform with secure login, accounts, cards, deposits, transactions and support, designed for a clear and institutional UX.',
    'platform.card1.title': 'Access & Security',
    'platform.card1.item1': 'Login with email and password.',
    'platform.card1.item2': 'MFA TOTP and dedicated unlock code.',
    'platform.card1.item3': 'JWT flows ready for WebAuthn.',
    'platform.card2.title': 'Accounts & Deposits',
    'platform.card2.item1':
      'Current accounts management and virtual IBANs.',
    'platform.card2.item2':
      'Linked savings account, deposits and withdrawals.',
    'platform.card2.item3': 'Balance trends and analytics.',
    'platform.card3.title': 'Cards & Transactions',
    'platform.card3.item1':
      'Virtual cards with limits, channels and freeze/block.',
    'platform.card3.item2':
      'Transaction history with tagging and colour coding.',
    'platform.card3.item3':
      'SEPA transfers, internal movements and audit.',
    'platform.card4.title': 'Support & Compliance',
    'platform.card4.item1':
      'Conversational support for users and staff.',
    'platform.card4.item2':
      'Informational sections on Monaco and regulators.',
    'platform.card4.item3':
      'Layouts and content oriented towards transparency.',

    // RISK & AI
    'risk.title': 'Risk Center & AI Suite',
    'risk.lead':
      'A dedicated layer for session security and intelligent analysis of financial behaviour, natively integrated into the core banking platform.',
    'risk.card1.title': 'Risk Center',
    'risk.card1.item1':
      'Tracking of sessions, devices, IPs and recent activity.',
    'risk.card1.item2':
      'Security events: logins, MFA, failed attempts.',
    'risk.card1.item3':
      'Security Actions Hub: close sessions, reset, report.',
    'risk.card2.title': 'AI Spending Analyzer',
    'risk.card2.item1':
      'Spending pattern analysis starting from transactions.',
    'risk.card2.item2':
      'Dynamic categorizations and insights on account usage.',
    'risk.card2.item3':
      'Module designed to evolve towards predictive analytics.',
    'risk.card3.title': 'Financial Health Score',
    'risk.card3.item1':
      'Synthetic indicator of personal financial health.',
    'risk.card3.item2':
      'Based on transactional data and AI models.',
    'risk.card3.item3':
      'Immediate UI: score, status and suggestions.',

    // ABOUT
    'about.title': 'Groupe HSM',
    'about.lead':
      'A fintech concept combining Monegasque aesthetics, European solidity and the precision of modern digital experiences.',
    'about.card1.title': 'Identity',
    'about.card1.body':
      'HSM is born as a coordinated ecosystem: holding, banking and assurance with a central governance layer and an institutional Black & Gold identity.',
    'about.card2.title': 'Vision',
    'about.card2.body':
      'Create a modern, secure and governable financial environment where users have a clear view of accounts, security and financial health.',
    'about.card3.title': 'Monaco-inspired',
    'about.card3.body':
      'The Monaco reference becomes a visual and positioning language: sobriety, attention to detail and careful risk awareness.',

    // CONTACT
    'contact.title': 'Contacts & partnerships',
    'contact.lead':
      'HSM is open to conversations with partners, institutions and investors interested in the ecosystem and the developed modules.',
    'contact.name.label': 'Full name',
    'contact.name.placeholder': 'Type your name',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'name@company.com',
    'contact.reason.label': 'Reason for contact',
    'contact.reason.option.partnership': 'Partnership',
    'contact.reason.option.investors': 'Investors',
    'contact.reason.option.other': 'Other',
    'contact.message.label': 'Message',
    'contact.message.placeholder': 'Write a short message...',
    'contact.submit': 'Send',
    'contact.success':
      'Message sent (demo). We will reach out via email if needed.',
    'contact.disclaimer':
      'This form is demonstrative. You can replace it in the future with a real integration (e.g. email or dedicated backend).',

    // CONTACT – old keys
    'contact.badge.request': 'Contact request',
    'contact.mailto.success':
      'We opened your email client with a pre-filled message. You can review it and send it whenever you prefer.',
    'contact.mailto.disclaimer':
      'The form does not store data on HSM servers: it simply opens an email addressed to irondaryl@proton.me from your client.',
    'contact.direct.title': 'Direct contacts',
    'contact.direct.body':
      'For partnerships, the HSM ecosystem or a demo of the platform, you can use the contacts below or the form on the right.',
    'contact.direct.email.label': 'Email',
    'contact.direct.scopes.label': 'Areas',
    'contact.direct.scopes.value':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.pill':
      'Direct contact with the creator of the HSM concept.',

    // CONTACT – new keys
    'contact.direct.emailLabel': 'Email',
    'contact.direct.areasLabel': 'Areas',
    'contact.direct.areasValue':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.footer':
      'Direct contact with the creator of the HSM concept.',
    'contact.form.badge': 'Contact request',
    'contact.form.successEmailOpened':
      'We opened your email client with a pre-filled message. You can review it and send it whenever you like.',
    'contact.disclaimer.emailOnly':
      'The form does not store data on HSM servers: it simply generates an email addressed to ',
    'contact.reviewsCta': 'Leave a review on HSM',
  },

  de: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.ecosystem': 'Ökosystem',
    'nav.coreBanking': 'Core Banking',
    'nav.riskAI': 'Risk & KI',
    'nav.about': 'Über HSM',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontakt',

    // Hero
    'home.hero.brandTagline': 'Secure • Smart • Monégasque',
    'home.hero.title':
      'Groupe HSM — Die Governance-Ebene für die moderne Finanzwelt',
    'home.hero.lead':
      'Ein einheitliches, Premium-Finanzökosystem mit Fokus auf Sicherheit, Kontrolle und Qualität der digitalen Erfahrung.',
    'home.hero.ctaPrimary': 'Walkthrough ansehen',
    'home.hero.ctaSecondary': 'Ökosystem erkunden',
    'home.hero.meta1': 'Black & Gold Governance Layer',
    'home.hero.meta2': 'HBSM Core Banking',
    'home.hero.meta3': 'Risk & Security • KI',

    // Hero panel
    'home.panel.title': 'Überblick über die Applikation',
    'home.panel.lead':
      'Dashboard, Konten, Karten, Transaktionen, Sicherheit, AI Spending Analyzer und Financial Health Score in einer kohärenten und steuerbaren Umgebung.',
    'home.panel.card1.title': 'Governance Layer',
    'home.panel.card1.body':
      'Vereinheitlichte Black & Gold Oberfläche zur Orchestrierung der Finanzerfahrung.',
    'home.panel.card2.title': 'Core Banking',
    'home.panel.card2.body':
      'Konten, Karten, Einlagen, Überweisungen, Support und sicheres Routing.',
    'home.panel.card3.title': 'Risk & Security',
    'home.panel.card3.body':
      'Sitzungen, Geräte, Sicherheitsereignisse und schnelle Schutzmaßnahmen.',
    'home.panel.card4.title': 'AI & Insight',
    'home.panel.card4.body':
      'Prädiktive Analyse der Ausgaben und integrierter Financial Health Score.',

    // Video
    'home.video.title': 'Vollständiger Walkthrough',
    'home.video.lead':
      'Ein 2:50-minütiger Überblick über die Grundlagen des HSM-Ökosystems: Governance, Core Banking, Sicherheit und KI-Module mit Fokus auf den Black & Gold Governance Layer.',
    'home.video.caption':
      'Auszug aus der internen HSM-Demo: sicherer Login, MFA, Black & Gold Governance Layer und Überblick über die wichtigsten Core-Banking-Funktionen.',

    // Roadmap
    'home.roadmap.title': 'HSM Roadmap',
    'home.roadmap.lead':
      'Die Grundlagen des Ökosystems sind umgesetzt. Die nächsten Schritte stärken das Bankdomän, die Sicherheit sowie die AI- und Governance-Layer.',
    'home.roadmap.phase1.badge': 'Phase 1',
    'home.roadmap.phase1.title':
      'Core-Banking-Fundament & Governance Layer',
    'home.roadmap.phase1.body':
      'Implementierung der Bankdomäne (Konten, Karten, Transaktionen, Einlagen), Black & Gold Governance Layer und erstes integriertes Risk Center.',
    'home.roadmap.phase2.badge': 'Phase 2',
    'home.roadmap.phase2.title':
      'Erweitertes Risk & Security + AI Spending Analyzer',
    'home.roadmap.phase2.body':
      'Erweiterung des Risk-Center-Moduls, erweiterte Sitzungsaktionen und ein granularerer AI Spending Analyzer für Ausgabemuster.',
    'home.roadmap.phase3.badge': 'Phase 3',
    'home.roadmap.phase3.title':
      'Financial Health Score & Ökosystem-Integration',
    'home.roadmap.phase3.body':
      'Weiterentwicklung des Financial Health Score und engere Integration zwischen Core Banking, KI-Modulen und der zukünftigen Versicherungsebene in einer einheitlichen Experience.',

    // REVIEWS
    'reviews.title': 'Bewertungen zu HSM',
    'reviews.lead':
      'Hinterlasse Feedback zum Konzept, zur Website oder zur Plattform.',
    'reviews.loginCta':
      'Mit Google anmelden, um zu bewerten',
    'reviews.ratingLabel': 'Bewertung',
    'reviews.commentLabel': 'Kommentar',
    'reviews.commentPlaceholder':
      'Schreibe, was dir gefallen hat und was man verbessern könnte...',
    'reviews.publish': 'Bewertung veröffentlichen',
    'reviews.empty':
      'Es gibt noch keine Bewertungen. Sei der Erste, der Feedback gibt!',

    // TESTIMONIALS / SENJA
    'testimonials.title': 'Was man über HSM sagt',
    'testimonials.lead':
      'Eine Sammlung von Meinungen und Rückmeldungen zu HSM.',
    'testimonials.page.intro':
      'HSM ist noch ein Konzept in Entwicklung. Die hier gesammelten Bewertungen und Kommentare helfen zu verstehen, ob Setup, Design und entwickelte Module in die richtige Richtung gehen.',
    'testimonials.page.bullet1':
      'Feedback zu UX, Tonalität und Markenpositionierung.',
    'testimonials.page.bullet2':
      'Meinungen zur Idee des Governance Layers, des Core Banking und des Risk Centers.',
    'testimonials.page.bullet3':
      'Vorschläge, was du dir in einer zukünftigen realen Version wünschen würdest.',
    'testimonials.page.note':
      'Die Bewertungen werden über Senja gesammelt und in diesem Bereich in Echtzeit angezeigt.',

    // ECOSYSTEM
    'ecosystem.title': 'HSM Ökosystem',
    'ecosystem.lead':
      'HSM ist als koordiniertes Ökosystem konzipiert: Holding, Core Banking und Versicherung mit einer einzigen Governance-Ebene und einer konsistenten Premium-Identität.',
    'ecosystem.card1.title': 'Groupe HSM — Holding',
    'ecosystem.card1.body':
      'Koordiniert Marke, Strategie und Governance. Zentrale Ebene für Identitäten, Zugriffe und Routing zu Bank- und Versicherungsbereichen.',
    'ecosystem.card2.title': 'HBSM — Core Banking',
    'ecosystem.card2.body':
      'Digitales Banking-Modul: Konten, Karten, Transaktionen, Einlagen und Support-Services, aufgebaut mit moderner Architektur und Enterprise-Sicherheit.',
    'ecosystem.card3.title': 'HASM — Assurance',
    'ecosystem.card3.body':
      'Versicherungsmodul als separater Layer: Policen, Prämien, Schäden und Kundenbereich, integriert in die HSM-Governance.',

    // PLATFORM
    'platform.title': 'HBSM — Core Banking',
    'platform.lead':
      'Eine Digital-Banking-Plattform mit sicherem Login, Konten, Karten, Einlagen, Transaktionen und Support – konzipiert für eine klare und institutionelle UX.',
    'platform.card1.title': 'Zugang & Sicherheit',
    'platform.card1.item1': 'Login mit E-Mail und Passwort.',
    'platform.card1.item2': 'MFA TOTP und dedizierter Unlock-Code.',
    'platform.card1.item3': 'JWT-Flows, vorbereitet für WebAuthn.',
    'platform.card2.title': 'Konten & Einlagen',
    'platform.card2.item1':
      'Verwaltung von Girokonten und virtuellen IBANs.',
    'platform.card2.item2':
      'Verknüpftes Sparkonto, Einzahlungen und Auszahlungen.',
    'platform.card2.item3':
      'Verlauf und Analytics zum Kontostand.',
    'platform.card3.title': 'Karten & Transaktionen',
    'platform.card3.item1':
      'Virtuelle Karten mit Limits, Kanälen und Freeze/Block.',
    'platform.card3.item2':
      'Transaktionshistorie mit Tagging und Farbcodierung.',
    'platform.card3.item3':
      'SEPA-Überweisungen, interne Transfers und Audit.',
    'platform.card4.title': 'Support & Compliance',
    'platform.card4.item1':
      'Konversationaler Support für Nutzer und Staff.',
    'platform.card4.item2':
      'Informationssektionen zu Monaco und Regulatoren.',
    'platform.card4.item3':
      'Layouts und Inhalte mit Fokus auf Transparenz.',

    // RISK & AI
    'risk.title': 'Risk Center & AI Suite',
    'risk.lead':
      'Ein dedizierter Layer für Sitzungssicherheit und intelligente Analyse des Finanzverhaltens, nativ im Core Banking integriert.',
    'risk.card1.title': 'Risk Center',
    'risk.card1.item1':
      'Tracking von Sitzungen, Geräten, IPs und aktueller Aktivität.',
    'risk.card1.item2':
      'Sicherheitsereignisse: Logins, MFA, fehlgeschlagene Versuche.',
    'risk.card1.item3':
      'Security Actions Hub: Sitzungen schließen, Reset, Report.',
    'risk.card2.title': 'AI Spending Analyzer',
    'risk.card2.item1':
      'Analyse der Ausgabemuster auf Basis der Transaktionen.',
    'risk.card2.item2':
      'Dynamische Kategorisierung und Insights zur Kontonutzung.',
    'risk.card2.item3':
      'Modul, das sich in Richtung prädiktiver Analysen entwickelt.',
    'risk.card3.title': 'Financial Health Score',
    'risk.card3.item1':
      'Synthetischer Indikator der persönlichen Finanzlage.',
    'risk.card3.item2':
      'Basierend auf Transaktionsdaten und KI-Modellen.',
    'risk.card3.item3':
      'Direkte UI: Score, Status und Empfehlungen.',

    // ABOUT
    'about.title': 'Groupe HSM',
    'about.lead':
      'Ein Fintech-Konzept, das monegassische Ästhetik, europäische Solidität und die Präzision moderner Digitalerlebnisse vereint.',
    'about.card1.title': 'Identität',
    'about.card1.body':
      'HSM entsteht als koordiniertes Ökosystem: Holding, Banking und Versicherung mit einer zentralen Governance und einer institutionellen Black & Gold Identity.',
    'about.card2.title': 'Vision',
    'about.card2.body':
      'Schaffung eines modernen, sicheren und steuerbaren Finanzumfelds, in dem der Nutzer klare Sicht auf Konten, Sicherheit und finanzielle Gesundheit hat.',
    'about.card3.title': 'Monaco-inspired',
    'about.card3.body':
      'Der Bezug zu Monaco wird zu einer visuellen Sprache und Positionierung: Sachlichkeit, Liebe zum Detail und Bewusstsein für Risiken.',

    // CONTACT
    'contact.title': 'Kontakte & Partnerschaften',
    'contact.lead':
      'HSM ist offen für Gespräche mit Partnern, Institutionen und Investoren, die sich für das Ökosystem und die entwickelten Module interessieren.',
    'contact.name.label': 'Name',
    'contact.name.placeholder': 'Gib deinen Namen ein',
    'contact.email.label': 'E-Mail',
    'contact.email.placeholder': 'name@unternehmen.com',
    'contact.reason.label': 'Kontaktgrund',
    'contact.reason.option.partnership': 'Partnerschaft',
    'contact.reason.option.investors': 'Investoren',
    'contact.reason.option.other': 'Sonstiges',
    'contact.message.label': 'Nachricht',
    'contact.message.placeholder':
      'Schreibe eine kurze Nachricht...',
    'contact.submit': 'Senden',
    'contact.success':
      'Nachricht gesendet (Demo). Wir melden uns bei Bedarf per E-Mail.',
    'contact.disclaimer':
      'Dieses Formular ist demonstrativ. Später kann eine echte Integration (z.B. E-Mail oder Backend) angeschlossen werden.',

    // CONTACT – old
    'contact.badge.request': 'Kontaktanfrage',
    'contact.mailto.success':
      'Wir haben deinen E-Mail-Client mit einer vorbefüllten Nachricht geöffnet. Du kannst sie prüfen und senden, wann du möchtest.',
    'contact.mailto.disclaimer':
      'Das Formular speichert keine Daten auf HSM-Servern: Es öffnet lediglich eine E-Mail an irondaryl@proton.me in deinem E-Mail-Client.',
    'contact.direct.title': 'Direkte Kontakte',
    'contact.direct.body':
      'Für Partnerschaften, das HSM-Ökosystem oder eine Demo der Plattform kannst du die Kontakte unten oder das Formular rechts nutzen.',
    'contact.direct.email.label': 'E-Mail',
    'contact.direct.scopes.label': 'Bereiche',
    'contact.direct.scopes.value':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.pill':
      'Direkter Kontakt mit dem Creator des HSM-Konzepts.',

    // CONTACT – new
    'contact.direct.emailLabel': 'E-Mail',
    'contact.direct.areasLabel': 'Bereiche',
    'contact.direct.areasValue':
      'Governance Layer • Core Banking • Risk & KI',
    'contact.direct.footer':
      'Direkter Kontakt mit dem Creator des HSM-Konzepts.',
    'contact.form.badge': 'Kontaktanfrage',
    'contact.form.successEmailOpened':
      'Wir haben deinen E-Mail-Client mit einer vorausgefüllten Nachricht geöffnet. Du kannst sie prüfen und senden, wann du möchtest.',
    'contact.disclaimer.emailOnly':
      'Das Formular speichert keine Daten auf HSM-Servern: Es öffnet lediglich eine E-Mail an ',
    'contact.reviewsCta': 'Bewertung für HSM hinterlassen',
  },

  fr: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.ecosystem': 'Écosystème',
    'nav.coreBanking': 'Core Banking',
    'nav.riskAI': 'Risk & IA',
    'nav.about': 'À propos',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contacts',

    // Hero
    'home.hero.brandTagline': 'Secure • Smart • Monégasque',
    'home.hero.title':
      'Groupe HSM — Le niveau de gouvernance pour la finance moderne',
    'home.hero.lead':
      'Un écosystème financier unifié et premium, centré sur la sécurité, le contrôle et la qualité de l’expérience digitale.',
    'home.hero.ctaPrimary': 'Voir le walkthrough',
    'home.hero.ctaSecondary': "Explorer l’écosystème",
    'home.hero.meta1': 'Governance Layer Black & Gold',
    'home.hero.meta2': 'HBSM Core Banking',
    'home.hero.meta3': 'Risk & Security • IA',

    // Hero panel
    'home.panel.title': "Panorama de l’application",
    'home.panel.lead':
      'Dashboard, comptes, cartes, transactions, sécurité, AI Spending Analyzer et Financial Health Score dans un environnement cohérent et gouvernable.',
    'home.panel.card1.title': 'Governance Layer',
    'home.panel.card1.body':
      'Interface unifiée Black & Gold pour orchestrer l’expérience financière.',
    'home.panel.card2.title': 'Core Banking',
    'home.panel.card2.body':
      'Comptes, cartes, dépôts, virements, support utilisateur et routage sécurisé.',
    'home.panel.card3.title': 'Risk & Security',
    'home.panel.card3.body':
      'Sessions, appareils, événements de sécurité et actions rapides de protection.',
    'home.panel.card4.title': 'AI & Insight',
    'home.panel.card4.body':
      "Analyse prédictive des dépenses et Financial Health Score intégré.",

    // Video
    'home.video.title': 'Walkthrough complet',
    'home.video.lead':
      'Un aperçu de 2:50 qui présente les fondations de l’écosystème HSM : gouvernance, core banking, sécurité et modules IA, avec un focus sur le Governance Layer Black & Gold.',
    'home.video.caption':
      'Extrait de la démo interne HSM : login sécurisé, MFA, Governance Layer Black & Gold et vue d’ensemble des principales fonctionnalités de core banking.',

    // Roadmap
    'home.roadmap.title': 'Roadmap HSM',
    'home.roadmap.lead':
      "Les fondations de l’écosystème sont en place. Les prochaines étapes renforcent le domaine bancaire, la sécurité et les couches d’IA & de gouvernance.",
    'home.roadmap.phase1.badge': 'Phase 1',
    'home.roadmap.phase1.title':
      'Fondations Core Banking & Governance Layer',
    'home.roadmap.phase1.body':
      "Mise en place du domaine bancaire (comptes, cartes, transactions, dépôts), Governance Layer Black & Gold et premier Risk Center intégré à l’application.",
    'home.roadmap.phase2.badge': 'Phase 2',
    'home.roadmap.phase2.title':
      'Risk & Security étendu + AI Spending Analyzer',
    'home.roadmap.phase2.body':
      'Extension du module Risk Center, actions avancées sur les sessions et renforcement de l’AI Spending Analyzer avec des insights plus granulaires sur les patterns de dépenses.',
    'home.roadmap.phase3.badge': 'Phase 3',
    'home.roadmap.phase3.title':
      'Financial Health Score & intégration de l’écosystème',
    'home.roadmap.phase3.body':
      'Évolution du Financial Health Score et intégration plus étroite entre core banking, modules IA et futur layer assurance dans une expérience unique gouvernée par HSM.',

    // REVIEWS
    'reviews.title': 'Avis sur HSM',
    'reviews.lead':
      'Laisse un feedback sur le concept, le site ou la plateforme.',
    'reviews.loginCta':
      'Se connecter avec Google pour laisser un avis',
    'reviews.ratingLabel': 'Note',
    'reviews.commentLabel': 'Commentaire',
    'reviews.commentPlaceholder':
      'Écris ce que tu as aimé, ce qui pourrait être amélioré...',
    'reviews.publish': "Publier l'avis",
    'reviews.empty':
      "Il n'y a pas encore d'avis. Sois le premier à laisser un feedback !",

    // TESTIMONIALS / SENJA
    'testimonials.title': 'Ce que l’on dit de HSM',
    'testimonials.lead':
      'Une sélection de témoignages et avis sur HSM.',
    'testimonials.page.intro':
      'HSM est encore un concept en évolution. Les avis et commentaires recueillis ici servent à vérifier si le cadrage, le design et les modules développés vont dans la bonne direction.',
    'testimonials.page.bullet1':
      'Feedback sur l’UX, le ton et le positionnement de la marque.',
    'testimonials.page.bullet2':
      'Avis sur l’idée de Governance Layer, de Core Banking et de Risk Center.',
    'testimonials.page.bullet3':
      'Suggestions sur ce que tu aimerais voir dans une future version réelle.',
    'testimonials.page.note':
      'Les avis sont collectés via Senja et affichés en temps réel dans cette section.',

    // ECOSYSTEM
    'ecosystem.title': 'Écosystème HSM',
    'ecosystem.lead':
      'HSM est pensé comme un écosystème coordonné : holding, core banking et assurance avec une gouvernance unique et une identité premium cohérente.',
    'ecosystem.card1.title': 'Groupe HSM — Holding',
    'ecosystem.card1.body':
      'Coordonne marque, stratégie et gouvernance. Couche centrale qui gère identités, accès et routing vers les divisions bancaires et assurantielles.',
    'ecosystem.card2.title': 'HBSM — Core Banking',
    'ecosystem.card2.body':
      'Module bancaire digital : comptes, cartes, transactions, dépôts et services de support, construit avec une architecture moderne et une sécurité enterprise.',
    'ecosystem.card3.title': 'HASM — Assurance',
    'ecosystem.card3.body':
      'Module assurance conçu comme un layer séparé : polices, primes, sinistres et espace client, intégrés dans la gouvernance HSM.',

    // PLATFORM
    'platform.title': 'HBSM — Core Banking',
    'platform.lead':
      'Une plateforme de digital banking avec login sécurisé, comptes, cartes, dépôts, transactions et support, pensée pour une UX claire et institutionnelle.',
    'platform.card1.title': 'Accès & Sécurité',
    'platform.card1.item1': 'Login avec email et mot de passe.',
    'platform.card1.item2':
      'MFA TOTP et code de déverrouillage dédié.',
    'platform.card1.item3': 'Flows JWT prêts pour WebAuthn.',
    'platform.card2.title': 'Comptes & Dépôts',
    'platform.card2.item1':
      'Gestion des comptes courants et IBAN virtuels.',
    'platform.card2.item2':
      'Compte d’épargne lié, versements et retraits.',
    'platform.card2.item3':
      'Évolution et analytics du solde.',
    'platform.card3.title': 'Cartes & Transactions',
    'platform.card3.item1':
      'Cartes virtuelles avec limites, canaux et freeze/blocage.',
    'platform.card3.item2':
      'Historique des mouvements avec tagging et color coding.',
    'platform.card3.item3':
      'Virements SEPA, transferts internes et audit.',
    'platform.card4.title': 'Support & Compliance',
    'platform.card4.item1':
      'Support conversationnel pour les utilisateurs et le staff.',
    'platform.card4.item2':
      'Sections informatives sur Monaco et les régulateurs.',
    'platform.card4.item3':
      'Layouts et contenus orientés vers la transparence.',

    // RISK & AI
    'risk.title': 'Risk Center & AI Suite',
    'risk.lead':
      'Une couche dédiée à la sécurité des sessions et à l’analyse intelligente des comportements financiers, intégrée nativement au core banking.',
    'risk.card1.title': 'Risk Center',
    'risk.card1.item1':
      'Suivi des sessions, appareils, IP et activité récente.',
    'risk.card1.item2':
      'Événements de sécurité : logins, MFA, tentatives échouées.',
    'risk.card1.item3':
      'Security Actions Hub : fermeture de sessions, reset, report.',
    'risk.card2.title': 'AI Spending Analyzer',
    'risk.card2.item1':
      'Analyse des patterns de dépense à partir des transactions.',
    'risk.card2.item2':
      'Catégorisations dynamiques et insights sur l’usage des comptes.',
    'risk.card2.item3':
      'Module pensé pour évoluer vers l’analyse prédictive.',
    'risk.card3.title': 'Financial Health Score',
    'risk.card3.item1':
      'Indicateur synthétique de la situation financière personnelle.',
    'risk.card3.item2':
      'Basé sur des données transactionnelles et des modèles IA.',
    'risk.card3.item3':
      'UI immédiate : score, statut et suggestions.',

    // ABOUT
    'about.title': 'Groupe HSM',
    'about.lead':
      'Un concept fintech qui combine esthétique monégasque, solidité européenne et précision du digital moderne.',
    'about.card1.title': 'Identité',
    'about.card1.body':
      'HSM naît comme écosystème coordonné : holding, banking et assurance avec une gouvernance centrale et une image Black & Gold institutionnelle.',
    'about.card2.title': 'Vision',
    'about.card2.body':
      'Créer un environnement financier moderne, sûr et gouvernable, où l’utilisateur a une vue claire sur ses comptes, sa sécurité et sa santé financière.',
    'about.card3.title': 'Monaco-inspired',
    'about.card3.body':
      'La référence monégasque devient un langage visuel et de positionnement : sobriété, attention aux détails et gestion prudente du risque.',

    // CONTACT
    'contact.title': 'Contacts & partenariats',
    'contact.lead':
      'HSM est ouvert aux échanges avec partenaires, institutions et investisseurs intéressés par l’écosystème et les modules développés.',
    'contact.name.label': 'Nom complet',
    'contact.name.placeholder': 'Saisis ton nom',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'nom@entreprise.com',
    'contact.reason.label': 'Motif du contact',
    'contact.reason.option.partnership': 'Partenariat',
    'contact.reason.option.investors': 'Investisseurs',
    'contact.reason.option.other': 'Autre',
    'contact.message.label': 'Message',
    'contact.message.placeholder':
      'Écris un court message...',
    'contact.submit': 'Envoyer',
    'contact.success':
      'Message envoyé (démo). Nous reviendrons vers toi par email si nécessaire.',
    'contact.disclaimer':
      'Ce formulaire est démonstratif. Il pourra être relié plus tard à une intégration réelle (email ou backend dédié).',

    // CONTACT – old
    'contact.badge.request': 'Demande de contact',
    'contact.mailto.success':
      'Nous avons ouvert ton client e-mail avec un message pré-rempli. Tu peux le relire et l’envoyer quand tu veux.',
    'contact.mailto.disclaimer':
      'Le formulaire ne stocke aucune donnée sur les serveurs HSM : il ouvre simplement un email adressé à irondaryl@proton.me depuis ton client.',
    'contact.direct.title': 'Contacts directs',
    'contact.direct.body':
      'Pour les partenariats, l’écosystème HSM ou une démo de la plateforme, tu peux utiliser les contacts ci-dessous ou le formulaire à droite.',
    'contact.direct.email.label': 'Email',
    'contact.direct.scopes.label': 'Domaines',
    'contact.direct.scopes.value':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.pill':
      'Contact direct avec le créateur du concept HSM.',

    // CONTACT – new
    'contact.direct.emailLabel': 'Email',
    'contact.direct.areasLabel': 'Domaines',
    'contact.direct.areasValue':
      'Governance Layer • Core Banking • Risk & IA',
    'contact.direct.footer':
      'Contact direct avec le créateur du concept HSM.',
    'contact.form.badge': 'Demande de contact',
    'contact.form.successEmailOpened':
      'Nous avons ouvert ton client email avec un message pré-rempli. Tu peux le relire et l’envoyer quand tu veux.',
    'contact.disclaimer.emailOnly':
      'Le formulaire ne stocke aucune donnée sur des serveurs HSM : il génère simplement un email adressé à ',
    'contact.reviewsCta': 'Laisser un avis sur HSM',
  },

  es: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.ecosystem': 'Ecosistema',
    'nav.coreBanking': 'Core Banking',
    'nav.riskAI': 'Riesgo & IA',
    'nav.about': 'Sobre HSM',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Contacto',

    // Hero
    'home.hero.brandTagline': 'Secure • Smart • Monégasque',
    'home.hero.title':
      'Groupe HSM — El nivel de gobernanza para las finanzas modernas',
    'home.hero.lead':
      'Un ecosistema financiero unificado y premium, centrado en la seguridad, el control y la calidad de la experiencia digital.',
    'home.hero.ctaPrimary': 'Ver walkthrough',
    'home.hero.ctaSecondary': 'Explorar el ecosistema',
    'home.hero.meta1': 'Governance Layer Black & Gold',
    'home.hero.meta2': 'HBSM Core Banking',
    'home.hero.meta3': 'Risk & Security • IA',

    // Hero panel
    'home.panel.title': 'Panorama de la aplicación',
    'home.panel.lead':
      'Dashboard, cuentas, tarjetas, transacciones, seguridad, AI Spending Analyzer y Financial Health Score en un entorno coherente y gobernable.',
    'home.panel.card1.title': 'Governance Layer',
    'home.panel.card1.body':
      'Interfaz unificada Black & Gold para orquestar la experiencia financiera.',
    'home.panel.card2.title': 'Core Banking',
    'home.panel.card2.body':
      'Cuentas, tarjetas, depósitos, transferencias, soporte al usuario y routing seguro.',
    'home.panel.card3.title': 'Risk & Security',
    'home.panel.card3.body':
      'Sesiones, dispositivos, eventos de seguridad y acciones rápidas de protección.',
    'home.panel.card4.title': 'AI & Insight',
    'home.panel.card4.body':
      'Análisis predictivo del gasto y Financial Health Score integrado.',

    // Video
    'home.video.title': 'Walkthrough completo',
    'home.video.lead':
      'Una preview de 2:50 que muestra los fundamentos del ecosistema HSM: gobernanza, core banking, seguridad y módulos de IA, con foco en el Governance Layer Black & Gold.',
    'home.video.caption':
      'Extracto de la demo interna de HSM: login seguro, MFA, Governance Layer Black & Gold y vista general de las principales funcionalidades de core banking.',

    // Roadmap
    'home.roadmap.title': 'Roadmap de HSM',
    'home.roadmap.lead':
      'Los fundamentos del ecosistema están operativos. Los próximos pasos se centran en reforzar el dominio bancario, la seguridad y las capas de IA y gobernanza.',
    'home.roadmap.phase1.badge': 'Fase 1',
    'home.roadmap.phase1.title':
      'Fundamentos de Core Banking & Governance Layer',
    'home.roadmap.phase1.body':
      'Implementación del dominio bancario (cuentas, tarjetas, transacciones, depósitos), Governance Layer Black & Gold y primer Risk Center integrado en la aplicación.',
    'home.roadmap.phase2.badge': 'Fase 2',
    'home.roadmap.phase2.title':
      'Risk & Security extendido + AI Spending Analyzer',
    'home.roadmap.phase2.body':
      'Extensión del módulo Risk Center, acciones avanzadas sobre las sesiones y refuerzo del AI Spending Analyzer con insights más granulares sobre los patrones de gasto.',
    'home.roadmap.phase3.badge': 'Fase 3',
    'home.roadmap.phase3.title':
      'Financial Health Score & integración del ecosistema',
    'home.roadmap.phase3.body':
      'Evolución del Financial Health Score e integración más estrecha entre core banking, módulos de IA y el futuro layer asegurador en una experiencia única gobernada por HSM.',

    // REVIEWS
    'reviews.title': 'Reseñas sobre HSM',
    'reviews.lead':
      'Deja un feedback sobre el concepto, la web o la plataforma.',
    'reviews.loginCta':
      'Inicia sesión con Google para dejar una reseña',
    'reviews.ratingLabel': 'Valoración',
    'reviews.commentLabel': 'Comentario',
    'reviews.commentPlaceholder':
      'Escribe qué te ha gustado y qué mejorarías...',
    'reviews.publish': 'Publicar reseña',
    'reviews.empty':
      'Todavía no hay reseñas. ¡Sé el primero en dejar tu opinión!',

    // TESTIMONIALS / SENJA
    'testimonials.title': 'Qué se dice sobre HSM',
    'testimonials.lead':
      'Una colección de testimonios y opiniones sobre HSM.',
    'testimonials.page.intro':
      'HSM sigue siendo un concepto en evolución. Las reseñas y comentarios recopilados aquí sirven para entender si el enfoque, el diseño y los módulos desarrollados van en la dirección correcta.',
    'testimonials.page.bullet1':
      'Feedback sobre UX, tono y posicionamiento de marca.',
    'testimonials.page.bullet2':
      'Opiniones sobre la idea de Governance Layer, Core Banking y Risk Center.',
    'testimonials.page.bullet3':
      'Sugerencias sobre lo que te gustaría ver en una futura versión real.',
    'testimonials.page.note':
      'Las reseñas se recogen a través de Senja y se muestran en tiempo real en esta sección.',

    // ECOSYSTEM
    'ecosystem.title': 'Ecosistema HSM',
    'ecosystem.lead':
      'HSM está diseñado como un ecosistema coordinado: holding, core banking y assurance con una gobernanza única y una identidad premium coherente.',
    'ecosystem.card1.title': 'Groupe HSM — Holding',
    'ecosystem.card1.body':
      'Coordina marca, estrategia y gobernanza. Capa central que gestiona identidades, accesos y routing hacia las divisiones bancarias y de seguros.',
    'ecosystem.card2.title': 'HBSM — Core Banking',
    'ecosystem.card2.body':
      'Módulo bancario digital: cuentas, tarjetas, transacciones, depósitos y servicios de soporte, construido con arquitectura moderna y seguridad enterprise.',
    'ecosystem.card3.title': 'HASM — Assurance',
    'ecosystem.card3.body':
      'Módulo asegurador pensado como layer separado: pólizas, primas, siniestros y área cliente, integrados en la gobernanza HSM.',

    // PLATFORM
    'platform.title': 'HBSM — Core Banking',
    'platform.lead':
      'Una plataforma de digital banking con login seguro, cuentas, tarjetas, depósitos, transacciones y soporte, diseñada para una UX clara e institucional.',
    'platform.card1.title': 'Acceso & Seguridad',
    'platform.card1.item1': 'Login con email y contraseña.',
    'platform.card1.item2':
      'MFA TOTP y código de desbloqueo dedicado.',
    'platform.card1.item3': 'Flujos JWT preparados para WebAuthn.',
    'platform.card2.title': 'Cuentas & Depósitos',
    'platform.card2.item1':
      'Gestión de cuentas corrientes e IBAN virtuales.',
    'platform.card2.item2':
      'Cuenta de ahorro vinculada, ingresos y retiradas.',
    'platform.card2.item3':
      'Evolución y analytics del saldo.',
    'platform.card3.title': 'Tarjetas & Transacciones',
    'platform.card3.item1':
      'Tarjetas virtuales con límites, canales y freeze/bloqueo.',
    'platform.card3.item2':
      'Histórico de movimientos con tagging y color coding.',
    'platform.card3.item3':
      'Transferencias SEPA, movimientos internos y audit.',
    'platform.card4.title': 'Soporte & Compliance',
    'platform.card4.item1':
      'Soporte conversacional para usuario y staff.',
    'platform.card4.item2':
      'Secciones informativas sobre Mónaco y reguladores.',
    'platform.card4.item3':
      'Layouts y contenidos orientados a la transparencia.',

    // RISK & AI
    'risk.title': 'Risk Center & AI Suite',
    'risk.lead':
      'Un layer dedicado a la seguridad de las sesiones y al análisis inteligente de los comportamientos financieros, integrado de forma nativa en el core banking.',
    'risk.card1.title': 'Risk Center',
    'risk.card1.item1':
      'Trazado de sesiones, dispositivos, IPs y actividad reciente.',
    'risk.card1.item2':
      'Eventos de seguridad: logins, MFA, intentos fallidos.',
    'risk.card1.item3':
      'Security Actions Hub: cierre de sesiones, reset, report.',
    'risk.card2.title': 'AI Spending Analyzer',
    'risk.card2.item1':
      'Análisis de patrones de gasto a partir de las transacciones.',
    'risk.card2.item2':
      'Categorizaciones dinámicas e insights sobre el uso de las cuentas.',
    'risk.card2.item3':
      'Módulo pensado para evolucionar hacia análisis predictivo.',
    'risk.card3.title': 'Financial Health Score',
    'risk.card3.item1':
      'Indicador sintético del estado financiero personal.',
    'risk.card3.item2':
      'Basado en datos transaccionales y modelos de IA.',
    'risk.card3.item3':
      'UI inmediata: puntuación, estado y sugerencias.',

    // ABOUT
    'about.title': 'Groupe HSM',
    'about.lead':
      'Un concepto fintech que une estética monegasca, solidez europea y precisión del mundo digital moderno.',
    'about.card1.title': 'Identidad',
    'about.card1.body':
      'HSM nace como ecosistema coordinado: holding, banking y assurance con una gobernanza central y una imagen Black & Gold institucional.',
    'about.card2.title': 'Visión',
    'about.card2.body':
      'Crear un entorno financiero moderno, seguro y gobernable, donde el usuario tenga una visión clara de sus cuentas, seguridad y salud financiera.',
    'about.card3.title': 'Inspirado en Mónaco',
    'about.card3.body':
      'La referencia monegasca se convierte en lenguaje visual y de posicionamiento: sobriedad, cuidado del detalle y atención al riesgo.',

    // CONTACT
    'contact.title': 'Contactos & partnership',
    'contact.lead':
      'HSM está abierto a conversaciones con partners, instituciones e inversores interesados en el ecosistema y los módulos desarrollados.',
    'contact.name.label': 'Nombre y apellidos',
    'contact.name.placeholder': 'Escribe tu nombre',
    'contact.email.label': 'Email',
    'contact.email.placeholder': 'nombre@empresa.com',
    'contact.reason.label': 'Motivo del contacto',
    'contact.reason.option.partnership': 'Partnership',
    'contact.reason.option.investors': 'Inversores',
    'contact.reason.option.other': 'Otro',
    'contact.message.label': 'Mensaje',
    'contact.message.placeholder':
      'Escribe un breve mensaje...',
    'contact.submit': 'Enviar',
    'contact.success':
      'Mensaje enviado (demo). Te contactaremos por email si es necesario.',
    'contact.disclaimer':
      'El formulario es demostrativo. Más adelante se puede conectar a una integración real (email o backend dedicado).',

    // CONTACT – old
    'contact.badge.request': 'Solicitud de contacto',
    'contact.mailto.success':
      'Hemos abierto tu cliente de correo con un mensaje precompletado. Puedes revisarlo y enviarlo cuando quieras.',
    'contact.mailto.disclaimer':
      'El formulario no guarda datos en servidores de HSM: simplemente abre un correo dirigido a irondaryl@proton.me desde tu cliente.',
    'contact.direct.title': 'Contactos directos',
    'contact.direct.body':
      'Para partnerships, el ecosistema HSM o una demo de la plataforma puedes usar los contactos de abajo o el formulario de la derecha.',
    'contact.direct.email.label': 'Email',
    'contact.direct.scopes.label': 'Ámbitos',
    'contact.direct.scopes.value':
      'Governance Layer • Core Banking • Risk & AI',
    'contact.direct.pill':
      'Contacto directo con el creador del concepto HSM.',

    // CONTACT – new
    'contact.direct.emailLabel': 'Email',
    'contact.direct.areasLabel': 'Ámbitos',
    'contact.direct.areasValue':
      'Governance Layer • Core Banking • Risk & IA',
    'contact.direct.footer':
      'Contacto directo con el creador del concepto HSM.',
    'contact.form.badge': 'Solicitud de contacto',
    'contact.form.successEmailOpened':
      'Hemos abierto tu cliente de correo con el mensaje pre-rellenado. Puedes revisarlo y enviarlo cuando quieras.',
    'contact.disclaimer.emailOnly':
      'El formulario no guarda datos en servidores HSM: simplemente genera un email dirigido a ',
    'contact.reviewsCta': 'Dejar una reseña sobre HSM',
  },
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly supportedLangs: Language[] = ['it', 'en', 'de', 'fr', 'es'];

  private currentLangSubject = new BehaviorSubject<Language>('it');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('hsm_lang') as Language | null;
    if (saved && this.supportedLangs.includes(saved)) {
      this.currentLangSubject.next(saved);
    }
  }

  get currentLang(): Language {
    return this.currentLangSubject.value;
  }

  get languages(): Language[] {
    return this.supportedLangs;
  }

  setLanguage(lang: Language): void {
    if (!this.supportedLangs.includes(lang)) return;
    if (lang === this.currentLang) return;
    this.currentLangSubject.next(lang);
    localStorage.setItem('hsm_lang', lang);
  }

  translate(key: string): string {
    const lang = this.currentLang;
    const dict = TRANSLATIONS[lang] || {};
    const fallbackDict = TRANSLATIONS['en'] || {};
    return dict[key] || fallbackDict[key] || key;
  }
}
