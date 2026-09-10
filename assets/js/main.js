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
      meta_desc: "Κέντρο Ξένων Γλωσσών Λέξις Γιαννουλάτου στους Αγίους Αναργύρους. Αγγλικά, Ισπανικά, Γαλλικά για παιδιά, εφήβους και ενήλικες. Βραβευμένο σχολείο, προετοιμασία εξετάσεων ESB.",
      skip: "Μετάβαση στο περιεχόμενο",

      nav_home: "Αρχική", nav_school: "Το Σχολείο", nav_languages: "Γλώσσες",
      nav_exams: "Μέθοδος", nav_schedule: "Ωράριο", nav_contact: "Επικοινωνία",
      nav_cta: "Κλείσε θέση",

      hero_kicker: "Άγιοι Ανάργυροι · Αγγλικά · Ισπανικά · Γαλλικά",
      hero_h1: 'Μάθε ξένες γλώσσες <span class="hl">με τρόπο που σου μένει</span>',
      hero_sub: "Μικρά τμήματα, βιωματικά μαθήματα και σταθερή προετοιμασία για πτυχία. Για παιδιά, εφήβους και ενήλικες.",
      hero_cta1: "Κλείσε δωρεάν αξιολόγηση",
      hero_cta2: "Δες το ωράριο",
      hero_trust: "Βραβευμένο σχολείο · Αετοί της Εκπαίδευσης 2024 · 2025 · 2026",
      card_title: "Το πρόγραμμά μου",
      card_level: "3 μαθήματα / εβδομάδα",

      stat1_v: "3 γλώσσες", stat1_l: "Αγγλικά · Ισπανικά · Γαλλικά",
      awards_title: "Βραβευμένο σχολείο",
      awards_sub: "Επιλογή στους «Αετοί της Εκπαίδευσης» τρεις συνεχόμενες χρονιές.",
      stat2_l: "πιστοποιημένο εξεταστικό κέντρο",
      stat3_v: "έως [6]", stat3_l: "μαθητές ανά τμήμα · <em>επιβεβαίωση</em>",
      stat4_v: "[25]+ χρόνια", stat4_l: "στους Αγίους Αναργύρους · <em>επιβεβαίωση</em>",

      about_title: "Λίγα λόγια για εμάς",
      about_p1: "Το Κέντρο Ξένων Γλωσσών <strong>Λέξις</strong> βρίσκεται στους Αγίους Αναργύρους και διδάσκει Αγγλικά, Ισπανικά και Γαλλικά σε όλες τις ηλικίες. Δουλεύουμε με μικρά τμήματα και σύγχρονες, βιωματικές μεθόδους, με στόχο τη σταθερή πρόοδο και την επιτυχία στις εξετάσεις.",
      about_p2: "<em>Κείμενο placeholder: συμπλήρωσέ το με την ιστορία και τη φιλοσοφία του σχολείου.</em>",
      about_journey: "Από την αξιολόγηση στο πτυχίο",
      about_b1: "Δωρεάν αξιολόγηση επιπέδου",
      about_b2: "Μικρά, βιωματικά τμήματα",
      about_b3: "Συστηματική προετοιμασία εξετάσεων",
      about_b4: "Το πτυχίο σου",

      lang_title: "Διάλεξε τη γλώσσα σου",
      lang_sub: "Από τα πρώτα βήματα μέχρι το πτυχίο C2, με πρόγραμμα που ταιριάζει σε κάθε ηλικία.",
      lang_details: "Επίπεδα",
      lang_en_name: "Αγγλικά",
      lang_en_desc: 'Όλα τα επίπεδα A1–C2. Προετοιμασία για ESB και <span class="muted">[Cambridge, LanguageCert, Michigan (επιβεβαίωση)]</span>.',
      lang_es_name: "Ισπανικά",
      lang_es_desc: 'Όλα τα επίπεδα. Προετοιμασία για <span class="muted">[DELE / LanguageCert USAL esPro (επιβεβαίωση)]</span>.',
      lang_fr_name: "Γαλλικά",
      lang_fr_desc: 'Όλα τα επίπεδα A1–C2. Μαθήματα γαλλικών με έμφαση στην επικοινωνία, την κατανόηση και τη γραφή.',

      method_title: "Πώς μαθαίνουμε",
      method_sub: "<em>επιβεβαίωσε / προσάρμοσε τα κείμενα</em>",
      m1_t: "Μικρά τμήματα", m1_d: "Λίγοι μαθητές, ώστε να μιλάει ο καθένας σε κάθε μάθημα.",
      m2_t: "Βιωματική μάθηση", m2_d: "Παιχνίδια ρόλων, projects και δημιουργικές δράσεις.",
      m3_t: "Προετοιμασία εξετάσεων", m3_d: "Συστηματικές προσομοιώσεις και στοχευμένη ανατροφοδότηση.",
      m4_t: "Παρακολούθηση προόδου", m4_d: "Τακτική επικοινωνία με τους γονείς και ατομικοί στόχοι.",

      ages_title: "Για κάθε ηλικία",
      age1_tag: "ΠΑΙΔΙΑ", age1_t: "&lt;12 χρονών", age1_d: "Πρώτη επαφή με τη γλώσσα μέσα από παιχνίδι.",
      age2_tag: "ΕΦΗΒΟΙ", age2_t: "13–18 χρονών", age2_d: "Σταθερή πορεία προς τα πτυχία.",
      age3_tag: "ΕΝΗΛΙΚΕΣ", age3_t: "19–99+ χρονών", age3_d: "Για δουλειά, σπουδές ή ταξίδι.",
      age4_tag: "ΕΝΤΑΤΙΚΑ", age4_t: "Πτυχία σε 1 έτος", age4_d: "Ταχύρρυθμη προετοιμασία B2 &amp; C2.",

      sched_title: "Ωράριο &amp; εγγραφές",
      sched_intro: "Το αναλυτικό πρόγραμμα των τμημάτων διαμορφώνεται κάθε Σεπτέμβριο.",
      enrol_label: "ΕΓΓΡΑΦΕΣ",
      enrol_value: "Καθημερινά 10:00–12:00 &amp; 18:00–20:00",
      enrol_note: "από 1η Σεπτεμβρίου <em>(επιβεβαίωση)</em>",
      office_open: "Το σχολείο δέχεται επισκέψεις τώρα",
      office_closed: "Δεν θα μπορέσετε να μας βρείτε τώρα, γιατί κάνουμε μάθημα",
      office_resting: "Δεν θα μπορέσετε να μας βρείτε τώρα, γιατί ξεκουραζόμαστε",
      office_closes_in: "Διαθέσιμοι ακόμη για",
      office_opens_in: "Ξανά διαθέσιμοι σε",
      time_h: "ώ.", time_m: "λ.",
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
      meta_desc: "Lexis Giannoulatou language school in Agioi Anargyroi, Athens. English, Spanish and French for children, teenagers and adults. Award-winning school, ESB exam preparation.",
      skip: "Skip to content",

      nav_home: "Home", nav_school: "The School", nav_languages: "Languages",
      nav_exams: "Method", nav_schedule: "Schedule", nav_contact: "Contact",
      nav_cta: "Book now",

      hero_kicker: "Agioi Anargyroi · English · Spanish · French",
      hero_h1: 'Learn a language <span class="hl">in a way that sticks</span>',
      hero_sub: "Small groups, hands-on lessons and steady exam preparation. For children, teenagers and adults.",
      hero_cta1: "Book a free assessment",
      hero_cta2: "See the schedule",
      hero_trust: "Award-winning school · Eagles of Education 2024 · 2025 · 2026",
      card_title: "My timetable",
      card_level: "3 lessons / week",

      stat1_v: "3 languages", stat1_l: "English · Spanish · French",
      awards_title: "An award-winning school",
      awards_sub: "Selected for the “Eagles of Education” three years running.",
      stat2_l: "certified ESB examination centre",
      stat3_v: "up to [6]", stat3_l: "students per class · <em>to confirm</em>",
      stat4_v: "[25]+ years", stat4_l: "in Agioi Anargyroi · <em>to confirm</em>",

      about_title: "A bit about us",
      about_p1: "The <strong>Lexis</strong> language school is based in Agioi Anargyroi and teaches English, Spanish and French to all ages. We work in small groups with modern, hands-on methods, aiming for steady progress and exam success.",
      about_p2: "<em>Placeholder text: fill in with the school's story and philosophy.</em>",
      about_journey: "From assessment to certificate",
      about_b1: "Free level assessment",
      about_b2: "Small, hands-on classes",
      about_b3: "Systematic exam preparation",
      about_b4: "Your certificate",

      lang_title: "Choose your language",
      lang_sub: "From first steps to a C2 certificate, with a programme that fits every age.",
      lang_details: "Levels",
      lang_en_name: "English",
      lang_en_desc: 'All levels A1–C2. Preparation for ESB and <span class="muted">[Cambridge, LanguageCert, Michigan (to confirm)]</span>.',
      lang_es_name: "Spanish",
      lang_es_desc: 'All levels. Preparation for <span class="muted">[DELE / LanguageCert USAL esPro (to confirm)]</span>.',
      lang_fr_name: "French",
      lang_fr_desc: "All levels A1–C2. French courses focused on communication, comprehension and writing.",

      method_title: "How we teach",
      method_sub: "<em>confirm / adjust this copy</em>",
      m1_t: "Small groups", m1_d: "Few students, so everyone speaks in every lesson.",
      m2_t: "Hands-on learning", m2_d: "Role-play, projects and creative activities.",
      m3_t: "Exam preparation", m3_d: "Regular mock exams and targeted feedback.",
      m4_t: "Progress tracking", m4_d: "Regular contact with parents and individual goals.",

      ages_title: "For every age",
      age1_tag: "CHILDREN", age1_t: "&lt;12 years", age1_d: "A first taste of the language through play.",
      age2_tag: "TEENS", age2_t: "13–18 years", age2_d: "A steady path towards certificates.",
      age3_tag: "ADULTS", age3_t: "19–99+ years", age3_d: "For work, studies or travel.",
      age4_tag: "INTENSIVE", age4_t: "Certificate in 1 year", age4_d: "Fast-track preparation for B2 &amp; C2.",

      sched_title: "Schedule &amp; enrolment",
      sched_intro: "The detailed class timetable is set each September.",
      enrol_label: "ENROLMENT",
      enrol_value: "Daily 10:00–12:00 &amp; 18:00–20:00",
      enrol_note: "from 1 September <em>(to confirm)</em>",
      office_open: "The school is open for visits now",
      office_closed: "You won’t be able to reach us right now because we’re teaching",
      office_resting: "You won’t be able to reach us right now because we’re resting",
      office_closes_in: "Reachable for the next",
      office_opens_in: "Reachable again in",
      time_h: "h", time_m: "min",
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
      meta_desc: "Escuela de idiomas Lexis Giannoulatou en Agioi Anargyroi, Atenas. Inglés, español y francés para niños, adolescentes y adultos. Escuela premiada, preparación de exámenes ESB.",
      skip: "Saltar al contenido",

      nav_home: "Inicio", nav_school: "La Escuela", nav_languages: "Idiomas",
      nav_exams: "Método", nav_schedule: "Horario", nav_contact: "Contacto",
      nav_cta: "Reservar",

      hero_kicker: "Agioi Anargyroi · Inglés · Español · Francés",
      hero_h1: 'Aprende idiomas <span class="hl">de una forma que se queda</span>',
      hero_sub: "Grupos reducidos, clases prácticas y preparación constante de exámenes. Para niños, adolescentes y adultos.",
      hero_cta1: "Reserva una evaluación gratis",
      hero_cta2: "Ver el horario",
      hero_trust: "Escuela premiada · Águilas de la Educación 2024 · 2025 · 2026",
      card_title: "Mi horario",
      card_level: "3 clases / semana",

      stat1_v: "3 idiomas", stat1_l: "Inglés · Español · Francés",
      awards_title: "Escuela premiada",
      awards_sub: "Seleccionada en las «Águilas de la Educación» tres años seguidos.",
      stat2_l: "centro examinador ESB certificado",
      stat3_v: "hasta [6]", stat3_l: "alumnos por grupo · <em>por confirmar</em>",
      stat4_v: "[25]+ años", stat4_l: "en Agioi Anargyroi · <em>por confirmar</em>",

      about_title: "Sobre nosotros",
      about_p1: "La escuela de idiomas <strong>Lexis</strong> está en Agioi Anargyroi y enseña inglés, español y francés a todas las edades. Trabajamos en grupos reducidos con métodos modernos y prácticos, buscando un progreso constante y el éxito en los exámenes.",
      about_p2: "<em>Texto de ejemplo: complétalo con la historia y la filosofía de la escuela.</em>",
      about_journey: "De la evaluación al título",
      about_b1: "Evaluación de nivel gratuita",
      about_b2: "Clases reducidas y prácticas",
      about_b3: "Preparación sistemática de exámenes",
      about_b4: "Tu título",

      lang_title: "Elige tu idioma",
      lang_sub: "Desde los primeros pasos hasta el título C2, con un programa para cada edad.",
      lang_details: "Niveles",
      lang_en_name: "Inglés",
      lang_en_desc: 'Todos los niveles A1–C2. Preparación para ESB y <span class="muted">[Cambridge, LanguageCert, Michigan (por confirmar)]</span>.',
      lang_es_name: "Español",
      lang_es_desc: 'Todos los niveles. Preparación para <span class="muted">[DELE / LanguageCert USAL esPro (por confirmar)]</span>.',
      lang_fr_name: "Francés",
      lang_fr_desc: "Todos los niveles A1–C2. Cursos de francés centrados en la comunicación, la comprensión y la escritura.",

      method_title: "Cómo enseñamos",
      method_sub: "<em>confirma / ajusta este texto</em>",
      m1_t: "Grupos reducidos", m1_d: "Pocos alumnos, para que todos hablen en cada clase.",
      m2_t: "Aprendizaje práctico", m2_d: "Juegos de rol, proyectos y actividades creativas.",
      m3_t: "Preparación de exámenes", m3_d: "Simulacros periódicos y correcciones específicas.",
      m4_t: "Seguimiento del progreso", m4_d: "Contacto regular con las familias y objetivos individuales.",

      ages_title: "Para todas las edades",
      age1_tag: "NIÑOS", age1_t: "&lt;12 años", age1_d: "Un primer contacto con el idioma jugando.",
      age2_tag: "ADOLESCENTES", age2_t: "13–18 años", age2_d: "Un camino firme hacia los títulos.",
      age3_tag: "ADULTOS", age3_t: "19–99+ años", age3_d: "Para el trabajo, los estudios o viajar.",
      age4_tag: "INTENSIVO", age4_t: "Título en 1 año", age4_d: "Preparación acelerada para B2 y C2.",

      sched_title: "Horario e inscripciones",
      sched_intro: "El horario detallado de los grupos se fija cada septiembre.",
      enrol_label: "INSCRIPCIONES",
      enrol_value: "A diario 10:00–12:00 y 18:00–20:00",
      enrol_note: "desde el 1 de septiembre <em>(por confirmar)</em>",
      office_open: "La escuela recibe visitas ahora",
      office_closed: "No podrás localizarnos ahora porque estamos dando clase",
      office_resting: "No podrás localizarnos ahora porque estamos descansando",
      office_closes_in: "Disponibles aún durante",
      office_opens_in: "Disponibles de nuevo en",
      time_h: "h", time_m: "min",
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

    fr: {
      meta_title: "Lexis · École de langues | Agioi Anargyroi, Athènes",
      meta_desc: "École de langues Lexis Giannoulatou à Agioi Anargyroi, Athènes. Anglais, espagnol et français pour enfants, adolescents et adultes. École primée, préparation aux examens ESB.",
      skip: "Aller au contenu",

      nav_home: "Accueil", nav_school: "L’école", nav_languages: "Langues",
      nav_exams: "Méthode", nav_schedule: "Horaires", nav_contact: "Contact",
      nav_cta: "Réserver une place",

      hero_kicker: "Agioi Anargyroi · Anglais · Espagnol · Français",
      hero_h1: 'Apprends une langue <span class="hl">pour longtemps</span>',
      hero_sub: "Petits groupes, cours pratiques et préparation régulière aux examens. Pour les enfants, les adolescents et les adultes.",
      hero_cta1: "Réserver une évaluation gratuite",
      hero_cta2: "Voir les horaires",
      hero_trust: "École primée · Aigles de l’Éducation 2024 · 2025 · 2026",
      card_title: "Mon emploi du temps",
      card_level: "3 cours / semaine",

      stat1_v: "3 langues", stat1_l: "Anglais · Espagnol · Français",
      awards_title: "Une école primée",
      awards_sub: "Sélectionnée aux « Aigles de l’Éducation » trois années consécutives.",
      stat2_l: "centre d’examen ESB certifié",
      stat3_v: "jusqu’à [6]", stat3_l: "élèves par groupe · <em>à confirmer</em>",
      stat4_v: "[25]+ ans", stat4_l: "à Agioi Anargyroi · <em>à confirmer</em>",

      about_title: "Quelques mots sur nous",
      about_p1: "L’école de langues <strong>Lexis</strong>, située à Agioi Anargyroi, enseigne l’anglais, l’espagnol et le français à tous les âges. Nous travaillons en petits groupes avec des méthodes modernes et pratiques, pour progresser régulièrement et réussir les examens.",
      about_p2: "<em>Texte provisoire : à compléter avec l’histoire et la philosophie de l’école.</em>",
      about_journey: "De l’évaluation au diplôme",
      about_b1: "Évaluation gratuite du niveau",
      about_b2: "Petits groupes, cours pratiques",
      about_b3: "Préparation régulière aux examens",
      about_b4: "Ton diplôme",

      lang_title: "Choisis ta langue",
      lang_sub: "Des premiers pas au diplôme C2, avec un programme adapté à chaque âge.",
      lang_details: "Niveaux",
      lang_en_name: "Anglais",
      lang_en_desc: 'Tous les niveaux A1–C2. Préparation aux examens ESB et <span class="muted">[Cambridge, LanguageCert, Michigan (à confirmer)]</span>.',
      lang_es_name: "Espagnol",
      lang_es_desc: 'Tous les niveaux. Préparation aux examens <span class="muted">[DELE / LanguageCert USAL esPro (à confirmer)]</span>.',
      lang_fr_name: "Français",
      lang_fr_desc: "Tous les niveaux A1–C2. Cours de français axés sur la communication, la compréhension et l’expression écrite.",

      method_title: "Comment nous apprenons",
      method_sub: "<em>Textes à confirmer ou à adapter</em>",
      m1_t: "Petits groupes", m1_d: "Peu d’élèves, pour que chacun puisse s’exprimer à chaque cours.",
      m2_t: "Apprentissage pratique", m2_d: "Jeux de rôle, projets et activités créatives.",
      m3_t: "Préparation aux examens", m3_d: "Examens blancs réguliers et retours ciblés.",
      m4_t: "Suivi des progrès", m4_d: "Échanges réguliers avec les parents et objectifs individuels.",

      ages_title: "Pour tous les âges",
      age1_tag: "ENFANTS", age1_t: "&lt;12 ans", age1_d: "Découvrir la langue en jouant.",
      age2_tag: "ADOLESCENTS", age2_t: "13–18 ans", age2_d: "Un parcours structuré vers les diplômes.",
      age3_tag: "ADULTES", age3_t: "19–99+ ans", age3_d: "Pour le travail, les études ou les voyages.",
      age4_tag: "INTENSIF", age4_t: "Un diplôme en 1 an", age4_d: "Préparation accélérée aux niveaux B2 et C2.",

      sched_title: "Horaires et inscriptions",
      sched_intro: "Les horaires détaillés des groupes sont fixés chaque septembre.",
      enrol_label: "INSCRIPTIONS",
      enrol_value: "Chaque jour 10:00–12:00 et 18:00–20:00",
      enrol_note: "à partir du 1er septembre <em>(à confirmer)</em>",
      office_open: "L’école accueille les visites maintenant",
      office_closed: "Vous ne pourrez pas nous joindre maintenant, car nous sommes en cours",
      office_resting: "Vous ne pourrez pas nous joindre maintenant, car nous nous reposons",
      office_closes_in: "Joignables encore pendant",
      office_opens_in: "De nouveau joignables dans",
      time_h: "h", time_m: "min",
      th_day: "Jour", th_hours: "Horaires des cours",
      day_mon: "Lundi", day_tue: "Mardi", day_wed: "Mercredi", day_thu: "Jeudi",
      day_fri: "Vendredi", day_sat: "Samedi", day_sun: "Dimanche",
      sched_h_mon: "15:00–21:00 · groupes pour enfants, adolescents et adultes",
      sched_h_full: "15:00–21:00",
      sched_h_fri: "15:00–20:00",
      sched_h_sat: "Examens blancs sur rendez-vous",
      sched_h_sun: "Fermé",
      sched_note: "Horaires donnés à titre d’exemple. À remplacer par les horaires réels.",

      tst_title: "Les avis des parents",
      tst_1: "[Témoignage d’un parent à ajouter. Possibilité de reprendre un avis Facebook ou des « Aigles de l’Éducation ».]",
      tst_1_by: "Nom G. · Parent",
      tst_2: "[Témoignage d’un ancien élève à ajouter : réussite aux examens, relation avec les enseignants, etc.]",
      tst_2_by: "Nom M. · Diplômé C2",

      ct_title: "Contact",
      ct_sub: "Viens nous rencontrer, appelle-nous ou écris-nous. Nous répondons le jour même.",
      ct_addr_label: "ADRESSE", ct_phone_label: "TÉLÉPHONE", ct_social_label: "RÉSEAUX SOCIAUX",
      form_name: "Nom complet *", form_phone: "Téléphone *", form_email: "E-mail",
      form_lang: "Langue souhaitée", form_age: "Âge / classe de l’élève", form_found: "Comment nous as-tu connus ?",
      form_msg: "Ton message", form_submit: "Envoyer",
      form_privacy: "En envoyant ce formulaire, tu acceptes la [Politique de confidentialité].",
      form_thanks: "Merci ! Nous te contacterons très bientôt.",

      ft_tagline: "École de langues Giannoulatou · Georgiou Papandreou 77, Agioi Anargyroi.",
      ft_rights: "© 2026 Lexis – A. Giannoulatou & Co.",
      ft_pages: "PAGES", ft_lang: "LANGUE"
    }
  };

  var SUPPORTED = ["el", "en", "es", "fr"];
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

    updateOfficeStatus();

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

  function initCourseButtons() {
    document.querySelectorAll(".language-button").forEach(function (button) {
      var details = document.getElementById(button.getAttribute("aria-controls"));
      if (!details) return;
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        details.hidden = expanded;
      });
    });
  }

  function athensMinutesNow() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Athens",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(new Date());
    var values = {};
    parts.forEach(function (part) { values[part.type] = Number(part.value); });
    return values.hour * 60 + values.minute + values.second / 60;
  }

  function updateOfficeStatus() {
    var status = document.querySelector("[data-office-status]");
    if (!status) return;
    var flipClock = document.querySelector("[data-office-flip]");
    var dict = I18N[document.documentElement.lang] || I18N[DEFAULT_LANG];
    var now = athensMinutesNow();
    var windows = [[600, 720], [1080, 1200]];
    var current = windows.find(function (window) {
      return now >= window[0] && now < window[1];
    });
    var isOpen = Boolean(current);
    var remaining;
    if (isOpen) {
      remaining = current[1] - now;
    } else if (now < windows[0][0]) {
      remaining = windows[0][0] - now;
    } else if (now < windows[1][0] && now >= windows[0][1]) {
      remaining = windows[1][0] - now;
    } else {
      remaining = 1440 - now + windows[0][0];
    }
    status.dataset.state = isOpen ? "open" : "closed";
    var isResting = now >= 1200 || now < windows[0][0];
    status.querySelector("[data-office-message]").textContent = isOpen
      ? dict.office_open
      : (isResting ? dict.office_resting : dict.office_closed);
    if (flipClock) {
      var rounded = Math.max(1, Math.ceil(remaining));
      var hours = Math.floor(rounded / 60);
      var mins = rounded % 60;
      flipClock.dataset.state = isOpen ? "open" : "closed";
      setFlipValue(flipClock.querySelector("[data-office-hours]"), String(hours).padStart(2, "0"));
      setFlipValue(flipClock.querySelector("[data-office-minutes]"), String(mins).padStart(2, "0"));
      flipClock.querySelector("[data-office-flip-label]").textContent =
        isOpen ? dict.office_closes_in : dict.office_opens_in;
    }
  }

  function setFlipValue(tile, value) {
    if (!tile || tile.textContent === value) return;
    tile.textContent = value;
    tile.classList.remove("is-flipping");
    void tile.offsetWidth;
    tile.classList.add("is-flipping");
  }

  function initOfficeStatus() {
    updateOfficeStatus();
    window.setInterval(updateOfficeStatus, 30000);
  }

  /* ---------------------------------------------------------
     Contact form
     Works out of the box with Netlify Forms when deployed
     there; falls back to a friendly confirmation otherwise.
     --------------------------------------------------------- */
  function initJourney() {
    var track = document.querySelector(".journey__steps");
    if (!track) return;
    var slides = Array.from(track.children);
    var trail = track.parentElement.querySelector(".journey__trail");
    var trailPath = trail && trail.querySelector("path");
    var pagination = document.createElement("div");
    pagination.className = "journey__pagination";
    var buttons = slides.map(function (slide, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", String(index + 1) + " / " + slides.length);
      button.addEventListener("click", function () {
        track.scrollTo({
          left: index * track.clientWidth,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      });
      pagination.appendChild(button);
      return button;
    });
    track.after(pagination);
    function update() {
      var active = Math.round(track.scrollLeft / (track.clientWidth || 1));
      buttons.forEach(function (button, index) {
        button.setAttribute("aria-current", String(index === active));
      });
    }
    function updateTrail() {
      if (!trail || !trailPath || window.matchMedia("(max-width: 700px)").matches) return;
      var trailRect = trail.getBoundingClientRect();
      var points = slides.map(function (slide) {
        var dotRect = slide.querySelector(".journey__dot").getBoundingClientRect();
        return {
          x: ((dotRect.left + dotRect.width / 2 - trailRect.left) / trailRect.width) * 1000,
          y: ((dotRect.top + dotRect.height / 2 - trailRect.top) / trailRect.height) * 390
        };
      });
      var p1 = points[0];
      var p2 = points[1];
      var p3 = points[2];
      var p4 = points[3];
      var topSpan = p2.x - p1.x;
      var bottomSpan = p3.x - p4.x;
      trailPath.setAttribute("d", [
        "M", p1.x, p1.y,
        "C", p1.x + topSpan * .18, p1.y - 24, p1.x + topSpan * .29, p1.y - 8, p1.x + topSpan * .43, p1.y - 31,
        "C", p1.x + topSpan * .62, p1.y - 48, p1.x + topSpan * .87, p2.y - 39, p2.x, p2.y,
        "C", p2.x + 42, p2.y + 44, p3.x + 42, p3.y - 48, p3.x, p3.y,
        "C", p3.x - bottomSpan * .17, p3.y + 31, p3.x - bottomSpan * .31, p3.y + 12, p3.x - bottomSpan * .46, p3.y + 32,
        "C", p3.x - bottomSpan * .65, p3.y + 48, p4.x + bottomSpan * .2, p4.y + 19, p4.x, p4.y
      ].join(" "));
    }
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", function () {
      update();
      updateTrail();
    });
    window.addEventListener("load", updateTrail);
    update();
    updateTrail();
  }

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
    initCourseButtons();
    initJourney();
    initOfficeStatus();
    initForm();
  });
})();
