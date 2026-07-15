// ============================================================
//  PULSO 2026 — ARCHIVO DE CONFIGURACIÓN
//  Modificá este archivo para cambiar textos, costos y colores
//  sin tocar el formulario principal.
// ============================================================

const PULSO_CONFIG = {

  // ── APARIENCIA ──────────────────────────────────────────
  colores: {
    principal:   "#6B21A8",   // morado principal
    oscuro:      "#3B0764",   // morado oscuro header
    acento:      "#EAB308",   // amarillo PULSO
    acento2:     "#A855F7",   // violeta medio
    fondo:       "#F9F7FF",   // fondo página
    tarjeta:     "#FFFFFF",   // fondo tarjetas
    texto:       "#1C1033",   // texto principal
    texto2:      "#6B21A8",   // texto secundario
    borde:       "#DDD6FE",   // bordes suaves
  },

  // ── INFORMACIÓN GENERAL ─────────────────────────────────
  evento: {
    nombre:      "PULSO Festival Internacional de Danza",
    edicion:     "8va Edición 2026",
    eslogan:     "¡Vibramos Alto!",
    fechas:      "8 al 14 de Septiembre",
    ciudad:      "Asunción, Paraguay",
    telefono:    "+595986250000",
    email:       "pulsofestivalinternacional@gmail.com",
    instagram:   "@pulsofestival_",
  },

  // ── CONTROL DEL FORMULARIO ──────────────────────────────
  formulario: {
    activo:          true,
    mensaje_cerrado: "Las inscripciones están cerradas por el momento. Seguinos en @pulsofestival_ para novedades.",
    fecha_1er_llamado_cierre: "2026-08-19",
    texto_1er_llamado: "01 de Mayo al 19 de agosto",
    texto_2do_llamado: "20 de agosto hasta cerrar inscripciones",
  },

  // ── COSTOS (en Guaraníes) ────────────────────────────────
  costos: {
    primer_llamado: {
      solista:              200000,
      duo_trio_cuarteto:    150000,
      grupo:                120000,   // 5-10 participantes
      gran_grupo:           100000,   // +10 participantes
      coreografia:          200000,
    },
    segundo_llamado: {
      solista:              250000,
      duo_trio_cuarteto:    180000,
      grupo:                150000,
      gran_grupo:           140000,
      coreografia:          300000,
    },
  },

  // ── BANCO ────────────────────────────────────────────────
  banco: {
    nombre:    "BANCO ITAÚ",
    cuenta:    "300505472",
    titular:   "Pulso Concurso de Danza E.A.S",
    ruc:       "80135550-8",
  },

  // ── CATEGORÍAS ───────────────────────────────────────────
  categorias: [
    { valor: "baby",          label: "Baby (3 a 4 años)" },
    { valor: "mini",          label: "Mini (5 a 6 años)" },
    { valor: "kids1",         label: "Kids I (7 a 8 años)" },
    { valor: "kids2",         label: "Kids II (9 a 12 años)" },
    { valor: "junior",        label: "Junior (13 a 14 años)" },
    { valor: "teens",         label: "Teens (15 a 17 años)" },
    { valor: "senior",        label: "Senior (18 a 25 años)" },
    { valor: "adulto",        label: "Adulto (26 años en adelante)" },
    { valor: "profesional",   label: "Profesionales" },
  ],

  // ── MODALIDADES ──────────────────────────────────────────
  modalidades: [
    "Ballet Clásico Repertorio",
    "Ballet Clásico Libre",
    "Neoclásico",
    "Contemporáneo",
    "Jazz",
    "Técnica Libre",
    "Danza Paraguaya",
    "Danza Española",
    "Folklore Internacional",
    "Acrodance",
    "Libre / Show / Urban",
  ],

  // Sub-estilos condicionales
  subestilos: {
    "Danza Paraguaya": [
      "Tradicional","Con Botellas","Proyección Folklórica 1er Grado",
      "Proyección Folklórica 2do Grado","Proyección Folklórica 3er Grado",
      "Estilización Folklórica","Fantasía Coreográfica"
    ],
    "Danza Española": [
      "Danzas Regionales","Escuela Bolera","Flamenco",
      "Clásico Español","Creaciones Artísticas"
    ],
  },

  // ── INSTITUCIONES (dropdown) ─────────────────────────────
  instituciones: [
    "Academia Ballet Robson Maia & Mechi Gayo",
    "Academia Cien X Ciento Danza",
    "Academia Cooperativa Ñemby",
    "Academia Laura Carles",
    "Academia de Danza Aery Koda",
    "Academia de Danza COFAN LTDA",
    "Academia de Danza Geraldine Doldán",
    "Academia de Danza Janet Magalí",
    "Academia de Danza Pytyvo",
    "Academia de Danza Yeruti",
    "Academia de Danzas Ana Cristina",
    "Academia de Danzas Danzar",
    "Academia de Danzas Elizabeth Vinader",
    "Academia de Danzas GlauDance",
    "Academia de Danzas Patricia Fiandro",
    "Academia de Danzas Paz Benítez",
    "Academia de Danzas Pirouette",
    "Allegro Academia de Danza",
    "Angatupyry, compañía de estudios e interpretación",
    "Antología Danza y Arte",
    "Art District Dance Studio",
    "Arte en Movimiento Studio de Danzas",
    "ArteSpazio Academia de Danza",
    "Ballet Marisol Garay",
    "Belén Molinas Academia de Danzas",
    "Carmen Salinas Estudio de Danzas",
    "Centro de Danzas Jeroky Paraguai",
    "Compasses Escuela de Danza",
    "Conservatorio de Danzas Baila Conmigo",
    "EMD Coronel Oviedo",
    "EMD Luque",
    "Elenco Folclórico Esencia Guarnipitana",
    "Elenco de Danza Ko'eju",
    "Esc. Municipal de Danzas de Ñemby",
    "Escuela Municipal de Danzas IMA Asunción",
    "Escuela de Arte Giuliano Danza y CIA",
    "Escuela de Danzas Marisol Valdez",
    "Escuela de Danzas Nathalia Hermosilla",
    "Escuela de danzas Pykasu Jeroky",
    "Estudio Nicole Dijkhuis",
    "Estudio de Danzas Carmen Acosta",
    "Evolución Dance Studio",
    "Gimnasio Acroartistic",
    "Grupo Movimiento Químico",
    "IFA Medalla Milagrosa",
    "IMA San Lorenzo",
    "Instituto de Arte La Candelaria",
    "Jessica Torres Estudio",
    "Laura Troche Academia de Danza",
    "Leticia Martinez Escuela de Danza",
    "Natalia Valdez Movimientos",
    "Noefer Danzas",
    "Núcleo de Arte y Danza",
    "Orué Danzas",
    "Paz Dance Studio",
    "Petronita Vinader",
    "Positiva Dance",
    "Studio Danza Emepe",
    "Sussy Sacco la Academia",
    "Team Elite Cascanueces",
    "Ángeles",
    "Otra academia (completar nombre abajo)",
  ],

  // ── IMÁGENES DECORATIVAS ─────────────────────────────────
  // Para agregar imágenes entre secciones del formulario:
  // 1. Subí la imagen a Google Drive
  // 2. Clic derecho → "Compartir" → "Cualquier persona con el enlace"
  // 3. Copiá el ID del link (la parte entre /d/ y /view)
  //    Ej: drive.google.com/file/d/  ESTE_ES_EL_ID  /view
  // 4. Pegalo abajo como: "https://drive.google.com/uc?id=ESTE_ES_EL_ID"
  // 5. Guardá y subí el config.js a GitHub
  //
  // Para OCULTAR una imagen dejá el valor en "" (comillas vacías)
  // Para DESACTIVAR todas las imágenes poné: imagenes_activas: false

  imagenes_activas: true,

  imagenes: [
    {
      // Imagen que aparece ANTES de la sección 1 (Institución)
      // Recomendado: flyer principal del evento
      posicion: "antes-sec-1",
      url: "",   // ← pegá acá el link de Google Drive
      alt: "PULSO 2026",
    },
    {
      // Imagen que aparece ENTRE sección 1 y 2 (Coreografía)
      posicion: "antes-sec-2",
      url: "",
      alt: "PULSO 2026 - Cronograma",
    },
    {
      // Imagen que aparece ENTRE sección 2 y 3 (Participantes)
      posicion: "antes-sec-3",
      url: "",
      alt: "PULSO 2026 - Costos",
    },
    {
      // Imagen que aparece ENTRE sección 4 y 5 (Pago)
      posicion: "antes-sec-5",
      url: "",
      alt: "PULSO 2026 - Datos bancarios",
    },
  ],

  // ── GOOGLE APPS SCRIPT (NO MODIFICAR) ───────────────────
 // ── GOOGLE APPS SCRIPT (NO MODIFICAR) ───────────────────
  google_script_url: "https://script.google.com/macros/s/AKfycbwPyOAqrd7.../exec",
}
