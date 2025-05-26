import{S as v,a as P,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-button"),S=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(t){let s="";for(let e=0;e<t.length;e++)s+=`
            <li>
                <div class="photo">
                    <a href="${t[e].largeImageURL}">
                        <img
                        src="${t[e].webformatURL}"
                        alt="${t[e].tags}"
                        
                        >
                    </a>
                    
                </div>
                <div class="info">
                    <p class="text">Likes <span class="info-span">${t[e].likes}</span></p>
                    <p class="text">Views <span class="info-span">${t[e].views}</span></p>
                    <p class="text">Comments <span class="info-span">${t[e].comments}</span></p>
                    <p class="text">Downloads <span class="info-span">${t[e].downloads}</span></p> 
                
                
                
                </div>
                    
                
                
                    
                    
            
            
            </li>
            
        
        `;p.insertAdjacentHTML("beforeend",s),S.refresh()}function q(){p.innerHTML=""}function g(){f.classList.add("show")}function y(){f.classList.remove("show")}function H(){m.classList.add("show")}function w(){m.classList.remove("show")}document.querySelector(".load-button");let d="",l=1;async function L(t){d!==t?(d=t,l=1):l+=1;const e=await P({method:"get",url:"https://pixabay.com/api/",params:{key:"50347067-e28b29b4ef237673f62dbb07b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}}),r=e.data.hits,o=e.data.totalHits;return r.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"}),{Images:r,TotalHits:o}}const c=document.querySelector("input"),x=document.querySelector("form"),T=document.querySelector(".load-button");let u=1,b="";async function $(t){t.preventDefault();const s=t.currentTarget;if(c.value.trim()==="")n.show({message:"Please fill all fields",color:"red",messageColor:"white",position:"topRight"});else{w(),g(),H();try{const e=await L(c.value.trim()),r=Math.ceil(e.TotalHits/15);b=c.value,q(),h(e.Images)}catch{n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"})}y()}s.reset()}x.addEventListener("submit",$);T.addEventListener("click",B);async function B(t){u+=1;const s=await L(b),e=Math.ceil(s.TotalHits/15);u>=e&&(n.show({message:"We're sorry, but you've reached the end of search results.",color:"red",messageColor:"white",position:"topRight"}),u=32,w()),g(),h(s.Images),y()}
//# sourceMappingURL=index.js.map
