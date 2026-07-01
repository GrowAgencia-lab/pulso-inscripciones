
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
    texto_1er_llamado: "01 de Mayo al 19 de agosto",
    texto_2do_llamado: "20 de agosto hasta cerrar inscripciones",
  },
  costos: {
    primer_llamado: {
      solista:              200000,
      duo_trio_cuarteto:    150000,
      grupo:                120000,   
      gran_grupo:           100000,   
      coreografia:          250000,
    },
    segundo_llamado: {
      solista:              250000,
      duo_trio_cuarteto:    180000,
      grupo:                150000,
      gran_grupo:           140000,
      coreografia:          300000,
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
  "8321429":{"nombre":"Abigail Espinola","edad":8},
  "6540300":{"nombre":"Agustina Arrua","edad":14},
  "7632696":{"nombre":"Alai Sosa","edad":11},
  "7278909":{"nombre":"Aldana Chaparro","edad":12},
  "7919955":{"nombre":"Amaia Viera","edad":10},
  "8356563":{"nombre":"Amelie Painetru","edad":7},
  "7086184":{"nombre":"Ana Domínguez","edad":13},
  "7328621":{"nombre":"Anabella Sanchez","edad":14},
  "9220288":{"nombre":"Angeles Gamarra","edad":19},
  "7643253":{"nombre":"Antonella Cardozo","edad":11},
  "7719778":{"nombre":"Arellys Gill","edad":10},
  "7368129":{"nombre":"Barbara Benitez","edad":15},
  "8346665":{"nombre":"Belen Ramírez","edad":9},
  "8027776":{"nombre":"Bethania Moran","edad":9},
  "8243824":{"nombre":"Bruna Pavanello","edad":8},
  "8474902":{"nombre":"Candela Mereles","edad":8},
  "7294758":{"nombre":"Celeste Galeano","edad":17},
  "7539656":{"nombre":"Chiara Ferrari","edad":12},
  "6933748":{"nombre":"Dulce Acosta","edad":14},
  "6754213":{"nombre":"Dulce Ortellado","edad":15},
  "7868694":{"nombre":"Edith Escobar","edad":10},
  "7953739":{"nombre":"Fausto Mendoza","edad":12},
  "7121006":{"nombre":"Fiorella Baranda","edad":15},
  "7955344":{"nombre":"Gabriela Nuñez","edad":10},
  "8500250":{"nombre":"Gala Gebhardt","edad":14},
  "8506071":{"nombre":"Genesis González","edad":11},
  "8183038":{"nombre":"Gianna Zanotti","edad":8},
  "8291588":{"nombre":"Gina Ferrari","edad":7},
  "6564318":{"nombre":"Iara Florencia Pineda Caballero","edad":16},
  "7106775":{"nombre":"Isabella Avila","edad":13},
  "6633598":{"nombre":"Isabella Kent","edad":15},
  "7008340":{"nombre":"Isabella Solalinde","edad":13},
  "8001788":{"nombre":"Ivanna Florentin","edad":10},
  "7649749":{"nombre":"Jade Medina","edad":11},
  "7576087":{"nombre":"Jennifer Velázquez","edad":21},
  "6155373":{"nombre":"Josefina Odonne","edad":15},
  "8522663":{"nombre":"Julieta Martínez Espínola","edad":7},
  "7799027":{"nombre":"Keyla Croskey","edad":10},
  "6527556":{"nombre":"Khiara Hug De Belmont","edad":16},
  "7465015":{"nombre":"Leslye Zelada","edad":11},
  "7727828":{"nombre":"Luana García","edad":10},
  "7233954":{"nombre":"Luana Recalde","edad":13},
  "6653386":{"nombre":"Lucero González","edad":15},
  "8367718":{"nombre":"Lucia Galeano","edad":7},
  "6816436":{"nombre":"Lucila Fernandez","edad":15},
  "7525093":{"nombre":"Marilia Britez","edad":15},
  "7737098":{"nombre":"Martina Cornet Barreto","edad":12},
  "7018474":{"nombre":"Micaela Olmedo","edad":13},
  "7506071":{"nombre":"Michelle Villalba","edad":16},
  "8498540":{"nombre":"Mila Sosa","edad":8},
  "7970441":{"nombre":"Milenna Zoe Riveros Duarte","edad":12},
  "6634089":{"nombre":"Muriel Alvarez","edad":15},
  "7109466":{"nombre":"Natalia Wollmeister","edad":13},
  "7910655":{"nombre":"Nathaly Piñanez","edad":12},
  "8082414":{"nombre":"Nicole Tracerra","edad":16},
  "6808581":{"nombre":"Paula Mezler","edad":14},
  "6919159":{"nombre":"Sofhia Alegre","edad":20},
  "7691387":{"nombre":"Sophia Ratzlaff","edad":12},
  "7702940":{"nombre":"Victoria Jazmín Tonina Urquhart","edad":12},
  "7026994":{"nombre":"Zaira Landa","edad":14},
  "SINCI_ALEXA_GRIMM":{"nombre":"Alexa Grimm","edad":16,"sinCI":true},
  "SINCI_ANAHI_GOMEZ":{"nombre":"Anahi Gomez","edad":12,"sinCI":true},
  "SINCI_ANGELICA_JIMENEZ":{"nombre":"Angelica Jimenez","edad":12,"sinCI":true},
  "SINCI_BIANCA_BENITEZ":{"nombre":"Bianca Benitez","edad":12,"sinCI":true},
  "SINCI_BIANCA_CABO_DE_VILA":{"nombre":"Bianca Cabo De Vila","edad":11,"sinCI":true},
  "SINCI_DANIELA_FRETES":{"nombre":"Daniela Fretes","edad":14,"sinCI":true},
  "SINCI_GISELLE_CAPLI":{"nombre":"Giselle Capli","edad":12,"sinCI":true},
  "SINCI_ISABELLA_RODRIGUEZ":{"nombre":"Isabella Rodriguez","edad":12,"sinCI":true},
  "SINCI_ISABELLA_VERA_AYALA":{"nombre":"Isabella Vera Ayala","edad":9,"sinCI":true},
  "SINCI_JESSICA_PEREZ":{"nombre":"Jessica Perez","edad":18,"sinCI":true},
  "SINCI_JESSICA_SANTACRUZ":{"nombre":"Jessica Santacruz","edad":14,"sinCI":true},
  "SINCI_KEIMI_ESCOBAR":{"nombre":"Keimi Escobar","edad":14,"sinCI":true},
  "SINCI_LARA_RODRÍGUEZ":{"nombre":"Lara Rodríguez","edad":9,"sinCI":true},
  "SINCI_LUANA_CASTILLO":{"nombre":"Luana Castillo","edad":15,"sinCI":true},
  "SINCI_LUJAN_MELGAREJO":{"nombre":"Lujan Melgarejo","edad":11,"sinCI":true},
  "SINCI_LUJÁN_GONZALEZ":{"nombre":"Luján Gonzalez","edad":17,"sinCI":true},
  "SINCI_LUJÁN_GONZÁLEZ":{"nombre":"Luján González","edad":17,"sinCI":true},
  "SINCI_MELANIE_BARRETO":{"nombre":"Melanie Barreto","edad":11,"sinCI":true},
  "SINCI_MICAELA_LEDEZMA":{"nombre":"Micaela Ledezma","edad":18,"sinCI":true},
  "SINCI_PIA_ISABELLA_RIVAS":{"nombre":"Pia Isabella Rivas","edad":11,"sinCI":true},
  "SINCI_SOFÍA_SAMANIEGO":{"nombre":"Sofía Samaniego","edad":9,"sinCI":true},
  "SINCI_VICTORIA_AGUILAR":{"nombre":"Victoria Aguilar","edad":13,"sinCI":true},
  "SINCI_ZAIRA_OLMEDO":{"nombre":"Zaira Olmedo","edad":13,"sinCI":true},
  "SINCI_ZAMIRA_AGUERO":{"nombre":"Zamira Aguero","edad":11,"sinCI":true}
};

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
      <div style="font-weight:700;color:#C53030;margin-bottom:.3rem">CI ${ci} no encontrado en el catastro</div>
      <div style="font-size:.82rem;color:#555;margin-bottom:.5rem">Si el participante existe, buscalo por nombre. Si es nuevo, registralo acá.</div>
      <button type="button" class="btn-registrar" onclick="mostrarFormNuevo('${ci}')">+ Registrar nuevo participante</button>
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
      <div style="font-weight:700;color:#C53030">Sin resultados para "${q}"</div>
      <button type="button" class="btn-registrar" onclick="mostrarFormNuevo('')">+ Registrar nuevo participante</button>
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
  document.getElementById('bloque-banco').style.display=document.getElementById('forma-pago').value==='transferencia'?'block':'none';
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
  if(input.files.length){area.classList.add('has-file');nameEl.textContent='✓ '+input.files[0].name;}
}

// ── NAV ──


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
    id:'PULSO26-'+Math.random().toString(36).substring(2,7).toUpperCase(),
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

  const scriptURL=cfg&&cfg.google_script_url?cfg.google_script_url:null;
  if(scriptURL){
    try{
      const fd=new FormData();
      fd.append('data',JSON.stringify(datos));
      await fetch(scriptURL,{method:'POST',body:fd,mode:'no-cors'});
    }catch(err){console.warn('Error:',err);}
  } else {
    await new Promise(r=>setTimeout(r,1500));
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

const CATASTRO_URL = "https://script.google.com/macros/s/AKfycbx97F586kF1AvKrz8KCvG-KgiRJ1YJMKNwTxGhAWZojmV1eIgXQ8FHHD8CE-8Wtt0PWSQ/exec";
