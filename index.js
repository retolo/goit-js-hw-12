import{S as v,i as n,a as P}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-button"),S=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(o){let s="";for(let t=0;t<o.length;t++)s+=`
            <li>
                <div class="photo">
                    <a href="${o[t].largeImageURL}">
                        <img
                        src="${o[t].webformatURL}"
                        alt="${o[t].tags}"
                        
                        >
                    </a>
                    
                </div>
                <div class="info">
                    <p class="text">Likes <span class="info-span">${o[t].likes}</span></p>
                    <p class="text">Views <span class="info-span">${o[t].views}</span></p>
                    <p class="text">Comments <span class="info-span">${o[t].comments}</span></p>
                    <p class="text">Downloads <span class="info-span">${o[t].downloads}</span></p> 
                
                
                
                </div>
                    
                
                
                    
                    
            
            
            </li>
            
        
        `;p.insertAdjacentHTML("beforeend",s),S.refresh()}function q(){p.innerHTML=""}function g(){f.classList.add("show")}function y(){f.classList.remove("show")}function x(){m.classList.add("show")}function l(){m.classList.remove("show")}const $=document.querySelector(".load-button");let c=1,u=15,w=0,L="";async function b(o){let s=0;const a=await P({method:"get",url:"https://pixabay.com/api/",params:{key:"50347067-e28b29b4ef237673f62dbb07b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:c}}),e=a.data.hits;return s=a.data.totalHits,w=Math.ceil(s/u),L=o,e.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"}),e}$.addEventListener("click",async o=>{if(c+=1,c>w)n.show({message:"We're sorry, but you've reached the end of search results.",color:"red",messageColor:"white",position:"topRight"}),l();else{const s=await b(L);g(),h(s),y()}});const d=document.querySelector("input"),B=document.querySelector("form");async function H(o){o.preventDefault();const s=o.currentTarget;if(d.value.trim()==="")n.show({message:"Please fill all fields",color:"red",messageColor:"white",position:"topRight"});else{l(),g();try{const t=await b(d.value.trim());q(),h(t),t.length>0?x():l()}catch(t){t&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"})}y()}s.reset()}B.addEventListener("submit",H);
//# sourceMappingURL=index.js.map
