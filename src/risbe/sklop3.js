/* ================= tretji sklop pravljic (uporablja pomočnike iz lib.js) ================= */
const closedEyes=(x1,x2,y)=>`<path d="M${x1-3} ${y}Q${x1} ${y+2.4} ${x1+3} ${y}M${x2-3} ${y}Q${x2} ${y+2.4} ${x2+3} ${y}" fill="none" ${sw(1.5)}/>`;
const star=(x,y,r,c)=>{let p="";for(let i=0;i<10;i++){const a=(i*36-90)*Math.PI/180,rr=i%2?r*.45:r;p+=(i?"L":"M")+(x+Math.cos(a)*rr).toFixed(1)+" "+(y+Math.sin(a)*rr).toFixed(1);}return `<path d="${p}Z" fill="${c||"#F7D04B"}" ${sw(.9)}/>`;};

/* ---------- 11. TRI BOTRE LISIČICE ---------- */
const lisicka1=()=>animal({c:"#E8833A",d:"#A8531C",l:"#FFF4E6",ears:"pointy",inner:"#3A2A22",
  tail:`<path d="M68 84C92 86 98 60 84 52C82 66 76 74 66 76Z" fill="#E8833A" stroke="#A8531C" stroke-width="1.6" stroke-linejoin="round"/><path d="M84 52C90 56 92 62 90 66C86 64 84 58 84 52Z" fill="#FFF4E6"/>`,
  top:`<ellipse cx="50" cy="18" rx="22" ry="4" fill="#4A8FD9" ${sw(1.2)}/><path d="M38 18C38 6 62 6 62 18Z" fill="#4A8FD9" ${sw(1.2)}/><path d="M38 15H62" stroke="#F7D04B" stroke-width="2.4"/>`+flower(60,10,"#E46C8C",2.4),
  extra:`<path d="M32 56Q50 66 68 56L64 64Q50 70 36 64Z" fill="#4A8FD9" ${sw(1.1)}/><text x="10" y="18" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="14" fill="#4A8FD9">1</text>`});
const lisicka2=()=>animal({c:"#D9692A",d:"#9A4614",l:"#FFF1E0",ears:"pointy",inner:"#3A2A22",
  tail:`<path d="M68 84C92 86 98 60 84 52C82 66 76 74 66 76Z" fill="#D9692A" stroke="#9A4614" stroke-width="1.6" stroke-linejoin="round"/><path d="M84 52C90 56 92 62 90 66C86 64 84 58 84 52Z" fill="#FFF1E0"/>`,
  top:`<path d="M42 20l-8 -6v12zM58 20l8 -6v12z" fill="#E46C8C" ${sw(1.1)}/><circle cx="50" cy="20" r="3.4" fill="#E46C8C" ${sw(1.1)}/>`,
  extra:(()=>{let s="";for(let i=0;i<9;i++){const a=(200+i*17.5)*Math.PI/180;s+=`<circle cx="${(50+Math.cos(a)*-17).toFixed(1)}" cy="${(52+Math.sin(a)*-7).toFixed(1)}" r="2.2" fill="#FFFFFF" ${sw(.8)}/>`;}return s;})()+`<text x="10" y="18" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="14" fill="#E46C8C">2</text>`});
const lisicka3=()=>animal({c:"#F09A50",d:"#B0601E",l:"#FFF6EA",ears:"pointy",inner:"#3A2A22",
  tail:`<path d="M68 84C92 86 98 60 84 52C82 66 76 74 66 76Z" fill="#F09A50" stroke="#B0601E" stroke-width="1.6" stroke-linejoin="round"/><path d="M84 52C90 56 92 62 90 66C86 64 84 58 84 52Z" fill="#FFF6EA"/>`,
  top:`<path d="M36 22L34 6L42 14L50 2L58 14L66 6L64 22Z" fill="#F2C94C" ${sw(1.2)}/><circle cx="50" cy="12" r="2" fill="#9B6DD6"/>`,
  extra:`<path d="M38 60H62L66 86H34Z" fill="#9B6DD6" ${sw(1.2)}/><path d="M38 60Q50 66 62 60" fill="none" stroke="#F2C94C" stroke-width="2"/><text x="8" y="18" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="14" fill="#9B6DD6">3</text>`});
function avto(){
  let s=`<path d="M6 70V58C6 52 12 50 18 50H28L38 34H70L82 50H88C94 50 96 56 96 62V70Z" fill="#E2412F" ${sw(1.6)}/>`;
  s+=`<path d="M42 38H54V50H34Z" fill="#BFE3F5" ${sw(1.3)}/><path d="M58 38H68L78 50H58Z" fill="#BFE3F5" ${sw(1.3)}/>`;
  s+=`<path d="M56 50V68" stroke="#A82A1E" stroke-width="1.4"/><path d="M60 56h5" ${sw(1.4)}/>`;
  s+=`<circle cx="26" cy="72" r="10" fill="#3A3D4A" ${sw(1.4)}/><circle cx="26" cy="72" r="4" fill="#D9D9D9"/><circle cx="76" cy="72" r="10" fill="#3A3D4A" ${sw(1.4)}/><circle cx="76" cy="72" r="4" fill="#D9D9D9"/>`;
  s+=`<rect x="88" y="56" width="6" height="4" rx="1.5" fill="#F7D04B" ${sw(.9)}/><rect x="6" y="56" width="5" height="4" rx="1.5" fill="#F28A2E" ${sw(.9)}/>`;
  s+=`<path d="M44 40L50 26L48 34" fill="none" stroke="#E8833A" stroke-width="0"/>`;
  s+=`<path d="M46 40L49 30L52 38Z M54 40L57 30L60 38Z" fill="#E8833A" ${sw(1)}/><circle cx="53" cy="44" r="5" fill="#E8833A" ${sw(1)}/><circle cx="51.5" cy="43" r=".9" fill="${INK}"/><circle cx="54.5" cy="43" r=".9" fill="${INK}"/>`;
  s+=`<path d="M4 84H98" stroke="#9AA6B2" stroke-width="2" stroke-dasharray="6 4" stroke-linecap="round"/>`;
  return s;
}
const lisicjaHisa=()=>house({wall:"#FFE7CC",roof:"#E8833A",door:"#9A4614",chimneyC:"#B0601E",
  roofDeco:`<path d="M30 30L26 18L36 26ZM70 30L74 18L64 26Z" fill="#E8833A" ${sw(1.1)}/><circle cx="50" cy="32" r="5" fill="#FFF4E6" ${sw(1)}/><path d="M47 32h6M50 29v6" stroke="#E8833A" stroke-width="1.2"/>`,
  extra:flower(10,86,"#E46C8C",3.4)+flower(90,86,"#9B6DD6",3.4)+`<path d="M4 92H96" stroke="#6CBF5A" stroke-width="3" stroke-linecap="round"/>`});
function sopek(){
  let s=`<path d="M50 52L40 92M50 52L50 92M50 52L60 92M50 52L34 90M50 52L66 90" stroke="#3E8A35" stroke-width="2.4" stroke-linecap="round"/>`;
  s+=`<path d="M38 66L62 66L58 78L42 78Z" fill="#F2B6C1" ${sw(1.3)}/><path d="M50 72L40 84M50 72L60 84" stroke="#E46C8C" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="72" r="3.2" fill="#E46C8C" ${sw(1)}/>`;
  s+=`<path d="M30 48C20 40 22 30 28 32C32 36 32 42 30 48ZM70 48C80 40 78 30 72 32C68 36 68 42 70 48Z" fill="#6CBF5A" ${sw(1)}/>`;
  s+=flower(50,26,"#E2574C",8)+flower(30,40,"#F7D04B",7)+flower(70,40,"#9B6DD6",7)+flower(40,14,"#E46C8C",6)+flower(62,14,"#4A8FD9",6);
  return s;
}
function gramofon(){
  let s=`<rect x="14" y="62" width="58" height="26" rx="3" fill="#A86B3C" ${sw(1.5)}/><path d="M18 70H68" stroke="#7A4A2A" stroke-width="1.2"/>`;
  s+=`<ellipse cx="40" cy="62" rx="22" ry="5" fill="#2E2A33" ${sw(1.2)}/><ellipse cx="40" cy="62" rx="6" ry="1.6" fill="#E2412F"/>`;
  s+=`<path d="M64 62L64 48L54 40" fill="none" ${sw(2.4)}/><path d="M64 62L64 48L54 40" fill="none" stroke="#E1B84A" stroke-width="1.2"/>`;
  s+=`<path d="M54 40L48 32C56 4 92 4 94 18C96 30 70 36 58 44Z" fill="#E1B84A" ${sw(1.5)}/><path d="M60 36C66 20 86 12 92 18" fill="none" stroke="#B88A2A" stroke-width="1.4"/>`;
  s+=`<path d="M78 72v-6l6 -2v6M78 72a2 2 0 1 1 -2 -2M84 70a2 2 0 1 1 -2 -2" fill="none" ${sw(1.3)}/>`;
  s+=`<rect x="18" y="88" width="6" height="4" fill="#7A4A2A"/><rect x="62" y="88" width="6" height="4" fill="#7A4A2A"/>`;
  return s;
}

/* ---------- 12. KRALJ MATJAŽ ---------- */
const kraljMatjaz=()=>person({hair:"#C9C4BC",hairStyle:"beard",top:"#9E2A3A",bottom:"#5A3A22",shoes:"#3A2A1E",
  back:`<path d="M34 46L26 90H74L66 46Z" fill="#3E5EB8" ${sw(1.3)}/>`,
  front:`<path d="M40 40C40 60 46 78 50 86C54 78 60 60 60 40Z" fill="#E9E9EE" ${sw(1.2)}/><path d="M45 50Q50 60 46 72M55 50Q50 62 54 74" fill="none" stroke="#C9C4BC" stroke-width="1"/>`,
  face:closedEyes(44.5,55.5,29)+`<text x="66" y="16" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="7" fill="#4A8FD9">z</text><text x="72" y="9" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="9" fill="#4A8FD9">z</text>`,
  hat:`<path d="M36 18L37 4L43 11L50 1L57 11L63 4L64 18Z" fill="#F2C94C" ${sw(1.2)}/><circle cx="50" cy="12" r="2" fill="#E2412F"/><circle cx="41" cy="14" r="1.4" fill="#4A8FD9"/><circle cx="59" cy="14" r="1.4" fill="#4A8FD9"/>`});
function mizaBrada(){
  let s=`<path d="M22 54L18 90H30L32 54ZM68 54L70 90H82L78 54Z" fill="#A8A096" ${sw(1.4)}/>`;
  s+=`<path d="M8 44H92V56H8Z" fill="#B8B0A4" ${sw(1.5)}/><path d="M8 44L16 36H84L92 44Z" fill="#CFC8BC" ${sw(1.4)}/>`;
  s+=`<path d="M20 48l6 4M60 46l4 6M80 50l-4 3" stroke="#8A8278" stroke-width="1"/>`;
  s+=`<path d="M48 36C44 46 20 50 14 62C8 76 30 80 48 72C64 66 92 66 88 80C86 88 70 90 60 86" fill="none" stroke="${INK}" stroke-width="7.4" stroke-linecap="round"/><path d="M48 36C44 46 20 50 14 62C8 76 30 80 48 72C64 66 92 66 88 80C86 88 70 90 60 86" fill="none" stroke="#E9E9EE" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<path d="M44 26C44 18 56 18 56 26C56 34 52 38 50 40C48 38 44 34 44 26Z" fill="#E9E9EE" ${sw(1.2)}/>`;
  s+=`<path d="M36 30L56 22M38 34L58 26" stroke="#E1B84A" stroke-width="1.4" opacity="0"/>`;
  return s;
}
const pastircek=()=>person({hair:"#8A5A2B",hairStyle:"short",top:"#E9E2D3",bottom:"#6B4A2E",shoes:"#4A3426",
  armR:[74,62],
  back:`<path d="M76 92L78 18" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><path d="M78 18C78 10 86 10 86 16" fill="none" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/>`,
  front:`<path d="M42 45L44 66M58 45L56 66" stroke="#6B4A2E" stroke-width="2.4"/>`,
  hat:`<path d="M36 20C36 8 64 8 64 20Z" fill="#3E5E2C" ${sw(1.2)}/><path d="M30 21H70" ${sw(3)}/><path d="M30 21H70" stroke="#3E5E2C" stroke-width="1.6"/><path d="M58 14C66 4 72 6 70 10C68 12 62 14 58 14Z" fill="#F4F1EA" ${sw(1)}/>`});
const vojak=()=>person({hair:"#5A3A22",hairStyle:"short",top:"#9AA6B2",bottom:"#4A4F58",shoes:"#2E2A33",
  armR:[74,60],
  back:`<path d="M76 92L76 6" stroke="#8A5A2B" stroke-width="2.6" stroke-linecap="round"/><path d="M76 0L80 10H72Z" fill="#C9CED6" ${sw(1.1)}/><path d="M18 52C18 40 34 40 34 52V74C34 82 18 82 18 74Z" fill="#B5452E" ${sw(1.3)}/><path d="M26 46V80M18 60H34" stroke="#F2C94C" stroke-width="2"/>`,
  front:`<path d="M36 52H64M36 60H64" stroke="#C9CED6" stroke-width="1.6"/>`,
  face:closedEyes(44.5,55.5,30)+cheeks(40,60,34)+`<path d="M47 37h6" ${sw(1.2)}/>`,
  hat:`<path d="M34 26C34 8 66 8 66 26Z" fill="#C9CED6" ${sw(1.3)}/><path d="M48 26V10" ${sw(1.2)}/><path d="M50 8C54 0 60 2 58 6" fill="none" stroke="#E2412F" stroke-width="2.4" stroke-linecap="round"/>`});
function konj(){
  const C="#A86B3C",D="#6B4226";
  let s=`<path d="M22 60L20 90M32 62L32 90M66 62L66 90M76 60L78 90" stroke="${D}" stroke-width="6" stroke-linecap="round"/>`;
  s+=`<path d="M22 60L20 90M32 62L32 90M66 62L66 90M76 60L78 90" stroke="${C}" stroke-width="3.8" stroke-linecap="round"/>`;
  s+=`<path d="M82 52C92 54 96 70 90 78C88 68 86 60 80 58Z" fill="#4A2E1A" ${sw(1.2)}/>`;
  s+=`<ellipse cx="50" cy="56" rx="32" ry="13" fill="${C}" ${sw(1.5)}/>`;
  s+=`<path d="M24 52C20 40 18 30 16 22L30 18C32 30 34 42 36 50Z" fill="${C}" ${sw(1.4)}/>`;
  s+=`<path d="M10 22C8 12 18 6 28 10L32 20C30 28 18 30 10 28Z" fill="${C}" ${sw(1.4)}/><ellipse cx="11" cy="25" rx="5" ry="4" fill="#C98E5E" ${sw(1.1)}/><circle cx="9" cy="24" r=".9" fill="${INK}"/>`;
  s+=`<path d="M22 10L24 2L28 10Z" fill="${C}" ${sw(1.1)}/>`;
  s+=`<path d="M28 10C34 14 34 26 38 34C40 40 38 46 36 50C32 40 30 28 26 18Z" fill="#4A2E1A" ${sw(1.1)}/>`;
  s+=`<circle cx="20" cy="16" r="2.2" fill="${INK}"/><circle cx="20.8" cy="15.2" r=".8" fill="#fff"/>`;
  s+=`<path d="M40 44H62V54H40Z" fill="#3E5EB8" ${sw(1.2)}/><path d="M40 49H62" stroke="#F2C94C" stroke-width="1.6"/>`;
  s+=`<path d="M16 92h8M28 92h8M62 92h8M74 92h8" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>`;
  return s;
}
function votlina(){
  let s=`<path d="M2 92L22 40L36 50L54 14L72 44L84 34L98 92Z" fill="#9AA6B2" ${sw(1.5)}/>`;
  s+=`<path d="M54 14L48 26L56 24L62 30L66 34L72 44" fill="#FFFFFF" ${sw(1.1)}/>`;
  s+=`<path d="M22 40L18 52L26 48ZM84 34L80 46L88 44Z" fill="#FFFFFF" ${sw(1)}/>`;
  s+=`<path d="M32 92C32 66 68 66 68 92Z" fill="#2E2A33" ${sw(1.5)}/>`;
  s+=`<circle cx="44" cy="84" r="2" fill="#F7D04B"/><circle cx="56" cy="82" r="2" fill="#F7D04B"/><circle cx="50" cy="88" r="1.6" fill="#F7D04B"/>`;
  s+=`<path d="M10 92C12 82 16 80 18 92M84 92C86 82 90 80 92 92" fill="#6CBF5A" ${sw(1)}/>`;
  s+=`<path d="M26 64l6 2M74 60l-6 4M40 40l4 4" stroke="#7A8794" stroke-width="1.2"/>`;
  return s;
}
function zaklad(){
  let s=`<path d="M14 50H86V88H14Z" fill="#A86B3C" ${sw(1.6)}/>`;
  s+=`<path d="M14 62H86M14 76H86" stroke="#7A4A2A" stroke-width="1.4"/><path d="M26 50V88M74 50V88" stroke="#E1B84A" stroke-width="4"/>`;
  s+=`<rect x="44" y="58" width="12" height="14" rx="2" fill="#E1B84A" ${sw(1.2)}/><circle cx="50" cy="64" r="2" fill="${INK}"/><path d="M50 64v4" ${sw(1.4)}/>`;
  s+=`<path d="M10 50C10 26 90 26 90 50Z" fill="#B87A48" ${sw(1.6)}/><path d="M26 50C26 34 30 32 30 32M74 50C74 34 70 32 70 32" fill="none" stroke="#E1B84A" stroke-width="4"/>`;
  [[22,46],[34,40],[46,36],[58,38],[70,42],[80,47],[40,30],[60,30]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="5" fill="#F7D04B" ${sw(1.1)}/>`;});
  s+=star(52,18,6,"#F7D04B")+`<path d="M30 20l2 4M76 24l-3 3" stroke="#F7D04B" stroke-width="2" stroke-linecap="round"/>`;
  return s;
}

/* ---------- 13. KEKEC ---------- */
const kekec=()=>person({hair:"#C68A3E",hairStyle:"short",top:"#F4F1EA",bottom:"#6B4A2E",shoes:"#4A3426",
  armR:[74,58],
  back:`<path d="M76 92L80 30" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/>`,
  front:`<path d="M40 45L44 70M60 45L56 70" stroke="#3E8E5A" stroke-width="3"/><path d="M44 58H56" stroke="#3E8E5A" stroke-width="2.4"/>`,
  hat:`<path d="M34 22C34 8 66 8 66 22Z" fill="#3E5E2C" ${sw(1.2)}/><path d="M28 22H72" ${sw(3)}/><path d="M28 22H72" stroke="#3E5E2C" stroke-width="1.6"/><path d="M60 16C64 0 70 -2 70 2C70 8 64 14 60 16Z" fill="#F4F1EA" ${sw(1)}/>`});
const mojca2=()=>person({hair:"#E8C14E",hairStyle:"braids",skirt:true,top:"#D63A2F",legs:"#FFFFFF",bow:"#4A8FD9",
  front:`<path d="M42 56H58L62 78H38Z" fill="#FFFFFF" ${sw(1.1)}/><path d="M38 47Q50 54 62 47" fill="#FFFFFF" ${sw(1.1)}/>`+flower(50,66,"#4A8FD9",2.4)});
const rozle=()=>person({hair:"#5A3A22",hairStyle:"short",top:"#4A8FD9",bottom:"#5A4A3A",shoes:"#4A3426",
  front:`<path d="M42 45L44 66M58 45L56 66" stroke="#5A4A3A" stroke-width="2.4"/>`,
  face:eyes(44.5,55.5,30,2.2)+cheeks(40,60,35)+`<ellipse cx="50" cy="38" rx="2.6" ry="2" fill="${INK}"/>`});
const bedanec=()=>person({hair:"#2E2A33",hairStyle:"beard",top:"#5A4A3A",bottom:"#3A3A40",shoes:"#1E1A22",
  armL:[24,60],armR:[76,60],
  back:`<path d="M30 46L22 82H78L70 46Z" fill="#3A3D4A" ${sw(1.3)}/>`,
  front:`<path d="M36 56H64" stroke="#8A5A2B" stroke-width="3"/>`,
  face:`<path d="M40 25L48 28M60 25L52 28" ${sw(2)}/>`+eyes(44.5,55.5,30,2.3)+`<path d="M46 38Q50 36 54 38" fill="none" stroke="#E9E9EE" stroke-width="1.4"/>`,
  hat:`<path d="M34 22C32 6 68 6 66 22Z" fill="#2E2A33" ${sw(1.2)}/><path d="M26 22H74" ${sw(3)}/><path d="M26 22H74" stroke="#2E2A33" stroke-width="1.6"/>`});
const pehta=()=>person({skin:"#EBC9A8",hair:"#B9B9C2",hairStyle:"long",skirt:true,top:"#6B7A4A",legs:"#5A4A3A",shoes:"#3A2A1E",
  armR:[74,66],
  front:`<path d="M42 54H58L62 78H38Z" fill="#B8A07A" ${sw(1.1)}/><path d="M66 68H86L82 82H70Z" fill="#C9934E" ${sw(1.2)}/><path d="M70 68L68 58M74 68L76 56M80 68L84 60" stroke="#3E8A35" stroke-width="2" stroke-linecap="round"/><circle cx="68" cy="58" r="2" fill="#9B6DD6"/><circle cx="76" cy="56" r="2" fill="#F7D04B"/><circle cx="84" cy="60" r="2" fill="#E2574C"/>`,
  face:eyes(44.5,55.5,30,2)+`<path d="M50 31L48 38L52 37Z" fill="#D9A07E" ${sw(1)}/>`+`<path d="M46 41Q50 43 54 41" fill="none" ${sw(1.2)}/>`,
  hat:`<path d="M32 32C28 8 72 8 68 32C66 20 34 20 32 32Z" fill="#7A2E2E" ${sw(1.2)}/><path d="M44 46L50 52L56 46" fill="#7A2E2E" ${sw(1.1)}/>`});
function bedancevaKoca(){
  let s=`<path d="M0 60L18 30L32 52L46 24L60 50Z" fill="#C9CED6" ${sw(1.2)}/><path d="M46 24L42 32L48 30L52 36Z" fill="#fff"/>`;
  s+=house({wall:"#6B4A2E",roof:"#3A2A1E",door:"#2E2A33",win:"#F7D04B",chimneyC:"#4A3A2E",
    wallDeco:`<path d="M20 52H80M20 60H80M20 68H80M20 76H80M20 84H80" stroke="#4E3420" stroke-width=".9"/>`});
  s+=`<rect x="54" y="76" width="6" height="7" rx="1" fill="#C9CED6" ${sw(1)}/><path d="M55 76C55 71 59 71 59 76" fill="none" ${sw(1)}/>`;
  s+=`<path d="M86 92C84 70 90 56 94 56C98 56 100 70 98 92Z" fill="#2F5E3A" ${sw(1.1)}/>`;
  return s;
}
function ovcka(){
  let s=`<path d="M32 78V90M44 80V92M58 80V92M70 78V90" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  [[30,62,12],[44,54,13],[60,54,13],[72,64,12],[52,70,14],[36,72,11],[66,74,11]].forEach(([x,y,r])=>{s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF" ${sw(1.3)}/>`;});
  s+=`<path d="M28 48C10 48 14 30 20 28C22 22 34 22 36 30C40 40 38 48 28 48Z" fill="#3A3D4A" ${sw(1.3)}/>`;
  s+=`<ellipse cx="14" cy="34" rx="6" ry="3" transform="rotate(-20 14 34)" fill="#3A3D4A" ${sw(1.1)}/><ellipse cx="38" cy="30" rx="6" ry="3" transform="rotate(20 38 30)" fill="#3A3D4A" ${sw(1.1)}/>`;
  s+=`<circle cx="22" cy="22" r="5" fill="#FFFFFF" ${sw(1.1)}/><circle cx="28" cy="20" r="5" fill="#FFFFFF" ${sw(1.1)}/>`;
  s+=`<circle cx="22" cy="36" r="2.4" fill="#fff"/><circle cx="31" cy="36" r="2.4" fill="#fff"/><circle cx="22.5" cy="36.5" r="1.3" fill="${INK}"/><circle cx="31.5" cy="36.5" r="1.3" fill="${INK}"/>`;
  s+=`<path d="M24 43Q27 45 30 43" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="26.5" cy="52" r="3" fill="#F7D04B" ${sw(1)}/>`;
  return s;
}

/* ---------- 14. OSTRŽEK ---------- */
const ostrzek=()=>person({skin:"#E8BC84",hair:"#7A4A24",hairStyle:"short",top:"#E2574C",bottom:"#3E8E5A",shoes:"#7A4A24",
  front:`<path d="M44 45H56L50 52Z" fill="#F7D04B" ${sw(1)}/><circle cx="50" cy="58" r="1.4" fill="#fff"/><circle cx="50" cy="64" r="1.4" fill="#fff"/>`,
  face:eyes(44,54,28,2.4)+cheeks(40,59,34,"#E89A7A")+`<path d="M52 32L78 30L52 36Z" fill="#E8BC84" ${sw(1.3)}/>`+`<path d="M44 39Q48 42 52 39" fill="none" ${sw(1.2)}/>`+
    `<path d="M74 30L80 26M77 30.5L82 34" stroke="#6CBF5A" stroke-width="1.6" stroke-linecap="round"/>`,
  hat:`<path d="M36 22C36 10 62 6 66 20L58 22Z" fill="#F4F1EA" ${sw(1.2)}/><path d="M38 20L50 -4L60 18Z" fill="#E2574C" ${sw(1.2)}/>`});
const pepe=()=>person({hair:"#E9E9EE",hairStyle:"short",top:"#F4F1EA",bottom:"#B88A5A",shoes:"#5A3A22",
  front:`<path d="M38 50H62V76H38Z" fill="#8FC7E8" ${sw(1.2)}/><path d="M42 58h6M52 64h6" stroke="#5A8FB8" stroke-width="1.4"/>`,
  face:`<circle cx="44.5" cy="29" r="4" fill="#fff" ${sw(1.1)}/><circle cx="55.5" cy="29" r="4" fill="#fff" ${sw(1.1)}/><path d="M48.5 29H51.5" ${sw(1.1)}/>`+eyes(44.5,55.5,29,1.5)+
    `<path d="M40 37C44 33 48 35 50 36C52 35 56 33 60 37C56 40 52 38 50 37C48 38 44 40 40 37Z" fill="#E9E9EE" ${sw(1.1)}/>`+cheeks(39,61,34),
  hat:`<path d="M34 22C34 10 66 10 66 22Z" fill="#F2C94C" ${sw(1.2)}/><path d="M34 22H66" ${sw(1.4)}/>`,
  armR:[74,62],
  back:`<path d="M72 64L88 52" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><rect x="84" y="44" width="10" height="8" rx="1.5" fill="#9AA6B2" ${sw(1.1)}/>`});
const plavolaska=()=>person({hair:"#5AA6E0",hairStyle:"long",skirt:true,top:"#BFE3F5",legs:"#E6F2FB",shoes:"#5AA6E0",
  armR:[76,48],
  back:`<path d="M38 50C18 30 10 50 20 62C26 68 34 62 40 56ZM62 50C82 30 90 50 80 62C74 68 66 62 60 56Z" fill="#F4F7FA" ${sw(1.2)}/><path d="M76 48L88 28" stroke="#E1B84A" stroke-width="2.4" stroke-linecap="round"/>`+star(89,24,6),
  hat:star(50,14,5,"#F7D04B")});
function muren(){
  const G="#7BBF4A",D="#3E7A2A";
  let s=`<path d="M38 34C30 18 22 10 12 8M46 32C46 16 50 6 58 2" fill="none" stroke="${D}" stroke-width="1.8" stroke-linecap="round"/>`;
  s+=`<path d="M34 72L22 92M44 74L40 92M62 72L74 92M58 70L84 80L90 92" fill="none" stroke="${D}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  s+=`<ellipse cx="56" cy="62" rx="26" ry="16" fill="${G}" stroke="${D}" stroke-width="1.6"/>`;
  s+=`<path d="M44 52C56 44 78 50 82 62C70 64 54 62 44 52Z" fill="#A5D97A" stroke="${D}" stroke-width="1.3"/>`;
  s+=`<circle cx="38" cy="44" r="15" fill="${G}" stroke="${D}" stroke-width="1.6"/>`;
  s+=eyes(33,43,42,3)+`<path d="M34 50Q38 53 42 50" fill="none" ${sw(1.3)}/>`;
  s+=`<path d="M24 32C24 22 50 22 50 32Z" fill="#2E2A33" ${sw(1.2)}/><path d="M20 32H54" ${sw(3)}/><path d="M20 32H54" stroke="#2E2A33" stroke-width="1.6"/><rect x="30" y="16" width="14" height="14" fill="#2E2A33" ${sw(1.1)}/>`;
  s+=`<path d="M46 74l-4 6" stroke="${D}" stroke-width="3" stroke-linecap="round"/>`;
  return s;
}
const zvitorepka=()=>animal({c:"#E8833A",d:"#A8531C",l:"#FFF4E6",ears:"pointy",inner:"#3A2A22",
  tail:`<path d="M68 84C92 86 98 60 84 52C82 66 76 74 66 76Z" fill="#E8833A" stroke="#A8531C" stroke-width="1.6" stroke-linejoin="round"/><path d="M84 52C90 56 92 62 90 66C86 64 84 58 84 52Z" fill="#FFF4E6"/>`,
  top:`<path d="M34 22C34 8 66 8 66 22Z" fill="#6B3F86" ${sw(1.2)}/><path d="M28 22H72" ${sw(3)}/><path d="M28 22H72" stroke="#6B3F86" stroke-width="1.6"/>`,
  extra:`<path d="M20 92L24 52" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><path d="M18 52H30" stroke="#8A5A2B" stroke-width="4" stroke-linecap="round"/><path d="M54 84l10 4" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`});
const brljav=()=>animal({c:"#4A4A55",d:"#2A2A33",l:"#F2F2F2",ears:"pointy",inner:"#F2B6C1",nose:"#F28CA0",
  tail:`<path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#2A2A33" stroke-width="6" stroke-linecap="round"/><path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#4A4A55" stroke-width="3.6" stroke-linecap="round"/>`,
  extra:`<circle cx="43" cy="34" r="6" fill="#2E2A33" stroke="#C9CED6" stroke-width="1.2"/><circle cx="57" cy="34" r="6" fill="#2E2A33" stroke="#C9CED6" stroke-width="1.2"/><path d="M49 34h2M37 33L32 31M63 33L68 31" stroke="#C9CED6" stroke-width="1.2"/><path d="M40 32l3 -2" stroke="#fff" stroke-width="1" opacity=".7"/><path d="M78 92L80 54" stroke="#C9CED6" stroke-width="2.4" stroke-linecap="round"/>`});
function morskiPes(){
  const G="#8E9BAA",D="#55606B";
  let s=`<path d="M78 46L98 26L94 50L98 74L78 58Z" fill="${G}" stroke="${D}" stroke-width="1.6" stroke-linejoin="round"/>`;
  s+=`<path d="M48 34L60 10L66 36Z" fill="${G}" stroke="${D}" stroke-width="1.6" stroke-linejoin="round"/>`;
  s+=`<path d="M2 52C6 32 40 26 80 44C84 50 84 54 80 60C40 80 8 72 2 52Z" fill="${G}" stroke="${D}" stroke-width="1.6"/>`;
  s+=`<path d="M8 60C20 70 50 72 78 60C50 66 26 66 8 60Z" fill="#E9ECF0"/>`;
  s+=`<path d="M4 54C12 50 22 50 30 56C22 64 12 64 4 58Z" fill="#7A2E2E" ${sw(1.3)}/>`;
  s+=`<path d="M6 54l3 3l3 -3l3 3l3 -3l3 3l3 -3l3 3M8 60l3 -2l3 2l3 -2l3 2l3 -2" fill="#fff" stroke="#fff" stroke-width="1.2"/>`;
  s+=`<circle cx="24" cy="44" r="3.4" fill="#fff" ${sw(1)}/><circle cx="23.5" cy="44.5" r="1.8" fill="${INK}"/>`;
  s+=`<path d="M38 50q2 4 0 8M44 50q2 4 0 8M50 50q2 4 0 8" fill="none" stroke="${D}" stroke-width="1.2"/>`;
  s+=`<path d="M46 64L40 76L56 68Z" fill="${G}" stroke="${D}" stroke-width="1.4" stroke-linejoin="round"/>`;
  s+=`<path d="M4 88Q14 82 24 88T44 88T64 88T84 88T104 88" fill="none" stroke="#7BBEDC" stroke-width="2.4"/>`;
  s+=`<circle cx="14" cy="30" r="2.4" fill="none" stroke="#7BBEDC" stroke-width="1.3"/><circle cx="8" cy="22" r="1.6" fill="none" stroke="#7BBEDC" stroke-width="1.2"/>`;
  return s;
}

/* ---------- 15. CESARJEVA NOVA OBLAČILA ---------- */
const cesar=()=>person({hair:"#7A4A24",hairStyle:"short",top:"#FFFFFF",bottom:"#FFFFFF",shoes:"#9E2A3A",
  back:`<path d="M34 46C22 60 18 80 14 92H40L40 50ZM66 46C78 60 82 80 86 92H60L60 50Z" fill="#9E2A3A" ${sw(1.3)}/><path d="M16 88H40M60 88H84" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="2 3"/>`,
  front:`<path d="M38 64H62V74H38Z" fill="#9CC7E8" ${sw(1.1)}/><circle cx="44" cy="69" r="1.2" fill="#fff"/><circle cx="52" cy="69" r="1.2" fill="#fff"/><circle cx="58" cy="69" r="1.2" fill="#fff"/>`,
  face:eyes(44.5,55.5,30,2.2)+cheeks(40,60,35)+`<path d="M44 37Q50 33 56 37" fill="none" ${sw(1.3)}/><path d="M42 33C46 31 48 34 50 34C52 34 54 31 58 33" fill="none" stroke="#7A4A24" stroke-width="2" stroke-linecap="round"/>`,
  hat:`<path d="M36 18L37 4L43 11L50 1L57 11L63 4L64 18Z" fill="#F2C94C" ${sw(1.2)}/><circle cx="50" cy="12" r="2" fill="#4A8FD9"/>`});
const tkalec=()=>person({hair:"#3A2A22",hairStyle:"short",top:"#7A5BA8",bottom:"#4A4F58",shoes:"#2E2A33",
  armR:[74,56],
  front:`<path d="M36 52H64" stroke="#F2C94C" stroke-width="2"/>`,
  face:eyes(44.5,55.5,30,2.2)+`<path d="M43 37Q50 42 57 36" fill="none" ${sw(1.4)}/><path d="M40 26L48 28M60 26L52 28" ${sw(1.4)}/>`,
  hat:`<path d="M34 22C32 8 60 2 66 20Z" fill="#E2574C" ${sw(1.2)}/><circle cx="66" cy="20" r="3" fill="#F7D04B" ${sw(1)}/>`,
  back:`<path d="M74 56L86 44M74 56L88 52" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><circle cx="88" cy="42" r="3.4" fill="none" ${sw(1.6)}/><circle cx="91" cy="52" r="3.4" fill="none" ${sw(1.6)}/>`});
const minister=()=>person({hair:"#C9C4BC",hairStyle:"short",top:"#2F4F7F",bottom:"#2E2A33",shoes:"#2E2A33",
  armL:[28,58],
  back:`<path d="M14 50H32V66H14Z" fill="#F4F1EA" ${sw(1.2)}/><path d="M17 55h12M17 59h12M17 63h8" stroke="#9AA6B2" stroke-width="1"/><path d="M12 50C12 46 16 46 16 50M30 66C30 70 34 70 34 66" fill="#E9E2D3" ${sw(1)}/>`,
  front:`<path d="M44 45L50 66L56 45" fill="#FFFFFF" ${sw(1.1)}/><path d="M48 47L50 52L52 47Z" fill="#9E2A3A"/>`,
  face:`<circle cx="44.5" cy="30" r="4" fill="#fff" ${sw(1.1)}/><circle cx="55.5" cy="30" r="4" fill="#fff" ${sw(1.1)}/><path d="M48.5 30H51.5" ${sw(1.1)}/>`+eyes(44.5,55.5,30,1.5)+`<path d="M46 38h8" ${sw(1.3)}/>`,
  hat:`<path d="M38 18V4H62V18Z" fill="#2E2A33" ${sw(1.2)}/><path d="M32 18H68" ${sw(3)}/><path d="M32 18H68" stroke="#2E2A33" stroke-width="1.6"/><path d="M38 14H62" stroke="#9E2A3A" stroke-width="2"/>`});
const decek=()=>person({hair:"#E8B94A",hairStyle:"short",top:"#6CBF5A",bottom:"#4A8FD9",shoes:"#4A3426",
  armR:[80,30],
  front:`<path d="M36 52H64" stroke="#FFFFFF" stroke-width="2.4"/>`,
  face:eyes(44.5,55.5,30,2.3)+cheeks(40,60,35)+`<ellipse cx="50" cy="38" rx="3" ry="2.6" fill="${INK}"/>`,
  back:`<path d="M84 26l8 -6M86 32l9 0M84 20l4 -8" stroke="#E2574C" stroke-width="2" stroke-linecap="round"/>`});
function statve(){
  let s=`<path d="M14 92V20M86 92V20" stroke="#8A5A2B" stroke-width="5" stroke-linecap="round"/><path d="M10 20H90M10 86H90" stroke="#8A5A2B" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<path d="M14 22H86V84H14Z" fill="none"/>`;
  for(let x=20;x<=80;x+=5)s+=`<path d="M${x} 22V84" stroke="#C9CED6" stroke-width=".8"/>`;
  s+=`<path d="M14 54H86" stroke="#6B4226" stroke-width="3.4" stroke-linecap="round"/>`;
  s+=`<path d="M30 60h40M30 66h40M30 72h40M30 78h40" stroke="#E9ECF0" stroke-width="2" stroke-dasharray="1 3" opacity=".9"/>`;
  s+=`<ellipse cx="50" cy="40" rx="14" ry="5" fill="#E9D2A8" ${sw(1.2)}/><path d="M36 40h28" stroke="#C9A04A" stroke-width="1"/>`;
  s+=star(26,12,4,"#F7D04B")+star(74,12,4,"#F7D04B")+star(50,6,3,"#9CC7E8");
  return s;
}
function vrecaZlata(){
  let s=`<path d="M38 30C30 34 14 52 14 70C14 86 30 92 50 92C70 92 86 86 86 70C86 52 70 34 62 30Z" fill="#C9A06A" ${sw(1.6)}/>`;
  s+=`<path d="M36 30C30 20 40 14 44 22C46 12 54 12 56 22C60 14 70 20 64 30Z" fill="#C9A06A" ${sw(1.4)}/>`;
  s+=`<path d="M36 30H64" stroke="#8A5A2B" stroke-width="3.4" stroke-linecap="round"/>`;
  s+=`<circle cx="50" cy="64" r="12" fill="#F7D04B" ${sw(1.3)}/>`+star(50,64,6,"#E1B84A");
  s+=`<ellipse cx="14" cy="88" rx="7" ry="3" fill="#F7D04B" ${sw(1.1)}/><ellipse cx="88" cy="88" rx="7" ry="3" fill="#F7D04B" ${sw(1.1)}/><ellipse cx="88" cy="84" rx="7" ry="3" fill="#F7D04B" ${sw(1.1)}/>`;
  return s;
}
function prestol(){
  let s=`<path d="M22 92V60M78 92V60" stroke="#B88A2A" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<path d="M24 60V14C24 4 76 4 76 14V60Z" fill="#E1B84A" ${sw(1.6)}/>`;
  s+=`<path d="M32 58V18C32 12 68 12 68 18V58Z" fill="#9E2A3A" ${sw(1.3)}/>`;
  s+=`<path d="M40 22H60M40 30H60" stroke="#C04A5A" stroke-width="1"/>`+star(50,32,6,"#F2C94C");
  s+=`<path d="M14 58H86V70H14Z" fill="#B5452E" ${sw(1.5)}/><path d="M14 58C14 52 86 52 86 58" fill="#C9584A" ${sw(1.3)}/>`;
  s+=`<path d="M10 54V70M90 54V70" stroke="#E1B84A" stroke-width="5" stroke-linecap="round"/><circle cx="10" cy="50" r="4" fill="#E1B84A" ${sw(1.1)}/><circle cx="90" cy="50" r="4" fill="#E1B84A" ${sw(1.1)}/>`;
  s+=`<path d="M40 4L42 -4L46 2L50 -6L54 2L58 -4L60 4Z" fill="#F2C94C" ${sw(1.1)}/>`;
  return s;
}

/* ---------- 16. GRDI RAČEK ---------- */
function duck(o){
  o=Object.assign({c:"#FFFFFF",d:"#9AA6B2",beak:"#F2A33A",wing:"#E9ECF0",water:true,extra:"",scale:1},o);
  let s="";
  if(o.water)s+=`<path d="M4 84Q14 78 24 84T44 84T64 84T84 84T104 84" fill="none" stroke="#7BBEDC" stroke-width="2.4"/>`;
  s+=`<path d="M78 58L94 48L90 66Z" fill="${o.c}" stroke="${o.d}" stroke-width="1.5" stroke-linejoin="round"/>`;
  s+=`<path d="M20 60C20 46 34 42 50 46C66 40 86 46 88 60C88 78 70 84 52 84C32 84 20 76 20 60Z" fill="${o.c}" stroke="${o.d}" stroke-width="1.6"/>`;
  s+=`<path d="M46 58C56 50 74 54 76 66C64 72 50 70 46 58Z" fill="${o.wing}" stroke="${o.d}" stroke-width="1.3"/>`;
  s+=`<circle cx="32" cy="34" r="14" fill="${o.c}" stroke="${o.d}" stroke-width="1.6"/>`;
  s+=`<path d="M20 34C12 32 6 34 6 38C6 42 12 42 20 40Z" fill="${o.beak}" ${sw(1.2)}/>`;
  s+=`<circle cx="30" cy="31" r="2.6" fill="${INK}"/><circle cx="30.9" cy="30.1" r=".9" fill="#fff"/><circle cx="36" cy="38" r="3" fill="#F7B2BF" opacity=".7"/>`;
  return s+o.extra;
}
const grdiRacek=()=>duck({c:"#9AA0AA",d:"#5F6773",wing:"#7E858F",beak:"#5F6773",
  extra:`<path d="M30 20L28 12M34 20L36 12M32 20V10" stroke="#5F6773" stroke-width="1.6" stroke-linecap="round"/><path d="M40 44Q44 42 46 46" fill="none" stroke="#5F6773" stroke-width="1"/><path d="M44 30q4 2 2 6" fill="none" stroke="#7BBEDC" stroke-width="1.6" stroke-linecap="round"/>`});
const mamaRaca=()=>duck({c:"#FFFFFF",d:"#9AA6B2",wing:"#E9ECF0",beak:"#F2A33A",
  extra:`<path d="M24 22C28 14 38 16 38 22" fill="#3E8E5A" stroke="#2F6B45" stroke-width="1.2"/><path d="M28 48Q32 52 38 48" fill="none" stroke="#E46C8C" stroke-width="3"/>`});
const racka=()=>`<g transform="translate(10 18) scale(.8)">`+duck({c:"#F7D04B",d:"#C99A22",wing:"#F2C232",beak:"#F2A33A",water:false,
  extra:`<path d="M30 20L30 14M34 21L36 15" stroke="#C99A22" stroke-width="1.6" stroke-linecap="round"/>`})+`</g><path d="M4 84Q14 78 24 84T44 84T64 84T84 84T104 84" fill="none" stroke="#7BBEDC" stroke-width="2.4"/>`;
function labod(){
  let s=`<path d="M4 86Q14 80 24 86T44 86T64 86T84 86T104 86" fill="none" stroke="#7BBEDC" stroke-width="2.4"/>`;
  s+=`<path d="M62 60L96 44L88 70Z" fill="#FFFFFF" ${sw(1.5)}/>`;
  s+=`<path d="M14 66C14 54 30 50 46 54C64 48 88 54 88 68C88 82 66 86 48 86C28 86 14 80 14 66Z" fill="#FFFFFF" ${sw(1.6)}/>`;
  s+=`<path d="M40 64C52 52 76 56 80 70C66 76 50 74 40 64Z" fill="#F1F4F8" ${sw(1.3)}/>`;
  s+=`<path d="M26 58C18 44 18 30 22 20C26 10 38 8 42 16C44 22 40 26 36 24C32 22 30 26 30 32C30 40 34 50 38 56" fill="#FFFFFF" ${sw(1.6)}/>`;
  s+=`<path d="M40 14L52 18L42 22Z" fill="#F2A33A" ${sw(1.1)}/><path d="M38 12C40 10 42 12 42 16" fill="${INK}"/>`;
  s+=`<circle cx="34" cy="15" r="1.8" fill="${INK}"/><circle cx="34.6" cy="14.4" r=".6" fill="#fff"/>`;
  s+=`<path d="M50 30l1.4 3 3 .4-2.2 2.1.5 3-2.7-1.5-2.7 1.5.5-3-2.2-2.1 3-.4z" fill="#F7D04B"/>`;
  return s;
}
function kokos(){
  let s=`<path d="M64 60C80 46 90 52 88 64C86 72 76 74 66 70Z" fill="#A8622E" ${sw(1.3)}/>`;
  s+=`<path d="M44 82V92M56 82V92" stroke="#F2A33A" stroke-width="3" stroke-linecap="round"/><path d="M38 92H48M52 92H62" stroke="#F2A33A" stroke-width="2.4" stroke-linecap="round"/>`;
  s+=`<ellipse cx="52" cy="66" rx="22" ry="18" fill="#C98048" ${sw(1.4)}/>`;
  s+=`<path d="M44 62C52 56 66 60 66 72C56 76 46 72 44 62Z" fill="#A8622E" ${sw(1.1)}/>`;
  s+=`<ellipse cx="38" cy="42" rx="13" ry="14" fill="#C98048" ${sw(1.4)}/>`;
  s+=`<path d="M32 30C30 24 36 22 38 26C38 20 46 20 44 28Z" fill="#E2412F" ${sw(1.1)}/>`;
  s+=`<path d="M26 42L16 45L26 48Z" fill="#F2A33A" ${sw(1.1)}/><path d="M28 50C26 54 30 56 32 52Z" fill="#E2412F" ${sw(1)}/>`;
  s+=eyes(36,36,39,2.4);
  s+=`<ellipse cx="76" cy="90" rx="7" ry="4" fill="#FFF4E2" ${sw(1.1)}/><ellipse cx="86" cy="88" rx="6" ry="4" fill="#FFF4E2" ${sw(1.1)}/>`;
  return s;
}
function jezero(){
  let s=`<ellipse cx="50" cy="68" rx="46" ry="22" fill="#7BBEDC" ${sw(1.5)}/>`;
  s+=`<ellipse cx="50" cy="68" rx="36" ry="15" fill="#9CD0E6"/>`;
  s+=`<path d="M30 64q4 -3 8 0M58 72q4 -3 8 0M44 78q4 -3 8 0" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>`;
  s+=`<ellipse cx="70" cy="62" rx="7" ry="3.4" fill="#6CBF5A" ${sw(1)}/>`+flower(70,58,"#F2B6C1",2.4);
  s+=`<path d="M8 66V30M14 64V22M20 64V34M90 70V34M84 68V26" stroke="#3E8A35" stroke-width="2" stroke-linecap="round"/>`;
  s+=`<ellipse cx="14" cy="26" rx="2.6" ry="7" fill="#8A5A2B" ${sw(1)}/><ellipse cx="84" cy="30" rx="2.6" ry="7" fill="#8A5A2B" ${sw(1)}/>`;
  s+=`<path d="M6 46C2 40 4 34 8 40M22 50C26 42 24 38 20 44M92 52C96 46 94 40 90 46" fill="#6CBF5A" ${sw(1)}/>`;
  s+=`<circle cx="50" cy="16" r="8" fill="#F7D04B" ${sw(1.1)}/>`;
  return s;
}

/* ---------- podatki ---------- */
STORIES.push(
 {slug:"tri-botre-lisicice",title:"Tri botre lisičice",colors:["Lisičji obisk","#FFF3E6","#FCE1CC","#8A4A22"],
  intro:"Botra lisica se z velikim avtom odpelje na obisk k drugi botri, skupaj nabirata rože in se nato odpeljeta k tretji botri, kjer ob gramofonu plešejo. Rezijanska ljudska pravljica.",
  pics:[["lisicka1","1. botra lisička",lisicka1],["lisicka2","2. botra lisička",lisicka2],["lisicka3","3. botra lisička",lisicka3],["avto","Velik avto",avto],["hisa","Lisičja hiša",lisicjaHisa],["sopek","Šopek rož",sopek],["gramofon","Gramofon",gramofon]],
  defaults:[["lisicka1",0,1],["avto",1,2],["lisicka2",4,3],["sopek",2,5],["hisa",0,7],["lisicka3",4,7],["gramofon",3,6]]},
 {slug:"kralj-matjaz",title:"Kralj Matjaž",colors:["Gora Peca","#EEF0F2","#E2E8DC","#4A4F5A"],
  intro:"Kralj Matjaž s svojo vojsko spi v votlini pod Peco, brada pa mu raste okoli kamnite mize. Pastirček nekoč najde skriti vhod v votlino. Slovenska ljudska legenda.",
  pics:[["kralj","Kralj Matjaž",kraljMatjaz],["miza","Miza z brado",mizaBrada],["pastircek","Pastirček",pastircek],["vojak","Vojak",vojak],["konj","Konj",konj],["votlina","Votlina pod Peco",votlina],["zaklad","Zaklad",zaklad]],
  defaults:[["pastircek",0,1],["konj",3,2],["votlina",1,4],["vojak",4,5],["miza",2,7],["kralj",3,7],["zaklad",5,8]]},
 {slug:"kekec",title:"Kekec",colors:["Planinska vas","#F2F6EA","#FCEBD8","#4E3A2A"],
  intro:"Pogumni pastirček Kekec sledi hudobnemu Bedancu, ki je ugrabil Mojco in Rožleta, ga prelisiči in prijatelja reši. Na poti mu pomaga zeliščarica Pehta.",
  pics:[["kekec","Kekec",kekec],["mojca","Mojca",mojca2],["rozle","Rožle",rozle],["bedanec","Bedanec",bedanec],["pehta","Pehta",pehta],["koca","Bedančeva koča",bedancevaKoca],["ovcka","Ovčka",ovcka]],
  defaults:[["kekec",0,1],["ovcka",2,1],["pehta",4,3],["bedanec",1,5],["koca",4,7],["mojca",3,8],["rozle",5,8]],
  counts:{ovcka:6}},
 {slug:"ostrzek",title:"Ostržek",colors:["Rezbarska delavnica","#FBF3E6","#E6F1F7","#5A3E2B"],
  intro:"Rezbar Pepe iz polena izdela Ostržka, ki zaide v nevšečnosti z lisico Zvitorepko in mačkom Brljavom. Vila Plavolaska in Muren mu pomagata, na koncu pa reši Pepeta iz morskega psa.",
  pics:[["ostrzek","Ostržek",ostrzek],["pepe","Pepe",pepe],["vila","Vila Plavolaska",plavolaska],["muren","Muren",muren],["zvitorepka","Lisica Zvitorepka",zvitorepka],["brljav","Maček Brljav",brljav],["morskipes","Morski pes",morskiPes]],
  defaults:[["ostrzek",0,1],["muren",1,2],["zvitorepka",3,3],["brljav",4,3],["vila",1,6],["morskipes",4,8],["pepe",5,9]]},
 {slug:"cesarjeva-nova-oblacila",title:"Cesarjeva nova oblačila",colors:["Cesarska palača","#F7F1FB","#FFF3D1","#5B3F86"],
  intro:"Sleparja cesarju »stkata« oblačila, ki jih ne vidi nihče, ki je neumen. Nihče si ne upa povedati resnice, dokler deček ne zavpije, da cesar nima ničesar na sebi.",
  pics:[["cesar","Cesar",cesar],["tkalec","Tkalec slepar",tkalec],["minister","Minister",minister],["decek","Deček",decek],["statve","Statve",statve],["vreca","Vreča zlata",vrecaZlata],["prestol","Prestol",prestol]],
  defaults:[["decek",0,1],["tkalec",4,2],["statve",5,3],["vreca",2,4],["minister",1,6],["cesar",3,8],["prestol",3,9]]},
 {slug:"grdi-racek",title:"Grdi raček",colors:["Jezero ob pomladi","#E8F4F8","#F1F7E4","#2F5A6B"],
  intro:"Siv raček je drugačen od drugih in zato pobegne od doma. Po dolgi zimi spomladi v jezeru zagleda, da je zrasel v lepega laboda.",
  pics:[["racek","Grdi raček",grdiRacek],["mama","Mama raca",mamaRaca],["racka","Račka",racka],["labod","Labod",labod],["macka","Mačka",cat],["kokos","Kokoš",kokos],["jezero","Jezero",jezero]],
  defaults:[["mama",0,1],["racka",1,1],["racek",0,2],["kokos",3,3],["macka",1,5],["jezero",4,8],["labod",5,9]]}
);
if(typeof module!=="undefined")module.exports={STORIES};
