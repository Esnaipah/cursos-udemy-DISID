const MiModulo=(()=>{"use strict";let e=["C","D","H","S"],t=["A","J","Q","K"],r=[],l=[],n=document.querySelectorAll("small"),a=document.querySelectorAll(".btn"),o=document.querySelector("#btnPedir"),c=document.querySelector("#btnNuevo"),s=document.querySelector("#btnDetener"),i=document.querySelectorAll(".divCartas"),d=(e=1)=>{u(),l=[];for(let t=0;t<e+1;t++)l.push(0);a.forEach(e=>e.disabled=!1),n.forEach(e=>e.innerText=0),i.forEach(e=>e.innerText="")},u=()=>{r=[];for(let l=2;l<=10;l++)for(let n of e)r.push(l+n);for(let a of t)for(let o of e)r.push(a+o);return r=_.shuffle(r)},h=()=>{if(0!==r.length)return r.pop();throw"No hay cartas en el deck"},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},f=(e,t)=>(l[e]+=$(t),n[e].innerText=l[e]),g=(e,t)=>{let r=document.createElement("img");r.src=`assets/img/cartas/${t}.png`,r.classList.add("carta"),i[e].append(r)},p=e=>{let t=l[l.length-1];do{let r=h();t=f(l.length-1,r),n[1].innerText=t,g(i.length-1,r)}while(l[l.length-1]<e&&e<22)},b=()=>{p(l[0]),o.disabled=!0,s.disabled=!0,setTimeout(()=>{l[0]>21?alert("Gana la computadora"):l[l.length-1]===l[0]?alert("Empate!"):l[l.length-1]<=21?alert("Gana la computadora"):alert("Ganaste!")},100)};return o.addEventListener("click",()=>{let e=h(),t=f(0,e);g(0,e),t>=21&&b()}),s.addEventListener("click",()=>{b()}),c.addEventListener("click",()=>{console.clear(),d()}),{nuevoJuego:d}})();