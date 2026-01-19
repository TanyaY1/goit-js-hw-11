import{a as l,S as f,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com/api/";const m="54261320-d62ab16d38fae836d0ed4fba4";function p(s){return l.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img
            src="${t.webformatURL}"
            alt="${t.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){d.classList.remove("is-hidden")}function L(){d.classList.add("is-hidden")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const o=w.value.trim();if(!o){a.warning({message:"Please enter a search term!"});return}g(),b(),p(o).then(t=>{if(t.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later!"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
