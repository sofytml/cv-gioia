/*
  ============================================================
  QUESTO È L'UNICO FILE CHE DOVRAI MODIFICARE PER AGGIORNARE IL CV.
  Non toccare index.html, style.css o script.js: leggeranno
  automaticamente quello che scrivi qui.
  ============================================================
*/

const cvData = {

  // ---- INTESTAZIONE ----
  profilo: {
    nome: "Gioia Tombolato",
    ruolo: "Responsabile di Reparto: Coordinamento operativo e gestione processi",
    citta: "Cittadella (PD)",
    foto: "gioia-foto.jpg", // TODO: aggiungere il file, questo nome è solo un segnaposto
    bio: "Professionista con esperienza nel coordinamento di attività operative e nella gestione di reparti produttivi. Ho sviluppato solide competenze nell'organizzazione del lavoro, nella pianificazione delle attività, nel controllo dei processi e nel supporto tecnico operativo, contribuendo al raggiungimento degli obiettivi aziendali e al mantenimento di elevati standard qualitativi. Mi distinguo per precisione, affidabilità e capacità di problem solving, unite a una naturale predisposizione alla leadership e al lavoro di squadra. Abituata a contesti dinamici, gestisco responsabilità, priorità e imprevisti con approccio pratico, autonomia e forte orientamento ai risultati."
  },

  // ---- COMPETENZE ----
  competenze: [
    {
      nome: "Lavoro in team",
      dettaglio: "Sviluppata coordinando colleghi e attività sia in reparto produttivo sia in sala, con l'obiettivo comune di rispettare tempi e standard qualitativi."
    },
    {
      nome: "Autonomia operativa",
      dettaglio: "Gestisco in autonomia le priorità quotidiane del reparto, intervenendo sugli imprevisti senza bisogno di supervisione costante."
    },
    {
      nome: "Gestione del cliente",
      dettaglio: "Maturata negli anni di servizio in sala e al bar, dove la relazione diretta con il cliente era parte centrale del lavoro."
    },
    {
      nome: "Precisione e organizzazione",
      dettaglio: "Applicata quotidianamente nel controllo dei processi produttivi e nella pianificazione delle attività di reparto."
    },
    {
      nome: "Flessibilità e adattabilità",
      dettaglio: "Costruita in contesti dinamici e ad alto flusso, dalla ristorazione alla produzione industriale."
    },
    {
      nome: "Puntualità e affidabilità",
      dettaglio: "Requisito costante sia nella gestione di un reparto produttivo sia nel servizio a diretto contatto con i clienti."
    },
    {
      nome: "Capacità relazionali e comunicative",
      dettaglio: "Sviluppata nel coordinamento del personale di sala e nel rapporto quotidiano con colleghi e clienti."
    },
    {
      nome: "Gestione amministrativa di base",
      dettaglio: "Supporto alle attività di cassa e alla gestione amministrativa, sia in ambito familiare sia lavorativo."
    }
  ],

  // ---- COMPETENZE TECNICHE E INFORMATICHE ----
  // qui uso lo stesso meccanismo che nel tuo sito si chiama "software",
  // ma il contenuto per Gioia è più tecnico che informatico
  software: [
    "Pacchetto Office",
    "Strumenti digitali e gestionali",
    "Programmi di gestione amministrativa",
    "PLC",
    "Impianti automatizzati e robotici",
    "Manutenzione operativa"
  ],

  // ---- LINGUE ----
  // il CV di Gioia non indica lingue: lascio l'elenco vuoto,
  // la sezione si nasconde da sola finché non aggiungi qualcosa qui
  lingue: [],

  // ---- FORMAZIONE ----
  formazione: [
    {
      titolo: "Diploma di scuola superiore",
      ente: "Percorso quadriennale, liceo socio pedagogico",
      periodo: "Conseguito"
    }
  ],

  // ---- ESPERIENZA ----
  esperienza: [
    {
      ruolo: "Responsabile di reparto membrane osmotiche",
      azienda: "Think:Water, Cittadella (PD)",
      periodo: "Da aprile 2019 a oggi",
      logo: "thinkwater-logo.svg", // TODO: scaricare dal sito ufficiale, vedi indicazioni a parte
      sito: "https://thinkwater.com/",
      instagram: "https://www.instagram.com/thinkwater_italia/",
      facebook: "https://www.facebook.com/ProfineItalia",
      linkedin: "https://www.linkedin.com/company/think-water-srl/",
      mansioni: [
        "Coordino le attività operative e organizzative del reparto",
        "Fornisco supporto alla gestione interna e precisione nelle mansioni assegnate",
        "Lavoro quotidianamente con PLC e impianti automatizzati e robotici",
        "Offro supporto tecnico e controllo dei processi produttivi",
        "Mi occupo di manutenzione operativa"
      ]
    },
    {
      ruolo: "Addetta alla ristorazione",
      azienda: "B&B Baseggio",
      periodo: "Da giugno 2018 a febbraio 2019",
      mansioni: [
        "Servizio ai tavoli e gestione della clientela",
        "Supporto al bar e organizzazione di eventi",
        "Lavoro in contesti dinamici e ad alto flusso"
      ]
    },
    {
      ruolo: "Responsabile di sala",
      azienda: "Trattoria da Rocco",
      periodo: "Da novembre 2014 a giugno 2018",
      mansioni: [
        "Gestione della sala e del rapporto con i clienti",
        "Gestione del personale di sala",
        "Organizzazione del servizio",
        "Supporto alle attività di cassa e amministrative"
      ]
    }
  ],

  // ---- CONTATTI E INFORMAZIONI ----
  contatti: {
    telefono: "+39 340 898 3532",
    email: "gioia.92t@gmail.com",
    linkedin: "", // TODO: chiedere a Gioia se ha un profilo LinkedIn
    patente: "Patente B, automunita",
    noteGdpr: "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 196/2003 e dell'art. 13 GDPR."
  }

};
