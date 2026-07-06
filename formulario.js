
// ============================================================
//  PULSO 2026 — ARCHIVO DE CONFIGURACIÓN
//  Modificá este archivo para cambiar textos, costos y colores
//  sin tocar el formulario principal.
// ============================================================

const PULSO_CONFIG = {
  colores: {
    principal:   "#6B21A8",   
    oscuro:      "#3B0764",   
    acento:      "#EAB308",   
    acento2:     "#A855F7",   
    fondo:       "#F9F7FF",   
    tarjeta:     "#FFFFFF",   
    texto:       "#1C1033",   
    texto2:      "#6B21A8",   
    borde:       "#DDD6FE",   
  },
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
  formulario: {
    activo:          true,
    mensaje_cerrado: "Las inscripciones están cerradas por el momento. Seguinos en @pulsofestival_ para novedades.",
    fecha_1er_llamado_cierre: "2026-08-19",
    texto_1er_llamado: "30 de Junio al 19 de Agosto",
    texto_2do_llamado: "20 de Agosto hasta cerrar inscripciones",
  },
  costos: {
    primer_llamado: {
      solista:              240000,
      duo_trio_cuarteto:    180000,
      grupo:                120000,   
      gran_grupo:           100000,   
      coreografia:          250000,
    },
    segundo_llamado: {
      solista:              270000,
      duo_trio_cuarteto:    220000,
      grupo:                150000,
      gran_grupo:           130000,
      coreografia:          350000,
    },
  },
  banco: {
    nombre:    "BANCO ITAÚ",
    cuenta:    "300505472",
    titular:   "Pulso Concurso de Danza E.A.S",
    ruc:       "80135550-8",
  },
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
  ],
  imagenes_activas: true,
  imagenes: [
    {
      posicion: "antes-sec-1",
      url: "",   
      alt: "PULSO 2026",
    },
    {
      posicion: "antes-sec-2",
      url: "",
      alt: "PULSO 2026 - Cronograma",
    },
    {
      posicion: "antes-sec-3",
      url: "",
      alt: "PULSO 2026 - Costos",
    },
    {
      posicion: "antes-sec-5",
      url: "",
      alt: "PULSO 2026 - Datos bancarios",
    },
  ],
  google_script_url: "https://script.google.com/macros/s/AKfycbwPyOAqrd7erAufqriCnds4abcY_TnO9oUM9hibAP5HrOHUBHtIOIjr1c8rvUVcNJG7ew/exec"
};

const DB = {
  "00000000":{"nombre":"ZAIRA OLMEDO","edad":13},
  "1030396":{"nombre":"GLADYS MIRANDA","edad":55},
  "1525016":{"nombre":"MARIA ALFONSO","edad":44},
  "2041710":{"nombre":"WILFRIDO ALVARENGA","edad":53},
  "2091109":{"nombre":"ANA PAULA BENITEZ","edad":12},
  "2858166":{"nombre":"CINTHYA RODRIGUEZ","edad":45},
  "3002242":{"nombre":"CYNTHIA ECHAGÜE","edad":42},
  "3011700":{"nombre":"ANDREA YEGROS","edad":42},
  "3029707":{"nombre":"MARIA SOLEDAD SOSA"},
  "3408113":{"nombre":"BELÉN HERMOSA","edad":32},
  "3648583":{"nombre":"CAMILA CHAPARRO","edad":31},
  "3682188":{"nombre":"LOURDES LEZCANO","edad":42},
  "3777079":{"nombre":"MARÍA JOSÉ RAMÍREZ","edad":30},
  "3797892":{"nombre":"MARISOL MARÍN","edad":34},
  "3807522":{"nombre":"LARA GRANADOS","edad":29},
  "3853116":{"nombre":"ANNABELLA GARCIA","edad":30},
  "4014769":{"nombre":"PAOLA BENITEZ","edad":41},
  "4015943":{"nombre":"AERY KODA","edad":29},
  "4202061":{"nombre":"CAMILA DUARTE","edad":29},
  "4266561":{"nombre":"MONSERRAT RIVAS","edad":29},
  "4268349":{"nombre":"CINDY ADALIZ ESCURRA","edad":29},
  "4319260":{"nombre":"GIULIANA FASSOLO","edad":27},
  "4342942":{"nombre":"ARTURO CASTILLO","edad":38},
  "4357727":{"nombre":"CARMEN","edad":34},
  "4397209":{"nombre":"AXEL KRAUER","edad":26},
  "4404759":{"nombre":"BIANCA BENITEZ","edad":12},
  "4498295":{"nombre":"JORGE BENITEZ","edad":24},
  "4649451":{"nombre":"YAMILA CABAÑAS","edad":25},
  "46677155":{"nombre":"VALENTINA GANGEMI","edad":18},
  "4675749":{"nombre":"PATRICIA MEDINA","edad":30},
  "4744140":{"nombre":"TATIANA RODAS","edad":26},
  "4787609":{"nombre":"ADRIANA MARIEL LOPEZ REYES","edad":29},
  "4795867":{"nombre":"IVAN CENTURION","edad":27},
  "4805756":{"nombre":"ARIANNA SANABRIA","edad":28},
  "4864660":{"nombre":"BELÉN VERA","edad":23},
  "4895463":{"nombre":"ROCIO BENITEZ","edad":27},
  "4925142":{"nombre":"CARLOS QUINTANA","edad":34},
  "4968293":{"nombre":"CAMILA SILGUERO","edad":27},
  "50088689":{"nombre":"PALOMA SILBERBERG","edad":15},
  "5103815":{"nombre":"SHIRLEY RIQUELME","edad":24},
  "5107545":{"nombre":"MONICA BENITEZ","edad":28},
  "5161685":{"nombre":"GIANELLA FASSOLO","edad":22},
  "5179040":{"nombre":"CECILIA LÓPEZ","edad":21},
  "5205080":{"nombre":"IRMA LEZCANO","edad":33},
  "5216274":{"nombre":"VANINA VEGA","edad":23},
  "5248038":{"nombre":"ANTONELLA GAONA","edad":24},
  "5249385":{"nombre":"IVANNA PENAYO","edad":20},
  "5255633":{"nombre":"JESSICA RECALDE","edad":33},
  "5261349":{"nombre":"GRACIELA BERNAL","edad":48},
  "5271281":{"nombre":"KATHERINE SOSA","edad":21},
  "5309696":{"nombre":"AHINOA REINOSO","edad":17},
  "5317801":{"nombre":"ROMINA MAIDANA","edad":24},
  "5344973":{"nombre":"ARIANA FERREIRA","edad":21},
  "5353495":{"nombre":"AILEN TATIANA DUARTE SALZA","edad":24},
  "5360890":{"nombre":"FLAVIA LORENA SILVA BOGADO","edad":23},
  "5371646":{"nombre":"MELANIE BARRETO","edad":11},
  "5384072":{"nombre":"ANGELA AQUINO","edad":25},
  "5396451":{"nombre":"VERÓNICA QUINTO","edad":20},
  "5403711":{"nombre":"PAULA VESPA","edad":21},
  "5414517":{"nombre":"CYNTHIA RIOS","edad":31},
  "5445862":{"nombre":"JAVIER TORRES","edad":28},
  "5478511":{"nombre":"MAGALI ALFONZO","edad":18},
  "5498087":{"nombre":"LETIZIA TABARE C","edad":19},
  "5514989":{"nombre":"MARYAN PEREIRA","edad":20},
  "5538884":{"nombre":"GABRIELA LUJAN BOGADO BOGARIN","edad":20},
  "5539815":{"nombre":"ALCIDES CÁCERES","edad":26},
  "5551582":{"nombre":"SILVANA CUBILLA","edad":20},
  "5572933":{"nombre":"SOFÍA ALEXANDRA ORTIZ VILLAMAYOR","edad":19},
  "5577105":{"nombre":"MILAGROS TORALES","edad":19},
  "5615766":{"nombre":"ALEX IVÁN GOMEZ GARCETE","edad":19},
  "5626104":{"nombre":"ALEXANDER ADORNO","edad":21},
  "5627010":{"nombre":"LUCIA GUTIERREZ","edad":20},
  "5644285":{"nombre":"LUJAN CANTERO","edad":24},
  "564797":{"nombre":"GUILLERMINA ORTEGA","edad":66},
  "5658878":{"nombre":"PAZ SILVA","edad":19},
  "5684997":{"nombre":"MIRIAN ROSANA GONZÁLEZ JARA","edad":18},
  "5693530":{"nombre":"PAULA CANDIA","edad":20},
  "5706333":{"nombre":"AYLEN AGUERO","edad":18},
  "5707131":{"nombre":"TATIANA BELÉN GIMÉNEZ NOGUERA","edad":20},
  "57287996":{"nombre":"LIA FRANCO","edad":9},
  "5730162":{"nombre":"AILIN MENDOZA","edad":21},
  "5758320":{"nombre":"TAMARA MONSERRATH FERNÁNDEZ BURGOS","edad":18},
  "5765311":{"nombre":"ALANIS PEÑA","edad":19},
  "5778905":{"nombre":"LUANA ISASI","edad":19},
  "5808850":{"nombre":"ANDREA VIVEROS","edad":20},
  "5818601":{"nombre":"JAVIER GARCIA","edad":17},
  "5823382":{"nombre":"CAMILA ARACELI ROMÁN CABRERA","edad":20},
  "5842834":{"nombre":"MAYLEN BENITEZ","edad":18},
  "5858731":{"nombre":"ARAMI PAIVA","edad":25},
  "5860448":{"nombre":"LUCIANA DUARTE","edad":17},
  "5863713":{"nombre":"LUCIANA GONZALEZ","edad":17},
  "5869630":{"nombre":"FERNANDA LUGO","edad":19},
  "5888913":{"nombre":"IVÁN GUILLEN","edad":24},
  "5893506":{"nombre":"YANINA GONZÁLEZ","edad":17},
  "5907902":{"nombre":"MORENA INÉS BERTOTTO LEDESMA","edad":18},
  "5908650":{"nombre":"JUAN ACOSTA","edad":18},
  "5927504":{"nombre":"BIANCA PAZ JAZMÍN CANTERO","edad":21},
  "5932559":{"nombre":"PAULA MENCIA","edad":17},
  "59334345":{"nombre":"INDIRA COLLADO CASTROMAN","edad":13},
  "5958982":{"nombre":"CAMILA BALMACEDA","edad":20},
  "5959194":{"nombre":"BELEN RAMIREZ","edad":19},
  "5961584":{"nombre":"PAULINA SANTOS GAYO","edad":18},
  "5966141":{"nombre":"JORGUE CABALLERO","edad":25},
  "5974314":{"nombre":"JESUS VIVEROS","edad":17},
  "59823326":{"nombre":"CLARA DUPUY","edad":13},
  "5984834":{"nombre":"DANA PAREDEZ","edad":19},
  "5986636":{"nombre":"SERENA MENDOZA","edad":17},
  "5994221":{"nombre":"VALENTINA LIRD","edad":18},
  "5997766":{"nombre":"ARTURO GOMEZ","edad":17},
  "6008072":{"nombre":"AYANE ISHIBASHI","edad":17},
  "6023606":{"nombre":"LUJAN VEGA","edad":17},
  "6037806":{"nombre":"CARLOS ROMERO","edad":17},
  "6039055":{"nombre":"FABIANA ESPINOLA","edad":17},
  "6039477":{"nombre":"MARÍA PAZ ESPINOLA MAYO","edad":18},
  "6041045":{"nombre":"SHAKIRA SOSA","edad":19},
  "6045735":{"nombre":"ADRIANA MARIA MONSERRATH BURGOS ENCISO","edad":17},
  "6050692":{"nombre":"ANGELICA GIMÉNEZ","edad":17},
  "6055416":{"nombre":"MAIA ARACELI ARAMI JOUBERT ACOSTA","edad":17},
  "6060387":{"nombre":"RUTH DAHIANA RODRÍGUEZ AGUIRRE","edad":21},
  "6087596":{"nombre":"AMALIA ACOSTA","edad":17},
  "6089545":{"nombre":"ANA SALET SILVA LEDESMA","edad":18},
  "6091915":{"nombre":"TATIANA LEZCANO","edad":17},
  "6091916":{"nombre":"JONHATAN LEZCANO","edad":17},
  "6114898":{"nombre":"SOFIA ROLON","edad":18},
  "6114925":{"nombre":"SAYRA PÉREZ MENDOZA","edad":17},
  "6117500":{"nombre":"SOL MARIA JOSÉ CUBILLA","edad":17},
  "6127839":{"nombre":"ISABEL SAITE NOTARIO GARAYO","edad":17},
  "6129269":{"nombre":"LUCIA KOVACKS","edad":17},
  "6130439":{"nombre":"SOFIA GOMEZ","edad":17},
  "6135732":{"nombre":"LUNA GONZALEZ","edad":17},
  "6144038":{"nombre":"ARIEL PÁEZ","edad":20},
  "6151549":{"nombre":"FIORELLA GALEANO","edad":17},
  "6152408":{"nombre":"ANDREA MARTINEZ","edad":18},
  "6153436":{"nombre":"DALMA ARANDA","edad":17},
  "6155373":{"nombre":"Josefina Odonne","edad":15},
  "6157123":{"nombre":"PAZ MONSERRATH SITZMANN TROCHE","edad":18},
  "6157154":{"nombre":"MILAGROS PEREIRA","edad":18},
  "6157708":{"nombre":"SANDRA VERONIKA LEGUIZAMÓN MEDINA","edad":20},
  "6158342":{"nombre":"JAZMIN RAMOS","edad":18},
  "6163317":{"nombre":"ANTONELLA VALLEJOS","edad":17},
  "6166781":{"nombre":"TANIA ROTELA","edad":18},
  "6169505":{"nombre":"KATHERINE MARTINEZ","edad":20},
  "6169727":{"nombre":"JONATHAN FUNES","edad":17},
  "6171342":{"nombre":"NAYELI MONTIEL","edad":17},
  "6174160":{"nombre":"ERIKA PANZA","edad":16},
  "6183080":{"nombre":"MIA RUIZ","edad":16},
  "6183951":{"nombre":"ALEJANDRA VIVIANA BARBOZA FERNANDEZ","edad":17},
  "6186085":{"nombre":"CECILIA DURÁN LEITE","edad":19},
  "6186350":{"nombre":"JOHANA SOLIANI","edad":16},
  "6192440":{"nombre":"MARTINA CIZ","edad":16},
  "6192451":{"nombre":"PAZ ORTIZ","edad":17},
  "6195989":{"nombre":"JOHANA DA SILVA","edad":16},
  "6205727":{"nombre":"ANA VALERIA BAEZ RAMIREZ","edad":16},
  "6209453":{"nombre":"ANA OZUNA","edad":17},
  "6217225":{"nombre":"TOMMY ALVARENGA","edad":17},
  "6224647":{"nombre":"JOHANA MARICEL DUARTE OJEDA","edad":16},
  "6254003":{"nombre":"SERGIO PAVON","edad":16},
  "6256327":{"nombre":"ANGELICA ORTIZ","edad":16},
  "6258305":{"nombre":"DAHIANA PIZZURNO","edad":16},
  "6258406":{"nombre":"LUHANA RUIZ DIAZ","edad":17},
  "6261402":{"nombre":"MERYLIN PARRA","edad":16},
  "6261445":{"nombre":"BIANCA OLAVARRIETA","edad":17},
  "6263701":{"nombre":"MILAGROS MARÍA JESÚS RODRIGUEZ CÁCERES","edad":17},
  "6285506":{"nombre":"AILÉN VICTORIA MOLINAS ROLÓN","edad":19},
  "6286123":{"nombre":"VICTORIA CRICCO","edad":16},
  "6293722":{"nombre":"LUJÁN GONZALEZ","edad":16},
  "6298458":{"nombre":"NOELIA LUCIANA GUTIERREZ ZAYAS","edad":17},
  "6307913":{"nombre":"MIA NOGUERA","edad":17},
  "6311542":{"nombre":"ANABELLA OVELAR","edad":15},
  "6318171":{"nombre":"PAOLO ADORNO","edad":17},
  "6320153":{"nombre":"SEBASTIAN NUÑEZ","edad":16},
  "6327351":{"nombre":"SARAH BAREIRO","edad":20},
  "6337325":{"nombre":"NAHIARA ARAMI CÁCERES AMARO","edad":16},
  "6351940":{"nombre":"MILAGROS MENDOZA","edad":16},
  "6355421":{"nombre":"MARIANGEL MEDINA","edad":17},
  "6356578":{"nombre":"MATHIAS LEZCANO","edad":17},
  "6361397":{"nombre":"LUZ QUIÑONEZ","edad":17},
  "6371109":{"nombre":"GIOVANA EMILIA ROJAS NUÑEZ","edad":16},
  "6378037":{"nombre":"IVANNA DIEZ PÉREZ","edad":17},
  "6500562":{"nombre":"SOFÍA AYELEN AGUERO RODRIGUEZ","edad":16},
  "6500754":{"nombre":"VIANCA RAMÍREZ","edad":16},
  "6501013":{"nombre":"THAIS AYELEN RUIZ OTAZÚ","edad":16},
  "6503018":{"nombre":"GUADALUPE MARÍA RAMIREZ MALLORQUÍN","edad":17},
  "6506504":{"nombre":"VALENTINA MARTINEZ","edad":16},
  "6508882":{"nombre":"ALISSON CAÑETE","edad":15},
  "6512743":{"nombre":"CIELO BOGADO","edad":16},
  "6515195":{"nombre":"MICHELL BABAÑOLI","edad":16},
  "6523425":{"nombre":"MARA VALLEJOS","edad":17},
  "6527556":{"nombre":"Khiara Hug De Belmont","edad":16},
  "6535173":{"nombre":"TATIANA CARDOZO","edad":17},
  "6536280":{"nombre":"KAMILA GONZÁLEZ","edad":20},
  "6539816":{"nombre":"VANYA TROCHE","edad":16},
  "6540300":{"nombre":"Agustina Arrua","edad":14},
  "6546876":{"nombre":"GIANNINA PAIVA","edad":16},
  "6560763":{"nombre":"ORNELLA GÓMEZ","edad":17},
  "6561871":{"nombre":"YAMILETH MARTÍNEZ","edad":20},
  "6564318":{"nombre":"Iara Florencia Pineda Caballero","edad":16},
  "6565714":{"nombre":"MARIAN VIERA","edad":15},
  "6566502":{"nombre":"CARLOS JESÚS MISAEL","edad":15},
  "6572613":{"nombre":"VALENTINA CENTURIÓN","edad":15},
  "6574445":{"nombre":"SOFIA GALEANO","edad":16},
  "6592261":{"nombre":"GABRIELA BRUN","edad":16},
  "6592967":{"nombre":"ANHELY VILLALBA","edad":15},
  "6595102":{"nombre":"NAHIARA BOLÓ","edad":17},
  "6599555":{"nombre":"JENNIFER ESTECHE","edad":17},
  "6599916":{"nombre":"FERNANDA ABIGAIL BENITEZ BOGADO","edad":19},
  "6601822":{"nombre":"LUANA GONZÁLEZ","edad":16},
  "6603441":{"nombre":"MARIS FE BACHERO","edad":17},
  "6605780":{"nombre":"SOFÍA VALDÉZ","edad":16},
  "6609481":{"nombre":"THAIS BOGARIN","edad":16},
  "6610736":{"nombre":"KADDY SEGOVIA","edad":22},
  "6614241":{"nombre":"VALENTINA CANTERO","edad":16},
  "6619975":{"nombre":"FIORELLA NÚÑEZ","edad":18},
  "6627062":{"nombre":"KATHYA MARTÍNEZ","edad":18},
  "6633543":{"nombre":"LUCIA ACOSTA","edad":15},
  "6633598":{"nombre":"Isabella Kent","edad":15},
  "6634089":{"nombre":"Muriel Alvarez","edad":15},
  "6634385":{"nombre":"AYESA ZUELI CAÑIZA OVELAR","edad":15},
  "6641235":{"nombre":"BIANCA VALENTINA LOPEZ BARRETO","edad":16},
  "6645440":{"nombre":"GUADALUPE ESPÍNOLA","edad":15},
  "6653386":{"nombre":"Lucero González","edad":15},
  "6656555":{"nombre":"DANNA FIORELLA CRISTALDO AGUILERA","edad":15},
  "6657847":{"nombre":"PRINSCE ALEGRE","edad":15},
  "6676669":{"nombre":"FIORELLA BENÍTEZ","edad":16},
  "6691844":{"nombre":"PAZ ANTONELLA ESPÍNOLA PRIETO","edad":16},
  "6692576":{"nombre":"LUNA PEREZ","edad":16},
  "6692815":{"nombre":"ROCIO MARIÑO","edad":15},
  "6695021":{"nombre":"MARCOS ELIAS","edad":15},
  "6699606":{"nombre":"EZEQUIEL BOGADO","edad":27},
  "6699666":{"nombre":"ADA ANTÚNEZ","edad":15},
  "6701734":{"nombre":"MARIAM GARCIA","edad":19},
  "6723810":{"nombre":"VALERIA RIVEROS","edad":15},
  "6732439":{"nombre":"DALIA CABRERA","edad":15},
  "6734219":{"nombre":"DAHIANA GONZÁLEZ","edad":14},
  "673537":{"nombre":"LIZZETH AGUILERA","edad":15},
  "6735866":{"nombre":"NICOLE KRAUSS","edad":15},
  "6738592":{"nombre":"LUJÁN BENÍTEZ","edad":17},
  "6741766":{"nombre":"SOFÍA BUENO","edad":15},
  "6745614":{"nombre":"TELMA SIOMARA ALMIRÓN CÁCERES","edad":15},
  "6749387":{"nombre":"REBE SANCHEZ","edad":17},
  "6754213":{"nombre":"Dulce Ortellado","edad":15},
  "6760912":{"nombre":"JULIETA LARROSA","edad":14},
  "6760977":{"nombre":"LUANA CASTILLO","edad":15},
  "6766407":{"nombre":"FRANCO JOAQUÍN BENITEZ GALEANO","edad":15},
  "6766429":{"nombre":"AMIRA LEIVA","edad":15},
  "6770557":{"nombre":"DAHIANA MARIANI","edad":16},
  "6773386":{"nombre":"LUCIA MARTINEZ","edad":15},
  "6777599":{"nombre":"MELANY TRINIDAD","edad":15},
  "6784506":{"nombre":"FIORELLA ACOSTA","edad":16},
  "6794157":{"nombre":"BELÉN LÓPEZ","edad":16},
  "6799050":{"nombre":"PALOMA BORIS","edad":15},
  "6808581":{"nombre":"Paula Mezler","edad":14},
  "6813139":{"nombre":"SOFÍA FERREIRA","edad":14},
  "6813379":{"nombre":"ALEJANDRA GONZALEZ","edad":16},
  "6815828":{"nombre":"CAROLINA BENÍTEZ","edad":17},
  "6816193":{"nombre":"DENISSE DÍAZ","edad":14},
  "6816436":{"nombre":"Lucila Fernandez","edad":15},
  "6824862":{"nombre":"KEIMI ESCOBAR","edad":14},
  "6838124":{"nombre":"ANTONELLA MOREL","edad":14},
  "6861535":{"nombre":"SOFÍA RODRÍGUEZ","edad":14},
  "6870588":{"nombre":"ANAHI CESPEDES","edad":14},
  "6871034":{"nombre":"ISABELLA BARRIOS","edad":15},
  "6872794":{"nombre":"VANINA UGARTE","edad":14},
  "6878240":{"nombre":"LUANA PAREDES","edad":14},
  "6887515":{"nombre":"GAVIOTA GIMÉNEZ","edad":14},
  "6891716":{"nombre":"RANIA TORRES","edad":14},
  "6892225":{"nombre":"MIYU TAKAOKA","edad":19},
  "6896021":{"nombre":"SOFIA BENITEZ","edad":14},
  "6896992":{"nombre":"ROSET GENES","edad":14},
  "6901603":{"nombre":"JUDITH ROSALES","edad":14},
  "6902401":{"nombre":"KATYA GIMÉNEZ","edad":16},
  "6919159":{"nombre":"Sofhia Alegre","edad":20},
  "6920258":{"nombre":"ALINE BALBUENA","edad":12},
  "6921929":{"nombre":"STEPHANIA DEL PUERTO","edad":14},
  "6923677":{"nombre":"AINARA CABRAL","edad":15},
  "6925952":{"nombre":"ROSARIO CAFFA","edad":14},
  "6933748":{"nombre":"Dulce Acosta","edad":14},
  "6935084":{"nombre":"AYELEN VALDEZ","edad":14},
  "6936596":{"nombre":"AYLÍN SAMIRA DOMÍNGUEZ VERÓN","edad":17},
  "6943494":{"nombre":"MARIA PAZ GLAVINICH","edad":12},
  "6943731":{"nombre":"SOFÍA GODOY","edad":16},
  "6963856":{"nombre":"DAFNE LUANA CABRAL RIVAROLA","edad":14},
  "6964013":{"nombre":"SOFÍA BETHARRAM BARRIOS","edad":14},
  "6965091":{"nombre":"NIEVE RECALDE","edad":14},
  "6965185":{"nombre":"FERNANDA RECALDE","edad":16},
  "6967751":{"nombre":"IVANNA NUÑEZ","edad":16},
  "6968201":{"nombre":"EMMA BOGARÍN","edad":14},
  "6973300":{"nombre":"ALLISON PIMIENTA","edad":15},
  "6985271":{"nombre":"JULIANA SUAREZ","edad":14},
  "6990763":{"nombre":"KATHIA CANDADO","edad":16},
  "7004546":{"nombre":"NAIA FIORELLA MENDRIA BOGADO","edad":14},
  "7006766":{"nombre":"NAHIR VEGA","edad":14},
  "7008340":{"nombre":"Isabella Solalinde","edad":13},
  "7013288":{"nombre":"SIOMARA GUERRERO","edad":14},
  "7014058":{"nombre":"NAELY DUARTE","edad":18},
  "7015579":{"nombre":"SAMIRA ESPEJO","edad":14},
  "7016068":{"nombre":"PAULA MICHELLE SIERICH","edad":13},
  "7017176":{"nombre":"NAYELI ARÉVALOS","edad":13},
  "7018474":{"nombre":"Micaela Olmedo","edad":13},
  "7025020":{"nombre":"ANGELES GÓMEZ","edad":14},
  "7026994":{"nombre":"Zaira Landa","edad":14},
  "7028061":{"nombre":"DEBORAH CENTURION","edad":14},
  "7031621":{"nombre":"ENZO LUGO","edad":17},
  "7034664":{"nombre":"NADIA QUIÑONEZ","edad":13},
  "7036910":{"nombre":"CECILIA VILLALBA","edad":13},
  "7042242":{"nombre":"FABIANA VALLEJOS","edad":17},
  "7043894":{"nombre":"MARIAN GONZALEZ","edad":14},
  "7043941":{"nombre":"DAMIAN GONZALEZ","edad":14},
  "7044315":{"nombre":"LUCIANA LÓPEZ","edad":16},
  "7046069":{"nombre":"LUCIANA ALVARIZA","edad":14},
  "7046078":{"nombre":"ODILIA AYALA","edad":17},
  "7050676":{"nombre":"JADE ALMEIDA","edad":12},
  "7050730":{"nombre":"ZARA ALTEMBURGUER","edad":14},
  "7051189":{"nombre":"ARIANNE JAROLIN","edad":15},
  "7054352":{"nombre":"VALERIA DENIS","edad":17},
  "7055017":{"nombre":"YAMILA GARAYO","edad":13},
  "7055841":{"nombre":"GÉNESIS ALVAREZ","edad":12},
  "7057691":{"nombre":"ASIR ANAKARLA RÍOS DUARTE","edad":18},
  "7063222":{"nombre":"FIORELLA FARIÑA","edad":16},
  "7063987":{"nombre":"SOPHIA MAZÓ DA SILVA","edad":15},
  "7064573":{"nombre":"MARÍA ISABELLA ADORNO JARA","edad":13},
  "7065405":{"nombre":"SOFÍA ALVARENGA","edad":15},
  "7068115":{"nombre":"MONTSERRAT VELÁZQUEZ","edad":15},
  "7068836":{"nombre":"MICAELA ARGUELLO","edad":13},
  "7069975":{"nombre":"MAGALÍ GONZÁLEZ","edad":17},
  "7070319":{"nombre":"CONSTANZA MENDOZA","edad":15},
  "7070329":{"nombre":"AYLEEN AYALA","edad":14},
  "7080520":{"nombre":"MIA OCAMPO","edad":17},
  "7086184":{"nombre":"Ana Domínguez","edad":13},
  "7094098":{"nombre":"ALEXANDER RUBEN YEGROS GOMEZ","edad":16},
  "7095117":{"nombre":"XIMENA BARRIOS SOLER","edad":16},
  "7099053":{"nombre":"ALEJANDRA MARTINEZ","edad":13},
  "7100713":{"nombre":"SABRINA BENÍTEZ","edad":14},
  "7103553":{"nombre":"BELLA VAZQUEZ","edad":13},
  "7106775":{"nombre":"Isabella Avila","edad":13},
  "7109466":{"nombre":"Natalia Wollmeister","edad":13},
  "7112240":{"nombre":"ANA PAULA ARROYO","edad":13},
  "7112421":{"nombre":"VALENTINA LEDESMA","edad":16},
  "7116392":{"nombre":"CIELO LÓPEZ","edad":14},
  "7121006":{"nombre":"Fiorella Baranda","edad":15},
  "7122283":{"nombre":"MICAELA AILÉN RODRÍGUEZ GONZÁLEZ","edad":13},
  "7123160":{"nombre":"ABIGAIL PERELLO","edad":14},
  "7128047":{"nombre":"JACK GOMEZ","edad":17},
  "7137595":{"nombre":"BÁRBARA SANABRIA","edad":12},
  "7140910":{"nombre":"MARIA SOL","edad":17},
  "7151188":{"nombre":"ALEJANDRO GARCÍA","edad":18},
  "7157117":{"nombre":"FLORENCIA BAEZ","edad":13},
  "7164695":{"nombre":"ZAIRA JIMENA DOMÍNGUEZ ARMOA","edad":13},
  "7189140":{"nombre":"REBECA FIGUEROA LORCA","edad":16},
  "7202885":{"nombre":"VIOLETA ELIZECHE","edad":13},
  "7212618":{"nombre":"KEILY TURLAN","edad":13},
  "7216724":{"nombre":"SAMIRA AYALA","edad":13},
  "7220594":{"nombre":"JULIETA RECALDE","edad":13},
  "7221729":{"nombre":"GISELLA DOMINGUES","edad":13},
  "7222302":{"nombre":"HANNA ANTONELLA GAMARRA BOGADO","edad":14},
  "7222757":{"nombre":"SAMIRA SALEH","edad":14},
  "7223253":{"nombre":"FIORELLA MOTTA","edad":14},
  "7224473":{"nombre":"ANGELES ALVAREZ","edad":16},
  "7225976":{"nombre":"FIORELLA SANCHEZ","edad":17},
  "7228769":{"nombre":"ANABELLA MARÍA CRISTINA MACHUCA MENA","edad":13},
  "7233954":{"nombre":"Luana Recalde","edad":13},
  "7238200":{"nombre":"ZAIRA OLMEDO","edad":13},
  "7239574":{"nombre":"DANNA GARCIA","edad":13},
  "7240501":{"nombre":"VALENTINA AGUILAR","edad":15},
  "7242759":{"nombre":"GIOVANNA SANTOS","edad":14},
  "7247536":{"nombre":"DAHIANA OZORIO","edad":16},
  "7248195":{"nombre":"ARAMI ORZUSA FRETES","edad":13},
  "7250212":{"nombre":"ROSA GÓMEZ","edad":13},
  "7252250":{"nombre":"MORENA ENCISO","edad":17},
  "7254606":{"nombre":"IAN SERVÍN WINS","edad":13},
  "7255554":{"nombre":"AINHOA MIRANDA","edad":15},
  "7258865":{"nombre":"XIMENA DUARTE","edad":10},
  "7261447":{"nombre":"PAOLA ABIGAIL SEGOVIA FARIÑA","edad":16},
  "7261802":{"nombre":"LUCÍA CUBILLA","edad":13},
  "7271603":{"nombre":"PAZ NOGUERA","edad":13},
  "7272910":{"nombre":"SAMIRA MARIETTE LARA BENÍTEZ","edad":13},
  "7278909":{"nombre":"Aldana Chaparro","edad":12},
  "7280702":{"nombre":"HIELLEN ARANDA","edad":14},
  "7281463":{"nombre":"BARBARA OCAMPOS","edad":12},
  "7287689":{"nombre":"MARÍA JOSÉ ACEVAL","edad":13},
  "7289317":{"nombre":"MARIA PAZ YANHO","edad":12},
  "7290371":{"nombre":"ARAMI FARIÑA","edad":15},
  "7291304":{"nombre":"BELINDA PEREZ","edad":12},
  "7291488":{"nombre":"MARTINA NOGUERA","edad":14},
  "7292104":{"nombre":"FIORELLA ANALI ALMIRÓN CABALLERO","edad":16},
  "7293688":{"nombre":"PAULINA FIGUEREDO","edad":13},
  "7294758":{"nombre":"Celeste Galeano","edad":17},
  "7295384":{"nombre":"XIMENA GARCIA","edad":13},
  "7301987":{"nombre":"FIORELLA FRANCO","edad":14},
  "7305700":{"nombre":"ÁMBAR OJEDA","edad":13},
  "7309191":{"nombre":"LUANA CUBILLA","edad":13},
  "7312677":{"nombre":"FIORELLA PERALTA","edad":16},
  "73133973":{"nombre":"LUCIANA QUINTANA","edad":15},
  "7313852":{"nombre":"FIORELLA AYALA","edad":12},
  "7316869":{"nombre":"ANA FRANCO","edad":13},
  "7317584":{"nombre":"PAULA GOMEZ","edad":13},
  "7321642":{"nombre":"ASARELA ELIZABETH SILVA","edad":13},
  "7326713":{"nombre":"NAHIR ARRIOLA","edad":13},
  "7328176":{"nombre":"INGRID NAHER","edad":12},
  "7328288":{"nombre":"CATALINA PORZIO","edad":14},
  "7328621":{"nombre":"Anabella Sanchez","edad":14},
  "7335039":{"nombre":"VIOLETA BRITEZ","edad":12},
  "7336862":{"nombre":"XIMENA ZHAMIRA IRALA","edad":13},
  "7338800":{"nombre":"JACQUELINE DUARTE","edad":13},
  "7339363":{"nombre":"ABBY RUIZ DIAZ","edad":14},
  "7342316":{"nombre":"MILAGROS VILLAMAYOR","edad":13},
  "7351476":{"nombre":"BELÉN MONTIEL","edad":15},
  "7351496":{"nombre":"SOL MARIA FLORENTIN","edad":12},
  "7351719":{"nombre":"ENRIQUETA PEÑA BENZA","edad":12},
  "7352070":{"nombre":"AYELEN BARRIOS","edad":16},
  "7356845":{"nombre":"HEIDY VERA","edad":12},
  "7362941":{"nombre":"ALESSIA CRISCIONI","edad":12},
  "7363911":{"nombre":"NADIA FIORELLA MARÍA CÁCERES ALDERETE","edad":16},
  "7368129":{"nombre":"Barbara Benitez","edad":15},
  "7370160":{"nombre":"EMILY FRANCO","edad":12},
  "7373963":{"nombre":"NUAR BITTAR","edad":13},
  "7388044":{"nombre":"DAHIANA ESTIGARRIBIA","edad":12},
  "7394347":{"nombre":"XIMENA MARÍA JOSÉ CANTERO MONZÓN","edad":16},
  "7394902":{"nombre":"NICOLE DICK","edad":12},
  "7402217":{"nombre":"SOFIA BELÉN LÓPEZ ARGUELLO","edad":13},
  "7405153":{"nombre":"PAULA CACERES","edad":14},
  "7408401":{"nombre":"BELEN CESPEDES","edad":17},
  "7417950":{"nombre":"MIA IVONNE QUIÑONEZ BENÍTEZ","edad":12},
  "7421811":{"nombre":"LUANA SANABRIA","edad":13},
  "7425949":{"nombre":"MARIA CANELA","edad":12},
  "7426278":{"nombre":"GIULIANA LORENA GARCIA","edad":13},
  "74378889":{"nombre":"ISABELLA BARRIOS","edad":12},
  "7441027":{"nombre":"ALINA EISSLER","edad":12},
  "7441068":{"nombre":"RAMON ROBLES","edad":13},
  "7447684":{"nombre":"MARIANA PAREDES","edad":12},
  "7455780":{"nombre":"ZAIRA SOFÍA SOSA VERA","edad":12},
  "7460122":{"nombre":"FIORELLA ROLÓN","edad":13},
  "7464398":{"nombre":"DANNA MIRANDA","edad":12},
  "7465015":{"nombre":"Leslye Zelada","edad":11},
  "7467250":{"nombre":"HAYDEÉ IBAÑEZ","edad":12},
  "7467709":{"nombre":"SARITA ACUÑA","edad":12},
  "7470977":{"nombre":"SOFIA FLORENTIN","edad":16},
  "7472872":{"nombre":"RENATA OJEDA","edad":13},
  "7476818":{"nombre":"FLORENCIA ACOSTA CANO","edad":12},
  "7477134":{"nombre":"MARÍA ISABEL GONZÁLEZ","edad":13},
  "7480174":{"nombre":"RENATA MALVETTI","edad":13},
  "7482053":{"nombre":"SOFÍA ORTIZ CARAVACA","edad":12},
  "7483848":{"nombre":"MARLY ROBLES","edad":11},
  "7489802":{"nombre":"ZOÉ CHAMORRO","edad":11},
  "7491611":{"nombre":"ROSA GALI","edad":12},
  "7492245":{"nombre":"ANDREA MAGALI MENDRIA AYALA","edad":13},
  "7494173":{"nombre":"ALEXIS LEIVA","edad":12},
  "7494913":{"nombre":"MICAELA GONZALEZ","edad":12},
  "7496000":{"nombre":"DANNA MUÑOZ","edad":12},
  "7496220":{"nombre":"LUANA MORINIGO","edad":13},
  "7500817":{"nombre":"MARIAM VERA","edad":13},
  "7500871":{"nombre":"MARIAM VERA","edad":13},
  "7501499":{"nombre":"SANTIAGO JIMENEZ","edad":12},
  "7504936":{"nombre":"AGUSTINA OLMEDO","edad":11},
  "7506000":{"nombre":"EMMA ORTIZ","edad":11},
  "7506071":{"nombre":"Michelle Villalba","edad":16},
  "7506644":{"nombre":"LUCÍA ANABELLA VILLALBA","edad":12},
  "7508629":{"nombre":"MARIA PIA RODRIGUEZ","edad":12},
  "7508711":{"nombre":"DANA MICAELA PEÑA","edad":12},
  "7512260":{"nombre":"MILAGROS INSFRÁN","edad":12},
  "7513198":{"nombre":"MARIA PAULA RECALDE","edad":14},
  "7516198":{"nombre":"MARIA PAULA RECALDE","edad":14},
  "7517144":{"nombre":"MILENA RIVEROS","edad":13},
  "7519186":{"nombre":"FARAH MARIA DEL CARMEN FROMHERZ DUARTE","edad":12},
  "7525093":{"nombre":"Marilia Britez","edad":15},
  "7525395":{"nombre":"ERNESTINA CRISTALDO","edad":12},
  "7526369":{"nombre":"JEMINA LÓPEZ","edad":15},
  "7527125":{"nombre":"EVOLET SERVÍN","edad":12},
  "7527376":{"nombre":"AMIRA SARDI","edad":13},
  "7527785":{"nombre":"LUCIA CABALLERO","edad":12},
  "7528257":{"nombre":"ARTURO BENÍTEZ","edad":12},
  "7535489":{"nombre":"ALEJANDRA ISMAJOVICH","edad":11},
  "7536265":{"nombre":"JONATHAN GIMENEZ","edad":16},
  "7536603":{"nombre":"MARÍA JOSÉ VALIENTE","edad":15},
  "7537623":{"nombre":"LARA LUSICHI","edad":12},
  "7538623":{"nombre":"LARA LUSICHI","edad":12},
  "7539656":{"nombre":"Chiara Ferrari","edad":12},
  "7539861":{"nombre":"ANGÉLICA MONGELOS","edad":16},
  "7542474":{"nombre":"VALENTINA RIOS","edad":12},
  "7543989":{"nombre":"GRETCHEN ARHENS","edad":12},
  "7544591":{"nombre":"ZAIRA ANDINO","edad":12},
  "7544672":{"nombre":"LUJAN CHÁVEZ","edad":11},
  "7544772":{"nombre":"CAMILA ACOSTA","edad":13},
  "7547140":{"nombre":"LUANA GALEANO","edad":12},
  "7547934":{"nombre":"ALANA SORIA","edad":11},
  "7553441":{"nombre":"ABIGAIL INSFRAN","edad":12},
  "7556607":{"nombre":"MARÍA VALERIA SANDOVAL VAZQUEZ","edad":12},
  "7557658":{"nombre":"HANNA MAITE RODRIGUEZ MEDINA","edad":12},
  "7559761":{"nombre":"REGINA GALEANO","edad":11},
  "7566815":{"nombre":"PAULA GAMARRA","edad":13},
  "7568760":{"nombre":"MAYLEN ABIGAIL IBARRA RIVEROS","edad":11},
  "7572860":{"nombre":"VALERIA SOSA","edad":11},
  "7576041":{"nombre":"SAYUMI SOTO","edad":12},
  "7576087":{"nombre":"Jennifer Velázquez","edad":21},
  "7586596":{"nombre":"MARTINA OCAMPO","edad":11},
  "7587193":{"nombre":"ALEXA WYSOCKI","edad":12},
  "7588957":{"nombre":"EMMA MARTÍNEZ","edad":11},
  "7596068":{"nombre":"MILAGROS PANIAGUA","edad":15},
  "7599357":{"nombre":"REGINA FLORENTIN","edad":11},
  "7602264":{"nombre":"MAITE AYALA","edad":14},
  "7617135":{"nombre":"JAZMIN ESCOBAR","edad":12},
  "7630036":{"nombre":"MELANI GODOY","edad":11},
  "7632696":{"nombre":"Alai Sosa","edad":11},
  "7637218":{"nombre":"ISABELLA CUEVAS","edad":11},
  "7641172":{"nombre":"LUCIANA RECALDE","edad":16},
  "7643253":{"nombre":"Antonella Cardozo","edad":11},
  "7644324":{"nombre":"ZAIRA GODOY","edad":12},
  "7645015":{"nombre":"LESLYE MICAELA ZELADA PORTILLO","edad":11},
  "7649749":{"nombre":"Jade Medina","edad":11},
  "7649818":{"nombre":"FIORELLA JARA","edad":14},
  "7653758":{"nombre":"PAULA FLORENTIN","edad":11},
  "7656205":{"nombre":"YERUTI CAÑETE","edad":11},
  "7656745":{"nombre":"ISABELLA GIMENEZ","edad":11},
  "7670137":{"nombre":"KATHERINE BENITEZ","edad":11},
  "7670877":{"nombre":"GIULIANA ALBERTINI SOTOMAYOR","edad":11},
  "7673186":{"nombre":"KEITTY ANTAR","edad":11},
  "7673525":{"nombre":"NAHIARA ESPINOLA","edad":12},
  "7673591":{"nombre":"NAHOMI OJEDA","edad":11},
  "7677984":{"nombre":"AGUSTINA CABALLERO","edad":11},
  "7683475":{"nombre":"MILENA LÓPEZ","edad":11},
  "7686355":{"nombre":"LÍA PINEDA","edad":11},
  "7690281":{"nombre":"GIULIANA SANTACRUZ","edad":11},
  "7691387":{"nombre":"Sophia Ratzlaff","edad":12},
  "7691626":{"nombre":"OLIVIA STEFANICH","edad":11},
  "769164":{"nombre":"SONIA INSFRAN","edad":13},
  "7696310":{"nombre":"GENESIS LISBOA","edad":9},
  "7697111":{"nombre":"SOFIA OCAMPOS","edad":11},
  "7702940":{"nombre":"Victoria Jazmín Tonina Urquhart","edad":12},
  "7705120":{"nombre":"ALEXIA KNORR","edad":10},
  "7709798":{"nombre":"DULCE GALEANO","edad":13},
  "7712938":{"nombre":"ISABELLA MORENO","edad":11},
  "7713156":{"nombre":"MELANNIE ENCINA","edad":11},
  "7713622":{"nombre":"JHOSELYN GIRET","edad":15},
  "7713887":{"nombre":"LUJAN SANTACRUZ","edad":11},
  "7719778":{"nombre":"Arellys Gill","edad":10},
  "7723026":{"nombre":"DANIELA PEREIRA","edad":12},
  "7724939":{"nombre":"VALENTINA ALMIRON","edad":11},
  "7725012":{"nombre":"MILAGROS CABRERA","edad":13},
  "7727649":{"nombre":"SOLANGE VILLALBA","edad":11},
  "7727828":{"nombre":"Luana García","edad":10},
  "7730688":{"nombre":"JULIETA FIANDRO NICORA","edad":11},
  "7736312":{"nombre":"JULIETTE NOGUER","edad":11},
  "7737098":{"nombre":"Martina Cornet Barreto","edad":12},
  "7737229":{"nombre":"CECILIA MARTINEZ","edad":10},
  "7748897":{"nombre":"ANNA BUKACZEK","edad":11},
  "7751667":{"nombre":"AURORA MORINIGO","edad":10},
  "7752365":{"nombre":"VALERIA QUIROGA","edad":9},
  "7753064":{"nombre":"BENJAMIN OLMEDO","edad":11},
  "7755013":{"nombre":"SOFÍA TORRES","edad":13},
  "7757540":{"nombre":"CAMILA RODAS","edad":17},
  "7757830":{"nombre":"SASKIABENITEZ","edad":10},
  "7761050":{"nombre":"ZULMY GARAY","edad":11},
  "7761311":{"nombre":"YULIANA BRACHO","edad":15},
  "7761322":{"nombre":"NICOLE FLORES","edad":11},
  "7767479":{"nombre":"AGUSTINA MARTINEZ","edad":9},
  "77690281":{"nombre":"GIULIANA SANTACRUZ","edad":11},
  "77724717":{"nombre":"BERENICE DEJESÚS","edad":10},
  "7772857":{"nombre":"KHIARA SOSA","edad":11},
  "7774217":{"nombre":"BERENICE DEJESÚS","edad":10},
  "7775583":{"nombre":"CIELO AQUINO","edad":11},
  "7776371":{"nombre":"MIA ELIZABETH CARDOZO SAMANIEGO","edad":11},
  "7776893":{"nombre":"ANTONELLA GONZÁLEZ","edad":14},
  "7778876":{"nombre":"FIORELLA NUÑEZ","edad":10},
  "7794315":{"nombre":"ARAMI HEISECKE","edad":10},
  "7797480":{"nombre":"BIANCA SOTELO","edad":10},
  "7799027":{"nombre":"Keyla Croskey","edad":10},
  "7801068":{"nombre":"MILAGROS ARANDA","edad":10},
  "7802667":{"nombre":"CRISTOPHER FERNANDEZ","edad":11},
  "7803037":{"nombre":"SOFIA RAMIREZ","edad":14},
  "7804250":{"nombre":"LERYN MENDOZA","edad":12},
  "7805516":{"nombre":"ANDREA IRALA","edad":10},
  "7805885":{"nombre":"PAULINA AVEIRO GONZÁLEZ","edad":10},
  "7810150":{"nombre":"ANABELA TORRES","edad":10},
  "7810639":{"nombre":"FIORELLA MONZÓN ADORNO","edad":14},
  "7810693":{"nombre":"FIORELLA MONZÓN ADORNO","edad":14},
  "7812185":{"nombre":"SOFÍA BRIZUELA","edad":11},
  "7812277":{"nombre":"MONTSERRAT ORTIZ","edad":11},
  "7820048":{"nombre":"ANNA BELLA GOMEZ ENRIQUEZ","edad":10},
  "7825623":{"nombre":"GIOVANNA OCAMPOS","edad":10},
  "7833216":{"nombre":"MARIANELLA CONSTANTINI","edad":10},
  "7833646":{"nombre":"AGUSTINA OVELAR","edad":11},
  "7835765":{"nombre":"MARIA JOSE AGUERO","edad":11},
  "7835787":{"nombre":"NAHIARA MELGAREJO","edad":10},
  "7841278":{"nombre":"MAYRA FERNÁNDEZ","edad":10},
  "7843187":{"nombre":"GIOVANNA BERGONZI","edad":10},
  "7843558":{"nombre":"JORGE ALVARENGA","edad":18},
  "7844345":{"nombre":"DAHIANA FRANCO","edad":11},
  "7849028":{"nombre":"ALEXANDRA FLEITAS","edad":10},
  "7854304":{"nombre":"NAYELI GONZALEZ","edad":10},
  "7857725":{"nombre":"SHANA PIRIS","edad":11},
  "7859662":{"nombre":"GABRIELA LISETTE PERALTA CENTURIÓN","edad":10},
  "7867774":{"nombre":"MIA MARISOL MEZA","edad":12},
  "7868594":{"nombre":"MARIA SOL AQUINO","edad":10},
  "7868694":{"nombre":"Edith Escobar","edad":10},
  "7871044":{"nombre":"LIZ BRITEZ","edad":12},
  "7874254":{"nombre":"MONSERRAT SILVA","edad":11},
  "7878863":{"nombre":"RENATHA LOPEZ","edad":10},
  "7881311":{"nombre":"SOFÍA NUÑEZ","edad":10},
  "7884732":{"nombre":"ZAMIRA RIVAS","edad":10},
  "7891498":{"nombre":"JANETH ROTELA","edad":14},
  "7894592":{"nombre":"FIORELLA CANDIA","edad":12},
  "7901156":{"nombre":"MARIA PAZ GILL","edad":10},
  "7902256":{"nombre":"CANDELARIA LOPEZ","edad":12},
  "7904158":{"nombre":"NAIARA AMARILLA","edad":12},
  "7910655":{"nombre":"Nathaly Piñanez","edad":12},
  "7911465":{"nombre":"ALEJANDRA DOMINGUEZ","edad":10},
  "7911974":{"nombre":"BIANCA ELIZECHE","edad":12},
  "7917288":{"nombre":"SOL RAMIREZ JARA","edad":9},
  "7917799":{"nombre":"ANA PAULA GIMENEZ","edad":10},
  "7919955":{"nombre":"Amaia Viera","edad":10},
  "7926844":{"nombre":"SOL GONZÁLEZ","edad":10},
  "7933813":{"nombre":"MONTSERRAT SORDE","edad":14},
  "7937049":{"nombre":"SOFIA ZARZA","edad":14},
  "7939380":{"nombre":"MARIA FERNANDA GALEANO","edad":10},
  "7943091":{"nombre":"NICOL RIOS","edad":12},
  "7943445":{"nombre":"GEORGIA LUCIA FONTANA REGUERA","edad":10},
  "7943494":{"nombre":"ASHLEY GODOY","edad":11},
  "7946118":{"nombre":"KARLA RUIZ","edad":10},
  "7953739":{"nombre":"Fausto Mendoza","edad":12},
  "7955344":{"nombre":"Gabriela Nuñez","edad":10},
  "7958110":{"nombre":"JOSELYN MENDOZA","edad":11},
  "7958915":{"nombre":"ERNESTINA ABENTE","edad":9},
  "7959878":{"nombre":"PATRICIA AYALA","edad":10},
  "7964024":{"nombre":"MARIA EMILIA SARDI","edad":10},
  "7966452":{"nombre":"EMMA HAITTER","edad":10},
  "7968501":{"nombre":"MIKAELA OJEDA","edad":12},
  "7970441":{"nombre":"Milenna Zoe Riveros Duarte","edad":12},
  "7970889":{"nombre":"ALAIA ACHUCARRO","edad":10},
  "7971454":{"nombre":"FIORELLA PIMIENTA","edad":10},
  "7971944":{"nombre":"JHOAQUINA LOPEZ","edad":10},
  "7974443":{"nombre":"LAIA FONTCLARA","edad":10},
  "7974538":{"nombre":"ANTONELLA SOSA","edad":10},
  "7979543":{"nombre":"GIOVANA VARELA","edad":10},
  "7980767":{"nombre":"VALENTINA DIAZ","edad":9},
  "7981020":{"nombre":"ANA CAMPERCHIOLI","edad":9},
  "7982757":{"nombre":"JEANNETTE ORTIZ","edad":10},
  "7982759":{"nombre":"GIULIANA BENÍTEZ","edad":13},
  "7983878":{"nombre":"LUCIANA SERVIN","edad":11},
  "7984592":{"nombre":"FIORELLA CANDIA","edad":12},
  "7989285":{"nombre":"JOSEFINA DE BRIX","edad":8},
  "7991005":{"nombre":"VICTORIA BROWN","edad":10},
  "7991959":{"nombre":"LUISANA BENITEZ","edad":11},
  "7994376":{"nombre":"SOPHIA BENITEZ","edad":11},
  "7997753":{"nombre":"AINHOA LÓPEZ","edad":13},
  "7998325":{"nombre":"AGUSTINA LAFUENTE","edad":14},
  "8000159":{"nombre":"HELEN ALVAREZ","edad":10},
  "8001788":{"nombre":"Ivanna Florentin","edad":10},
  "8003513":{"nombre":"DEYANIRA RAMIREZ","edad":11},
  "8008223":{"nombre":"MIA VILLALBA","edad":11},
  "8019137":{"nombre":"XIMENA ORUE","edad":9},
  "8027776":{"nombre":"Bethania Moran","edad":9},
  "8035237":{"nombre":"LANNA BORDÓN","edad":9},
  "8053767":{"nombre":"CAMILA BELÉN GALEANO AGÜERO","edad":9},
  "8054777":{"nombre":"TIZZIANA LEON","edad":9},
  "8057339":{"nombre":"THAIS GALEANO","edad":10},
  "8061474":{"nombre":"BRENDA RODRIGUEZ","edad":9},
  "8061688":{"nombre":"IVANNA ANAHI ARMOA GONZÁLEZ","edad":12},
  "8065674":{"nombre":"CAMILA GAUNA","edad":12},
  "8069930":{"nombre":"KIARA BERDEJO","edad":13},
  "8074096":{"nombre":"FERNANDA GONZÁLEZ MACHUCA","edad":9},
  "8081710":{"nombre":"ISABELLA PORTILLO","edad":10},
  "8082236":{"nombre":"MARA ANAHI ROMERO OJEDA","edad":10},
  "8082414":{"nombre":"Nicole Tracerra","edad":16},
  "8088246":{"nombre":"OLIVIA SAGUIER","edad":10},
  "8089409":{"nombre":"DELFINA RONCO","edad":9},
  "8093977":{"nombre":"CARLOTTA CASACCIA","edad":9},
  "8096173":{"nombre":"PAULA ALVARENGA","edad":9},
  "8097919":{"nombre":"ALEJANDRA SANABRIA","edad":9},
  "8102598":{"nombre":"FACUNDO PERALTA","edad":10},
  "8103727":{"nombre":"CHLOE GÓMEZ","edad":9},
  "8105267":{"nombre":"NAHUEL LARRAMENDIA","edad":9},
  "8106344":{"nombre":"MIRANDA BENITEZ","edad":9},
  "8106871":{"nombre":"PAULA VALLEJOS","edad":9},
  "8107479":{"nombre":"LUJÁN RIVEROS","edad":11},
  "8113973":{"nombre":"ISABELLA VERA","edad":9},
  "8119574":{"nombre":"MONTSERRATH  GONZÁLEZ","edad":9},
  "8122045":{"nombre":"ANA PAULA BENÍTEZ","edad":8},
  "8124566":{"nombre":"ROSALÍA ALMADA","edad":11},
  "8125553":{"nombre":"JAZMIN PAREDES","edad":9},
  "8126138":{"nombre":"EMILIA FILIPINI","edad":9},
  "8136315":{"nombre":"GIULIA FIORIO","edad":9},
  "8136329":{"nombre":"EDMA AYALA","edad":10},
  "8139229":{"nombre":"ÁMBAR VELAZCO","edad":9},
  "8143331":{"nombre":"ÁMBAR GONZÁLEZ","edad":8},
  "8146978":{"nombre":"NAHIARA HERMOSILLA","edad":9},
  "8148424":{"nombre":"EMMA MORINIGO","edad":10},
  "8150814":{"nombre":"ANNA PAULA PAREDES","edad":9},
  "8151017":{"nombre":"OLLIE SANO","edad":8},
  "8155150":{"nombre":"MARTINA CASTILLO","edad":10},
  "8155847":{"nombre":"NICOL CESPEDES","edad":10},
  "8158794":{"nombre":"ISABELLA BENZA","edad":10},
  "8158862":{"nombre":"VANINA AYALA","edad":9},
  "8159885":{"nombre":"MARÍA FERNANDA ROJAS","edad":8},
  "8163154":{"nombre":"JOSIAS GIMENEZ","edad":17},
  "8164380":{"nombre":"LARA RODRÍGUEZ","edad":9},
  "8165251":{"nombre":"MILAGROS RIVEROS","edad":8},
  "8165844":{"nombre":"ALEXA RECALDE","edad":9},
  "8167873":{"nombre":"ZOE BENITEZ","edad":10},
  "8167887":{"nombre":"MARIANA AMARILLA","edad":9},
  "8170310":{"nombre":"AYLEN NICOLE HASEITEL MASEK","edad":9},
  "8179077":{"nombre":"ALFREDO GIMENEZ","edad":17},
  "8180439":{"nombre":"ZOE VALENTINA VEGA FERNANDEZ","edad":8},
  "8183038":{"nombre":"Gianna Zanotti","edad":8},
  "8183583":{"nombre":"FIORELLA BENITEZ","edad":11},
  "8185661":{"nombre":"FANNY ROMINA GALEANO OLMEDO","edad":10},
  "8188164":{"nombre":"ALINNE SANCHEZ","edad":8},
  "8193198":{"nombre":"GIULIANNA RECALDE","edad":8},
  "8197792":{"nombre":"ZOE BENÍTEZ","edad":9},
  "8198403":{"nombre":"AYLEN GALEANO","edad":9},
  "8202981":{"nombre":"SOFIA GEBHARD","edad":8},
  "8204305":{"nombre":"LADY VANESSA FERNÁNDEZ CENTURIÓN","edad":14},
  "8208584":{"nombre":"AGUSTINA CORNET BARRETO","edad":9},
  "8208866":{"nombre":"MÍA AQUINO","edad":8},
  "8219918":{"nombre":"SARAH TORRES","edad":8},
  "8222667":{"nombre":"ISABELLA JARA","edad":8},
  "8222890":{"nombre":"SHAIEL AMARILLA","edad":9},
  "8224523":{"nombre":"GIULIA GUANES","edad":8},
  "8227098":{"nombre":"MIA CANDIA","edad":11},
  "8228019":{"nombre":"SANTIAGO JARA","edad":8},
  "8229446":{"nombre":"ABIGAIL GOROSTIAGA","edad":8},
  "8232926":{"nombre":"MACCARENA AZCONA","edad":9},
  "8234120":{"nombre":"SIENNA FLEISCHMAN","edad":8},
  "8237291":{"nombre":"JULIA DE OLIVEIRA","edad":8},
  "8240039":{"nombre":"FIORELLA ADRIAN","edad":8},
  "8243824":{"nombre":"Bruna Pavanello","edad":8},
  "8244841":{"nombre":"CIRIA FERREIRA","edad":9},
  "8246840":{"nombre":"VICTORIA MÉNDEZ","edad":8},
  "8248117":{"nombre":"MISTICA ALVARENGA","edad":10},
  "8248937":{"nombre":"LIDANA BENÍTEZ","edad":11},
  "8251438":{"nombre":"JULIETA MARELLI","edad":7},
  "8256082":{"nombre":"SOL BÁEZ","edad":9},
  "8256688":{"nombre":"ZOE ROLÓN","edad":8},
  "8259347":{"nombre":"ALANA FIGUEROA","edad":9},
  "8260391":{"nombre":"AYLEN FERNÁNDEZ","edad":8},
  "8265084":{"nombre":"IVANNA MIÑO","edad":8},
  "8275860":{"nombre":"LUNA RAMÍREZ","edad":10},
  "8281801":{"nombre":"JIMENA GIMÉNEZ","edad":8},
  "8286567":{"nombre":"THAIS FRANCO","edad":9},
  "8289096":{"nombre":"SOFÍA TORRES","edad":9},
  "8290481":{"nombre":"ARAMI ROMAN","edad":9},
  "8291305":{"nombre":"SAMIRA GIMENEZ","edad":8},
  "8291588":{"nombre":"Gina Ferrari","edad":7},
  "8292024":{"nombre":"MIA CORREA","edad":10},
  "8298686":{"nombre":"DANNA CUELLAR","edad":11},
  "8301323":{"nombre":"UMA BIEDERMANN","edad":8},
  "8301358":{"nombre":"ARIANNY MARTÍNEZ","edad":8},
  "8302227":{"nombre":"LUCIANA OVIEDO","edad":8},
  "8302549":{"nombre":"EVELYN DUARTE","edad":15},
  "8303418":{"nombre":"EMMA VEGA","edad":8},
  "8305989":{"nombre":"ALEJANDRA GULLÓN","edad":8},
  "8310915":{"nombre":"NICOLE FRANCO","edad":10},
  "8314218":{"nombre":"FIORELLA GIMENEZ","edad":7},
  "8318196":{"nombre":"PAULA BENITEZ","edad":7},
  "8319008":{"nombre":"ALANIS GOMEZ","edad":9},
  "8321429":{"nombre":"Abigail Espinola","edad":8},
  "8323081":{"nombre":"HANNA OLIVEIRA","edad":9},
  "8323084":{"nombre":"EMMA OLIVEIRA","edad":9},
  "8324415":{"nombre":"MIA LOVSIN","edad":7},
  "8324808":{"nombre":"DANIELA INSFRAN","edad":7},
  "8330584":{"nombre":"MORENA ALVARENGA","edad":8},
  "8332298":{"nombre":"LUCIA MARIA PAZ COLMAN JULIO","edad":8},
  "8333147":{"nombre":"ANA PAULA VÁZQUEZ","edad":7},
  "8334840":{"nombre":"VALENTINA JARA","edad":8},
  "833585":{"nombre":"TIFFANY TORRES","edad":8},
  "8345114":{"nombre":"PÍA HARTELSBERGER","edad":8},
  "8346665":{"nombre":"Belen Ramírez","edad":9},
  "8347533":{"nombre":"FABRICIO NICOLAS MARTINEZ MARTINEZ","edad":7},
  "8348590":{"nombre":"SOFÍA ORTIZ","edad":9},
  "8349953":{"nombre":"MILENA DUARTE","edad":8},
  "8351735":{"nombre":"BETHARRAM VAESKEN","edad":7},
  "8352276":{"nombre":"SOFIA SAMANIEGO","edad":9},
  "8356294":{"nombre":"SAMIRA CANAS","edad":15},
  "8356563":{"nombre":"Amelie Painetru","edad":7},
  "8357387":{"nombre":"ANA FIORELLA GONZÁLEZ TROCHE","edad":13},
  "8361724":{"nombre":"ARIADNA ROMÁN","edad":7},
  "8367718":{"nombre":"Lucia Galeano","edad":7},
  "8368482":{"nombre":"MARTINA GONZALEZ","edad":9},
  "8371637":{"nombre":"IRIS ROJAS","edad":8},
  "8371673":{"nombre":"IRIS ROJAS","edad":8},
  "8375564":{"nombre":"SOFIA CASC0","edad":9},
  "8380167":{"nombre":"GEMA BRACHO","edad":9},
  "8381068":{"nombre":"ALEJANDRA CORREA","edad":8},
  "8382978":{"nombre":"GRETTEL VERA","edad":7},
  "8413084":{"nombre":"AMIRA MONGELOS","edad":8},
  "8439618":{"nombre":"SOFIA PERALTA","edad":7},
  "8443090":{"nombre":"MAITE AYALA","edad":12},
  "8451898":{"nombre":"JAZMÍN VILLAR OJEDA","edad":7},
  "8459286":{"nombre":"ALAIA FLECHA","edad":7},
  "8460825":{"nombre":"EMA CONSTANZA LUQUE PATIÑO","edad":7},
  "8462828":{"nombre":"AMBAR OTAZU","edad":7},
  "8463712":{"nombre":"ABIGAIL MENDOZA","edad":8},
  "8474902":{"nombre":"Candela Mereles","edad":8},
  "8475307":{"nombre":"THAIS LUGO","edad":9},
  "8481005":{"nombre":"SALVADOR TORRES TORRES","edad":7},
  "8481642":{"nombre":"RENATA MONGELÓS","edad":7},
  "8482838":{"nombre":"JOSEFINA VILLAMAYOR","edad":8},
  "8490901":{"nombre":"ALLEGRA ROCA","edad":6},
  "8490959":{"nombre":"LUCIANA PORTILLO","edad":7},
  "8498024":{"nombre":"HEIDI MASSI","edad":8},
  "8498540":{"nombre":"Mila Sosa","edad":8},
  "8498925":{"nombre":"ÁMBAR DE ISASA","edad":7},
  "8499005":{"nombre":"VANESSA ALEXANDRA DÁVALOS","edad":7},
  "8499300":{"nombre":"SARAH MARTINEZ","edad":9},
  "8499303":{"nombre":"CONSTANZA JARA","edad":7},
  "8500250":{"nombre":"Gala Gebhardt","edad":14},
  "8502539":{"nombre":"ARANZA GONZALEZ","edad":8},
  "8503627":{"nombre":"FIORELLA GOMEZ","edad":10},
  "8504361":{"nombre":"ISABELLA VARGAS","edad":8},
  "8506071":{"nombre":"Genesis González","edad":11},
  "8510638":{"nombre":"ROUX AQUINO","edad":10},
  "8522663":{"nombre":"Julieta Martínez Espínola","edad":7},
  "8527052":{"nombre":"ALEXANDRA CESPEDES","edad":10},
  "8529572":{"nombre":"FIORELLA MOLINAS","edad":6},
  "8539511":{"nombre":"ALEXA MABEL  BRITEZ MENDOZA","edad":7},
  "8549476":{"nombre":"YLIANA AGOSTINA GARCÍA ROJAS","edad":8},
  "8557061":{"nombre":"EMMA SANTANDER","edad":7},
  "8568745":{"nombre":"VALENTINA MARTINEZ","edad":7},
  "8569766":{"nombre":"GENESIS TORRES","edad":8},
  "8572856":{"nombre":"JOSEPHINE STEPHANIE ZALAZAR","edad":9},
  "8581039":{"nombre":"ZOE RUIZ DÍAZ","edad":5},
  "8581396":{"nombre":"ASTRID BACHERO","edad":9},
  "8600605":{"nombre":"EMMA TORRES","edad":7},
  "8607436":{"nombre":"TIXIANA LETICIA CASCO TORRES","edad":7},
  "8636531":{"nombre":"CONSTANZA CABAÑAS","edad":7},
  "8648223":{"nombre":"ANTONELLA BURGOS","edad":9},
  "8649694":{"nombre":"LOURDES RAMOS","edad":10},
  "8654750":{"nombre":"NAYELI ALGARIN","edad":6},
  "8655175":{"nombre":"DANNA DOLDÁN","edad":7},
  "8656193":{"nombre":"LISA ZELADA","edad":12},
  "8658297":{"nombre":"ALESSIA GONZÁLEZ","edad":5},
  "8686069":{"nombre":"MARTINA IBÁÑEZ","edad":8},
  "8735230":{"nombre":"STEFANIA CASCO","edad":9},
  "8746592":{"nombre":"EVELIN CHANG","edad":9},
  "8746593":{"nombre":"EMILY CHANG","edad":10},
  "8760905":{"nombre":"EMMA NICOLE FERNÁNDEZ ARECO","edad":7},
  "8762703":{"nombre":"PAULA GAMARRA","edad":8},
  "8770206":{"nombre":"CONSTANZA SOLEDAD GAMARRA RODRIGUEZ"},
  "8784043":{"nombre":"XIMENA OSSORIO","edad":4},
  "8788045":{"nombre":"ARLEN GONZÁLEZ","edad":5},
  "8800167":{"nombre":"SARA CORTAZA","edad":8},
  "8805059":{"nombre":"OLIVIA LLAMOSAS","edad":3},
  "8816367":{"nombre":"AMELIA CANDIA","edad":3},
  "8817056":{"nombre":"MÍSTICA ANTONELLA NOGUERA OJEDA","edad":7},
  "8837048":{"nombre":"ORIANA VEIRANO","edad":5},
  "8859272":{"nombre":"BRENDA VILLALBA","edad":8},
  "8885055":{"nombre":"SEINY LOPEZ AGUILERA","edad":7},
  "8897752":{"nombre":"ALESSA LÓPEZ","edad":8},
  "8900807":{"nombre":"DEYSI SANCHEZ","edad":49},
  "8927937":{"nombre":"EMMA ALICE CABALLERO","edad":7},
  "8946963":{"nombre":"LUANA VILLASBOA","edad":10},
  "8954396":{"nombre":"MÍA COLLEONI","edad":12},
  "8954397":{"nombre":"SOFÍA COLLEONI","edad":15},
  "8978536":{"nombre":"ALEJANDRA ESCURRA","edad":3},
  "9009333":{"nombre":"CANDELA SANDOVAL","edad":7},
  "9016152":{"nombre":"ALANA BAZÁN","edad":8},
  "9107173":{"nombre":"CONSTANZA RECALDE","edad":8},
  "9118642":{"nombre":"MÍA VÉRA","edad":5},
  "9220288":{"nombre":"Angeles Gamarra","edad":19},
  "SINCI_ABEL_RIVAROLA":{"nombre":"ABEL RIVAROLA","edad":29},
  "SINCI_ABIGAIL":{"nombre":"ABIGAIL"},
  "SINCI_ABIGAIL_CRISTALDO":{"nombre":"ABIGAIL CRISTALDO","edad":10},
  "SINCI_ABIGAIL_ESTIGARRIBIA":{"nombre":"ABIGAIL ESTIGARRIBIA","edad":12},
  "SINCI_AGNES_CACERES":{"nombre":"AGNES CACERES","edad":7},
  "SINCI_AGOSTINA_ALEGRE":{"nombre":"AGOSTINA ALEGRE","edad":7},
  "SINCI_AGOSTINA_G_MEZ":{"nombre":"AGOSTINA GÓMEZ","edad":15},
  "SINCI_AGUSTINA_CANTERO":{"nombre":"AGUSTINA CANTERO","edad":14},
  "SINCI_AILA_MONTORI":{"nombre":"AILA MONTORI","edad":16},
  "SINCI_AISA_FRUTOS":{"nombre":"AISA FRUTOS","edad":9},
  "SINCI_ALANA_BEN_TEZ":{"nombre":"ALANA BENÍTEZ","edad":10},
  "SINCI_ALANA_NU_EZ":{"nombre":"ALANA NUÑEZ","edad":5},
  "SINCI_ALBA_GOMEZ":{"nombre":"ALBA GOMEZ"},
  "SINCI_ALEJANDRA_ROMAN":{"nombre":"ALEJANDRA ROMAN","edad":9},
  "SINCI_ALEJANDRA_ROM_N_9":{"nombre":"ALEJANDRA ROMÁN 9","edad":9},
  "SINCI_ALEXANDER_LEIVA":{"nombre":"ALEXANDER LEIVA","edad":10},
  "SINCI_ALEXA_ENCISO":{"nombre":"ALEXA ENCISO","edad":10},
  "SINCI_ALEXA_GRIMM":{"nombre":"Alexa Grimm","edad":16},
  "SINCI_ALEXA_RIQUELME":{"nombre":"ALEXA RIQUELME","edad":11},
  "SINCI_ALEXIA_KNOR":{"nombre":"ALEXIA KNOR","edad":10},
  "SINCI_ANAHI_GOMEZ":{"nombre":"Anahi Gomez","edad":12},
  "SINCI_ANA_PAULA_AVILA":{"nombre":"ANA PAULA AVILA"},
  "SINCI_ANA_PAULA_DALLMAN":{"nombre":"ANA PAULA DALLMAN","edad":11},
  "SINCI_ANDREA_MORENO":{"nombre":"ANDREA MORENO","edad":18},
  "SINCI_ANGELES_RAM_REZ":{"nombre":"ANGELES RAMÍREZ","edad":9},
  "SINCI_ANGELICA_JIMENEZ":{"nombre":"Angelica Jimenez","edad":12},
  "SINCI_ANIELLA_DURA_ONA":{"nombre":"ANIELLA DURAÑONA","edad":8},
  "SINCI_ANTONELLA_GAMARRA":{"nombre":"ANTONELLA GAMARRA"},
  "SINCI_ARACELI_GONZ_LES":{"nombre":"ARACELI GONZÁLES","edad":11},
  "SINCI_ARACELY_GIRET":{"nombre":"ARACELY GIRET","edad":19},
  "SINCI_ARANTZA_SEGOVIA":{"nombre":"ARANTZA SEGOVIA"},
  "SINCI_AYANE_ISHIBACHI":{"nombre":"AYANE ISHIBACHI","edad":17},
  "SINCI_AYLA_MONTORI":{"nombre":"AYLA MONTORI","edad":16},
  "SINCI_AYLEN_HASEITEL":{"nombre":"AYLEN HASEITEL","edad":9},
  "SINCI_BELEN_RUIZ":{"nombre":"BELEN RUIZ","edad":15},
  "SINCI_BIANCA_BENITEZ":{"nombre":"Bianca Benitez","edad":12},
  "SINCI_BIANCA_CABO_DE_VILA":{"nombre":"Bianca Cabo De Vila","edad":11},
  "SINCI_BRENDA_GONZALEZ":{"nombre":"BRENDA GONZALEZ","edad":7},
  "SINCI_BRIANNA_TORRES":{"nombre":"BRIANNA TORRES","edad":12},
  "SINCI_BRISA_BARBOZA":{"nombre":"BRISA BARBOZA"},
  "SINCI_BRUNA_AVALOS":{"nombre":"BRUNA AVALOS","edad":4},
  "SINCI_B_RBARA_AVALOS":{"nombre":"BÁRBARA AVALOS","edad":8},
  "SINCI_CAMILA_CESPEDES":{"nombre":"CAMILA CESPEDES","edad":17},
  "SINCI_CAMILA_ORTIZ":{"nombre":"CAMILA ORTIZ","edad":11},
  "SINCI_CATALINA_G_MEZ":{"nombre":"CATALINA GÓMEZ","edad":8},
  "SINCI_CECILIA_CAMACHO":{"nombre":"CECILIA CAMACHO","edad":18},
  "SINCI_CERREMOS":{"nombre":"CERREMOS"},
  "SINCI_CONSTANZA":{"nombre":"CONSTANZA"},
  "SINCI_CONSTANZA_FERREIRA":{"nombre":"CONSTANZA FERREIRA","edad":9},
  "SINCI_CONSTANZA_FIGUEREDO":{"nombre":"CONSTANZA FIGUEREDO","edad":16},
  "SINCI_CONSTANZA_FLORENTIN":{"nombre":"CONSTANZA FLORENTIN","edad":11},
  "SINCI_CONSTANZA_L_PEZ":{"nombre":"CONSTANZA LÓPEZ","edad":7},
  "SINCI_DAHIANA_FERN_NDEZ":{"nombre":"DAHIANA FERNÁNDEZ","edad":18},
  "SINCI_DANA_MU_OZ":{"nombre":"DANA MUÑOZ"},
  "SINCI_DANIELA_FRETES":{"nombre":"Daniela Fretes","edad":14},
  "SINCI_DANIELA_GONZ_LEZ":{"nombre":"DANIELA GONZÁLEZ","edad":8},
  "SINCI_DANNA_BAREIRO":{"nombre":"DANNA BAREIRO","edad":13},
  "SINCI_DAVANY_AQUINO":{"nombre":"DAVANY AQUINO","edad":8},
  "SINCI_DODDY_GIMENEZ":{"nombre":"DODDY GIMENEZ","edad":18},
  "SINCI_EMA_L_A__VILA":{"nombre":"EMA LÍA ÁVILA","edad":11},
  "SINCI_ERNESTINA_SCHULZ":{"nombre":"ERNESTINA SCHULZ","edad":12},
  "SINCI_EUGENIA_GIL":{"nombre":"EUGENIA GIL","edad":7},
  "SINCI_EUGENIA_MELOT":{"nombre":"EUGENIA MELOT","edad":7},
  "SINCI_FEDERICO_FLEITAS":{"nombre":"FEDERICO FLEITAS","edad":26},
  "SINCI_FIORELLA_FLEYTAS":{"nombre":"FIORELLA FLEYTAS"},
  "SINCI_FIORELLA_GAMARRA":{"nombre":"FIORELLA GAMARRA","edad":16},
  "SINCI_FIORELLA_JANE":{"nombre":"FIORELLA JANE","edad":12},
  "SINCI_FLORENCIA_TORRES":{"nombre":"FLORENCIA TORRES","edad":8},
  "SINCI_F_TIMA_PEREZ":{"nombre":"FÁTIMA PEREZ","edad":17},
  "SINCI_GABRIELA_MANCUELLO":{"nombre":"GABRIELA MANCUELLO","edad":9},
  "SINCI_GABRIELA_ROMERO":{"nombre":"GABRIELA ROMERO","edad":14},
  "SINCI_GIOVANNA_PAIVA":{"nombre":"GIOVANNA PAIVA"},
  "SINCI_GISELLE_CAPLI":{"nombre":"Giselle Capli","edad":12},
  "SINCI_GIULIANA_BASOMBA":{"nombre":"GIULIANA BASOMBA","edad":5},
  "SINCI_GIULIANA_MACCHI":{"nombre":"GIULIANA MACCHI","edad":5},
  "SINCI_GIULIA_GUGGIARI":{"nombre":"GIULIA GUGGIARI","edad":3},
  "SINCI_GUADALUPE":{"nombre":"GUADALUPE","edad":10},
  "SINCI_GUADALUPE_CAMPOS":{"nombre":"GUADALUPE CAMPOS","edad":8},
  "SINCI_GUADALUPE_MENDOZA":{"nombre":"GUADALUPE MENDOZA","edad":7},
  "SINCI_GUADALUPE_RIVAS":{"nombre":"GUADALUPE RIVAS","edad":10},
  "SINCI_HAIDE_IBA_EZ":{"nombre":"HAIDE IBAÑEZ"},
  "SINCI_HELENA_VERA":{"nombre":"HELENA VERA","edad":8},
  "SINCI_ISABELLA_BASOMBA":{"nombre":"ISABELLA BASOMBA","edad":5},
  "SINCI_ISABELLA_RODRIGUEZ":{"nombre":"Isabella Rodriguez","edad":12},
  "SINCI_ISABELLA_SANCHEZ":{"nombre":"ISABELLA SANCHEZ","edad":16},
  "SINCI_ISABELLA_SOTO":{"nombre":"ISABELLA SOTO","edad":8},
  "SINCI_ISABELLA_VERA_AYALA":{"nombre":"Isabella Vera Ayala","edad":9},
  "SINCI_ISABELLA_ZORRILLA":{"nombre":"ISABELLA ZORRILLA","edad":8},
  "SINCI_IVAN_NOE":{"nombre":"IVAN NOE"},
  "SINCI_JESSICA_PEREZ":{"nombre":"Jessica Perez","edad":18},
  "SINCI_JESSICA_SANTACRUZ":{"nombre":"Jessica Santacruz","edad":14},
  "SINCI_JUAN_SOSA":{"nombre":"JUAN SOSA","edad":25},
  "SINCI_JULIANA_G_MEZ":{"nombre":"JULIANA GÓMEZ","edad":8},
  "SINCI_JULIETA_LOPEZ":{"nombre":"JULIETA LOPEZ"},
  "SINCI_JULIETA_ROJAS":{"nombre":"JULIETA ROJAS","edad":7},
  "SINCI_JULIETA_ZARACHO":{"nombre":"JULIETA ZARACHO","edad":8},
  "SINCI_KARISA_GALEANO":{"nombre":"KARISA GALEANO","edad":16},
  "SINCI_KARISSA_GALEANO":{"nombre":"KARISSA GALEANO","edad":16},
  "SINCI_KATHERINE_DA_SILVA":{"nombre":"KATHERINE DA SILVA","edad":7},
  "SINCI_KATYA_MCKEOWN":{"nombre":"KATYA MCKEOWN","edad":19},
  "SINCI_KEIMI_ESCOBAR":{"nombre":"Keimi Escobar","edad":14},
  "SINCI_KIARA_UNZAIN":{"nombre":"KIARA UNZAIN","edad":12},
  "SINCI_LARA_RODRÍGUEZ":{"nombre":"Lara Rodríguez","edad":9},
  "SINCI_LAYLA_AREVALOS":{"nombre":"LAYLA AREVALOS","edad":11},
  "SINCI_LIANA_OVIEDO":{"nombre":"LIANA OVIEDO","edad":16},
  "SINCI_LIVIA_DO_VALE":{"nombre":"LIVIA DO VALE","edad":14},
  "SINCI_LIVIA_DO_VALLE":{"nombre":"LIVIA DO VALLE","edad":14},
  "SINCI_LIZZANDRI_SANCHEZ":{"nombre":"LIZZANDRI SANCHEZ","edad":7},
  "SINCI_LUANA_CASTILLO":{"nombre":"Luana Castillo","edad":15},
  "SINCI_LUANA_CASTRO":{"nombre":"LUANA CASTRO","edad":16},
  "SINCI_LUCIANA_BAREIRO":{"nombre":"LUCIANA BAREIRO","edad":13},
  "SINCI_LUCIANA_BEN_TEZ":{"nombre":"LUCIANA BENÍTEZ","edad":11},
  "SINCI_LUC_A_MANCUELLO":{"nombre":"LUCÍA MANCUELLO","edad":11},
  "SINCI_LUJAN_MEDINA":{"nombre":"LUJAN MEDINA","edad":8},
  "SINCI_LUJAN_MELGAREJO":{"nombre":"Lujan Melgarejo","edad":11},
  "SINCI_LUJÁN_GONZALEZ":{"nombre":"Luján Gonzalez","edad":17},
  "SINCI_LUJÁN_GONZÁLEZ":{"nombre":"Luján González","edad":17},
  "SINCI_LUNA_ALONSO":{"nombre":"LUNA ALONSO","edad":16},
  "SINCI_LUTHIEN_PERALTA":{"nombre":"LUTHIEN PERALTA","edad":9},
  "SINCI_MACARENA_ALLO":{"nombre":"MACARENA ALLO","edad":17},
  "SINCI_MAGALI_ALFONSO":{"nombre":"MAGALI ALFONSO","edad":18},
  "SINCI_MAMILA_GONZ_LEZ":{"nombre":"MAMILA GONZÁLEZ","edad":20},
  "SINCI_MANUELA_ALFONSO":{"nombre":"MANUELA ALFONSO","edad":4},
  "SINCI_MARIA_EMILIA_CABA_AS":{"nombre":"MARIA EMILIA CABAÑAS","edad":9},
  "SINCI_MARIA_FE_BACHERO":{"nombre":"MARIA FE BACHERO","edad":17},
  "SINCI_MARIA_FE_YANHO":{"nombre":"MARIA FE YANHO","edad":5},
  "SINCI_MARIA_JOS__MARTINEZ":{"nombre":"MARIA JOSÉ MARTINEZ","edad":10},
  "SINCI_MARIA_PAZ_RIVAS":{"nombre":"MARIA PAZ RIVAS","edad":15},
  "SINCI_MARIA_SOL_BENITEZ":{"nombre":"MARIA SOL BENITEZ","edad":17},
  "SINCI_MARIA_SOL_DOMINGUEZ":{"nombre":"MARIA SOL DOMINGUEZ","edad":7},
  "SINCI_MARLON_KIESE":{"nombre":"MARLON KIESE","edad":12},
  "SINCI_MARTHA_FERNANDEZ":{"nombre":"MARTHA FERNANDEZ","edad":8},
  "SINCI_MARTINA":{"nombre":"MARTINA","edad":8},
  "SINCI_MARTINA_DOLDAN":{"nombre":"MARTINA DOLDAN","edad":9},
  "SINCI_MARTINA_FERNANDEZ":{"nombre":"MARTINA FERNANDEZ","edad":10},
  "SINCI_MARTINA_G_MEZ":{"nombre":"MARTINA GÓMEZ","edad":11},
  "SINCI_MARTINA_QUI_ONEZ":{"nombre":"MARTINA QUIÑONEZ","edad":10},
  "SINCI_MAR_A_PAZ_OLMEDO":{"nombre":"MARÍA PAZ OLMEDO","edad":16},
  "SINCI_MAR_GIMENEZ":{"nombre":"MAR GIMENEZ","edad":8},
  "SINCI_MAURICIO_RIOS":{"nombre":"MAURICIO RIOS"},
  "SINCI_MELANIE_BARRETO":{"nombre":"Melanie Barreto","edad":11},
  "SINCI_MELANIE_MARTINEZ":{"nombre":"MELANIE MARTINEZ","edad":7},
  "SINCI_MELANY_RIVEROS":{"nombre":"MELANY RIVEROS","edad":7},
  "SINCI_MELINA_CARTASSO":{"nombre":"MELINA CARTASSO","edad":14},
  "SINCI_MELISA_OVELAR":{"nombre":"MELISA OVELAR","edad":15},
  "SINCI_MELISSA_OVELAR":{"nombre":"MELISSA OVELAR","edad":15},
  "SINCI_MICAELA":{"nombre":"MICAELA","edad":7},
  "SINCI_MICAELA_CASTI_EIRA":{"nombre":"MICAELA CASTIÑEIRA","edad":16},
  "SINCI_MICAELA_FERN_NDEZ":{"nombre":"MICAELA FERNÁNDEZ","edad":10},
  "SINCI_MICAELA_LEDEZMA":{"nombre":"Micaela Ledezma","edad":18},
  "SINCI_MIKAELA_BENITEZ":{"nombre":"MIKAELA BENITEZ","edad":11},
  "SINCI_MIREYA_CALVETTI":{"nombre":"MIREYA CALVETTI","edad":11},
  "SINCI_MONTSERRAT":{"nombre":"MONTSERRAT","edad":7},
  "SINCI_M_A_CABRERA":{"nombre":"MÍA CABRERA","edad":8},
  "SINCI_NAHIARA_GIM_NEZ":{"nombre":"NAHIARA GIMÉNEZ","edad":10},
  "SINCI_NAHIARA_ZALDIVAR":{"nombre":"NAHIARA ZALDIVAR","edad":9},
  "SINCI_NATALIA_OVIEDO":{"nombre":"NATALIA OVIEDO"},
  "SINCI_NICOLE_CESPEDES":{"nombre":"NICOLE CESPEDES"},
  "SINCI_NICOLE_JAQUECT":{"nombre":"NICOLE JAQUECT","edad":10},
  "SINCI_NICOLE_SEUX":{"nombre":"NICOLE SEUX","edad":9},
  "SINCI_NOA_ARCOS":{"nombre":"NOA ARCOS","edad":18},
  "SINCI_PALOMA_GALEANO":{"nombre":"PALOMA GALEANO","edad":11},
  "SINCI_PATRICIA_SILVERO":{"nombre":"PATRICIA SILVERO","edad":16},
  "SINCI_PAULA_ALZUETA":{"nombre":"PAULA ALZUETA","edad":7},
  "SINCI_PAULA_ESQUIVEL":{"nombre":"PAULA ESQUIVEL","edad":10},
  "SINCI_PAULA_GONZALEZ":{"nombre":"PAULA GONZALEZ","edad":5},
  "SINCI_PAULA_VERA":{"nombre":"PAULA VERA","edad":7},
  "SINCI_PAZ_ESPINOZA":{"nombre":"PAZ ESPINOZA","edad":12},
  "SINCI_PAZ_OLMEDO":{"nombre":"PAZ OLMEDO","edad":16},
  "SINCI_PAZ_RIQUELME":{"nombre":"PAZ RIQUELME","edad":7},
  "SINCI_PIA_ISABELLA_RIVAS":{"nombre":"Pia Isabella Rivas","edad":11},
  "SINCI_RENATA_AVALOS":{"nombre":"RENATA AVALOS","edad":11},
  "SINCI_RENATA_GIM_NEZ":{"nombre":"RENATA GIMÉNEZ","edad":7},
  "SINCI_ROSSET_GENES":{"nombre":"ROSSET GENES"},
  "SINCI_SAMANTHA_TULLO":{"nombre":"SAMANTHA TULLO","edad":7},
  "SINCI_SAMIRA_BENITEZ":{"nombre":"SAMIRA BENITEZ","edad":18},
  "SINCI_SIANNI_B_EZ":{"nombre":"SIANNI BÁEZ","edad":10},
  "SINCI_SOFIA_BARANDA":{"nombre":"SOFIA BARANDA","edad":16},
  "SINCI_SOF_A_INSFRAN":{"nombre":"SOFÍA INSFRAN","edad":10},
  "SINCI_SOF_A_ROM_N":{"nombre":"SOFÍA ROMÁN","edad":10},
  "SINCI_SOFÍA_SAMANIEGO":{"nombre":"Sofía Samaniego","edad":9},
  "SINCI_SOL_DOMINGUEZ":{"nombre":"SOL DOMINGUEZ","edad":7},
  "SINCI_SOL_FORESTIERI":{"nombre":"SOL FORESTIERI","edad":7},
  "SINCI_SOL_GALEANO":{"nombre":"SOL GALEANO","edad":10},
  "SINCI_SOL_GIMENEZ":{"nombre":"SOL GIMENEZ","edad":7},
  "SINCI_SOL_L_PEZ":{"nombre":"SOL LÓPEZ","edad":9},
  "SINCI_SOL_RUSSI":{"nombre":"SOL RUSSI"},
  "SINCI_SOPHIA_BUZO":{"nombre":"SOPHIA BUZO","edad":16},
  "SINCI_SOPHIA_CALVETTI":{"nombre":"SOPHIA CALVETTI","edad":7},
  "SINCI_STEPHANIE_RABERY":{"nombre":"STEPHANIE RABERY","edad":14},
  "SINCI_SUSAN_DELVALLE":{"nombre":"SUSAN DELVALLE","edad":12},
  "SINCI_TIZIANA_BENITEZ":{"nombre":"TIZIANA BENITEZ","edad":16},
  "SINCI_TREICY_AYALA":{"nombre":"TREICY AYALA","edad":9},
  "SINCI_VALENTINA_ALFONSO":{"nombre":"VALENTINA ALFONSO","edad":15},
  "SINCI_VALENTINA_L_PEZ_MOREIRA":{"nombre":"VALENTINA LÓPEZ MOREIRA","edad":23},
  "SINCI_VALENTINA_VACEQUE":{"nombre":"VALENTINA VACEQUE","edad":15},
  "SINCI_VALERIA_LOPEZ":{"nombre":"VALERIA LOPEZ","edad":7},
  "SINCI_VERONICA_LUJAN_BENITEZ":{"nombre":"VERONICA LUJAN BENITEZ","edad":7},
  "SINCI_VICTORIA_AGUILAR":{"nombre":"Victoria Aguilar","edad":13},
  "SINCI_VICTORIA_AMARILLA":{"nombre":"VICTORIA AMARILLA","edad":8},
  "SINCI_VICTORIA_BERNAL":{"nombre":"VICTORIA BERNAL","edad":8},
  "SINCI_VICTORIA_SILVA":{"nombre":"VICTORIA SILVA","edad":4},
  "SINCI_VICTORIA_VERA":{"nombre":"VICTORIA VERA","edad":5},
  "SINCI_VIVIANA_RIVAS":{"nombre":"VIVIANA RIVAS","edad":10},
  "SINCI_XIMENA_ZARACHO":{"nombre":"XIMENA ZARACHO","edad":12},
  "SINCI_YERUTI_FRANCO":{"nombre":"YERUTI FRANCO","edad":13},
  "SINCI_YUEXI_WU":{"nombre":"YUEXI WU","edad":11},
  "SINCI_YUE_XI_WU":{"nombre":"YUE XI WU","edad":11},
  "SINCI_ZAIRA_OLMEDO":{"nombre":"Zaira Olmedo","edad":13},
  "SINCI_ZAMIRA_AGUERO":{"nombre":"Zamira Aguero","edad":11},
  "SINCI_ZOEH_RAMOS":{"nombre":"ZOEH RAMOS","edad":11},
  "SINCI_ZOE_DUARTE":{"nombre":"ZOE DUARTE","edad":7},
  "SINCI_ZOE_INSFR_N":{"nombre":"ZOE INSFRÁN","edad":9}
};;

const SECCIONES=6;
let pasoActual=1;
let listaParticipantes=[];
let tabActual='ci';
const cfg=typeof PULSO_CONFIG!=='undefined'?PULSO_CONFIG:null;

function ini(n){return n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();}

document.addEventListener('DOMContentLoaded',()=>{
  aplicarConfig();
  renderProgress();
  poblarSelects();
  document.getElementById('main-form').addEventListener('submit',enviar);
  document.getElementById('tipo-part').addEventListener('change',function(){
    const t=this.value;
    const mostrarCant=['grupo','gran_grupo'].includes(t);
    const campoCant=document.getElementById('campo-cantidad');
    const inputCant=document.getElementById('cant-participantes');
    // Mostrar campo solo para grupo/gran grupo
    campoCant.style.display=mostrarCant?'block':'none';
    // Auto-completar cantidad para tipos fijos
    const cantMap={solista:1,duo:2,trio:3,cuarteto:4};
    if(cantMap[t]){
      inputCant.value=cantMap[t];
    } else if(!mostrarCant){
      inputCant.value='';
    }
    // Actualizar progreso y costo
    actualizarCantidad();
  });
  document.getElementById('compite-coreo').addEventListener('change',calcularCosto);
  document.getElementById('ci-buscar').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();buscarCI();}});
  document.getElementById('nombre-buscar').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();buscarNombre();}});
  cargarDesdeStorage();
  verificarLlamado();
  inyectarImagenes();
});

function aplicarConfig(){
  if(!cfg)return;
  const c=cfg.colores;
  const r=document.documentElement;
  r.style.setProperty('--p',c.principal);
  r.style.setProperty('--pd',c.oscuro);
  r.style.setProperty('--a',c.acento);
  r.style.setProperty('--a2',c.acento2);
  r.style.setProperty('--bg',c.fondo);
  document.getElementById('bc-banco').textContent=cfg.banco.nombre;
  document.getElementById('bc-cuenta').textContent=cfg.banco.cuenta;
  document.getElementById('bc-titular').textContent=cfg.banco.titular;
  document.getElementById('bc-ruc').textContent=cfg.banco.ruc;
  if(!cfg.formulario.activo){
    document.getElementById('cerrado-banner').style.display='block';
    document.getElementById('cerrado-banner').textContent=cfg.formulario.mensaje_cerrado;
    document.querySelectorAll('.btn-next,.btn-submit').forEach(b=>b.disabled=true);
  }
}

function verificarLlamado(){
  if(!cfg)return;
  const hoy=new Date();
  const c1=new Date(cfg.formulario.fecha_1er_llamado_cierre);
  const es1=hoy<=c1;
  const badge=document.getElementById('llamado-activo-badge');
  badge.textContent=es1?'1er Llamado — hasta 19 de agosto':'2do Llamado';
  badge.style.background=es1?'#EAB308':'#A855F7';
  badge.style.color=es1?'#3B0764':'#fff';
  const co=es1?cfg.costos.primer_llamado:cfg.costos.segundo_llamado;
  const fmt=n=>n.toLocaleString('es-PY')+' Gs';
  document.getElementById('c-solista').textContent=fmt(co.solista);
  document.getElementById('c-duo').textContent=fmt(co.duo_trio_cuarteto)+' c/part.';
  document.getElementById('c-grupo').textContent=fmt(co.grupo)+' c/part.';
  document.getElementById('c-gran').textContent=fmt(co.gran_grupo)+' c/part.';
  document.getElementById('c-coreo').textContent=fmt(co.coreografia);
}

function poblarSelects(){
  const inst=document.getElementById('institucion');
  // Opciones ya están en el HTML

  inst.addEventListener('change',function(){
    const v = this.value.toUpperCase();
    const show = v.includes('OTRA') || v.includes('PROPIA');
    const campo = document.getElementById('campo-inst-nombre');
    const input = campo.querySelector('input');
    campo.style.display = show ? 'block' : 'none';
    if(show){
      input.setAttribute('required','required');
      input.setAttribute('data-required','1');
    } else {
      input.removeAttribute('required');
      input.removeAttribute('data-required');
      input.value = '';
    }
  });
  const mod=document.getElementById('modalidad');
  mod.addEventListener('change',function(){
    const subs=cfg&&cfg.subestilos[this.value];
    const box=document.getElementById('campo-subestilo');
    const sel=document.getElementById('subestilo');
    if(subs){sel.innerHTML='<option value="">— Seleccioná —</option>';subs.forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o);});box.style.display='block';}
    else box.style.display='none';
  });
  // Categorias ya en HTML
}

const LABELS=['Institución','Coreografía','Participantes','Música','Pago','Confirmación'];
function renderProgress(){
  const bar=document.getElementById('progress-bar');
  bar.innerHTML='';
  for(let i=1;i<=SECCIONES;i++){
    const d=document.createElement('div');
    d.className='p-step'+(i<pasoActual?' done':i===pasoActual?' active':'');
    bar.appendChild(d);
  }
  document.getElementById('progress-label').textContent=LABELS[pasoActual-1]+' ('+pasoActual+'/'+SECCIONES+')';
}

function irSeccion(n){
  if(n<1||n>SECCIONES){ alert('Error rango '+n); return; }
  if(n>pasoActual){
    const valid=validarSeccion(pasoActual);
    if(!valid){ return; }
  }
  document.getElementById('sec-'+pasoActual).classList.remove('activa');
  pasoActual=n;
  document.getElementById('sec-'+pasoActual).classList.add('activa');
  renderProgress();
  window.scrollTo({top:0,behavior:'smooth'});
  if(pasoActual===5) calcularCosto();
}

function validarSeccion(n){
  const campos = ['email','institucion','director','telefono'];
  if(n===1){
    let ok=true;
    let errores=[];
    // Email
    const email=document.getElementById('email');
    if(!email||!email.value.trim()||!email.value.includes('@')){
      if(email) email.style.borderColor='#E53E3E'; ok=false; errores.push('Email');
    } else email.style.borderColor='';
    // Institución
    const inst=document.getElementById('institucion');
    if(!inst||!inst.value){
      if(inst) inst.style.borderColor='#E53E3E'; ok=false; errores.push('Institución');
    } else inst.style.borderColor='';
    // Nombre institución si visible
    try{
      const campoNombre=document.getElementById('campo-inst-nombre');
      const inputNombre=document.getElementById('inst-nombre');
      if(campoNombre&&campoNombre.style.display==='block'&&inputNombre&&!inputNombre.value.trim()){
        inputNombre.style.borderColor='#E53E3E'; ok=false; errores.push('Nombre institución');
      } else if(inputNombre) inputNombre.style.borderColor='';
    }catch(e){}
    // Director
    const dir=document.getElementById('director');
    if(!dir||!dir.value.trim()){
      if(dir) dir.style.borderColor='#E53E3E'; ok=false; errores.push('Director/a');
    } else dir.style.borderColor='';
    // Teléfono
    const tel=document.getElementById('telefono');
    if(!tel||!tel.value.trim()){
      if(tel) tel.style.borderColor='#E53E3E'; ok=false; errores.push('Teléfono');
    } else tel.style.borderColor='';
    if(!ok) alert('Falta completar: '+errores.join(', '));
    return ok;
  }
  if(n===2){
    let ok=true;
    const ids=['obra','modalidad','categoria','tipo-part','coreografo','preparador','contacto-resp'];
    ids.forEach(id=>{
      const el=document.getElementById(id);
      if(!el||!el.value.trim()){
        if(el) el.style.borderColor='#E53E3E';
        ok=false;
      } else el.style.borderColor='';
    });
    if(!ok) alert('Por favor completá todos los campos obligatorios.');
    return ok;
  }
  if(n===3){
    const cantDeclarada = parseInt(document.getElementById('cant-participantes').value)||0;
    if(cantDeclarada === 0){
      alert('Ingresá la cantidad de participantes de la coreografía.');
      document.getElementById('cant-participantes').style.borderColor='#E53E3E';
      return false;
    }
    if(listaParticipantes.length===0){
      alert('Agregá al menos un participante antes de continuar.');
      return false;
    }
    if(listaParticipantes.length < cantDeclarada){
      alert('Declaraste ' + cantDeclarada + ' participantes pero solo agregaste ' + listaParticipantes.length + '. Completá la lista antes de continuar.');
      return false;
    }
    return true;
  }
  if(n===4){
    let ok=true;
    const tipoMus=document.getElementById('tipo-musica');
    if(!tipoMus.value){
      tipoMus.style.borderColor='#E53E3E'; ok=false;
    } else tipoMus.style.borderColor='';
    const min=parseInt(document.getElementById('tiempo-min').value)||0;
    const seg=parseInt(document.getElementById('tiempo-seg').value)||0;
    if(min===0&&seg===0){
      document.getElementById('tiempo-min').style.borderColor='#E53E3E';
      document.getElementById('tiempo-seg').style.borderColor='#E53E3E';
      ok=false;
    } else {
      document.getElementById('tiempo-min').style.borderColor='';
      document.getElementById('tiempo-seg').style.borderColor='';
    }
    if(document.getElementById('tiene-esceno').value==='si'){
      const desc=document.getElementById('esceno-desc');
      if(!desc.value.trim()){desc.style.borderColor='#E53E3E';ok=false;}
      else desc.style.borderColor='';
    }
    if(!ok) alert('Por favor completá todos los campos obligatorios.');
    return ok;
  }
  if(n===5){
    const pago=document.getElementById('forma-pago');
    if(!pago.value){
      pago.style.borderColor='#E53E3E';
      alert('Seleccioná la forma de pago.');
      return false;
    }
    pago.style.borderColor='';
    return true;
  }
  return true;
}



function buscarCI(){
  const ci=document.getElementById('ci-buscar').value.replace(/\D/g,'');
  const res=document.getElementById('ci-resultado');
  document.getElementById('nuevo-registro-form').innerHTML='';
  if(ci.length<5){res.innerHTML='';return;}
  // Use updated data from lista if already added
  const enLista=listaParticipantes.find(x=>x.ci===ci);
  const p=enLista||DB[ci];
  if(p){
    const ya=listaParticipantes.some(x=>x.ci===ci);
    res.innerHTML=`<div class="result-found">
      <div class="p-row">
        <div class="avatar">${ini(p.nombre)}</div>
        <div style="flex:1">
          <div class="p-nombre">${p.nombre}</div>
          <div class="p-detalle">CI: ${ci}</div>
        </div>
      </div>
      <div style="font-size:.75rem;color:#6B21A8;font-weight:600;margin:.5rem 0 .25rem">✏️ Corregir si es necesario:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.4rem">
        <div>
          <label style="font-size:.72rem;color:#666;display:block;margin-bottom:2px">Nombre completo</label>
          <input type="text" id="nombre-edit-${ci}" value="${p.nombre}" style="width:100%;padding:.3rem .5rem;font-size:.82rem;border:1px solid var(--borde);border-radius:6px"/>
        </div>
        <div>
          <label style="font-size:.72rem;color:#666;display:block;margin-bottom:2px">Número de CI</label>
          <input type="text" id="ci-edit-${ci}" value="${ci}" style="width:100%;padding:.3rem .5rem;font-size:.82rem;border:1px solid var(--borde);border-radius:6px"/>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.5rem">
        <label style="font-size:.72rem;color:#666">Edad actual:</label>
        <input type="number" id="edad-edit-${ci}" value="${p.edad}" min="3" max="99" style="width:65px;padding:.3rem .5rem;font-size:.82rem;border:1px solid var(--borde);border-radius:6px;text-align:center"/>
        <span style="font-size:.75rem;color:#6B21A8">años</span>
      </div>
      ${ya?'<div style="text-align:center;font-size:.82rem;color:#888">Ya está en la lista</div>'
          :`<button type="button" class="btn-agregar" onclick="agregarConEdad('${ci}')">+ Agregar a la coreografía</button>`}
    </div>`;
  } else if(ci.length>=6){
    res.innerHTML=`<div class="result-nf">
      <div style="font-weight:700;color:#C53030;margin-bottom:.3rem">CI ${ci} no encontrado</div>
      <div style="font-size:.82rem;color:#555">Si el participante existe buscalo por nombre. Si es nuevo, usá el botón <strong>"+ Registrar nuevo participante"</strong> que está más abajo.</div>
    </div>`;
  }
}

function agregarConEdad(ci){
  const edInput=document.getElementById('edad-edit-'+ci);
  const nomInput=document.getElementById('nombre-edit-'+ci);
  const ciInput=document.getElementById('ci-edit-'+ci);
  const edadActual=edInput?parseInt(edInput.value)||DB[ci].edad:DB[ci].edad;
  const nombreActual=nomInput&&nomInput.value.trim()?nomInput.value.trim():DB[ci].nombre;
  const ciActual=ciInput&&ciInput.value.trim()?ciInput.value.trim().replace(/\D/g,''):ci;
  // Update DB with corrected data
  DB[ci].edad=edadActual;
  DB[ci].nombre=nombreActual;
  // If CI changed, create new entry and remove old
  if(ciActual!==ci){
    DB[ciActual]={nombre:nombreActual,edad:edadActual};
    delete DB[ci];
    guardarEnStorage(ciActual,{nombre:nombreActual,edad:edadActual});
    agregarParticipante(ciActual);
  } else {
    guardarEnStorage(ci,{nombre:nombreActual,edad:edadActual});
    agregarParticipante(ci);
  }
}

// ── TABS ──
function setTab(t){
  tabActual=t;
  const tabCI = document.getElementById('tab-ci');
  const tabNombre = document.getElementById('tab-nombre');
  const btns = document.querySelectorAll('.catastro-tab');
  if(tabCI) tabCI.style.display = t==='ci' ? 'block' : 'none';
  if(tabNombre) tabNombre.style.display = t==='nombre' ? 'block' : 'none';
  document.getElementById('ci-resultado').innerHTML='';
  document.getElementById('nuevo-registro-form').innerHTML='';
  document.getElementById('nombre-resultados').innerHTML='';
  btns.forEach((b,i)=>b.classList.toggle('active',(t==='ci'&&i===0)||(t==='nombre'&&i===1)));
}

// ── BUSCAR NOMBRE ──
function buscarNombre(){
  const q=document.getElementById('nombre-buscar').value.trim().toLowerCase();
  const resEl=document.getElementById('nombre-resultados');
  if(q.length<2){resEl.innerHTML='<div class="catastro-empty">Ingresá al menos 2 letras</div>';return;}
  // Normalizar texto quitando acentos para búsqueda
  function normText(s){
    return s.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9 ]/g,'');
  }
  const qNorm=normText(q);
  // Buscar en todos los participantes incluyendo los sin CI (clave SINCI_)
  const matches=Object.entries(DB).filter(([ci,p])=>{
    if(!p.nombre) return false;
    const nombreNorm=normText(p.nombre);
    const ciKey=normText(ci.replace('SINCI_','').replace(/_/g,' '));
    return nombreNorm.includes(qNorm) || ciKey.includes(qNorm);
  });
  if(!matches.length){
    resEl.innerHTML=`<div class="result-nf" style="margin-bottom:.5rem">
      <div style="font-weight:700;color:#C53030;margin-bottom:.3rem">Sin resultados para "${q}"</div>
      <div style="font-size:.82rem;color:#555">Si el participante es nuevo, usá el botón <strong>"+ Registrar nuevo participante"</strong> que está más abajo.</div>
    </div>`;
    return;
  }
  resEl.innerHTML=matches.slice(0,50).map(([ci,p])=>{
    const ya=listaParticipantes.some(x=>x.ci===ci);
    const sinCI=ci.startsWith('SINCI_');
    const ciDisplay=sinCI?'':ci;
    return `<div class="result-found" style="margin-bottom:.5rem">
      <div class="p-row" style="margin-bottom:.4rem">
        <div class="avatar">${ini(p.nombre)}</div>
        <div style="flex:1">
          <div class="p-nombre">${p.nombre}</div>
          <div class="p-detalle">${sinCI?'<span style="color:#B45309;font-weight:600">⚠ Sin CI registrado</span>':'CI: '+ci}</div>
        </div>
      </div>
      <div style="font-size:.75rem;color:#6B21A8;font-weight:600;margin-bottom:.25rem">✏️ ${sinCI?'Completá el CI para registrar:':'Corregir si es necesario:'}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.4rem">
        <div>
          <label style="font-size:.72rem;color:#666;display:block;margin-bottom:2px">Nombre completo</label>
          <input type="text" id="nombre-n-${ci}" value="${p.nombre}" style="width:100%;padding:.3rem .5rem;font-size:.82rem;border:1px solid var(--borde);border-radius:6px"/>
        </div>
        <div>
          <label style="font-size:.72rem;color:#666;display:block;margin-bottom:2px">Número de CI ${sinCI?'<span style="color:#E53E3E">*</span>':''}</label>
          <input type="text" id="ci-n-${ci}" value="${ciDisplay}" placeholder="${sinCI?'CI obligatorio':'Corregir CI'}" style="width:100%;padding:.3rem .5rem;font-size:.82rem;border:${sinCI?'1.5px solid #F59E0B':'1px solid var(--borde)'};border-radius:6px;background:${sinCI?'#FFFBEB':''}"/>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.5rem">
        <label style="font-size:.72rem;color:#666">Edad actual:</label>
        <input type="number" id="edad-n-${ci}" value="${p.edad}" min="3" max="99" style="width:65px;padding:.3rem .5rem;font-size:.82rem;border:1px solid var(--borde);border-radius:6px;text-align:center"/>
        <span style="font-size:.75rem;color:#6B21A8">años</span>
      </div>
      ${ya?'<div style="font-size:.8rem;color:#888;text-align:center">Ya está en la lista</div>'
          :`<button type="button" class="btn-agregar" onclick="agregarDesdeNombre('${ci}')">+ Agregar</button>`}
    </div>`;
  }).join('');
}

function agregarDesdeNombre(ci){
  const edInput=document.getElementById('edad-n-'+ci);
  const nomInput=document.getElementById('nombre-n-'+ci);
  const ciInput=document.getElementById('ci-n-'+ci);
  if(edInput) DB[ci].edad=parseInt(edInput.value)||DB[ci].edad;
  if(nomInput&&nomInput.value.trim()) DB[ci].nombre=nomInput.value.trim();
  const ciNuevo=ciInput&&ciInput.value.trim()?ciInput.value.trim().replace(/\D/g,''):ci;
  if(ciNuevo!==ci){
    DB[ciNuevo]={...DB[ci]};
    delete DB[ci];
    agregarParticipante(ciNuevo);
  } else {
    agregarParticipante(ci);
  }
  document.getElementById('nombre-resultados').innerHTML='';
  document.getElementById('nombre-buscar').value='';
}

// ── NUEVO REGISTRO ──
function mostrarFormNuevo(ci){
  document.getElementById('nuevo-registro-form').innerHTML=`
    <div class="nuevo-form">
      <p style="font-size:.82rem;font-weight:700;color:var(--pd);margin-bottom:.5rem">Nuevo participante</p>
      <div class="grid2" style="gap:.5rem;margin-bottom:.5rem">
        <div><label style="font-size:.78rem;font-weight:600;color:var(--txt2);text-transform:uppercase;display:block;margin-bottom:2px">Nombre completo</label>
          <input type="text" id="nv-nombre" placeholder="Nombre y apellido" style="width:100%"/></div>
        <div><label style="font-size:.78rem;font-weight:600;color:var(--txt2);text-transform:uppercase;display:block;margin-bottom:2px">CI</label>
          <input type="text" id="nv-ci" value="${ci}" placeholder="Nro. de CI" style="width:100%"/></div>
      </div>
      <div style="margin-bottom:.5rem"><label style="font-size:.78rem;font-weight:600;color:var(--txt2);text-transform:uppercase;display:block;margin-bottom:2px">Edad</label>
        <input type="number" id="nv-edad" placeholder="Edad" min="3" max="99" style="width:100px"/></div>
      <button type="button" class="btn-agregar" onclick="registrarNuevo()">Guardar y agregar</button>
    </div>`;
}

function registrarNuevo(){
  const nombre=document.getElementById('nv-nombre').value.trim();
  const ci=document.getElementById('nv-ci').value.replace(/\D/g,'');
  const edad=parseInt(document.getElementById('nv-edad').value)||0;
  if(!nombre){alert('Ingresá el nombre completo');return;}
  if(!ci){alert('Ingresá el número de CI');return;}
  if(!edad){alert('Ingresá la edad');return;}
  DB[ci]={nombre,edad,nuevo:true};
  // Guardar en localStorage para persistir entre inscripciones
  guardarEnStorage(ci,{nombre,edad});
  agregarParticipante(ci);
  document.getElementById('nuevo-registro-form').innerHTML='';
  document.getElementById('ci-buscar').value='';
  document.getElementById('ci-resultado').innerHTML='';
}

function guardarEnStorage(ci, datos){
  try{
    const saved=JSON.parse(localStorage.getItem('pulso_catastro')||'{}');
    saved[ci]=datos;
    localStorage.setItem('pulso_catastro', JSON.stringify(saved));
  }catch(e){console.log('Storage error:',e);}
}

async function cargarDesdeStorage(){
  // 1. Cargar desde localStorage (cache local)
  try{
    const saved=JSON.parse(localStorage.getItem('pulso_catastro')||'{}');
    Object.entries(saved).forEach(([ci,p])=>{
      if(!DB[ci]) DB[ci]={...p,guardado:true};
    });
  }catch(e){}

  // 2. Cargar desde Google Sheet (cualquier dispositivo)
  try{
    const banner = document.createElement('div');
    banner.id='cargando-catastro';
    banner.style.cssText='position:fixed;bottom:1rem;right:1rem;background:var(--p);color:#fff;padding:.5rem 1rem;border-radius:8px;font-size:.78rem;z-index:999';
    banner.textContent='⏳ Actualizando catastro de participantes...';
    document.body.appendChild(banner);

    const r = await fetch(CATASTRO_URL+'?accion=getCatastro');
    const json = await r.json();
    
    let count = 0;
    if(json.participantes){
      Object.entries(json.participantes).forEach(([key,p])=>{
        const ci = p.ci || key;
        if(!DB[ci]||DB[ci].nuevo){
          DB[ci]={nombre:p.nombre, edad:p.edad||0, guardado:true};
          // También guardar en localStorage como cache
          guardarEnStorage(ci,{nombre:p.nombre,edad:p.edad||0});
          count++;
        }
      });
    }
    
    banner.textContent='✅ Catastro actualizado ('+Object.keys(DB).length+' participantes)';
    setTimeout(()=>banner.remove(), 2500);
    console.log('Catastro cargado desde Sheet:', count, 'nuevos participantes');
    
    // También cargar academias actualizadas del Sheet
    cargarAcademiasDesdeSheet();
    
  }catch(e){
    console.log('No se pudo cargar catastro remoto, usando cache local:', e);
    const banner=document.getElementById('cargando-catastro');
    if(banner){
      banner.style.background='#92400E';
      banner.textContent='⚠ Sin conexión — usando catastro local';
      setTimeout(()=>banner.remove(),2500);
    }
  }
}

async function cargarAcademiasDesdeSheet(){
  try{
    const r = await fetch(CATASTRO_URL+'?accion=getAcademias');
    const json = await r.json();
    if(!json.academias || !json.academias.length) return;
    
    // Update the institucion select with fresh data from Sheet
    const sel = document.getElementById('institucion');
    if(!sel) return;
    
    // Keep current selection
    const currentVal = sel.value;
    
    // Clear all options except header
    while(sel.options.length > 1) sel.remove(1);
    
    // Re-add from Sheet data (already numbered and sorted)
    json.academias.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a.nombre;
      opt.textContent = a.codigo + '. ' + a.nombre;
      sel.appendChild(opt);
    });
    
    // Restore selection if it still exists
    if(currentVal) sel.value = currentVal;
    
    console.log('Academias actualizadas desde Sheet:', json.academias.length);
  }catch(e){
    console.log('No se pudo cargar academias del Sheet:', e);
  }
}

function agregarParticipante(ci){
  const p=DB[ci];
  if(!p||listaParticipantes.some(x=>x.ci===ci))return;
  listaParticipantes.push({...p,ci});
  document.getElementById('ci-buscar').value='';
  document.getElementById('ci-resultado').innerHTML='';
  renderLista();calcularCosto();
}

function quitarParticipante(ci){
  listaParticipantes=listaParticipantes.filter(x=>x.ci!==ci);
  renderLista();calcularCosto();
}

function actualizarCantidad(){
  const cant = parseInt(document.getElementById('cant-participantes').value)||0;
  const tipo = document.getElementById('tipo-part').value;
  // Auto-set tipo based on quantity if not yet selected
  if(cant===1 && !tipo) document.getElementById('tipo-part').value='solista';
  calcularCosto();
  renderLista();
}

function renderLista(){
  const cantDeclarada=parseInt(document.getElementById('cant-participantes')?document.getElementById('cant-participantes').value:0)||0;
  const cantAgregada=listaParticipantes.length;
  document.getElementById('lista-count').textContent=cantAgregada+(cantDeclarada>0?' / '+cantDeclarada:'');
  const el=document.getElementById('lista-items');
  const progEl=document.getElementById('lista-progreso');
  if(progEl){
    if(cantDeclarada>0){
      const ok=cantAgregada>=cantDeclarada;
      progEl.textContent=cantAgregada+' de '+cantDeclarada+' participantes agregados'+(ok?' ✅':'');
      progEl.style.color=ok?'#065F46':'#92400E';
      progEl.style.display='block';
    } else {
      progEl.style.display='none';
    }
  }
  if(!listaParticipantes.length){el.innerHTML='<div class="catastro-empty">Aún no agregaste participantes</div>';return;}
  el.innerHTML=listaParticipantes.map((p,i)=>`
    <div class="lista-item">
      <span class="lista-num">${i+1}</span>
      <div class="avatar" style="width:28px;height:28px;font-size:.7rem">${ini(p.nombre)}</div>
      <div style="flex:1;min-width:0">
        <div class="lista-nombre">${p.nombre} ${p.nuevo?'<span class="lista-nuevo">nuevo</span>':''}</div>
        <div class="lista-ci">CI: ${p.ci}</div>
      </div>
      <span class="lista-edad">${p.edad} años</span>
      <button type="button" class="btn-quitar" onclick="quitarParticipante('${p.ci}')" aria-label="Quitar">✕</button>
    </div>`).join('');
}

// ── MÚSICA ──
function toggleMusica(){
  const v=document.getElementById('tipo-musica').value;
  document.getElementById('bloque-mp3').style.display=v==='mp3'?'block':'none';
  document.getElementById('bloque-vivo').style.display=v==='vivo'?'block':'none';
}

// ── ESCENOGRAFÍA ──
function toggleEsceno(){
  document.getElementById('bloque-esceno').style.display=document.getElementById('tiene-esceno').value==='si'?'block':'none';
}

// ── BANCO ──
function toggleBanco(){
  const v=document.getElementById('forma-pago').value;
  const show=v==='transferencia'||v==='deposito';
  document.getElementById('bloque-banco').style.display=show?'block':'none';
  const titulo=document.getElementById('banco-titulo');
  if(titulo){
    titulo.textContent=v==='deposito'?'Datos para el depósito bancario':'Datos para la transferencia bancaria';
  }
}

// ── COSTO ──
function calcularCosto(){
  if(!cfg)return;
  const tipo=document.getElementById('tipo-part').value;
  const coreo=document.getElementById('compite-coreo').value==='si';
  const cant=parseInt(document.getElementById('cant-participantes').value)||listaParticipantes.length||1;
  const hoy=new Date();
  const c1=new Date(cfg.formulario.fecha_1er_llamado_cierre);
  const co=hoy<=c1?cfg.costos.primer_llamado:cfg.costos.segundo_llamado;
  let base=0,label='';
  if(tipo==='solista'){base=co.solista;label='Solista';}
  else if(['duo','trio','cuarteto'].includes(tipo)){base=co.duo_trio_cuarteto*cant;label=cant+' part. × '+co.duo_trio_cuarteto.toLocaleString('es-PY')+' Gs';}
  else if(tipo==='grupo'){base=co.grupo*cant;label=cant+' part. × '+co.grupo.toLocaleString('es-PY')+' Gs';}
  else if(tipo==='gran_grupo'){base=co.gran_grupo*cant;label=cant+' part. × '+co.gran_grupo.toLocaleString('es-PY')+' Gs';}
  if(!tipo)return;
  let total=base;
  if(coreo)total+=(hoy<=c1?co.coreografia:cfg.costos.segundo_llamado.coreografia);
  const box=document.getElementById('costo-calculado');
  box.style.display='block';
  document.getElementById('monto-total').textContent=total.toLocaleString('es-PY')+' Gs';
  document.getElementById('costo-detalle').textContent=label+(coreo?' + participación por coreografía':'');
}

// ── UPLOAD ──
function archivoSeleccionado(input,areaId,nameId){
  const area=document.getElementById(areaId);
  const nameEl=document.getElementById(nameId);
  if(input.files.length){
    area.classList.add('has-file');
    nameEl.textContent='✓ '+input.files[0].name;
    const mb=(input.files[0].size/1024/1024).toFixed(1);
    if(mb>15){alert('El archivo es muy grande ('+mb+' MB). El máximo recomendado es 15 MB.');input.value='';area.classList.remove('has-file');nameEl.textContent='';}
  }
}

function fileToBase64(file){
  return new Promise((res,rej)=>{
    const r=new FileReader();
    r.onload=()=>{
      const result=r.result;
      // readAsDataURL always has comma separator, split to get base64 part
      const comma=result.indexOf(',');
      res(comma>=0 ? result.substring(comma+1) : result);
    };
    r.onerror=rej;
    r.readAsDataURL(file);
  });
}

// ── NAV ──



// ── GENERAR ID DE INSCRIPCIÓN ──
function generarID(academia, obra){
  function slug(str, maxLen){
    return (str||'')
      .toUpperCase()
      .normalize('NFD').replace(/[̀-ͯ]/g,'')
      .replace(/[^A-Z0-9]/g,'-')
      .replace(/-+/g,'-')
      .replace(/^-|-$/g,'')
      .substring(0, maxLen);
  }
  const ac = slug(academia, 10);
  const ob = slug(obra, 12);
  return 'PULSO26-' + ac + '-' + ob;
}

// ── SUBIR ARCHIVO A DRIVE VIA APPS SCRIPT (chunked) ──
async function subirArchivoDrive(file, inscId, tipo, obra, modalidad, categoria, academia){
  const CHUNK = 4 * 1024 * 1024; // 4MB por chunk
  const totalChunks = Math.ceil(file.size / CHUNK);

  for(let i=0; i<totalChunks; i++){
    const start = i * CHUNK;
    const end   = Math.min(start + CHUNK, file.size);
    const slice = file.slice(start, end);
    const b64   = await fileToBase64(slice);

    const payload = {
      accion:      'subirChunk',
      id:          inscId,
      tipo,
      chunk:       i,
      totalChunks,
      b64,
      b64len:      b64 ? b64.length : 0,
      nombre:      file.name,
      mimeType:    file.type || (tipo==='musica'?'audio/mpeg':'image/jpeg'),
      obra:        obra||'',
      modalidad:   modalidad||'',
      categoria:   categoria||'',
      academia:    academia||''
    };

    console.log('Chunk '+i+'/'+totalChunks+' b64len='+payload.b64len);
    const fd = new FormData();
    fd.append('data', JSON.stringify(payload));
    await fetch(SCRIPT_URL, {method:'POST', body:fd, mode:'no-cors'});
  }
}

// ── ENVÍO ──
async function enviar(e){
  e.preventDefault();
  if(!document.getElementById('acepta-reglamento').checked||!document.getElementById('acepta-imagen').checked){
    alert('Debés aceptar el reglamento y la cesión de imagen para continuar.');return;
  }
  const btn=document.getElementById('btn-enviar');
  const txt=document.getElementById('btn-texto');
  const spin=document.getElementById('spinner');
  btn.disabled=true;txt.style.display='none';spin.style.display='block';

  const min=document.getElementById('tiempo-min').value||'0';
  const seg=document.getElementById('tiempo-seg').value||'0';
  const duracion=min.padStart(2,'0')+':'+seg.padStart(2,'0');

  const datos={
    timestamp:new Date().toISOString(),
    id:generarID(document.getElementById('inst-nombre').value||document.getElementById('institucion').value, document.getElementById('obra').value),
    email:document.getElementById('email').value,
    institucion:document.getElementById('institucion').value,
    inst_nombre:document.getElementById('inst-nombre').value,
    director:document.getElementById('director').value,
    telefono:document.getElementById('telefono').value,
    obra:document.getElementById('obra').value,
    modalidad:document.getElementById('modalidad').value,
    subestilo:document.getElementById('subestilo').value,
    categoria:document.getElementById('categoria').value,
    tipo_part:document.getElementById('tipo-part').value,
    cant_declarada:parseInt(document.getElementById('cant-participantes').value)||listaParticipantes.length,
    coreografo:document.getElementById('coreografo').value,
    preparador:document.getElementById('preparador').value,
    contacto:document.getElementById('contacto-resp').value,
    compite_coreo:document.getElementById('compite-coreo').value,
    participantes:listaParticipantes,
    tipo_musica:document.getElementById('tipo-musica').value,
    duracion,
    escenografia:document.getElementById('tiene-esceno').value,
    esceno_desc:document.getElementById('esceno-desc').value,
    forma_pago:document.getElementById('forma-pago').value,
    costo_total:document.getElementById('monto-total').textContent||'—',
    nuevos_participantes:listaParticipantes.filter(p=>p.nuevo),
  };

  // PASO 1: Enviar datos del formulario sin archivos
  const scriptURL=SCRIPT_URL;
  try{
    txt.textContent='Enviando inscripción...';
    const fd=new FormData();
    fd.append('data',JSON.stringify(datos));
    await fetch(scriptURL,{method:'POST',body:fd,mode:'no-cors'});
  }catch(err){console.warn('Error enviando datos:',err);}

  // PASO 2: Subir MP3 por separado si fue seleccionado
  const inputMp3=document.getElementById('upload-musica');
  if(inputMp3&&inputMp3.files.length&&datos.tipo_musica==='mp3'){
    try{
      txt.textContent='Subiendo música... (puede tardar unos segundos)';
      await subirArchivoDrive(inputMp3.files[0], datos.id, 'musica',
        datos.obra, datos.modalidad, datos.categoria, datos.inst_nombre||datos.institucion);
    }catch(err){console.warn('Error subiendo MP3:',err);}
  }

  // PASO 3: Subir comprobante por separado si fue seleccionado
  const inputComp=document.getElementById('upload-comp');
  if(inputComp&&inputComp.files.length){
    try{
      txt.textContent='Subiendo comprobante...';
      await subirArchivoDrive(inputComp.files[0], datos.id, 'comprobante',
        datos.obra, '', '', datos.inst_nombre||datos.institucion);
    }catch(err){console.warn('Error subiendo comprobante:',err);}
  }

  document.getElementById('main-form').style.display='none';
  document.querySelector('.progress-wrap').style.display='none';
  const ex=document.getElementById('exito');
  ex.style.display='block';
  document.getElementById('id-insc-display').textContent='ID de tu inscripción: '+datos.id;
}

function inyectarImagenes(){
  if(!cfg||!cfg.imagenes_activas||!cfg.imagenes)return;
  cfg.imagenes.forEach(function(img){
    if(!img.url)return;
    var div=document.createElement('div');
    div.className='banner-img';
    div.style.marginBottom='1rem';
    div.innerHTML='<img src="'+img.url+'" alt="'+(img.alt||'PULSO 2026')+'" style="width:100%;border-radius:12px;display:block"/>';
    var secNum=img.posicion.replace('antes-sec-','');
    var sec=document.getElementById('sec-'+secNum);
    if(sec)sec.parentNode.insertBefore(div,sec);
  });
}

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxiBaoLqFqCVAm44URLDZFKXMYPaL0UlUjStOso_vyeC8UdDqVuw3T_SyjzHLbRqxjDRQ/exec";
const CATASTRO_URL = "https://script.google.com/macros/s/AKfycbxiBaoLqFqCVAm44URLDZFKXMYPaL0UlUjStOso_vyeC8UdDqVuw3T_SyjzHLbRqxjDRQ/exec";
