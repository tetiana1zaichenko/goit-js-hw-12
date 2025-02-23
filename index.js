import{a as w,i as c,S}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const P=document.querySelector(".gallery");async function g(t,r){try{const e="https://pixabay.com",l="/api/",o=new URLSearchParams({key:"48801957-4c351c0f3a606f3cba9240365",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}),a=`${e}${l}?${o}`,n=await w.get(a);return console.log(n.data.hits.length),n.data.hits.length!==0?n.data:(P.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Promise.reject("No images found"))}catch(e){throw console.error("Fetch error:",e),c.error({title:"Error",message:"Something went wrong. Please try again later."}),e}}const d=document.querySelector(".gallery"),m=new S(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){const{webformatURL:r,largeImageURL:e,tags:l,likes:o,views:a,comments:n,downloads:b}=t;return`
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
    <p class="image-value">${b}</p>
  </div>
</div>
</div>`}function q(t){console.log(t);const r=t.map(e=>f(e)).join("");d.innerHTML=r,m.refresh()}function $(t){console.log(t);const r=t.map(e=>f(e)).join("");d.insertAdjacentHTML("beforeend",r),m.refresh()}const I=document.querySelector(".formImage");document.querySelector(".btn_search");const T=document.querySelector(".inputImage"),E=document.querySelector(".gallery"),p=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");function y(){p.style.display="block"}function u(){p.style.display="none"}function M(){i.style.display="block"}function h(){i.style.display="none"}function v(){console.log(s.total),console.log(s.perPage);const t=Math.ceil(s.total/s.perPage);console.log(t),s.page>=t?(h(),c.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),console.log("We're sorry, but you've reached the end of search results.")):M()}const s={userValue:"",page:1,total:0,perPage:40};u();h();I.addEventListener("submit",t=>{if(t.preventDefault(),s.userValue=T.value.trim(),console.log(s.userValue),s.page=1,s.userValue===""){E.innerHTML="",c.error({title:"Error",message:"Please, full the field!"});return}else{console.log("make HTTP request"),y();async function r(){try{const e=await g(s.userValue,s.page);s.total=e.total,q(e.hits),v(),L()}catch(e){console.log(e)}finally{u()}}r(),t.target.reset()}});i.addEventListener("click",t=>{s.page+=1,y();async function r(){try{const e=await g(s.userValue,s.page);$(e.hits),v(),L()}catch(e){console.log(e)}finally{u()}}r()});function L(){const t=document.querySelector(".gallery .image-card");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
