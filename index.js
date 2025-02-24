import{a as S,i,S as P}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const q=document.querySelector(".gallery");async function m(t,r){try{const e="https://pixabay.com",l="/api/",o=new URLSearchParams({key:"48801957-4c351c0f3a606f3cba9240365",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}),a=`${e}${l}?${o}`,n=await S.get(a);return console.log(n.data.hits.length),n.data.hits.length!==0?n.data:(q.innerHTML="",hideBtn(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Promise.reject("No images found"))}catch(e){throw console.error("Fetch error:",e),i.error({title:"Error",message:"Something went wrong. Please try again later."}),e}}const f=document.querySelector(".gallery"),p=new P(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const{webformatURL:r,largeImageURL:e,tags:l,likes:o,views:a,comments:n,downloads:w}=t;return`
    <div class="image-card">
    <a href="${e}" class="gallery-link">
  <div class="image-container">
    <img
      src="${r}"
      alt="${l}"
    />
  </div>
  </a>
<div class="image-body">
  <div class="image-column">
    <p class="image-info">Likes</p>
    <p class="image-value">${o}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Views</p>
    <p class="image-value">${a}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Comments</p>
    <p class="image-value">${n}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Downloads</p>
    <p class="image-value">${w}</p>
  </div>
</div>
</div>`}function $(t){console.log(t);const r=t.map(e=>y(e)).join("");f.innerHTML=r,p.refresh()}function I(t){console.log(t);const r=t.map(e=>y(e)).join("");f.insertAdjacentHTML("beforeend",r),p.refresh()}const T=document.querySelector(".formImage");document.querySelector(".btn_search");const M=document.querySelector(".inputImage"),g=document.querySelector(".gallery"),h=document.querySelector(".loader"),c=document.querySelector(".btn-load-more");function v(){h.style.display="block"}function u(){h.style.display="none"}function E(){c.style.display="block"}function d(){c.style.display="none"}function L(){console.log(s.total),console.log(s.perPage);const t=Math.ceil(s.total/s.perPage);console.log(t),s.page>=t?(d(),i.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),console.log("We're sorry, but you've reached the end of search results.")):E()}const s={userValue:"",page:1,total:0,perPage:40};u();d();T.addEventListener("submit",t=>{if(t.preventDefault(),s.userValue=M.value.trim(),console.log(s.userValue),s.page=1,s.userValue===""){g.innerHTML="",d(),i.error({title:"Error",message:"Please, full the field!"});return}else{console.log("make HTTP request"),v(),g.innerHTML="";async function r(){try{const e=await m(s.userValue,s.page);s.total=e.total,$(e.hits),L(),b()}catch(e){console.log(e)}finally{u()}}r(),t.target.reset()}});c.addEventListener("click",t=>{s.page+=1,v();async function r(){try{const e=await m(s.userValue,s.page);I(e.hits),L(),b()}catch(e){console.log(e)}finally{u()}}r()});function b(){const t=document.querySelector(".gallery .image-card");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
