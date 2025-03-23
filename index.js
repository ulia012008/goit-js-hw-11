import{S as y,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="48145276-ba1887f72c90a3fcdb02285cd";async function p(n){const o=new URLSearchParams({key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`https://pixabay.com/api/?${o}`);if(!r.ok)throw new Error("Failed to fetch images");return r.json()}catch(r){throw console.error(r.message),r}}let l=null;function h(n){const o=document.querySelector(".gallery"),r=n.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:f,comments:m,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${t}"
            />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${f}</p>
            <p><b>Comments:</b> ${m}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>`).join("");o.innerHTML=r,l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){document.querySelector(".gallery").innerHTML=""}function c(n){const o=document.querySelector(".loader");o.style.display=n?"inline-block":"none"}const u=document.querySelector("#formImg"),w=document.querySelector("#searchImg");u.addEventListener("submit",async n=>{n.preventDefault();const o=w.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!"});return}u.reset(),b(),c(!0);try{const r=await p(o);if(c(!1),r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}catch{c(!1),i.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
