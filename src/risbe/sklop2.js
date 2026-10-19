/* ================= dodatne pravljice (uporablja pomočnike iz lib.js) ================= */

/* ---------- 6. REPA VELIKANKA ---------- */
const dedek=()=>person({hair:"#E9E9EE",hairStyle:"beard",top:"#C0573E",bottom:"#5A6B7A",shoes:"#4A3426",
  front:`<path d="M50 45V70" stroke="#8E3A26" stroke-width="1.4"/><circle cx="50" cy="52" r="1.3" fill="#F7D04B"/><circle cx="50" cy="60" r="1.3" fill="#F7D04B"/>`,
  face:eyes(44.5,55.5,28,2.1)+cheeks(40,60,32)+`<path d="M46 35Q50 37 54 35" fill="none" ${sw(1.2)}/>`,
  hat:`<path d="M35 22C35 10 65 10 65 22Z" fill="#8A6A3A" ${sw(1.2)}/><path d="M30 22H70" ${sw(3)}/><path d="M30 22H70" stroke="#8A6A3A" stroke-width="1.6"/>`});
const babica2=()=>person({hair:"#D5D5DA",hairStyle:"bun",skirt:true,top:"#3E78C6",legs:"#E9E2D8",shoes:"#5A4A3A",
  front:`<path d="M42 54H58L62 78H38Z" fill="#F7D04B" ${sw(1.1)}/><path d="M42 60H58M41 66H59M40 72H60" stroke="#E2A72E" stroke-width="1"/>`,
  hat:`<path d="M33 30C30 10 70 10 67 30C64 20 36 20 33 30Z" fill="#E2574C" ${sw(1.2)}/><path d="M44 44L50 50L56 44" fill="#E2574C" ${sw(1.1)}/><circle cx="42" cy="18" r="1.4" fill="#fff"/><circle cx="50" cy="15" r="1.4" fill="#fff"/><circle cx="58" cy="18" r="1.4" fill="#fff"/>`});
const vnukinja=()=>person({hair:"#E3A34A",hairStyle:"braids",skirt:true,top:"#7BC86C",legs:"#FFFFFF",bow:"#E46C8C",
  front:`<path d="M42 56H58L62 78H38Z" fill="#FFFFFF" ${sw(1.1)}/>`+flower(50,66,"#E46C8C",2.6)});
const psicka=()=>animal({c:"#F2E3CB",d:"#B08A5A",l:"#FFFFFF",ears:"floppy",nose:INK,
  tail:`<path d="M70 78C84 76 88 66 84 58" fill="none" stroke="#B08A5A" stroke-width="4" stroke-linecap="round"/>`,
  extra:`<ellipse cx="58" cy="30" rx="5" ry="4" fill="#C9A06A" opacity=".7"/><path d="M30 18l6 4l-6 4zM42 18l-6 4l6 4z" fill="#E46C8C" ${sw(1)}/><circle cx="36" cy="22" r="2" fill="#E46C8C" ${sw(1)}/><path d="M34 54Q50 60 66 54" fill="none" stroke="#4A8FD9" stroke-width="3.4"/>`});
const macka2=()=>animal({c:"#F2A34A",d:"#B5651D",l:"#FFF4E2",ears:"pointy",inner:"#F2B6C1",nose:"#F28CA0",
  tail:`<path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#B5651D" stroke-width="6" stroke-linecap="round"/><path d="M70 82C92 84 92 60 82 56" fill="none" stroke="#F2A34A" stroke-width="3.6" stroke-linecap="round"/>`,
  extra:`<path d="M44 22l2 6M50 20v7M56 22l-2 6" stroke="#B5651D" stroke-width="1.6" stroke-linecap="round"/><path d="M38 44L26 41M38 47L26 48M62 44L74 41M62 47L74 48" stroke="#B5651D" stroke-width="1" stroke-linecap="round"/>`});
function repa(){
  let s=`<path d="M50 30C40 18 30 8 22 6C28 14 38 22 46 32Z" fill="#6CBF5A" ${sw(1.3)}/><path d="M50 30C52 14 56 4 62 2C60 12 56 22 54 32Z" fill="#7BC86C" ${sw(1.3)}/><path d="M50 30C62 18 74 12 82 12C74 20 64 26 56 34Z" fill="#5AAE4C" ${sw(1.3)}/>`;
  s+=`<path d="M50 32C24 32 14 50 18 64C22 78 38 84 48 92C50 96 52 96 52 92C62 84 78 78 82 64C86 50 76 32 50 32Z" fill="#F4F1EA" ${sw(1.5)}/>`;
  s+=`<path d="M50 32C26 32 16 46 18 56C30 46 70 46 82 56C84 46 74 32 50 32Z" fill="#B565C9" ${sw(1.5)}/>`;
  s+=`<path d="M34 64q4 2 8 0M58 72q4 2 8 0M44 80q3 2 6 0" fill="none" stroke="#C9BFAF" stroke-width="1.2"/>`;
  s+=`<path d="M8 92H92" stroke="#8A6A3A" stroke-width="3" stroke-linecap="round"/>`;
  return s;
}

/* ---------- 7. SNEGULJČICA ---------- */
const sneguljcica=()=>person({hair:"#2E2A33",hairStyle:"short",skirt:true,top:"#3E5EB8",legs:"#FFFFFF",shoes:"#3E5EB8",
  front:`<path d="M39 60H61L70 80H30Z" fill="#F7D04B" ${sw(1.2)}/><path d="M36 45C34 40 40 38 42 46M64 45C66 40 60 38 58 46" fill="#E2574C" ${sw(1)}/>`,
  hat:`<path d="M40 16C36 10 44 8 46 14L50 16L54 14C56 8 64 10 60 16C56 20 44 20 40 16Z" fill="#E2412F" ${sw(1.1)}/>`});
const palcek=()=>`<g transform="translate(10 12) scale(.8)">`+person({hair:"#E9E9EE",hairStyle:"beard",top:"#3E8E5A",bottom:"#7A5230",shoes:"#4A3426",
  armL:[30,62],armR:[70,62],
  front:`<path d="M36 58H64" stroke="#5A3A22" stroke-width="3"/><rect x="47" y="55" width="6" height="6" fill="#E1B84A" ${sw(.8)}/>`,
  face:eyes(44.5,55.5,28,2.1)+`<circle cx="50" cy="32" r="3" fill="#F49A8C" ${sw(1)}/>`+cheeks(40,60,31),
  hat:`<path d="M34 22L56 -8L66 22Z" fill="#E2412F" ${sw(1.3)}/><circle cx="56" cy="-8" r="3" fill="#F7D04B" ${sw(1)}/>`})+`</g>`+
  `<path d="M74 82l14 -10l6 4l-12 10z" fill="#9AA6B2" ${sw(1.2)}/><path d="M74 82l-4 10" stroke="#8A5A2B" stroke-width="3" stroke-linecap="round"/>`;
const kraljica=()=>person({skin:"#F3D6C4",hair:"#3A2A55",hairStyle:"long",skirt:true,top:"#5B2E86",legs:"#2E2A33",shoes:"#2E2A33",
  back:`<path d="M30 46L22 92H78L70 46Z" fill="#2E2A33" ${sw(1.3)}/><path d="M30 40C26 30 36 26 40 36M70 40C74 30 64 26 60 36" fill="#E9ECF0" ${sw(1)}/>`,
  front:`<path d="M42 48L50 60L58 48" fill="#B5452E" ${sw(1)}/>`,
  face:`<path d="M41 27L48 29M59 27L52 29" ${sw(1.6)}/>`+eyes(44.5,55.5,31,2.1)+`<path d="M45 38Q50 36 55 38" fill="none" stroke="#9E2A3A" stroke-width="1.6" stroke-linecap="round"/>`,
  hat:`<path d="M36 18L38 6L44 13L50 2L56 13L62 6L64 18Z" fill="#F2C94C" ${sw(1.2)}/><circle cx="50" cy="12" r="2" fill="#E2412F"/>`});
function ogledalo(){
  let s=`<path d="M44 82H56L58 92H42Z" fill="#B88A3A" ${sw(1.3)}/>`;
  s+=`<ellipse cx="50" cy="44" rx="30" ry="38" fill="#E1B84A" ${sw(1.5)}/>`;
  s+=`<ellipse cx="50" cy="44" rx="23" ry="31" fill="#CFE4F2" ${sw(1.3)}/>`;
  s+=`<path d="M34 30C38 22 44 18 50 18" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/><path d="M36 40L46 26" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".8"/>`;
  s+=`<path d="M50 4L53 9L50 12L47 9Z" fill="#E2412F" ${sw(1)}/><circle cx="22" cy="44" r="2.4" fill="#4A8FD9" ${sw(.8)}/><circle cx="78" cy="44" r="2.4" fill="#4A8FD9" ${sw(.8)}/>`;
  s+=eyes(43,57,46,2)+smile(50,52,3.5);
  return s;
}
function jabolko(){
  let s=`<path d="M50 30C38 18 18 22 16 44C14 66 32 90 50 84C68 90 86 66 84 44C82 22 62 18 50 30Z" fill="#D63A2F" ${sw(1.6)}/>`;
  s+=`<path d="M28 40C30 32 36 28 42 30" fill="none" stroke="#F5A69A" stroke-width="3.4" stroke-linecap="round"/>`;
  s+=`<path d="M50 30C50 22 52 14 56 8" fill="none" stroke="#6B4A2E" stroke-width="3" stroke-linecap="round"/>`;
  s+=`<path d="M54 16C62 6 78 8 80 14C70 20 60 20 54 16Z" fill="#6CBF5A" ${sw(1.3)}/><path d="M56 16Q68 12 78 14" fill="none" stroke="#3E8A35" stroke-width="1"/>`;
  return s;
}
const hisicaPalckov=()=>house({wall:"#E9D2A8",roof:"#B5452E",door:"#5A3418",chimneyC:"#8E5A3A",
  wallDeco:`<path d="M20 52H80M20 60H80M20 68H80M20 76H80M20 84H80" stroke="#C9AE80" stroke-width=".8"/>`,
  roofDeco:`<path d="M26 34H74M36 25H64M44 18H56" stroke="#8E3A26" stroke-width="1"/>`,
  extra:`<path d="M6 92C8 76 12 70 14 92M86 92C88 76 92 70 94 92" fill="#6CBF5A" ${sw(1)}/><rect x="45" y="56" width="10" height="5" rx="1" fill="#F7D04B" ${sw(.8)}/><text x="50" y="60.2" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="4" fill="${INK}">7</text>`});

/* ---------- 8. PEPELKA ---------- */
const pepelka=()=>person({hair:"#E3B04A",hairStyle:"bun",skirt:true,top:"#8FC7EA",legs:"#DDEEF8",shoes:"#BFE3F5",
  back:`<path d="M30 52L16 92H84L70 52Z" fill="#8FC7EA" ${sw(1.4)}/><path d="M24 80Q50 86 76 80" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>`,
  front:`<path d="M40 46Q50 52 60 46" fill="none" stroke="#FFFFFF" stroke-width="2"/>`,
  hat:`<path d="M42 14L45 8L50 12L55 8L58 14Z" fill="#DDE6F0" ${sw(1)}/>`});
const princ=()=>person({hair:"#7A4A24",hairStyle:"short",top:"#2F4F9F",bottom:"#F4F1EA",shoes:"#2E2A33",
  back:`<path d="M34 46L28 84H40L40 50ZM66 46L72 84H60L60 50Z" fill="#B5452E" ${sw(1.2)}/>`,
  front:`<path d="M38 46L62 66" stroke="#F2C94C" stroke-width="3"/><circle cx="44" cy="56" r="1.4" fill="#F2C94C"/><circle cx="44" cy="62" r="1.4" fill="#F2C94C"/>`,
  hat:`<path d="M38 18L40 8L45 13L50 5L55 13L60 8L62 18Z" fill="#F2C94C" ${sw(1.2)}/>`});
const vila=()=>person({hair:"#C9C4E8",hairStyle:"long",skirt:true,top:"#B48AE0",legs:"#F0E6FA",shoes:"#9B6DD6",
  armR:[76,48],
  back:`<path d="M38 50C18 30 10 50 20 62C26 68 34 62 40 56ZM62 50C82 30 90 50 80 62C74 68 66 62 60 56Z" fill="#E6F2FB" ${sw(1.2)}/><path d="M76 48L88 28" stroke="#8A5A2B" stroke-width="2.4" stroke-linecap="round"/><path d="M88 20l2 5 5 .7-3.6 3.4.9 5-4.3-2.4-4.3 2.4.9-5-3.6-3.4 5-.7z" fill="#F7D04B" ${sw(1)}/>`,
  hat:`<path d="M44 16L50 8L56 16Z" fill="#F7D04B" ${sw(1)}/>`});
function buca(){
  let s=`<circle cx="26" cy="80" r="11" fill="#FFFFFF" ${sw(1.5)}/><circle cx="74" cy="80" r="11" fill="#FFFFFF" ${sw(1.5)}/><path d="M26 69V91M15 80H37M74 69V91M63 80H85" stroke="#C9A04A" stroke-width="1.4"/><circle cx="26" cy="80" r="3" fill="#E1B84A" ${sw(1)}/><circle cx="74" cy="80" r="3" fill="#E1B84A" ${sw(1)}/>`;
  s+=`<path d="M50 24C24 22 12 40 14 56C16 72 32 78 50 76C68 78 84 72 86 56C88 40 76 22 50 24Z" fill="#F28A2E" ${sw(1.6)}/>`;
  s+=`<path d="M50 24C40 34 38 66 50 76M50 24C60 34 62 66 50 76M30 30C22 44 24 66 34 74M70 30C78 44 76 66 66 74" fill="none" stroke="#C8621A" stroke-width="1.4"/>`;
  s+=`<path d="M42 40H58V58H42Z" fill="#BFE3F5" ${sw(1.3)}/><path d="M50 40V58M42 49H58" stroke="#FFFFFF" stroke-width="1.4"/>`;
  s+=`<path d="M50 24C48 16 52 10 58 8" fill="none" stroke="#3E8A35" stroke-width="3" stroke-linecap="round"/><path d="M54 14C62 8 70 12 68 16C62 18 58 16 54 14Z" fill="#6CBF5A" ${sw(1.1)}/>`;
  s+=`<path d="M12 10l1.4 3 3 .4-2.2 2.1.5 3-2.7-1.5-2.7 1.5.5-3-2.2-2.1 3-.4z" fill="#F7D04B"/><path d="M84 30l1 2 2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2-1.5-1.5 2-.3z" fill="#F7D04B"/>`;
  return s;
}
function cevelj(){
  let s=`<path d="M64 52L68 84H74L72 52Z" fill="#CFE8F7" ${sw(1.4)}/>`;
  s+=`<path d="M12 72C12 60 26 56 40 62C52 66 60 54 70 52C80 50 86 56 84 66L82 80C70 84 30 86 16 82C12 80 12 76 12 72Z" fill="#DDF0FA" ${sw(1.6)}/>`;
  s+=`<path d="M20 70C30 66 44 70 54 64C62 58 70 56 78 58" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`;
  s+=`<path d="M28 60C30 54 36 52 40 56" fill="none" stroke="#9CC7E8" stroke-width="1.4"/>`;
  s+=`<path d="M24 22l2.4 5 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z" fill="#F7D04B" ${sw(1)}/><path d="M74 26l1.4 3 3 .4-2.2 2.1.5 3-2.7-1.5-2.7 1.5.5-3-2.2-2.1 3-.4z" fill="#F7D04B"/><path d="M50 38l1 2 2 .3-1.5 1.5.4 2-1.9-1-1.9 1 .4-2-1.5-1.5 2-.3z" fill="#9CC7E8"/>`;
  return s;
}
function grad(){
  let s=`<rect x="8" y="34" width="18" height="58" fill="#E6E2F2" ${sw(1.3)}/><rect x="74" y="34" width="18" height="58" fill="#E6E2F2" ${sw(1.3)}/><rect x="38" y="22" width="24" height="70" fill="#EEEAF7" ${sw(1.3)}/>`;
  s+=`<path d="M4 34L17 12L30 34Z" fill="#5B6FC4" ${sw(1.3)}/><path d="M70 34L83 12L96 34Z" fill="#5B6FC4" ${sw(1.3)}/><path d="M34 22L50 0L66 22Z" fill="#4A5AA8" ${sw(1.3)}/>`;
  s+=`<rect x="26" y="50" width="48" height="42" fill="#E6E2F2" ${sw(1.3)}/><path d="M26 50V44H32V50M38 50V44H44V50M56 50V44H62V50M68 50V44H74V50" fill="#E6E2F2" ${sw(1.1)}/>`;
  s+=`<path d="M40 92V74C40 64 60 64 60 74V92Z" fill="#9B6DD6" ${sw(1.3)}/><path d="M50 66V92" stroke="#7A4FB0" stroke-width="1.2"/>`;
  s+=`<rect x="45" y="30" width="10" height="12" rx="5" fill="#F7D04B" ${sw(1.1)}/><rect x="13" y="44" width="8" height="10" rx="4" fill="#F7D04B" ${sw(1.1)}/><rect x="79" y="44" width="8" height="10" rx="4" fill="#F7D04B" ${sw(1.1)}/>`;
  s+=`<path d="M50 0V-6" ${sw(1.2)}/><path d="M50 -6L58 -3L50 0Z" fill="#E46C8C" ${sw(.9)}/>`;
  return s;
}
function polnoc(){
  let s=`<circle cx="50" cy="50" r="40" fill="#2F3E7A" ${sw(1.6)}/><circle cx="50" cy="50" r="33" fill="#FFF8E6" ${sw(1.3)}/>`;
  for(let i=0;i<12;i++){const a=(i*30-90)*Math.PI/180;const r=i%3===0?3:1.4;s+=`<circle cx="${(50+Math.cos(a)*27).toFixed(1)}" cy="${(50+Math.sin(a)*27).toFixed(1)}" r="${r}" fill="${INK}"/>`;}
  s+=`<path d="M50 50V24" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/><path d="M50 50V30" stroke="${INK}" stroke-width="3.4" stroke-linecap="round" transform="rotate(-8 50 50)"/><circle cx="50" cy="50" r="3" fill="#E2412F" ${sw(1)}/>`;
  s+=`<path d="M18 6a8 8 0 1 0 8 8a6 6 0 1 1 -8 -8z" fill="#F7E3A0" ${sw(1)}/><path d="M84 8l1.4 3 3 .4-2.2 2.1.5 3-2.7-1.5-2.7 1.5.5-3-2.2-2.1 3-.4z" fill="#F7D04B"/>`;
  return s;
}

/* ---------- 9. ZLATA RIBICA ---------- */
const ribic=()=>person({hair:"#B9B9C2",hairStyle:"beard",top:"#3E78C6",bottom:"#5A4A3A",shoes:"#3A2A1E",
  armR:[76,54],
  back:`<path d="M76 54L92 6" stroke="#8A5A2B" stroke-width="2.4" stroke-linecap="round"/><path d="M92 6Q96 30 90 44" fill="none" stroke="#9AA6B2" stroke-width="1"/>`,
  front:`<path d="M36 50H64M36 58H64M36 66H64" stroke="#FFFFFF" stroke-width="2.4"/>`,
  hat:`<path d="M34 22C34 10 66 10 66 22Z" fill="#F2C94C" ${sw(1.2)}/><path d="M28 22H72" ${sw(3)}/><path d="M28 22H72" stroke="#F2C94C" stroke-width="1.6"/>`});
const zena=()=>person({hair:"#8A5A2B",hairStyle:"short",skirt:true,top:"#B5452E",legs:"#E9E2D8",shoes:"#5A4A3A",
  front:`<path d="M42 54H58L62 78H38Z" fill="#F4E9D8" ${sw(1.1)}/>`,
  face:`<path d="M41 27L48 29M59 27L52 29" ${sw(1.4)}/>`+eyes(44.5,55.5,31,2.1)+cheeks(40,60,35)+`<path d="M46 39Q50 37 54 39" fill="none" ${sw(1.3)}/>`,
  hat:`<path d="M33 30C30 10 70 10 67 30C64 20 36 20 33 30Z" fill="#E1B84A" ${sw(1.2)}/><path d="M44 44L50 50L56 44" fill="#E1B84A" ${sw(1.1)}/><circle cx="42" cy="18" r="1.4" fill="#B5452E"/><circle cx="50" cy="15" r="1.4" fill="#B5452E"/><circle cx="58" cy="18" r="1.4" fill="#B5452E"/>`});
function ribica(){
  let s=`<path d="M70 50L94 30L90 50L94 70Z" fill="#F2A33A" ${sw(1.5)}/>`;
  s+=`<path d="M10 50C18 28 50 22 72 50C50 78 18 72 10 50Z" fill="#F7C432" ${sw(1.6)}/>`;
  s+=`<path d="M40 30C46 20 56 22 58 34Z" fill="#F2A33A" ${sw(1.3)}/><path d="M44 66C48 74 56 72 56 64Z" fill="#F2A33A" ${sw(1.2)}/>`;
  s+=`<path d="M36 38C42 46 42 54 36 62M48 36C54 46 54 54 48 64M60 40C64 46 64 54 60 60" fill="none" stroke="#E2A72E" stroke-width="1.4"/>`;
  s+=eyes(22,22,46,3.2)+`<path d="M12 54Q16 57 20 54" fill="none" ${sw(1.3)}/>`;
  s+=`<path d="M30 14L33 6L36 14L44 16L36 18L33 26L30 18L22 16Z" fill="#F2C94C" ${sw(1)}/><circle cx="16" cy="28" r="2.6" fill="none" stroke="#7BBEDC" stroke-width="1.4"/><circle cx="10" cy="20" r="1.8" fill="none" stroke="#7BBEDC" stroke-width="1.2"/>`;
  return s;
}
function mreza(){
  let s=`<path d="M14 18L50 92L86 18Z" fill="#F4F1EA" opacity=".55"/>`;
  for(let i=1;i<6;i++){const y=18+i*12.3,dx=36*(1-(y-18)/74);s+=`<path d="M${50-dx} ${y}H${50+dx}" stroke="#6B5A44" stroke-width="1.3"/>`;}
  for(let i=1;i<6;i++){const x=14+i*12;s+=`<path d="M${x} 18L50 92" stroke="#6B5A44" stroke-width="1.3"/>`;}
  s+=`<path d="M14 18L50 92L86 18" fill="none" stroke="#6B5A44" stroke-width="1.6" stroke-linejoin="round"/>`;
  s+=`<path d="M10 18H90" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><path d="M10 18H90" stroke="#C9934E" stroke-width="2.6" stroke-linecap="round"/>`;
  [[14,18],[38,18],[62,18],[86,18]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y+5}" r="3" fill="#E2574C" ${sw(1)}/>`;});
  s+=`<path d="M40 70C44 64 52 64 56 70C52 76 44 76 40 70Z" fill="#9CC7E8" ${sw(1)}/><path d="M56 70l5 -4v8z" fill="#9CC7E8" ${sw(1)}/>`;
  return s;
}
function korito(){
  let s=`<path d="M8 50H92L82 82H18Z" fill="#B8864E" ${sw(1.6)}/>`;
  s+=`<ellipse cx="50" cy="50" rx="42" ry="7" fill="#C99A62" ${sw(1.5)}/><ellipse cx="50" cy="51" rx="36" ry="4.5" fill="#9CC7E8"/>`;
  s+=`<path d="M12 60H88M15 70H85" stroke="#8E6234" stroke-width="1.2"/>`;
  s+=`<path d="M60 56L72 84M30 54L20 80" stroke="#5E3C22" stroke-width="2.2" stroke-linecap="round"/>`;
  s+=`<path d="M20 82L18 92M80 82L82 92" stroke="#8E6234" stroke-width="3" stroke-linecap="round"/>`;
  return s;
}
const koca=()=>house({wall:"#D9C29A",roof:"#C9A04A",door:"#6B4A2E",chimney:false,win:"#BFE3F5",
  wallDeco:`<path d="M20 52H80M20 60H80M20 68H80M20 76H80M20 84H80" stroke="#B8A07A" stroke-width=".9"/>`,
  roofDeco:(()=>{let r="";for(let i=0;i<=10;i++)r+=`<line x1="50" y1="13" x2="${14+i*7.2}" y2="45" stroke="#A8822E" stroke-width=".8"/>`;return r;})(),
  extra:`<path d="M2 92Q14 86 26 92T50 92T74 92T98 92" fill="none" stroke="#4A8FD9" stroke-width="2.4"/>`});
function morje(){
  let s=`<path d="M6 40C6 28 94 28 94 40V92H6Z" fill="#DDF1F8"/>`;
  s+=`<circle cx="76" cy="20" r="9" fill="#F7D04B" ${sw(1.2)}/>`;
  s+=`<path d="M6 50Q18 40 30 50T54 50T78 50T102 50V92H6Z" fill="#7BBEDC" ${sw(1.4)}/>`;
  s+=`<path d="M6 66Q18 56 30 66T54 66T78 66T102 66V92H6Z" fill="#4A8FD9" ${sw(1.4)}/>`;
  s+=`<path d="M6 80Q18 72 30 80T54 80T78 80T102 80V92H6Z" fill="#2F6BB0" ${sw(1.4)}/>`;
  s+=`<path d="M14 44q4 -4 8 0M58 44q4 -4 8 0M36 60q4 -4 8 0M80 60q4 -4 8 0" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>`;
  s+=`<path d="M24 22q3 -3 6 0q3 -3 6 0" fill="none" ${sw(1.2)}/>`;
  return s;
}

/* ---------- 10. LISICA IN VRANA ---------- */
function vrana(){
  const B="#3A3D4A",D="#22242C";
  let s=`<path d="M10 86H90" stroke="#8A5A2B" stroke-width="5" stroke-linecap="round"/>`;
  s+=`<path d="M68 60L94 54L88 74Z" fill="${B}" stroke="${D}" stroke-width="1.4" stroke-linejoin="round"/>`;
  s+=`<ellipse cx="56" cy="62" rx="22" ry="17" fill="${B}" stroke="${D}" stroke-width="1.5"/>`;
  s+=`<path d="M48 58C56 50 72 54 74 66C64 72 52 70 48 58Z" fill="#4E5262" stroke="${D}" stroke-width="1.2"/>`;
  s+=`<circle cx="38" cy="40" r="14" fill="${B}" stroke="${D}" stroke-width="1.5"/>`;
  s+=`<circle cx="36" cy="37" r="4" fill="#FFFFFF"/><circle cx="35" cy="37" r="2.4" fill="${INK}"/><circle cx="36" cy="36" r=".9" fill="#fff"/>`;
  s+=`<path d="M26 40L8 46L26 48Z" fill="#F2A33A" ${sw(1.2)}/>`;
  s+=`<path d="M4 50L18 44L22 56L8 60Z" fill="#F7D04B" ${sw(1.2)}/><circle cx="12" cy="52" r="1.4" fill="#E2A72E"/><circle cx="17" cy="49" r="1" fill="#E2A72E"/>`;
  s+=`<path d="M50 78V86M60 78V86" stroke="#F2A33A" stroke-width="2.4" stroke-linecap="round"/>`;
  s+=`<path d="M34 26C36 20 40 20 40 26" fill="none" stroke="${D}" stroke-width="1.6"/>`;
  return s;
}
function sir(){
  let s=`<path d="M10 70L80 40L92 56V78L22 92H10Z" fill="#F7D04B" ${sw(1.6)}/>`;
  s+=`<path d="M10 70L80 40L92 56L22 78Z" fill="#FBE27A" ${sw(1.4)}/><path d="M22 78V92" ${sw(1.4)}/>`;
  [[40,66,4],[62,58,3],[30,84,3.4],[56,80,4.4],[78,70,3]].forEach(([x,y,r])=>{s+=`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r*.75}" fill="#E2B12E" ${sw(1)}/>`;});
  return s;
}
function drevo(){
  let s=`<path d="M42 92L44 54H56L58 92Z" fill="#8A5A2B" ${sw(1.5)}/><path d="M44 66L32 56M56 62L68 52" stroke="#8A5A2B" stroke-width="4" stroke-linecap="round"/>`;
  s+=`<circle cx="50" cy="30" r="22" fill="#6CBF5A" ${sw(1.4)}/><circle cx="28" cy="44" r="16" fill="#5AAE4C" ${sw(1.4)}/><circle cx="72" cy="44" r="16" fill="#5AAE4C" ${sw(1.4)}/><circle cx="50" cy="48" r="14" fill="#7BC86C" ${sw(1.4)}/>`;
  s+=`<circle cx="40" cy="26" r="2.6" fill="#E2412F"/><circle cx="62" cy="34" r="2.6" fill="#E2412F"/><circle cx="26" cy="46" r="2.6" fill="#E2412F"/><circle cx="74" cy="48" r="2.6" fill="#E2412F"/>`;
  s+=`<path d="M48 76a3 4 0 1 0 4 0" fill="#5E3C22"/>`;
  return s;
}
function gnezdo(){
  let s=`<ellipse cx="34" cy="48" rx="9" ry="11" fill="#BFE3F5" ${sw(1.3)}/><ellipse cx="50" cy="44" rx="9" ry="12" fill="#BFE3F5" ${sw(1.3)}/><ellipse cx="66" cy="48" rx="9" ry="11" fill="#BFE3F5" ${sw(1.3)}/>`;
  s+=`<circle cx="31" cy="44" r="1.2" fill="#7BAED9"/><circle cx="53" cy="40" r="1.2" fill="#7BAED9"/><circle cx="68" cy="45" r="1.2" fill="#7BAED9"/>`;
  s+=`<path d="M12 54C12 80 30 88 50 88C70 88 88 80 88 54Z" fill="#B8864E" ${sw(1.6)}/>`;
  s+=`<path d="M10 54C30 60 70 60 90 54" fill="none" ${sw(1.6)}/>`;
  s+=`<path d="M16 62L30 70M24 58L44 74M40 60L58 80M56 58L74 76M70 58L84 70M20 76L40 64M36 84L62 62M58 86L80 64" stroke="#8E6234" stroke-width="1.4" stroke-linecap="round"/>`;
  s+=`<path d="M6 52L20 56M80 56L96 50M86 64L98 66" stroke="#8E6234" stroke-width="1.6" stroke-linecap="round"/>`;
  return s;
}
function potok(){
  let s=`<path d="M6 92C14 72 40 74 44 56C48 38 30 30 40 8H60C52 30 70 38 64 58C58 78 32 76 30 92Z" fill="#7BBEDC" ${sw(1.5)}/>`;
  s+=`<path d="M46 20q3 -3 6 0M50 46q3 -3 6 0M40 70q3 -3 6 0M20 86q3 -3 6 0" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>`;
  s+=`<ellipse cx="20" cy="56" rx="9" ry="6" fill="#B8B0A4" ${sw(1.2)}/><ellipse cx="80" cy="40" rx="8" ry="5.5" fill="#B8B0A4" ${sw(1.2)}/><ellipse cx="78" cy="80" rx="10" ry="6" fill="#A8A096" ${sw(1.2)}/>`;
  s+=`<path d="M12 36C10 26 14 22 16 36M16 36C18 24 22 24 20 36" fill="#6CBF5A" ${sw(1)}/><path d="M86 66C84 56 88 52 90 66" fill="#6CBF5A" ${sw(1)}/>`;
  return s;
}
function grm(){
  let s=`<circle cx="28" cy="62" r="20" fill="#4E9A44" ${sw(1.4)}/><circle cx="72" cy="62" r="20" fill="#4E9A44" ${sw(1.4)}/><circle cx="50" cy="44" r="24" fill="#6CBF5A" ${sw(1.4)}/><circle cx="50" cy="70" r="20" fill="#5AAE4C" ${sw(1.4)}/>`;
  [[36,40],[58,34],[64,52],[42,58],[28,66],[72,68],[52,76]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="3.2" fill="#3E5EB8" ${sw(.9)}/><circle cx="${x-1}" cy="${y-1}" r=".9" fill="#fff" opacity=".8"/>`;});
  s+=`<path d="M8 90H92" stroke="#3E8A35" stroke-width="3" stroke-linecap="round"/>`;
  return s;
}

/* ---------- barve in podatki ---------- */
const COLORS={
  "mojca-pokrajculja":["Lonček in travnik","#FBF1E2","#F1DEC6","#8A4E2A"],
  "janko-in-metka":["Medenjakova hišica","#FDF0E4","#F7DCE6","#6B3F2A"],
  "rdeca-kapica":["Gozdna pot","#EEF5E8","#F9E1DE","#8C2F2A"],
  "bremenski-mestni-godci":["Mestni trg","#F3EEE6","#E3EAF3","#4A5568"],
  "volk-in-sedem-kozlickov":["Pomladni travnik","#F2F8E6","#FFF6D6","#5A6B3A"]
};
STORIES.forEach(s=>{s.colors=COLORS[s.slug];});
STORIES.push(
 {slug:"repa-velikanka",title:"Repa velikanka",colors:["Domači vrt","#F4EBD9","#E3EDC8","#6B4E2E"],
  intro:"Dedek ne more izpuliti ogromne repe, zato mu na pomoč prihajajo babica, vnukinja, psička, mačka in na koncu še miška. Šele vsi skupaj repo izpulijo.",
  pics:[["dedek","Dedek",dedek],["babica","Babica",babica2],["vnukinja","Vnukinja",vnukinja],["psicka","Psička",psicka],["macka","Mačka",macka2],["miska","Miška",mouse],["repa","Repa",repa]],
  defaults:[["repa",2,7],["dedek",2,1],["babica",0,2],["vnukinja",4,2],["psicka",0,5],["macka",4,5],["miska",2,4]]},
 {slug:"sneguljcica",title:"Sneguljčica",colors:["Sneg in jabolko","#F5F7FB","#E4EAF4","#8E2B3A"],
  intro:"Sneguljčica pred hudobno kraljico zbeži v gozd in najde dom pri palčkih. Kraljica jo najde z zastrupljenim jabolkom, a Sneguljčica se na koncu zbudi.",
  pics:[["sneguljcica","Sneguljčica",sneguljcica],["palcek","Palček",palcek],["kraljica","Kraljica",kraljica],["ogledalo","Čarobno ogledalo",ogledalo],["jabolko","Jabolko",jabolko],["hisica","Hišica palčkov",hisicaPalckov],["lovec","Lovec",hunter]],
  defaults:[["sneguljcica",0,1],["lovec",2,2],["jabolko",4,3],["kraljica",1,5],["ogledalo",0,7],["palcek",3,6],["hisica",4,7]],
  counts:{palcek:7}},
 {slug:"pepelka",title:"Pepelka",colors:["Polnočni ples","#EEF1FB","#E4E1F5","#3D4A8C"],
  intro:"Dobra vila Pepelki pričara obleko in kočijo iz buče, a mora domov do polnoči. Na begu izgubi čeveljček, po katerem jo princ najde.",
  pics:[["pepelka","Pepelka",pepelka],["princ","Princ",princ],["vila","Dobra vila",vila],["buca","Buča kočija",buca],["cevelj","Stekleni čeveljček",cevelj],["grad","Grad",grad],["polnoc","Ura polnoči",polnoc]],
  defaults:[["pepelka",0,1],["vila",2,2],["buca",4,3],["polnoc",0,5],["cevelj",2,6],["grad",3,7],["princ",4,6]]},
 {slug:"zlata-ribica",title:"Zlata ribica",colors:["Morje in zlato","#E3F3F7","#FFF0C7","#1E5A70"],
  intro:"Ribič ujame zlato ribico in jo izpusti. Žena si želi vedno več, dokler ribica ne vzame vsega nazaj. Zgodba svari pred pohlepom.",
  pics:[["ribic","Ribič",ribic],["zena","Žena",zena],["ribica","Zlata ribica",ribica],["mreza","Mreža",mreza],["korito","Korito",korito],["hisica","Hišica",koca],["morje","Morje",morje]],
  defaults:[["hisica",0,1],["zena",1,1],["korito",2,2],["ribic",1,4],["mreza",3,5],["morje",3,7],["ribica",4,7]]},
 {slug:"lisica-in-vrana",title:"Lisica in vrana",colors:["Jesenska jasa","#FCEEDF","#F3DCC2","#4A3B33"],
  intro:"Lisica s hvalo prelisiči vrano, da odpre kljun, in sir ji pade na tla. Basen uči, da se ne smemo dati preslepiti prilizovanju.",
  pics:[["lisica","Lisica",fox],["vrana","Vrana",vrana],["sir","Sir",sir],["drevo","Drevo",drevo],["gnezdo","Gnezdo",gnezdo],["potok","Potok",potok],["grm","Grm",grm]],
  defaults:[["lisica",0,1],["grm",2,2],["potok",4,3],["gnezdo",0,6],["drevo",3,6],["vrana",3,7],["sir",4,5]]}
);
if(typeof module!=="undefined")module.exports={STORIES};
