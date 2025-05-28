import{a as v,S as b,i as u}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function p(o,s){const a=await v({method:"get",url:"https://pixabay.com/api/",params:{key:"50347067-e28b29b4ef237673f62dbb07b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}}),e=a.data.hits,r=a.data.totalHits;return{Images:e,TotalHits:r}}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-button"),S=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(o){let s="";for(let t=0;t<o.length;t++)s+=`
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
            
        
        `;f.insertAdjacentHTML("beforeend",s),S.refresh()}function d(){f.innerHTML=""}function y(){m.classList.add("show")}function w(){m.classList.remove("show")}function q(){h.classList.add("show")}function i(){h.classList.remove("show")}const c=document.querySelector("input"),H=document.querySelector("form"),P=document.querySelector(".load-button");let n=1,L="";async function T(o){o.preventDefault(),n=1;const s=o.currentTarget;if(c.value.trim()==="")u.show({message:"Please fill all fields",color:"red",messageColor:"white",position:"topRight"});else{i(),y();try{const t=await p(c.value.trim(),n),a=Math.ceil(t.TotalHits/15);if(t.TotalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");L=c.value,d(),g(t.Images);const e=document.querySelectorAll("li");t.TotalHits>0?q():i(),n>=a&&i(),e.length<15&&i()}catch(t){d(),u.show({message:t.message,color:"red",messageColor:"white",position:"topRight"})}w()}s.reset()}H.addEventListener("submit",T);P.addEventListener("click",B);async function B(o){n+=1;const s=await p(L,n);y(),g(s.Images),w();const t=Math.ceil(s.TotalHits/15);n>=t&&(u.show({message:"We're sorry, but you've reached the end of search results.",color:"red",messageColor:"white",position:"topRight"}),i());let e=document.querySelector("li").getBoundingClientRect();window.scrollBy({top:2*e.height,left:0,behavior:"smooth"}),console.log(2*e.height)}
//# sourceMappingURL=index.js.map
