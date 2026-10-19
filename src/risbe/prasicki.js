/* Trije prašički – risbe so v lastnem obsegu, da se imena pomočnikov ne prekrivajo z osnova.js. */
STORIES.unshift((function(){
/* ---------- sličice (viewBox 0 0 100 100) ---------- */
function eyes(x1,x2,y,r){r=r||3.2;return `<circle cx="${x1}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${x2}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${x1+1}" cy="${y-1.1}" r="${r*.35}" fill="#fff"/><circle cx="${x2+1}" cy="${y-1.1}" r="${r*.35}" fill="#fff"/>`;}
function pig(scarf,n){
  const P="#F6A6B8",PD="#D9708A",PL="#FCD3DD";
  let s=`<g stroke-linejoin="round" stroke-linecap="round">`;
  s+=`<path d="M72 70C84 70 84 60 78 60C73 60 75 67 80 66" fill="none" stroke="${PD}" stroke-width="1.6"/>`;
  s+=`<ellipse cx="51" cy="69" rx="25" ry="19" fill="${P}" stroke="${PD}" stroke-width="1.6"/>`;
  [32,44,56,66].forEach(x=>{s+=`<rect x="${x-3.5}" y="83" width="7" height="9" rx="2.5" fill="${PD}"/>`;});
  s+=`<path d="M35 52L65 52L50 64Z" fill="${scarf}"/>`;
  [1,-1].forEach(k=>{s+=`<path d="M${50+k*12} 20L${50+k*23} 7L${50+k*22} 26Z" fill="${P}" stroke="${PD}" stroke-width="1.6"/>`;});
  s+=`<circle cx="50" cy="36" r="20" fill="${P}" stroke="${PD}" stroke-width="1.6"/>`;
  s+=`<circle cx="37" cy="42" r="3.5" fill="#F48FA8"/><circle cx="63" cy="42" r="3.5" fill="#F48FA8"/>`;
  s+=eyes(42,58,30);
  s+=`<ellipse cx="50" cy="42.5" rx="9" ry="5.5" fill="${PL}" stroke="${PD}" stroke-width="1.6"/>`;
  s+=`<ellipse cx="46.5" cy="42.5" rx="1.5" ry="2" fill="${PD}"/><ellipse cx="53.5" cy="42.5" rx="1.5" ry="2" fill="${PD}"/>`;
  s+=`<circle cx="14" cy="14" r="9" fill="${scarf}"/><text x="14" y="18.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="12" fill="#fff">${n}</text>`;
  return s+`</g>`;
}
function roofLines(col){let s="";for(let k=1;k<5;k++){const y=44-6.2*k,dx=38*(1-6.2*k/32);s+=`<line x1="${50-dx}" y1="${y}" x2="${50+dx}" y2="${y}" stroke="${col}" stroke-width=".8"/>`;}return s;}
function doorWin(door,win){
  let s=`<rect x="42" y="64" width="16" height="26" rx="3" fill="${door}" stroke="${INK}" stroke-width="1.3"/><circle cx="54" cy="77" r="1.3" fill="#F7D774"/>`;
  if(win)[25,63].forEach(x=>{s+=`<rect x="${x}" y="56" width="12" height="12" fill="#BFE3F5" stroke="${INK}" stroke-width="1.3"/><path d="M${x+6} 56V68M${x} 62H${x+12}" stroke="${INK}" stroke-width="1.3"/>`;});
  return s;
}
const roof=c=>`<path d="M12 44L50 12L88 44Z" fill="${c}" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`;
function straw(){
  let s=`<rect x="20" y="44" width="60" height="46" fill="#F3D46B" stroke="${INK}" stroke-width="1.3"/>`;
  for(let x=23;x<80;x+=4)s+=`<line x1="${x}" y1="89" x2="${x+1.5}" y2="45" stroke="#C99A22" stroke-width=".8"/>`;
  s+=roof("#E9BE45");
  for(let i=0;i<=10;i++)s+=`<line x1="50" y1="13" x2="${14+i*7.2}" y2="43" stroke="#B98A16" stroke-width=".9"/>`;
  s+=doorWin("#C98B2E",false)+`<circle cx="30" cy="58" r="5" fill="#BFE3F5" stroke="${INK}" stroke-width="1.3"/>`;
  return s;
}
function wood(){
  let s=`<rect x="20" y="44" width="60" height="46" fill="#B97A45" stroke="${INK}" stroke-width="1.3"/>`;
  for(let y=50;y<90;y+=6)s+=`<line x1="20" y1="${y}" x2="80" y2="${y}" stroke="#8B5528" stroke-width=".9"/>`;
  s+=roof("#6B3F1F")+roofLines("#4E2C14")+doorWin("#5A3418",true);
  return s;
}
function brick(){
  let s=`<rect x="64" y="12" width="9" height="22" fill="#B5452E" stroke="${INK}" stroke-width="1.3"/><circle cx="70" cy="7" r="3" fill="#D9D9D9" stroke="#BDBDBD"/><circle cx="75" cy="3" r="2.3" fill="#D9D9D9" stroke="#BDBDBD"/>`;
  s+=`<rect x="20" y="44" width="60" height="46" fill="#D25B3E" stroke="${INK}" stroke-width="1.3"/>`;
  let row=0;for(let y=90;y>44;y-=5){s+=`<line x1="20" y1="${y}" x2="80" y2="${y}" stroke="#F2C9B8" stroke-width=".7"/>`;const off=row%2?5:0;for(let x=20+off;x<80;x+=10)s+=`<line x1="${x}" y1="${y}" x2="${x}" y2="${Math.max(y-5,44)}" stroke="#F2C9B8" stroke-width=".7"/>`;row++;}
  s+=`<rect x="20" y="44" width="60" height="46" fill="none" stroke="${INK}" stroke-width="1.3"/>`;
  s+=roof("#6F7A86")+roofLines("#55606B")+doorWin("#3F6E9C",true);
  return s;
}
function wolf(){
  const G="#8E96A3",GD="#5F6773",GL="#E9ECF0";
  let s=`<g stroke-linejoin="round" stroke-linecap="round">`;
  s+=`<path d="M70 80C92 80 95 60 88 50C86 64 80 70 70 70Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/>`;
  s+=`<ellipse cx="51" cy="75" rx="21" ry="17" fill="${G}" stroke="${GD}" stroke-width="1.5"/><ellipse cx="51" cy="77" rx="10" ry="13" fill="${GL}"/>`;
  [1,-1].forEach(k=>{s+=`<path d="M${50+k*8} 24L${50+k*22} 3L${50+k*23} 32Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/><path d="M${50+k*13} 24L${50+k*21} 9L${50+k*21} 28Z" fill="#E7A9B4"/>`;});
  s+=`<path d="M28 32C28 14 72 14 72 32C72 44 62 54 50 58C38 54 28 44 28 32Z" fill="${G}" stroke="${GD}" stroke-width="1.5"/>`;
  s+=`<path d="M40 42C40 36 60 36 60 42C60 50 54 56 50 57C46 56 40 50 40 42Z" fill="${GL}"/>`;
  s+=`<path d="M36 23L45 26M64 23L55 26" stroke="${INK}" stroke-width="2"/>`+eyes(41,59,31,3);
  s+=`<ellipse cx="50" cy="43.5" rx="4" ry="2.5" fill="${INK}"/><path d="M50 46V50" stroke="${INK}" stroke-width="1.3"/><path d="M45 51C46 56 54 56 55 51Z" fill="#E86A7E"/>`;
  s+=`<path d="M10 40H22M10 46H20M10 52H18" stroke="#9CC7E8" stroke-width="1.6"/>`;
  return s+`</g>`;
}
return {slug:"trije-prasicki",title:"Trije prašički",colors:["Kmetija","#F1F6E4","#F9E3E6","#6B4A3A"],
  intro:"Trije prašički si zgradijo hišice iz slame, lesa in opeke, volk pa jih poskuša odpihniti.",
  pics:[["volk","Volk",wolf],["p1","1. prašiček",()=>pig("#E9B730",1)],["h1","Slamnata hišica",straw],["p2","2. prašiček",()=>pig("#9A6234",2)],["h2","Lesena hišica",wood],["p3","3. prašiček",()=>pig("#C9472C",3)],["h3","Zidana hišica",brick]],
  defaults:[["volk",0,1],["p1",2,2],["h1",0,4],["p2",4,3],["h2",2,5],["p3",4,6],["h3",1,7]]};
})());
