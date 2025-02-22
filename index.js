import{a as b,i as c,S as w}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const S=document.querySelector(".gallery");async function g(r,o){try{const e="https://pixabay.com",l="/api/",t=new URLSearchParams({key:"48801957-4c351c0f3a606f3cba9240365",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:o}),a=`${e}${l}?${t}`,n=await b.get(a);return console.log(n.data.hits.length),n.data.hits.length!==0?n.data:(S.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Promise.reject("No images found"))}catch(e){throw console.error("Fetch error:",e),c.error({title:"Error",message:"Something went wrong. Please try again later."}),e}}const d=document.querySelector(".gallery"),m=new w(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){const{webformatURL:o,largeImageURL:e,tags:l,likes:t,views:a,comments:n,downloads:L}=r;return`
    <div class="image-card">
    <a href="${e}" class="gallery-link">
  <div class="image-container">
    <img
      src="${o}"
      alt="${l}"
    />
  </div>
  </a>
<div class="image-body">
  <div class="image-column">
    <p class="image-info">Likes</p>
    <p class="image-value">${t}</p>
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
    <p class="image-value">${L}</p>
  </div>
</div>
</div>`}function P(r){console.log(r);const o=r.map(e=>p(e)).join("");d.innerHTML=o,m.refresh()}function q(r){console.log(r);const o=r.map(e=>p(e)).join("");d.insertAdjacentHTML("beforeend",o),m.refresh()}const $=document.querySelector(".formImage");document.querySelector(".btn_search");const I=document.querySelector(".inputImage"),T=document.querySelector(".gallery"),f=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");function y(){f.style.display="block"}function u(){f.style.display="none"}function E(){i.style.display="block"}function h(){i.style.display="none"}function v(){console.log(s.total),console.log(s.perPage);const r=Math.ceil(s.total/s.perPage);console.log(r),s.page>=r?(h(),c.info({title:"info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),console.log("We're sorry, but you've reached the end of search results.")):E()}const s={userValue:"",page:1,total:0,perPage:40};u();h();$.addEventListener("submit",r=>{if(r.preventDefault(),s.userValue=I.value.trim(),console.log(s.userValue),s.page=1,s.userValue===""){T.innerHTML="",c.error({title:"Error",message:"Please, full the field!"});return}else{console.log("make HTTP request"),y();async function o(){try{const e=await g(s.userValue,s.page);s.total=e.total,P(e.hits),v()}catch(e){console.log(e)}finally{u()}}o(),r.target.reset()}});i.addEventListener("click",r=>{s.page+=1,y();async function o(){try{const e=await g(s.userValue,s.page);q(e.hits),v()}catch(e){console.log(e)}finally{u()}}o(),r.target.reset()});
//# sourceMappingURL=index.js.map
