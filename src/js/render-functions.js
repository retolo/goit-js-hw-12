import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const ul = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load-button');






const lightBox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});



function createGallery(images){
    
    let markUp = '';
    for(let i = 0; i < images.length; i++){
        markUp += `
            <li>
                <div class="photo">
                    <a href="${images[i].largeImageURL}">
                        <img
                        src="${images[i].webformatURL}"
                        alt="${images[i].tags}"
                        
                        >
                    </a>
                    
                </div>
                <div class="info">
                    <p class="text">Likes <span class="info-span">${images[i].likes}</span></p>
                    <p class="text">Views <span class="info-span">${images[i].views}</span></p>
                    <p class="text">Comments <span class="info-span">${images[i].comments}</span></p>
                    <p class="text">Downloads <span class="info-span">${images[i].downloads}</span></p> 
                
                
                
                </div>
                    
                
                
                    
                    
            
            
            </li>
            
        
        `;

    }
    ul.insertAdjacentHTML('beforeend', markUp);
    
    lightBox.refresh();
}



export function clearGallery(){
    ul.innerHTML = '';
}
export function showLoader(){
    loader.classList.add('show');
}

export function hideLoader(){
    loader.classList.remove('show');
}

export function showLoadMoreButton(){
    
    loadButton.classList.add('show');
}
export function hideLoadMoreButton(){
    
    loadButton.classList.remove('show');
}



export default createGallery;
