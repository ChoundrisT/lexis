/* =========================================================
   Λέξις · site behaviour: i18n, mobile nav, contact form
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     Translations
     Default language is Greek ("el"). Values may contain
     inline HTML (spans, <strong>, <br>, <em>).
     --------------------------------------------------------- */
  var I18N = {
    el: {
      meta_title: "Λέξις · Κέντρο Ξένων Γλωσσών | Άγιοι Ανάργυροι",
      meta_desc: "Κέντρο Ξένων Γλωσσών Λέξις Γιαννουλάτου στους Αγίους Αναργύρους. Αγγλικά, Ισπανικά, Γερμανικά για παιδιά, εφήβους και ενήλικες. Βραβευμένο σχολείο, προετοιμασία εξετάσεων ESB.",
      skip: "Μετάβαση στο περιεχόμενο",

      nav_home: "Αρχική", nav_school: "Το Σχολείο", nav_languages: "Γλώσσες",
      nav_exams: "Μέθοδος", nav_schedule: "Ωράριο", nav_contact: "Επικοινωνία",
      nav_cta: "Κλείσε θέση",

      hero_kicker: "Άγιοι Ανάργυροι · Αγγλικά · Ισπανικά · Γερμανικά",
      hero_h1: 'Μάθε ξένες γλώσσες <span class="hl">με τρόπο που σου μένει</span>',
      hero_sub: "Μικρά τμήματα, βιωματικά μαθήματα και σταθερή προετοιμασία για πτυχία. Για παιδιά, εφήβους και ενήλικες.",
      hero_cta1: "Κλείσε δωρεάν αξιολόγηση",
      hero_cta2: "Δες το ωράριο",
      hero_trust: "Βραβευμένο σχολείο · Αετοί της Εκπαίδευσης 2024 · 2025 · 2026",
      card_title: "Το πρόγραμμά μου",
      card_level: "3 μαθήματα / εβδομάδα",

      stat1_v: "3 γλώσσες", stat1_l: "Αγγλικά · Ισπανικά · Γερμανικά",
      awards_title: "Βραβευμένο σχολείο",
      awards_sub: "Επιλογή στους «Αετοί της Εκπαίδευσης» τρεις συνεχόμενες χρονιές.",
      stat2_l: "πιστοποιημένο εξεταστικό κέντρο",
      stat3_v: "έως [6]", stat3_l: "μαθητές ανά τμήμα · <em>επιβεβαίωση</em>",
      stat4_v: "[25]+ χρόνια", stat4_l: "στους Αγίους Αναργύρους · <em>επιβεβαίωση</em>",

      about_title: "Λίγα λόγια για εμάς",
      about_p1: "Το Κέντρο Ξένων Γλωσσών <strong>Λέξις</strong> βρίσκεται στους Αγίους Αναργύρους και διδάσκει Αγγλικά, Ισπανικά και Γερμανικά σε όλες τις ηλικίες. Δουλεύουμε με μικρά τμήματα και σύγχρονες, βιωματικές μεθόδους, με στόχο τη σταθερή πρόοδο και την επιτυχία στις εξετάσεις.",
      about_p2: "<em>Κείμενο placeholder: συμπλήρωσέ το με την ιστορία και τη φιλοσοφία του σχολείου.</em>",
      about_journey: "Από την αξιολόγηση στο πτυχίο",
      about_b1: "Δωρεάν αξιολόγηση επιπέδου",
      about_b2: "Μικρά, βιωματικά τμήματα",
      about_b3: "Συστηματική προετοιμασία εξετάσεων",
      about_b4: "Το πτυχίο σου",

      lang_title: "Διάλεξε τη γλώσσα σου",
      lang_sub: "Από τα πρώτα βήματα μέχρι το πτυχίο C2, με πρόγραμμα που ταιριάζει σε κάθε ηλικία.",
      lang_en_name: "Αγγλικά",
      lang_en_desc: 'Όλα τα επίπεδα A1–C2. Προετοιμασία για ESB και <span class="muted">[Cambridge, LanguageCert, Michigan (επιβεβαίωση)]</span>.',
      lang_es_name: "Ισπανικά",
      lang_es_desc: 'Όλα τα επίπεδα. Προετοιμασία για <span class="muted">[DELE / LanguageCert USAL esPro (επιβεβαίωση)]</span>.',
      lang_de_name: "Γερμανικά",
      lang_de_desc: 'Όλα τα επίπεδα. Προετοιμασία για <span class="muted">[Goethe-Zertifikat / ÖSD (επιβεβαίωση)]</span>.',
      lang_more: "Επίσης: <strong>Γαλλικά</strong> <em>(προς επιβεβαίωση)</em>",

      method_title: "Πώς μαθαίνουμε",
      method_sub: "<em>επιβεβαίωσε / προσάρμοσε τα κείμενα</em>",
      m1_t: "Μικρά τμήματα", m1_d: "Λίγοι μαθητές, ώστε να μιλάει ο καθένας σε κάθε μάθημα.",
      m2_t: "Βιωματική μάθηση", m2_d: "Παιχνίδια ρόλων, projects και δημιουργικές δράσεις.",
      m3_t: "Προετοιμασία εξετάσεων", m3_d: "Συστηματικές προσομοιώσεις και στοχευμένη ανατροφοδότηση.",
      m4_t: "Παρακολούθηση προόδου", m4_d: "Τακτική επικοινωνία με τους γονείς και ατομικοί στόχοι.",

      ages_title: "Για κάθε ηλικία",
      age1_tag: "ΠΑΙΔΙΑ", age1_t: "Δημοτικό", age1_d: "Πρώτη επαφή με τη γλώσσα μέσα από παιχνίδι.",
      age2_tag: "ΕΦΗΒΟΙ", age2_t: "Γυμνάσιο–Λύκειο", age2_d: "Σταθερή πορεία προς τα πτυχία.",
      age3_tag: "ΕΝΗΛΙΚΕΣ", age3_t: "Ευέλικτα τμήματα", age3_d: "Για δουλειά, σπουδές ή ταξίδι.",
      age4_tag: "ΕΝΤΑΤΙΚΑ", age4_t: "Πτυχία σε 1 έτος", age4_d: "Ταχύρρυθμη προετοιμασία B2 &amp; C2.",

      sched_title: "Ωράριο &amp; εγγραφές",
      sched_intro: "Το αναλυτικό πρόγραμμα των τμημάτων διαμορφώνεται κάθε Σεπτέμβριο.",
      enrol_label: "ΕΓΓΡΑΦΕΣ",
      enrol_value: "Καθημερινά 10:00–12:00 &amp; 18:00–20:00",
      enrol_note: "από 1η Σεπτεμβρίου <em>(επιβεβαίωση)</em>",
      th_day: "Ημέρα", th_hours: "Ώρες μαθημάτων",
      day_mon: "Δευτέρα", day_tue: "Τρίτη", day_wed: "Τετάρτη", day_thu: "Πέμπτη",
      day_fri: "Παρασκευή", day_sat: "Σάββατο", day_sun: "Κυριακή",
      sched_h_mon: "15:00–21:00 · τμήματα παιδιών, εφήβων &amp; ενηλίκων",
      sched_h_full: "15:00–21:00",
      sched_h_fri: "15:00–20:00",
      sched_h_sat: "Προσομοιώσεις εξετάσεων κατόπιν προγράμματος",
      sched_h_sun: "Κλειστά",
      sched_note: "Ενδεικτικές ώρες placeholder. Αντικατάστησε με το πραγματικό πρόγραμμα.",

      tst_title: "Τι λένε οι γονείς",
      tst_1: "[Παράθεση γονέα, προς προσθήκη. Μπορούμε να αντλήσουμε κριτικές από Facebook / «Αετοί της εκπαίδευσης».]",
      tst_1_by: "Όνομα Γ. · γονέας",
      tst_2: "[Παράθεση απόφοιτου, προς προσθήκη. Π.χ. επιτυχία σε εξετάσεις, σχέση με τους καθηγητές.]",
      tst_2_by: "Όνομα Μ. · απόφοιτος C2",

      ct_title: "Επικοινωνία",
      ct_sub: "Έλα από το σχολείο, πάρε τηλέφωνο ή στείλε μήνυμα. Απαντάμε την ίδια μέρα.",
      ct_addr_label: "ΔΙΕΥΘΥΝΣΗ", ct_phone_label: "ΤΗΛΕΦΩΝΟ", ct_social_label: "SOCIAL",
      form_name: "Ονοματεπώνυμο *", form_phone: "Τηλέφωνο *", form_email: "Email",
      form_lang: "Γλώσσα ενδιαφέροντος", form_age: "Ηλικία / τάξη μαθητή", form_found: "Πώς μας βρήκες",
      form_msg: "Το μήνυμά σου", form_submit: "Αποστολή",
      form_privacy: "Με την αποστολή αποδέχεσαι την [Πολιτική Απορρήτου].",
      form_thanks: "Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα μαζί σου.",

      ft_tagline: "Κέντρο Ξένων Γλωσσών Γιαννουλάτου · Γεωργίου Παπανδρέου 77, Άγιοι Ανάργυροι.",
      ft_rights: "© 2026 Λέξις – Α. Γιαννουλάτου &amp; ΣΙΑ Ο.Ε.",
      ft_pages: "ΣΕΛΙΔΕΣ", ft_lang: "ΓΛΩΣΣΑ"
    },

    en: {
      meta_title: "Lexis · Language School | Agioi Anargyroi, Athens",
      meta_desc: "Lexis Giannoulatou language school in Agioi Anargyroi, Athens. English, Spanish and German for children, teenagers and adults. Award-winning school, ESB exam preparation.",
      skip: "Skip to content",

      nav_home: "Home", nav_school: "The School", nav_languages: "Languages",
      nav_exams: "Method", nav_schedule: "Schedule", nav_contact: "Contact",
      nav_cta: "Book now",

      hero_kicker: "Agioi Anargyroi · English · Spanish · German",
      hero_h1: 'Learn a language <span class="hl">in a way that sticks</span>',
      hero_sub: "Small groups, hands-on lessons and steady exam preparation. For children, teenagers and adults.",
      hero_cta1: "Book a free assessment",
      hero_cta2: "See the schedule",
      hero_trust: "Award-winning school · Eagles of Education 2024 · 2025 · 2026",
      card_title: "My timetable",
      card_level: "3 lessons / week",

      stat1_v: "3 languages", stat1_l: "English · Spanish · German",
      awards_title: "An award-winning school",
      awards_sub: "Selected for the “Eagles of Education” three years running.",
      stat2_l: "certified ESB examination centre",
      stat3_v: "up to [6]", stat3_l: "students per class · <em>to confirm</em>",
      stat4_v: "[25]+ years", stat4_l: "in Agioi Anargyroi · <em>to confirm</em>",

      about_title: "A bit about us",
      about_p1: "The <strong>Lexis</strong> language school is based in Agioi Anargyroi and teaches English, Spanish and German to all ages. We work in small groups with modern, hands-on methods, aiming for steady progress and exam success.",
      about_p2: "<em>Placeholder text: fill in with the school's story and philosophy.</em>",
      about_journey: "From assessment to certificate",
      about_b1: "Free level assessment",
      about_b2: "Small, hands-on classes",
      about_b3: "Systematic exam preparation",
      about_b4: "Your certificate",

      lang_title: "Choose your language",
      lang_sub: "From first steps to a C2 certificate, with a programme that fits every age.",
      lang_en_name: "English",
      lang_en_desc: 'All levels A1–C2. Preparation for ESB and <span class="muted">[Cambridge, LanguageCert, Michigan (to confirm)]</span>.',
      lang_es_name: "Spanish",
      lang_es_desc: 'All levels. Preparation for <span class="muted">[DELE / LanguageCert USAL esPro (to confirm)]</span>.',
      lang_de_name: "German",
      lang_de_desc: 'All levels. Preparation for <span class="muted">[Goethe-Zertifikat / ÖSD (to confirm)]</span>.',
      lang_more: "Also offered: <strong>French</strong> <em>(to confirm)</em>",

      method_title: "How we teach",
      method_sub: "<em>confirm / adjust this copy</em>",
      m1_t: "Small groups", m1_d: "Few students, so everyone speaks in every lesson.",
      m2_t: "Hands-on learning", m2_d: "Role-play, projects and creative activities.",
      m3_t: "Exam preparation", m3_d: "Regular mock exams and targeted feedback.",
      m4_t: "Progress tracking", m4_d: "Regular contact with parents and individual goals.",

      ages_title: "For every age",
      age1_tag: "CHILDREN", age1_t: "Primary school", age1_d: "A first taste of the language through play.",
      age2_tag: "TEENS", age2_t: "Secondary school", age2_d: "A steady path towards certificates.",
      age3_tag: "ADULTS", age3_t: "Flexible classes", age3_d: "For work, studies or travel.",
      age4_tag: "INTENSIVE", age4_t: "Certificate in 1 year", age4_d: "Fast-track preparation for B2 &amp; C2.",

      sched_title: "Schedule &amp; enrolment",
      sched_intro: "The detailed class timetable is set each September.",
      enrol_label: "ENROLMENT",
      enrol_value: "Daily 10:00–12:00 &amp; 18:00–20:00",
      enrol_note: "from 1 September <em>(to confirm)</em>",
      th_day: "Day", th_hours: "Class hours",
      day_mon: "Monday", day_tue: "Tuesday", day_wed: "Wednesday", day_thu: "Thursday",
      day_fri: "Friday", day_sat: "Saturday", day_sun: "Sunday",
      sched_h_mon: "15:00–21:00 · classes for children, teens &amp; adults",
      sched_h_full: "15:00–21:00",
      sched_h_fri: "15:00–20:00",
      sched_h_sat: "Mock exams by arrangement",
      sched_h_sun: "Closed",
      sched_note: "Indicative placeholder hours. Replace with the real timetable.",

      tst_title: "What parents say",
      tst_1: "[Parent quote, to be added. We can pull reviews from Facebook / “Eagles of Education”.]",
      tst_1_by: "Name G. · parent",
      tst_2: "[Graduate quote, to be added. E.g. exam success, relationship with teachers.]",
      tst_2_by: "Name M. · C2 graduate",

      ct_title: "Contact",
      ct_sub: "Drop by the school, call us or send a message. We reply the same day.",
      ct_addr_label: "ADDRESS", ct_phone_label: "PHONE", ct_social_label: "SOCIAL",
      form_name: "Full name *", form_phone: "Phone *", form_email: "Email",
      form_lang: "Language of interest", form_age: "Student age / grade", form_found: "How you found us",
      form_msg: "Your message", form_submit: "Send",
      form_privacy: "By sending this you accept the [Privacy Policy].",
      form_thanks: "Thank you! We'll get back to you shortly.",

      ft_tagline: "Giannoulatou Language School · Georgiou Papandreou 77, Agioi Anargyroi.",
      ft_rights: "© 2026 Lexis – A. Giannoulatou &amp; Co.",
      ft_pages: "PAGES", ft_lang: "LANGUAGE"
    },

    es: {
      meta_title: "Lexis · Escuela de idiomas | Agioi Anargyroi, Atenas",
      meta_desc: "Escuela de idiomas Lexis Giannoulatou en Agioi Anargyroi, Atenas. Inglés, español y alemán para niños, adolescentes y adultos. Escuela premiada, preparación de exámenes ESB.",
      skip: "Saltar al contenido",

      nav_home: "Inicio", nav_school: "La Escuela", nav_languages: "Idiomas",
      nav_exams: "Método", nav_schedule: "Horario", nav_contact: "Contacto",
      nav_cta: "Reservar",

      hero_kicker: "Agioi Anargyroi · Inglés · Español · Alemán",
      hero_h1: 'Aprende idiomas <span class="hl">de una forma que se queda</span>',
      hero_sub: "Grupos reducidos, clases prácticas y preparación constante de exámenes. Para niños, adolescentes y adultos.",
      hero_cta1: "Reserva una evaluación gratis",
      hero_cta2: "Ver el horario",
      hero_trust: "Escuela premiada · Águilas de la Educación 2024 · 2025 · 2026",
      card_title: "Mi horario",
      card_level: "3 clases / semana",

      stat1_v: "3 idiomas", stat1_l: "Inglés · Español · Alemán",
      awards_title: "Escuela premiada",
      awards_sub: "Seleccionada en las «Águilas de la Educación» tres años seguidos.",
      stat2_l: "centro examinador ESB certificado",
      stat3_v: "hasta [6]", stat3_l: "alumnos por grupo · <em>por confirmar</em>",
      stat4_v: "[25]+ años", stat4_l: "en Agioi Anargyroi · <em>por confirmar</em>",

      about_title: "Sobre nosotros",
      about_p1: "La escuela de idiomas <strong>Lexis</strong> está en Agioi Anargyroi y enseña inglés, español y alemán a todas las edades. Trabajamos en grupos reducidos con métodos modernos y prácticos, buscando un progreso constante y el éxito en los exámenes.",
      about_p2: "<em>Texto de ejemplo: complétalo con la historia y la filosofía de la escuela.</em>",
      about_journey: "De la evaluación al título",
      about_b1: "Evaluación de nivel gratuita",
      about_b2: "Clases reducidas y prácticas",
      about_b3: "Preparación sistemática de exámenes",
      about_b4: "Tu título",

      lang_title: "Elige tu idioma",
      lang_sub: "Desde los primeros pasos hasta el título C2, con un programa para cada edad.",
      lang_en_name: "Inglés",
      lang_en_desc: 'Todos los niveles A1–C2. Preparación para ESB y <span class="muted">[Cambridge, LanguageCert, Michigan (por confirmar)]</span>.',
      lang_es_name: "Español",
      lang_es_desc: 'Todos los niveles. Preparación para <span class="muted">[DELE / LanguageCert USAL esPro (por confirmar)]</span>.',
      lang_de_name: "Alemán",
      lang_de_desc: 'Todos los niveles. Preparación para <span class="muted">[Goethe-Zertifikat / ÖSD (por confirmar)]</span>.',
      lang_more: "También: <strong>Francés</strong> <em>(por confirmar)</em>",

      method_title: "Cómo enseñamos",
      method_sub: "<em>confirma / ajusta este texto</em>",
      m1_t: "Grupos reducidos", m1_d: "Pocos alumnos, para que todos hablen en cada clase.",
      m2_t: "Aprendizaje práctico", m2_d: "Juegos de rol, proyectos y actividades creativas.",
      m3_t: "Preparación de exámenes", m3_d: "Simulacros periódicos y correcciones específicas.",
      m4_t: "Seguimiento del progreso", m4_d: "Contacto regular con las familias y objetivos individuales.",

      ages_title: "Para todas las edades",
      age1_tag: "NIÑOS", age1_t: "Primaria", age1_d: "Un primer contacto con el idioma jugando.",
      age2_tag: "ADOLESCENTES", age2_t: "Secundaria", age2_d: "Un camino firme hacia los títulos.",
      age3_tag: "ADULTOS", age3_t: "Clases flexibles", age3_d: "Para el trabajo, los estudios o viajar.",
      age4_tag: "INTENSIVO", age4_t: "Título en 1 año", age4_d: "Preparación acelerada para B2 y C2.",

      sched_title: "Horario e inscripciones",
      sched_intro: "El horario detallado de los grupos se fija cada septiembre.",
      enrol_label: "INSCRIPCIONES",
      enrol_value: "A diario 10:00–12:00 y 18:00–20:00",
      enrol_note: "desde el 1 de septiembre <em>(por confirmar)</em>",
      th_day: "Día", th_hours: "Horas de clase",
      day_mon: "Lunes", day_tue: "Martes", day_wed: "Miércoles", day_thu: "Jueves",
      day_fri: "Viernes", day_sat: "Sábado", day_sun: "Domingo",
      sched_h_mon: "15:00–21:00 · grupos de niños, adolescentes y adultos",
      sched_h_full: "15:00–21:00",
      sched_h_fri: "15:00–20:00",
      sched_h_sat: "Simulacros de examen con cita previa",
      sched_h_sun: "Cerrado",
      sched_note: "Horas orientativas de ejemplo. Sustitúyelas por el horario real.",

      tst_title: "Lo que dicen las familias",
      tst_1: "[Cita de una familia, por añadir. Podemos usar reseñas de Facebook / “Águilas de la Educación”.]",
      tst_1_by: "Nombre G. · madre/padre",
      tst_2: "[Cita de un exalumno, por añadir. P. ej. éxito en exámenes, relación con el profesorado.]",
      tst_2_by: "Nombre M. · titulado C2",

      ct_title: "Contacto",
      ct_sub: "Pásate por la escuela, llámanos o escríbenos. Respondemos el mismo día.",
      ct_addr_label: "DIRECCIÓN", ct_phone_label: "TELÉFONO", ct_social_label: "SOCIAL",
      form_name: "Nombre completo *", form_phone: "Teléfono *", form_email: "Email",
      form_lang: "Idioma de interés", form_age: "Edad / curso del alumno", form_found: "Cómo nos conociste",
      form_msg: "Tu mensaje", form_submit: "Enviar",
      form_privacy: "Al enviar aceptas la [Política de Privacidad].",
      form_thanks: "¡Gracias! Te responderemos muy pronto.",

      ft_tagline: "Escuela de Idiomas Giannoulatou · Georgiou Papandreou 77, Agioi Anargyroi.",
      ft_rights: "© 2026 Lexis – A. Giannoulatou y Cía.",
      ft_pages: "PÁGINAS", ft_lang: "IDIOMA"
    },

    de: {
      meta_title: "Lexis · Sprachschule | Agioi Anargyroi, Athen",
      meta_desc: "Sprachschule Lexis Giannoulatou in Agioi Anargyroi, Athen. Englisch, Spanisch und Deutsch für Kinder, Jugendliche und Erwachsene. Ausgezeichnete Schule, ESB-Prüfungsvorbereitung.",
      skip: "Zum Inhalt springen",

      nav_home: "Start", nav_school: "Die Schule", nav_languages: "Sprachen",
      nav_exams: "Methode", nav_schedule: "Stundenplan", nav_contact: "Kontakt",
      nav_cta: "Platz buchen",

      hero_kicker: "Agioi Anargyroi · Englisch · Spanisch · Deutsch",
      hero_h1: 'Eine Sprache lernen, <span class="hl">die bleibt</span>',
      hero_sub: "Kleine Gruppen, praxisnaher Unterricht und kontinuierliche Prüfungsvorbereitung. Für Kinder, Jugendliche und Erwachsene.",
      hero_cta1: "Kostenlose Einstufung buchen",
      hero_cta2: "Zum Stundenplan",
      hero_trust: "Ausgezeichnete Schule · Adler der Bildung 2024 · 2025 · 2026",
      card_title: "Mein Stundenplan",
      card_level: "3 Einheiten / Woche",

      stat1_v: "3 Sprachen", stat1_l: "Englisch · Spanisch · Deutsch",
      awards_title: "Ausgezeichnete Schule",
      awards_sub: "Drei Jahre in Folge bei den „Adlern der Bildung“ ausgewählt.",
      stat2_l: "zertifiziertes ESB-Prüfungszentrum",
      stat3_v: "bis zu [6]", stat3_l: "Schüler pro Gruppe · <em>zu bestätigen</em>",
      stat4_v: "[25]+ Jahre", stat4_l: "in Agioi Anargyroi · <em>zu bestätigen</em>",

      about_title: "Über uns",
      about_p1: "Die Sprachschule <strong>Lexis</strong> befindet sich in Agioi Anargyroi und unterrichtet Englisch, Spanisch und Deutsch für alle Altersgruppen. Wir arbeiten in kleinen Gruppen mit modernen, praxisnahen Methoden, für stetigen Fortschritt und Prüfungserfolg.",
      about_p2: "<em>Platzhaltertext: mit der Geschichte und Philosophie der Schule ergänzen.</em>",
      about_journey: "Von der Einstufung zum Zertifikat",
      about_b1: "Kostenlose Einstufung",
      about_b2: "Kleine, praxisnahe Kurse",
      about_b3: "Systematische Prüfungsvorbereitung",
      about_b4: "Dein Zertifikat",

      lang_title: "Wähle deine Sprache",
      lang_sub: "Von den ersten Schritten bis zum C2-Zertifikat, mit einem Programm für jedes Alter.",
      lang_en_name: "Englisch",
      lang_en_desc: 'Alle Stufen A1–C2. Vorbereitung auf ESB und <span class="muted">[Cambridge, LanguageCert, Michigan (zu bestätigen)]</span>.',
      lang_es_name: "Spanisch",
      lang_es_desc: 'Alle Stufen. Vorbereitung auf <span class="muted">[DELE / LanguageCert USAL esPro (zu bestätigen)]</span>.',
      lang_de_name: "Deutsch",
      lang_de_desc: 'Alle Stufen. Vorbereitung auf <span class="muted">[Goethe-Zertifikat / ÖSD (zu bestätigen)]</span>.',
      lang_more: "Ebenfalls: <strong>Französisch</strong> <em>(zu bestätigen)</em>",

      method_title: "Wie wir unterrichten",
      method_sub: "<em>Text bestätigen / anpassen</em>",
      m1_t: "Kleine Gruppen", m1_d: "Wenige Schüler, damit jeder in jeder Stunde spricht.",
      m2_t: "Praxisnahes Lernen", m2_d: "Rollenspiele, Projekte und kreative Aktivitäten.",
      m3_t: "Prüfungsvorbereitung", m3_d: "Regelmäßige Probeprüfungen und gezieltes Feedback.",
      m4_t: "Fortschrittskontrolle", m4_d: "Regelmäßiger Kontakt mit den Eltern und individuelle Ziele.",

      ages_title: "Für jedes Alter",
      age1_tag: "KINDER", age1_t: "Grundschule", age1_d: "Erster Kontakt mit der Sprache durch Spielen.",
      age2_tag: "JUGENDLICHE", age2_t: "Mittel- & Oberstufe", age2_d: "Ein sicherer Weg zu den Zertifikaten.",
      age3_tag: "ERWACHSENE", age3_t: "Flexible Kurse", age3_d: "Für Beruf, Studium oder Reisen.",
      age4_tag: "INTENSIV", age4_t: "Zertifikat in 1 Jahr", age4_d: "Schnellvorbereitung für B2 &amp; C2.",

      sched_title: "Stundenplan &amp; Anmeldung",
      sched_intro: "Der genaue Stundenplan der Gruppen wird jeden September festgelegt.",
      enrol_label: "ANMELDUNG",
      enrol_value: "Täglich 10:00–12:00 &amp; 18:00–20:00",
      enrol_note: "ab 1. September <em>(zu bestätigen)</em>",
      th_day: "Tag", th_hours: "Unterrichtszeiten",
      day_mon: "Montag", day_tue: "Dienstag", day_wed: "Mittwoch", day_thu: "Donnerstag",
      day_fri: "Freitag", day_sat: "Samstag", day_sun: "Sonntag",
      sched_h_mon: "15:00–21:00 · Gruppen für Kinder, Jugendliche &amp; Erwachsene",
      sched_h_full: "15:00–21:00",
      sched_h_fri: "15:00–20:00",
      sched_h_sat: "Probeprüfungen nach Vereinbarung",
      sched_h_sun: "Geschlossen",
      sched_note: "Beispielhafte Platzhalterzeiten. Durch den echten Stundenplan ersetzen.",

      tst_title: "Was Eltern sagen",
      tst_1: "[Elternzitat, noch hinzuzufügen. Wir können Bewertungen von Facebook / „Adler der Bildung“ übernehmen.]",
      tst_1_by: "Name G. · Elternteil",
      tst_2: "[Absolventenzitat, noch hinzuzufügen. Z. B. Prüfungserfolg, Verhältnis zu den Lehrkräften.]",
      tst_2_by: "Name M. · C2-Absolvent",

      ct_title: "Kontakt",
      ct_sub: "Komm in der Schule vorbei, ruf an oder schreib uns. Wir antworten am selben Tag.",
      ct_addr_label: "ADRESSE", ct_phone_label: "TELEFON", ct_social_label: "SOCIAL",
      form_name: "Vollständiger Name *", form_phone: "Telefon *", form_email: "E-Mail",
      form_lang: "Sprache von Interesse", form_age: "Alter / Klasse des Schülers", form_found: "Wie du uns gefunden hast",
      form_msg: "Deine Nachricht", form_submit: "Senden",
      form_privacy: "Mit dem Senden akzeptierst du die [Datenschutzerklärung].",
      form_thanks: "Danke! Wir melden uns in Kürze bei dir.",

      ft_tagline: "Sprachschule Giannoulatou · Georgiou Papandreou 77, Agioi Anargyroi.",
      ft_rights: "© 2026 Lexis – A. Giannoulatou & Co.",
      ft_pages: "SEITEN", ft_lang: "SPRACHE"
    }
  };

  var SUPPORTED = ["el", "en", "es", "de"];
  var DEFAULT_LANG = "el";
  var STORE_KEY = "lexis_lang";

  /* ---------------------------------------------------------
     i18n
     --------------------------------------------------------- */
  function pickInitialLang() {
    var fromQuery = new URLSearchParams(location.search).get("lang");
    if (fromQuery && SUPPORTED.indexOf(fromQuery) !== -1) return fromQuery;
    try {
      var stored = localStorage.getItem(STORE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        var attr = bits[0] && bits[0].trim();
        var key = bits[1] && bits[1].trim();
        if (attr && key && dict[key] != null) el.setAttribute(attr, stripTags(dict[key]));
      });
    });

    if (dict.meta_title) document.title = stripTags(dict.meta_title);

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function stripTags(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent || d.innerText || "";
  }

  /* ---------------------------------------------------------
     Mobile nav
     --------------------------------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------
     Language buttons (header + footer)
     --------------------------------------------------------- */
  function initLangButtons() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---------------------------------------------------------
     Contact form
     Works out of the box with Netlify Forms when deployed
     there; falls back to a friendly confirmation otherwise.
     --------------------------------------------------------- */
  function initForm() {
    var form = document.querySelector(".contact__form");
    if (!form) return;
    var thanks = form.querySelector(".form-thanks");
    var submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var body = new URLSearchParams(new FormData(form)).toString();
      fetch(form.getAttribute("action") || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
      }).catch(function () { /* offline / not on a host with form handling */ })
        .finally(function () {
          if (thanks) thanks.hidden = false;
          if (submitBtn) submitBtn.disabled = true;
          form.reset();
        });
    });
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  applyLang(pickInitialLang());
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initLangButtons();
    initForm();
  });
})();
