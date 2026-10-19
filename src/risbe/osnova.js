/* Risbe likov za KUBO pravljice. Vse v koordinatah 0..100, y navzdol. */
const INK="#2E2A33";
const SKIN="#F6CDB0",SKIN_D="#D9A07E";
const sw=(w)=>`stroke="${INK}" stroke-width="${w||1.4}" stroke-linejoin="round" stroke-linecap="round"`;
function eyes(x1,x2,y,r){r=r||3;return `<circle cx="${x1}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${x2}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${x1+r*.35}" cy="${y-r*.35}" r="${r*.35}" fill="#fff"/><circle cx="${x2+r*.35}" cy="${y-r*.35}" r="${r*.35}" fill="#fff"/>`;}
const smile=(cx,cy,w)=>`<path d="M${cx-w} ${cy}Q${cx} ${cy+w*.8} ${cx+w} ${cy}" fill="none" ${sw(1.4)}/>`;
const cheeks=(x1,x2,y,c)=>`<circle cx="${x1}" cy="${y}" r="3" fill="${c||"#F4A3A8"}" opacity=".7"/><circle cx="${x2}" cy="${y}" r="3" fill="${c||"#F4A3A8"}" opacity=".7"/>`;

/* ---------------- ljudje ---------------- */
function person(o){
  o=Object.assign({skin:SKIN,hair:"#7A4A24",hairStyle:"short",top:"#4A8FD9",bottom:"#2F4F7F",skirt:false,shoes:"#4A3426",hat:"",face:"",front:"",back:"",armL:null,armR:null},o);
  let s=o.back;
  // noge
  if(o.skirt){
    s+=`<rect x="41" y="78" width="6" height="12" fill="${o.legs||"#FFFFFF"}" ${sw(1.2)}/><rect x="53" y="78" width="6" height="12" fill="${o.legs||"#FFFFFF"}" ${sw(1.2)}/>`;
  }else{
    s+=`<path d="M38 66H49V90H38Z" fill="${o.bottom}" ${sw(1.3)}/><path d="M51 66H62V90H51Z" fill="${o.bottom}" ${sw(1.3)}/>`;
  }
  s+=`<ellipse cx="42" cy="92" rx="7" ry="3.5" fill="${o.shoes}" ${sw(1.2)}/><ellipse cx="58" cy="92" rx="7" ry="3.5" fill="${o.shoes}" ${sw(1.2)}/>`;
  // roke
  const aL=o.armL||[28,66],aR=o.armR||[72,66];
  s+=`<path d="M38 50L${aL[0]} ${aL[1]}" stroke="${INK}" stroke-width="8.6" stroke-linecap="round"/><path d="M38 50L${aL[0]} ${aL[1]}" stroke="${o.top}" stroke-width="6" stroke-linecap="round"/>`;
  s+=`<path d="M62 50L${aR[0]} ${aR[1]}" stroke="${INK}" stroke-width="8.6" stroke-linecap="round"/><path d="M62 50L${aR[0]} ${aR[1]}" stroke="${o.top}" stroke-width="6" stroke-linecap="round"/>`;
  s+=`<circle cx="${aL[0]}" cy="${aL[1]}" r="3.6" fill="${o.skin}" ${sw(1.1)}/><circle cx="${aR[0]}" cy="${aR[1]}" r="3.6" fill="${o.skin}" ${sw(1.1)}/>`;
  // trup
  if(o.skirt) s+=`<path d="M39 45H61L70 80H30Z" fill="${o.top}" ${sw(1.4)}/>`;
  else s+=`<rect x="36" y="45" width="28" height="25" rx="6" fill="${o.top}" ${sw(1.4)}/>`;
  s+=o.front;
  // lasje zadaj
  if(o.hairStyle==="long") s+=`<path d="M34 30C34 52 40 50 40 50H60C60 50 66 52 66 30Z" fill="${o.hair}" ${sw(1.2)}/>`;
  if(o.hairStyle==="braids") s+=`<ellipse cx="33" cy="42" rx="4" ry="9" fill="${o.hair}" ${sw(1.2)}/><ellipse cx="67" cy="42" rx="4" ry="9" fill="${o.hair}" ${sw(1.2)}/><circle cx="33" cy="51" r="3" fill="${o.bow||"#E2574C"}" ${sw(1)}/><circle cx="67" cy="51" r="3" fill="${o.bow||"#E2574C"}" ${sw(1)}/>`;
  // glava
  s+=`<circle cx="50" cy="30" r="15" fill="${o.skin}" ${sw(1.4)}/>`;
  // lasje spredaj
  if(["short","long","braids"].includes(o.hairStyle)) s+=`<path d="M35 29C34 12 66 12 65 29C61 22 54 20 50 21C46 20 39 22 35 29Z" fill="${o.hair}" ${sw(1.2)}/>`;
  if(o.hairStyle==="bun") s+=`<circle cx="50" cy="14" r="6" fill="${o.hair}" ${sw(1.2)}/><path d="M35 28C34 13 66 13 65 28C60 21 40 21 35 28Z" fill="${o.hair}" ${sw(1.2)}/>`;
  if(o.hairStyle==="beard") s+=`<path d="M35 29C34 12 66 12 65 29C61 22 39 22 35 29Z" fill="${o.hair}" ${sw(1.2)}/><path d="M37 33C38 48 62 48 63 33C58 40 42 40 37 33Z" fill="${o.hair}" ${sw(1.2)}/>`;
  // obraz
  s+=o.face||(eyes(44.5,55.5,30,2.2)+cheeks(40,60,35)+smile(50,36,4));
  s+=o.hat;
  return `<g>${s}</g>`;
}

/* ---------------- živali (sedeče, od spredaj) ---------------- */
function animal(o){
  o=Object.assign({c:"#A0A0A0",d:"#6E6E6E",l:"#EFEFEF",ears:"round",nose:INK,tail:"",extra:"",top:"",inner:"#F2B6C1",mouth:true},o);
  const st=`stroke="${o.d}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"`;
  let s=o.tail;
  s+=`<ellipse cx="50" cy="72" rx="22" ry="18" fill="${o.c}" ${st}/><ellipse cx="50" cy="75" rx="11" ry="13" fill="${o.l}"/>`;
  s+=`<ellipse cx="40" cy="90" rx="7" ry="3.6" fill="${o.d}"/><ellipse cx="60" cy="90" rx="7" ry="3.6" fill="${o.d}"/>`;
  // ušesa
  const E={
    round:`<circle cx="35" cy="24" r="8" fill="${o.c}" ${st}/><circle cx="65" cy="24" r="8" fill="${o.c}" ${st}/><circle cx="35" cy="24" r="4.5" fill="${o.inner}"/><circle cx="65" cy="24" r="4.5" fill="${o.inner}"/>`,
    big:`<circle cx="33" cy="24" r="12" fill="${o.c}" ${st}/><circle cx="67" cy="24" r="12" fill="${o.c}" ${st}/><circle cx="33" cy="24" r="7.5" fill="${o.inner}"/><circle cx="67" cy="24" r="7.5" fill="${o.inner}"/>`,
    pointy:`<path d="M36 30L31 8L47 22Z" fill="${o.c}" ${st}/><path d="M64 30L69 8L53 22Z" fill="${o.c}" ${st}/><path d="M37 26L34 14L43 22Z" fill="${o.inner}"/><path d="M63 26L66 14L57 22Z" fill="${o.inner}"/>`,
    long:`<ellipse cx="42" cy="13" rx="5.5" ry="15" fill="${o.c}" ${st}/><ellipse cx="58" cy="13" rx="5.5" ry="15" fill="${o.c}" ${st}/><ellipse cx="42" cy="14" rx="2.6" ry="11" fill="${o.inner}"/><ellipse cx="58" cy="14" rx="2.6" ry="11" fill="${o.inner}"/>`,
    donkey:`<ellipse cx="37" cy="14" rx="5.5" ry="15" transform="rotate(-22 37 14)" fill="${o.c}" ${st}/><ellipse cx="63" cy="14" rx="5.5" ry="15" transform="rotate(22 63 14)" fill="${o.c}" ${st}/><ellipse cx="37" cy="15" rx="2.6" ry="10" transform="rotate(-22 37 15)" fill="${o.inner}"/><ellipse cx="63" cy="15" rx="2.6" ry="10" transform="rotate(22 63 15)" fill="${o.inner}"/>`,
    floppy:"",
    goat:`<ellipse cx="29" cy="32" rx="8" ry="3.6" transform="rotate(18 29 32)" fill="${o.c}" ${st}/><ellipse cx="71" cy="32" rx="8" ry="3.6" transform="rotate(-18 71 32)" fill="${o.c}" ${st}/>`
  };
  s+=E[o.ears]||"";
  s+=o.top;
  s+=`<circle cx="50" cy="38" r="18" fill="${o.c}" ${st}/>`;
  if(o.ears==="floppy") s+=`<ellipse cx="33" cy="38" rx="6" ry="13" transform="rotate(12 33 38)" fill="${o.d}"/><ellipse cx="67" cy="38" rx="6" ry="13" transform="rotate(-12 67 38)" fill="${o.d}"/>`;
  s+=`<ellipse cx="50" cy="46" rx="9.5" ry="7" fill="${o.l}"/>`;
  s+=eyes(43,57,34,2.8);
  s+=`<ellipse cx="50" cy="42.5" rx="3.4" ry="2.4" fill="${o.nose}"/>`;
  if(o.mouth) s+=`<path d="M50 45V47M46 48Q50 51 54 48" fill="none" stroke="${INK}" stroke-width="1.3" stroke-linecap="round"/>`;
  s+=o.extra;
  return `<g>${s}</g>`;
}

/* ---------------- hiše ---------------- */
function house(o){
  o=Object.assign({wall:"#F3E2C4",roof:"#C8553D",door:"#8A5A2B",win:"#BFE3F5",chimney:true,extra:"",wallDeco:"",roofDeco:""},o);
  let s="";
  if(o.chimney) s+=`<rect x="64" y="14" width="9" height="20" fill="${o.chimneyC||"#9C4A36"}" ${sw(1.3)}/>`;
  s+=`<rect x="20" y="44" width="60" height="46" fill="${o.wall}" ${sw(1.3)}/>`+o.wallDeco;
  s+=`<path d="M12 46L50 12L88 46Z" fill="${o.roof}" ${sw(1.3)}/>`+o.roofDeco;
  s+=`<rect x="42" y="64" width="16" height="26" rx="3" fill="${o.door}" ${sw(1.3)}/><circle cx="54" cy="77" r="1.3" fill="#F7D774"/>`;
  [25,63].forEach(x=>{s+=`<rect x="${x}" y="54" width="12" height="12" fill="${o.win}" ${sw(1.3)}/><path d="M${x+6} 54V66M${x} 60H${x+12}" ${sw(1.1)}/>`;});
  return s+o.extra;
}

/* ================= 1. MOJCA POKRAJCULJA ================= */
const mojca=()=>person({hair:"#C68A3E",hairStyle:"braids",skirt:true,top:"#E46C8C",legs:"#FFFFFF",bow:"#F7D04B",
  front:`<path d="M42 56H58L62 78H38Z" fill="#FFFFFF" ${sw(1.1)}/><path d="M45 62h10M44 68h12M43 74h14" stroke="#E46C8C" stroke-width="1"/>`,
  hat:`<path d="M33 27C33 10 67 10 67 27C62 18 38 18 33 27Z" fill="#3E8E5A" ${sw(1.2)}/><circle cx="40" cy="17" r="1.6" fill="#F7D04B"/><circle cx="50" cy="14" r="1.6" fill="#F7D04B"/><circle cx="60" cy="17" r="1.6" fill="#F7D04B"/>`});
function pot(){
  return `<path d="M20 50C16 80 30 92 50 92C70 92 84 80 80 50Z" fill="#C7743F" ${sw(1.5)}/>`+
  `<path d="M26 66C40 72 60 72 74 66" fill="none" stroke="#8E4B22" stroke-width="2"/><path d="M28 76C40 81 60 81 72 76" fill="none" stroke="#8E4B22" stroke-width="1.6"/>`+
  `<ellipse cx="50" cy="50" rx="32" ry="9" fill="#A45A2C" ${sw(1.5)}/><ellipse cx="50" cy="50" rx="26" ry="5.5" fill="#5A2E14"/>`+
  `<path d="M80 56C94 56 94 76 78 76" fill="none" ${sw(5)}/><path d="M80 56C94 56 94 76 78 76" fill="none" stroke="#C7743F" stroke-width="2.6"/>`+
  `<circle cx="38" cy="62" r="3" fill="#F2D27A"/><circle cx="50" cy="64" r="3" fill="#F2D27A"/><circle cx="62" cy="62" r="3" fill="#F2D27A"/>`;
}
const mouse=()=>animal({c:"#A8A9B3",d:"#6D6E7A",l:"#E6E6EC",ears:"big",inner:"#F5B9C6",nose:"#E57A92",
  tail:`<path d="M70 82C88 84 92 70 84 64" fill="none" stroke="#6D6E7A" stroke-width="2.4" stroke-linecap="round"/>`,
  extra:`<path d="M38 44L26 41M38 47L26 48M62 44L74 41M62 47L74 48" stroke="#6D6E7A" stroke-width="1" stroke-linecap="round"/>`});
function frog(){
  const c="#6CBF5A",d="#3E8A35",l="#CDEBB0";
  return `<g stroke-linejoin="round" stroke-linecap="round">`+
  `<ellipse cx="28" cy="84" rx="12" ry="6" fill="${c}" stroke="${d}" stroke-width="1.6"/><ellipse cx="72" cy="84" rx="12" ry="6" fill="${c}" stroke="${d}" stroke-width="1.6"/>`+
  `<ellipse cx="50" cy="70" rx="25" ry="19" fill="${c}" stroke="${d}" stroke-width="1.6"/><ellipse cx="50" cy="74" rx="15" ry="13" fill="${l}"/>`+
  `<ellipse cx="50" cy="48" rx="26" ry="16" fill="${c}" stroke="${d}" stroke-width="1.6"/>`+
  `<circle cx="37" cy="34" r="9" fill="${c}" stroke="${d}" stroke-width="1.6"/><circle cx="63" cy="34" r="9" fill="${c}" stroke="${d}" stroke-width="1.6"/>`+
  `<circle cx="37" cy="34" r="5.5" fill="#fff"/><circle cx="63" cy="34" r="5.5" fill="#fff"/>`+eyes(38,62,35,3)+
  `<path d="M34 52Q50 62 66 52" fill="none" stroke="${INK}" stroke-width="1.6"/>`+cheeks(30,70,50,"#F28C8C")+
  `<path d="M38 88h-6M62 88h6" stroke="${d}" stroke-width="1.4"/>`+`</g>`;
}
const rabbit=()=>animal({c:"#EDE6DC",d:"#9C8F80",l:"#FFFFFF",ears:"long",inner:"#F5B9C6",nose:"#E57A92",
  tail:`<circle cx="72" cy="82" r="6" fill="#FFFFFF" stroke="#9C8F80" stroke-width="1.6"/>`,
  extra:`<path d="M47 48h6v4h-6z" fill="#fff" stroke="#9C8F80" stroke-width=".8"/><path d="M38 44L28 42M38 47L28 48M62 44L72 42M62 47L72 48" stroke="#9C8F80" stroke-width="1" stroke-linecap="round"/>`});
const fox=()=>animal({c:"#E8833A",d:"#A8531C",l:"#FFF4E6",ears:"pointy",inner:"#3A2A22",
  tail:`<path d="M68 84C92 86 98 60 84 52C82 66 76 74 66 76Z" fill="#E8833A" stroke="#A8531C" stroke-width="1.6" stroke-linejoin="round"/><path d="M84 52C90 56 92 62 90 66C86 64 84 58 84 52Z" fill="#FFF4E6"/>`});
const bear=()=>animal({c:"#9A6A42",d:"#5E3C22",l:"#D9B48C",ears:"round",inner:"#D9B48C",nose:"#3A2418",
  extra:`<ellipse cx="50" cy="75" rx="11" ry="13" fill="#D9B48C" opacity=".0"/>`});

/* ================= 2. JANKO IN METKA ================= */
const janko=()=>person({hair:"#B5732E",hairStyle:"short",top:"#3E8E5A",bottom:"#7A5230",
  front:`<path d="M42 45L44 66M58 45L56 66" stroke="#7A5230" stroke-width="2.4"/><circle cx="44" cy="62" r="1.5" fill="#F7D04B"/><circle cx="56" cy="62" r="1.5" fill="#F7D04B"/>`,
  hat:`<path d="M34 22C36 8 64 8 66 22Z" fill="#C0392B" ${sw(1.2)}/><path d="M30 22H70" ${sw(2.4)}/><path d="M30 22H70" stroke="#C0392B" stroke-width="1.2"/>`});
const metka=()=>person({hair:"#E8B94A",hairStyle:"braids",skirt:true,top:"#4A8FD9",legs:"#FFFFFF",bow:"#E2574C",
  front:`<path d="M42 56H58L62 78H38Z" fill="#FFFFFF" ${sw(1.1)}/><circle cx="50" cy="66" r="2" fill="#E2574C"/>`});
function candyHouse(){
  let s=`<rect x="20" y="44" width="60" height="46" fill="#C98A52" ${sw(1.3)}/>`;
  // bonboni na steni
  [[27,50,"#E2574C"],[73,50,"#4A8FD9"],[27,84,"#F7D04B"],[73,84,"#7BC86C"],[36,74,"#E46C8C"],[64,74,"#9B6DD6"]].forEach(([x,y,c])=>{s+=`<circle cx="${x}" cy="${y}" r="3.4" fill="${c}" ${sw(1)}/>`;});
  s+=`<path d="M12 46L50 12L88 46Z" fill="#7A4A2A" ${sw(1.3)}/>`;
  // glazura
  s+=`<path d="M12 46Q17 52 22 46Q27 52 32 46Q37 52 42 46Q47 52 52 46Q57 52 62 46Q67 52 72 46Q77 52 82 46Q85 50 88 46" fill="#FFFFFF" ${sw(1.1)}/>`;
  s+=`<path d="M31 30Q50 22 69 30" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-dasharray="3 3"/>`;
  s+=`<rect x="42" y="64" width="16" height="26" rx="8" fill="#F2C6D6" ${sw(1.3)}/><path d="M42 72H58M42 80H58" stroke="#E46C8C" stroke-width="2"/>`;
  [25,63].forEach(x=>{s+=`<rect x="${x}" y="54" width="12" height="12" rx="2" fill="#FFF3B0" ${sw(1.3)}/><path d="M${x+6} 54V66M${x} 60H${x+12}" stroke="#E46C8C" stroke-width="1.4"/>`;});
  // lizike
  s+=`<path d="M10 90V66" ${sw(2)}/><circle cx="10" cy="62" r="7" fill="#F28CB0" ${sw(1.2)}/><path d="M10 62m-4 0a4 4 0 1 0 4 -4" fill="none" stroke="#fff" stroke-width="1.4"/>`;
  s+=`<path d="M90 90V68" ${sw(2)}/><circle cx="90" cy="64" r="7" fill="#7BC86C" ${sw(1.2)}/><path d="M90 64m-4 0a4 4 0 1 0 4 -4" fill="none" stroke="#fff" stroke-width="1.4"/>`;
  s+=`<circle cx="50" cy="12" r="5" fill="#E2574C" ${sw(1.2)}/>`;
  return s;
}
const witch=()=>person({skin:"#CFE3B8",hair:"#B9B9C2",hairStyle:"long",skirt:true,top:"#5B3F86",legs:"#2E2A33",shoes:"#2E2A33",
  armR:[74,60],
  back:`<path d="M78 92L70 30" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><path d="M70 92L78 78L86 92Z" fill="#E1B84A" ${sw(1.1)}/>`,
  face:eyes(44.5,55.5,29,2.2)+`<path d="M50 30L47 39L52 37Z" fill="#B7D49A" ${sw(1.1)}/><circle cx="56" cy="36" r="1.2" fill="#6E8A52"/><path d="M45 41Q50 43 55 41" fill="none" ${sw(1.3)}/>`,
  hat:`<path d="M34 20L52 2L66 20Z" fill="#3A2A55" ${sw(1.3)}/><ellipse cx="50" cy="20" rx="22" ry="4" fill="#3A2A55" ${sw(1.3)}/><path d="M41 15H61" stroke="#E1B84A" stroke-width="2.2"/>`});
function crumbs(){
  let s=`<path d="M10 88C30 80 22 64 42 60C62 56 58 40 80 34" fill="none" stroke="#C9B48A" stroke-width="1.4" stroke-dasharray="2 4"/>`;
  [[12,87],[22,82],[28,73],[36,64],[48,59],[58,54],[63,45],[72,38]].forEach(([x,y],i)=>{s+=`<ellipse cx="${x}" cy="${y}" rx="${3.4-i%2}" ry="${2.6-i%2*.5}" transform="rotate(${i*25} ${x} ${y})" fill="#E3B56B" ${sw(1)}/>`;});
  s+=`<path d="M64 22C64 10 92 10 92 22C92 30 88 34 78 34C68 34 64 30 64 22Z" fill="#D99A4E" ${sw(1.4)}/><path d="M70 18L74 24M78 16L82 22M86 18L88 22" stroke="#9E6428" stroke-width="1.6" stroke-linecap="round"/>`;
  return s;
}
function bird(){
  return `<path d="M14 84H86" stroke="#8A5A2B" stroke-width="5" stroke-linecap="round"/><path d="M30 84L24 92M66 84L74 92" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/><ellipse cx="34" cy="74" rx="6" ry="3" transform="rotate(-30 34 74)" fill="#7BC86C"/>`+
  `<path d="M70 58L92 48L88 66Z" fill="#E9EEF5" ${sw(1.4)}/>`+
  `<ellipse cx="54" cy="58" rx="22" ry="17" fill="#FFFFFF" ${sw(1.4)}/>`+
  `<path d="M48 56C56 50 70 54 72 64C64 70 52 68 48 56Z" fill="#E3E9F2" ${sw(1.2)}/>`+
  `<circle cx="36" cy="40" r="13" fill="#FFFFFF" ${sw(1.4)}/>`+eyes(33,33,38,2.4)+
  `<path d="M24 40L14 44L24 46Z" fill="#F2A33A" ${sw(1.1)}/>`+cheeks(38,38,45,"#F7B2BF")+
  `<path d="M48 76V84M58 76V84" stroke="#F2A33A" stroke-width="2.4" stroke-linecap="round"/>`+
  `<path d="M40 24C42 18 46 18 46 24" fill="none" ${sw(1.2)}/>`;
}
function oven(){
  let s=`<rect x="58" y="18" width="12" height="22" fill="#8E3A26" ${sw(1.3)}/><circle cx="66" cy="12" r="3.5" fill="#D9D9D9"/><circle cx="71" cy="7" r="2.6" fill="#E4E4E4"/>`;
  s+=`<rect x="12" y="66" width="76" height="26" fill="#B5452E" ${sw(1.4)}/>`;
  for(let y=72;y<92;y+=6)s+=`<path d="M12 ${y}H88" stroke="#E8B4A2" stroke-width=".8"/>`;
  s+=`<path d="M16 66C16 26 84 26 84 66Z" fill="#C9583C" ${sw(1.4)}/>`;
  s+=`<path d="M22 50H78M30 38H70M18 60H82" stroke="#E8B4A2" stroke-width=".8"/>`;
  s+=`<path d="M34 66C34 46 66 46 66 66Z" fill="#2E2A33" ${sw(1.4)}/>`;
  s+=`<path d="M40 66C38 58 44 56 44 50C48 56 50 52 50 48C54 54 60 56 58 66Z" fill="#F28A2E"/><path d="M45 66C44 60 48 59 49 55C52 60 55 61 54 66Z" fill="#F7D04B"/>`;
  return s;
}

/* ================= 3. RDEČA KAPICA ================= */
const kapica=()=>person({hair:"#8A5A2B",hairStyle:"short",skirt:true,top:"#3E78C6",legs:"#FFFFFF",
  back:`<path d="M30 30C26 4 74 4 70 30L74 74H26Z" fill="#D63A2F" ${sw(1.4)}/>`,
  armR:[72,68],
  front:`<path d="M42 56H58L62 78H38Z" fill="#FFFFFF" ${sw(1.1)}/><path d="M66 70H84L80 84H70Z" fill="#C9934E" ${sw(1.2)}/><path d="M68 70C68 60 82 60 82 70" fill="none" ${sw(1.6)}/>`,
  hat:`<path d="M34 28C33 10 67 10 66 28C60 18 40 18 34 28Z" fill="#D63A2F" ${sw(1.2)}/><path d="M44 44L50 48L56 44" fill="#D63A2F" ${sw(1.1)}/>`});
const babica=()=>person({hair:"#D5D5DA",hairStyle:"bun",skirt:true,top:"#7A5BA8",legs:"#E9E2D8",shoes:"#5A4A3A",
  front:`<path d="M42 54H58L62 78H38Z" fill="#F3E7D1" ${sw(1.1)}/><path d="M38 47Q50 54 62 47" fill="#FFFFFF" ${sw(1.1)}/>`,
  face:`<circle cx="44.5" cy="30" r="4.2" fill="#fff" ${sw(1.2)}/><circle cx="55.5" cy="30" r="4.2" fill="#fff" ${sw(1.2)}/><path d="M48.7 30H51.3" ${sw(1.2)}/>`+eyes(44.5,55.5,30,1.6)+cheeks(39,61,36)+smile(50,37,3.5)});
function wolfPic(){
  const G="#8E96A3",GD="#5F6773",GL="#E9ECF0";
  let s=`<g stroke-linejoin="round" stroke-linecap="round">`;
  s+=`<path d="M70 80C92 80 95 60 88 50C86 64 80 70 70 70Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/>`;
  s+=`<ellipse cx="51" cy="75" rx="21" ry="17" fill="${G}" stroke="${GD}" stroke-width="1.5"/><ellipse cx="51" cy="77" rx="10" ry="13" fill="${GL}"/>`;
  [1,-1].forEach(k=>{s+=`<path d="M${50+k*8} 24L${50+k*22} 3L${50+k*23} 32Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/><path d="M${50+k*13} 24L${50+k*21} 9L${50+k*21} 28Z" fill="#E7A9B4"/>`;});
  s+=`<path d="M28 32C28 14 72 14 72 32C72 44 62 54 50 58C38 54 28 44 28 32Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/>`;
  s+=`<path d="M40 42C40 36 60 36 60 42C60 50 54 56 50 57C46 56 40 50 40 42Z" fill="${GL}"/>`;
  s+=`<path d="M36 23L45 26M64 23L55 26" stroke="${INK}" stroke-width="2"/>`+eyes(41,59,31,3);
  s+=`<ellipse cx="50" cy="43.5" rx="4" ry="2.5" fill="${INK}"/><path d="M50 46V50" stroke="${INK}" stroke-width="1.3"/><path d="M45 51C46 56 54 56 55 51Z" fill="#E86A7E"/>`;
  return s+`</g>`;
}
const hunter=()=>person({hair:"#5A3A22",hairStyle:"beard",top:"#4F7A3A",bottom:"#6B4A2E",shoes:"#3A2A1E",
  front:`<path d="M36 52H64" stroke="#8A5A2B" stroke-width="3"/><rect x="47" y="49" width="6" height="6" fill="#E1B84A" ${sw(.8)}/><path d="M40 45L60 70" stroke="#8A5A2B" stroke-width="2.4"/>`,
  face:eyes(44.5,55.5,29,2.2)+cheeks(40,60,33)+smile(50,35,3.5),
  hat:`<path d="M36 20C36 8 64 8 64 20Z" fill="#3E5E2C" ${sw(1.2)}/><path d="M28 21H72" ${sw(3)}/><path d="M28 21H72" stroke="#3E5E2C" stroke-width="1.6"/><path d="M60 14C68 4 74 6 72 10C70 12 64 14 60 14Z" fill="#7BAED9" ${sw(1)}/>`});
function basket(){
  let s=`<path d="M26 44C26 14 74 14 74 44" fill="none" ${sw(6)}/><path d="M26 44C26 14 74 14 74 44" fill="none" stroke="#C9934E" stroke-width="3.4"/>`;
  s+=`<path d="M34 34L40 46H22Z" fill="#7BC86C" opacity="0"/>`;
  s+=`<ellipse cx="38" cy="40" rx="12" ry="7" fill="#E3B56B" ${sw(1.2)}/><rect x="56" y="22" width="9" height="20" rx="3" fill="#8FC7E8" ${sw(1.2)}/><rect x="58" y="18" width="5" height="5" fill="#C0392B" ${sw(1)}/>`;
  s+=`<path d="M14 44H86L78 90H22Z" fill="#C9934E" ${sw(1.5)}/>`;
  for(let y=54;y<90;y+=9)s+=`<path d="M${16+(y-44)*.17} ${y}H${84-(y-44)*.17}" stroke="#9E6A30" stroke-width="1.2"/>`;
  for(let x=26;x<80;x+=8)s+=`<path d="M${x} 44L${x+(50-x)*.18} 90" stroke="#9E6A30" stroke-width="1"/>`;
  s+=`<path d="M14 44H86L82 54C70 50 30 50 18 54Z" fill="#FFFFFF" ${sw(1.2)}/><path d="M26 46h6v4h-6zM44 46h6v4h-6zM62 46h6v4h-6zM35 50h6v3h-6zM53 50h6v3h-6zM71 49h6v3h-6z" fill="#D63A2F"/>`;
  return s;
}
const grannyHouse=()=>house({wall:"#FFF3DD",roof:"#7A9A5A",door:"#5A7A3A",chimney:true,
  wallDeco:`<path d="M20 44H80" stroke="#E6D3B3" stroke-width=".8"/>`,
  extra:`<rect x="23" y="66" width="16" height="5" fill="#8A5A2B" ${sw(1)}/><circle cx="27" cy="64" r="2.6" fill="#E2574C"/><circle cx="31" cy="63" r="2.6" fill="#F7D04B"/><circle cx="35" cy="64" r="2.6" fill="#E46C8C"/>`+
  `<rect x="61" y="66" width="16" height="5" fill="#8A5A2B" ${sw(1)}/><circle cx="65" cy="64" r="2.6" fill="#9B6DD6"/><circle cx="69" cy="63" r="2.6" fill="#E2574C"/><circle cx="73" cy="64" r="2.6" fill="#F7D04B"/>`+
  `<path d="M4 90C10 70 16 60 16 90M84 90C88 72 94 62 96 90" fill="#6CBF5A" ${sw(1)}/>`});
function flower(x,y,c,r){r=r||7;let s="";for(let i=0;i<5;i++){const a=i*72*Math.PI/180;s+=`<circle cx="${(x+Math.cos(a)*r).toFixed(1)}" cy="${(y+Math.sin(a)*r).toFixed(1)}" r="${r*.75}" fill="${c}" ${sw(1.1)}/>`;}return s+`<circle cx="${x}" cy="${y}" r="${r*.6}" fill="#F7D04B" ${sw(1.1)}/>`;}
function flowers(){
  let s=`<path d="M30 92C30 70 28 58 28 40M50 92C50 66 52 50 52 26M70 92C70 74 72 62 72 48" fill="none" stroke="#3E8A35" stroke-width="3" stroke-linecap="round"/>`;
  s+=`<path d="M29 70C18 66 16 58 20 56C26 58 30 64 29 70ZM51 62C62 56 66 48 62 46C56 48 52 54 51 62ZM71 76C82 72 84 64 80 62C74 64 70 70 71 76Z" fill="#6CBF5A" ${sw(1.1)}/>`;
  s+=flower(28,38,"#E2574C")+flower(52,24,"#E46C8C",8)+flower(72,46,"#9B6DD6");
  s+=`<path d="M10 92H90" stroke="#3E8A35" stroke-width="3" stroke-linecap="round"/>`;
  return s;
}

/* ================= 4. BREMENSKI MESTNI GODCI ================= */
const donkey=()=>animal({c:"#9DA3AC",d:"#5E646E",l:"#E9EBEE",ears:"donkey",inner:"#E7C3CB",nose:"#5E646E",
  top:`<path d="M44 18C46 10 54 10 56 18L58 24H42Z" fill="#4A4F58" ${sw(1)}/>`,
  tail:`<path d="M70 80C82 82 86 74 84 66" fill="none" stroke="#5E646E" stroke-width="2.4" stroke-linecap="round"/><path d="M84 66l-4 -6l6 2z" fill="#4A4F58"/>`});
const dog=()=>animal({c:"#E3B77C",d:"#9E6E3A",l:"#FFF4E2",ears:"floppy",nose:INK,
  tail:`<path d="M70 78C84 76 88 66 84 58" fill="none" stroke="#9E6E3A" stroke-width="4" stroke-linecap="round"/>`,
  extra:`<path d="M34 54Q50 60 66 54" fill="none" stroke="#C0392B" stroke-width="3.4"/><circle cx="50" cy="60" r="3" fill="#F7D04B" ${sw(1)}/>`});
const cat=()=>animal({c:"#4A4A55",d:"#2A2A33",l:"#F2F2F2",ears:"pointy",inner:"#F2B6C1",nose:"#F28CA0",
  tail:`<path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#2A2A33" stroke-width="6" stroke-linecap="round"/><path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#4A4A55" stroke-width="3.6" stroke-linecap="round"/>`,
  extra:`<path d="M38 44L26 41M38 47L26 48M62 44L74 41M62 47L74 48" stroke="#D9D9D9" stroke-width="1" stroke-linecap="round"/>`});
function rooster(){
  let s=`<path d="M64 60C80 40 92 44 90 56C96 56 96 70 84 72Z" fill="#2E7D5B" ${sw(1.3)}/><path d="M66 62C84 50 92 60 86 70" fill="none" stroke="#C0392B" stroke-width="3.4" stroke-linecap="round"/><path d="M66 66C80 62 86 72 80 78" fill="none" stroke="#F2A33A" stroke-width="3.4" stroke-linecap="round"/>`;
  s+=`<path d="M44 82V92M56 82V92" stroke="#F2A33A" stroke-width="3" stroke-linecap="round"/><path d="M38 92H48M52 92H62" stroke="#F2A33A" stroke-width="2.4" stroke-linecap="round"/>`;
  s+=`<ellipse cx="52" cy="66" rx="20" ry="17" fill="#F4E9D8" ${sw(1.4)}/>`;
  s+=`<path d="M44 62C52 56 64 60 64 70C56 74 46 72 44 62Z" fill="#C88A4A" ${sw(1.1)}/>`;
  s+=`<path d="M36 42C36 56 34 62 42 64" fill="#F4E9D8" stroke="none"/>`;
  s+=`<ellipse cx="40" cy="40" rx="13" ry="14" fill="#F4E9D8" ${sw(1.4)}/>`;
  s+=`<path d="M30 28C28 20 34 18 36 24C36 16 44 14 44 22C46 16 54 18 50 28Z" fill="#E2412F" ${sw(1.2)}/>`;
  s+=`<path d="M28 40L18 43L28 46Z" fill="#F2A33A" ${sw(1.1)}/><path d="M30 48C26 54 32 58 34 50Z" fill="#E2412F" ${sw(1)}/>`;
  s+=eyes(38,38,37,2.4);
  s+=`<path d="M66 18q4 -6 8 0M70 12v-6" fill="none" stroke="#4A8FD9" stroke-width="1.6" stroke-linecap="round"/><circle cx="66" cy="20" r="2.2" fill="#4A8FD9"/><circle cx="74" cy="20" r="2.2" fill="#4A8FD9"/>`;
  return s;
}
const robber=()=>person({hair:"#2E2A33",hairStyle:"beard",top:"#3C4A5C",bottom:"#2E2A33",shoes:"#1E1A22",
  armR:[76,58],
  back:`<path d="M72 40C70 30 90 28 92 40C94 54 74 56 72 40Z" fill="#B59A6A" ${sw(1.3)}/><path d="M78 32l6 2" ${sw(1)}/>`,
  front:`<path d="M36 52H64M36 60H64" stroke="#E9ECF0" stroke-width="2.4"/>`,
  face:`<path d="M35 26H65V33H35Z" fill="#2E2A33"/>`+`<circle cx="44.5" cy="29.5" r="2.4" fill="#fff"/><circle cx="55.5" cy="29.5" r="2.4" fill="#fff"/><circle cx="45" cy="29.5" r="1.2" fill="${INK}"/><circle cx="56" cy="29.5" r="1.2" fill="${INK}"/><path d="M45 40Q50 38 55 40" fill="none" stroke="#E9ECF0" stroke-width="1.3"/>`,
  hat:`<path d="M34 22C34 8 66 8 66 22Z" fill="#7A2E2E" ${sw(1.2)}/><path d="M30 22H70" ${sw(3)}/><path d="M30 22H70" stroke="#7A2E2E" stroke-width="1.6"/>`});
const robbersHouse=()=>{
  let s=`<path d="M8 92C6 60 14 40 22 40C30 40 34 60 30 92Z" fill="#2F5E3A" ${sw(1.2)}/>`;
  s+=house({wall:"#6B4A2E",roof:"#3A2A1E",door:"#2E2A33",win:"#F7D04B",chimneyC:"#4A3A2E",
    wallDeco:`<path d="M20 52H80M20 60H80M20 68H80M20 76H80M20 84H80" stroke="#4E3420" stroke-width=".9"/>`});
  s+=`<path d="M66 30C64 22 72 20 70 12" fill="none" stroke="#9AA6B2" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`;
  s+=`<path d="M90 10l1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="#F7D04B"/><path d="M14 18a6 6 0 1 0 6 -6a4.5 4.5 0 1 1 -6 6z" fill="#F7E3A0"/>`;
  return s;
};
function bremen(){
  let s=`<rect x="10" y="40" width="22" height="52" fill="#E9D6B8" ${sw(1.3)}/><rect x="68" y="40" width="22" height="52" fill="#E9D6B8" ${sw(1.3)}/>`;
  s+=`<path d="M6 40L21 14L36 40Z" fill="#C8553D" ${sw(1.3)}/><path d="M64 40L79 14L94 40Z" fill="#C8553D" ${sw(1.3)}/>`;
  s+=`<path d="M21 14V4" ${sw(1.4)}/><path d="M21 4L31 7L21 10Z" fill="#E2574C" ${sw(1)}/><path d="M79 14V4" ${sw(1.4)}/><path d="M79 4L89 7L79 10Z" fill="#4A8FD9" ${sw(1)}/>`;
  s+=`<rect x="30" y="48" width="40" height="44" fill="#E2C9A2" ${sw(1.3)}/><path d="M30 48V42H36V48M40 48V42H46V48M50 48V42H56V48M60 48V42H66V48" fill="#E2C9A2" ${sw(1.2)}/>`;
  s+=`<path d="M40 92V72C40 62 60 62 60 72V92Z" fill="#6B4A2E" ${sw(1.3)}/><path d="M50 64V92M40 78H60" stroke="#4E3420" stroke-width="1.2"/>`;
  s+=`<rect x="17" y="52" width="8" height="10" rx="4" fill="#BFE3F5" ${sw(1.1)}/><rect x="75" y="52" width="8" height="10" rx="4" fill="#BFE3F5" ${sw(1.1)}/><rect x="17" y="70" width="8" height="10" rx="4" fill="#BFE3F5" ${sw(1.1)}/><rect x="75" y="70" width="8" height="10" rx="4" fill="#BFE3F5" ${sw(1.1)}/>`;
  s+=`<path d="M34 54l3 3M62 56l3 -3" stroke="#B59A6A" stroke-width="1"/>`;
  return s;
}

/* ================= 5. VOLK IN SEDEM KOZLIČKOV ================= */
const goatBase=(o)=>animal(Object.assign({c:"#F4F1EA",d:"#9C9384",l:"#FFFFFF",ears:"goat",inner:"#F2B6C1",nose:"#E59AA6",
  top:`<path d="M42 24C38 12 30 8 26 10C32 12 36 18 40 26Z" fill="#C9B89A" ${sw(1.1)}/><path d="M58 24C62 12 70 8 74 10C68 12 64 18 60 26Z" fill="#C9B89A" ${sw(1.1)}/>`,
  tail:`<path d="M70 70l8 -6l-2 8z" fill="#F4F1EA" stroke="#9C9384" stroke-width="1.4"/>`},o));
const motherGoat=()=>goatBase({extra:`<path d="M46 54C46 62 50 66 50 66C50 66 54 62 54 54Z" fill="#E9E2D3" stroke="#9C9384" stroke-width="1.1"/>`+
  `<path d="M38 60H62L66 86H34Z" fill="#E46C8C" ${sw(1.2)}/><path d="M38 60Q50 66 62 60" fill="none" ${sw(1.1)}/><circle cx="44" cy="72" r="1.6" fill="#fff"/><circle cx="56" cy="76" r="1.6" fill="#fff"/><circle cx="50" cy="82" r="1.6" fill="#fff"/>`});
const kid=()=>`<g transform="translate(14 22) scale(.72)">${goatBase({top:`<path d="M44 24C42 18 40 16 38 16C40 20 41 22 42 26Z" fill="#C9B89A" ${sw(1.1)}/><path d="M56 24C58 18 60 16 62 16C60 20 59 22 58 26Z" fill="#C9B89A" ${sw(1.1)}/>`,
  extra:`<path d="M36 56Q50 62 64 56" fill="none" stroke="#4A8FD9" stroke-width="3"/><circle cx="50" cy="61" r="3.4" fill="#F7D04B" ${sw(1)}/>`})}</g>`+
  `<path d="M74 22l1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="#F7D04B"/><path d="M16 30l1 2 2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2-1.5-1.5 2-.3z" fill="#F28CB0"/>`;
const goatHouse=()=>house({wall:"#FCE9C8",roof:"#B5452E",door:"#3F6E9C",chimney:true,
  roofDeco:`<path d="M26 34H74M36 25H64" stroke="#8E3A26" stroke-width="1"/>`,
  extra:`<path d="M42 64C42 60 58 60 58 64" fill="none" ${sw(1.1)}/><path d="M46 70h8l-4 5z" fill="#F7D04B" ${sw(.8)}/><path d="M6 92H94" stroke="#6CBF5A" stroke-width="4" stroke-linecap="round"/>`});
function clock(){
  let s=`<path d="M30 20L50 6L70 20Z" fill="#7A4A2A" ${sw(1.3)}/>`;
  s+=`<rect x="30" y="20" width="40" height="72" rx="3" fill="#A86B3C" ${sw(1.4)}/>`;
  s+=`<circle cx="50" cy="38" r="14" fill="#FFF8E6" ${sw(1.3)}/>`;
  for(let i=0;i<12;i++){const a=i*30*Math.PI/180;s+=`<circle cx="${(50+Math.cos(a)*11).toFixed(1)}" cy="${(38+Math.sin(a)*11).toFixed(1)}" r=".9" fill="${INK}"/>`;}
  s+=`<path d="M50 38V30M50 38L56 41" ${sw(1.6)}/>`;
  s+=`<rect x="38" y="56" width="24" height="32" rx="2" fill="#5A3418" ${sw(1.2)}/>`;
  s+=`<path d="M50 56V76" stroke="#E1B84A" stroke-width="1.4"/><circle cx="50" cy="78" r="4.5" fill="#E1B84A" ${sw(1.1)}/>`;
  s+=`<path d="M41 62C41 58 45 58 45 62" fill="#F4F1EA" ${sw(.9)}/>`+`<circle cx="42.3" cy="61.5" r=".9" fill="${INK}"/>`;
  return s;
}
function well(){
  let s=`<path d="M24 42V70M76 42V70" stroke="#8A5A2B" stroke-width="4" stroke-linecap="round"/>`;
  s+=`<path d="M14 44L50 18L86 44Z" fill="#B5452E" ${sw(1.3)}/>`;
  s+=`<path d="M26 50H74" ${sw(3)}/><path d="M26 50H74" stroke="#C9934E" stroke-width="1.6"/><path d="M50 50V60" stroke="#8A7A6A" stroke-width="1.2"/>`;
  s+=`<path d="M44 60H56L54 70H46Z" fill="#9AA6B2" ${sw(1.2)}/>`;
  s+=`<path d="M18 70H82V92H18Z" fill="#B8B0A4" ${sw(1.4)}/>`;
  [[18,70,16],[34,70,16],[50,70,16],[66,70,16],[26,81,16],[42,81,16],[58,81,16]].forEach(([x,y,w])=>{s+=`<rect x="${x}" y="${y}" width="${w}" height="11" fill="none" stroke="#8A8278" stroke-width=".9"/>`;});
  s+=`<ellipse cx="50" cy="70" rx="32" ry="4" fill="#4A8FD9" ${sw(1.2)}/>`;
  s+=`<path d="M78 50l8 0" ${sw(2.4)}/><path d="M86 50v6" ${sw(2.4)}/>`;
  return s;
}
const miller=()=>person({hair:"#C9C4BC",hairStyle:"short",top:"#F4F1EA",bottom:"#B8A88E",shoes:"#5A4A3A",
  armL:[26,60],
  back:`<path d="M10 58C6 50 18 42 26 48C34 44 40 54 34 62L32 82C24 86 14 84 12 78Z" fill="#F2E6CF" ${sw(1.3)}/><path d="M18 64h10M17 70h12" stroke="#C9B89A" stroke-width="1.2"/><text x="23" y="77" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="6" font-weight="700" fill="#9E8A66">MOKA</text>`,
  front:`<rect x="40" y="52" width="20" height="18" rx="2" fill="#FFFFFF" ${sw(1)}/>`,
  hat:`<path d="M36 20C32 6 44 2 50 8C56 2 68 6 64 20Z" fill="#FFFFFF" ${sw(1.2)}/><rect x="36" y="18" width="28" height="5" fill="#FFFFFF" ${sw(1.2)}/>`+
  `<circle cx="61" cy="34" r="1.4" fill="#FFFFFF" opacity=".9"/><circle cx="40" cy="37" r="1.2" fill="#FFFFFF" opacity=".9"/>`});

/* ================= zgodbe ================= */
const STORIES=[
 {slug:"mojca-pokrajculja",title:"Mojca Pokrajculja",intro:"Mojca najde lonček, v katerega se ena za drugo naselijo živali. Nastavi mrežo, izvozi PDF in otroci z robotom KUBO pripeljejo vsako žival do lončka.",
  pics:[["mojca","Mojca",mojca],["loncek","Lonček",pot],["miska","Miška",mouse],["zabica","Žabica",frog],["zajcek","Zajček",rabbit],["lisica","Lisica",fox],["medved","Medved",bear]],
  defaults:[["loncek",2,4],["mojca",0,1],["miska",4,1],["zabica",0,7],["zajcek",4,7],["lisica",1,5],["medved",3,3]]},
 {slug:"janko-in-metka",title:"Janko in Metka",intro:"Janko in Metka sledita drobtinicam skozi gozd do hišice iz sladkarij. Nastavi mrežo, izvozi PDF in otroci z robotom KUBO poiščejo pot do hišice in nazaj domov.",
  pics:[["janko","Janko",janko],["metka","Metka",metka],["hisica","Hišica iz sladkarij",candyHouse],["carovnica","Čarovnica",witch],["drobtinice","Drobtinice",crumbs],["ptica","Ptica",bird],["pec","Peč",oven]],
  defaults:[["janko",0,1],["metka",1,1],["drobtinice",2,3],["ptica",4,4],["hisica",3,7],["carovnica",1,6],["pec",4,6]]},
 {slug:"rdeca-kapica",title:"Rdeča kapica",intro:"Rdeča kapica nese košarico babici, v gozdu pa jo čaka volk. Nastavi mrežo, izvozi PDF in otroci z robotom KUBO pripeljejo Rdečo kapico do babice mimo volka.",
  pics:[["kapica","Rdeča kapica",kapica],["babica","Babica",babica],["volk","Volk",wolfPic],["lovec","Lovec",hunter],["kosarica","Košarica",basket],["hisa","Babičina hišica",grannyHouse],["roze","Rože",flowers]],
  defaults:[["kapica",0,1],["kosarica",1,2],["roze",3,3],["volk",1,4],["lovec",4,5],["hisa",3,7],["babica",4,7]]},
 {slug:"bremenski-mestni-godci",title:"Bremenski mestni godci",intro:"Osel, pes, mačka in petelin se odpravijo v Bremen in preženejo razbojnike. Nastavi mrežo, izvozi PDF in otroci z robotom KUBO zberejo vse štiri godce.",
  pics:[["osel","Osel",donkey],["pes","Pes",dog],["macka","Mačka",cat],["petelin","Petelin",rooster],["razbojnik","Razbojnik",robber],["hisa","Hiša razbojnikov",robbersHouse],["bremen","Mesto Bremen",bremen]],
  defaults:[["osel",0,1],["pes",4,1],["macka",0,4],["petelin",4,4],["hisa",2,5],["razbojnik",3,6],["bremen",2,7]]},
 {slug:"volk-in-sedem-kozlickov",title:"Volk in sedem kozličkov",intro:"Mama koza odide v gozd, volk pa poskuša prelisičiti kozličke. Nastavi mrežo, izvozi PDF in otroci z robotom KUBO pomagajo mami kozi najti vse kozličke.",
  pics:[["mama","Mama koza",motherGoat],["kozlicek","Kozliček",kid],["volk","Volk",wolfPic],["hisica","Hišica",goatHouse],["ura","Stenska ura",clock],["studenec","Studenec",well],["mlinar","Mlinar",miller]],
  defaults:[["mama",0,1],["hisica",2,4],["kozlicek",3,5],["ura",4,7],["volk",4,2],["mlinar",0,6],["studenec",1,7]],
  counts:{kozlicek:7}}
];
if(typeof module!=="undefined")module.exports={STORIES,INK};
