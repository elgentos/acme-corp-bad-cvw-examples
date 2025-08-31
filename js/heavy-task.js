function block(ms){const t=performance.now();while(performance.now()-t<ms){}};
addEventListener('DOMContentLoaded',()=>{document.getElementById('jankBtn').onclick=()=>block(800);});