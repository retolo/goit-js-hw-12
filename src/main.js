import getImagesByQuery from "./js/pixabay-api";
import createGallery from "./js/render-functions";
import { clearGallery, showLoader, hideLoader , showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const inputForm = document.querySelector('input');
const formDoc = document.querySelector('form');
const loadButton = document.querySelector('.load-button');



let page = 1;
let UserPrompt = '';


 async function formHandler(event){
    
    event.preventDefault();
    
    page = 1;
    
    
    

    const form = event.currentTarget;


    if(inputForm.value.trim() === ''){
        iziToast.show({
            
            message: 'Please fill all fields',
            color: 'red',
            messageColor: 'white',
            position: 'topRight'

        });
        

    }else{
        
        hideLoadMoreButton();
        showLoader();
        
        try {
            
            
            const value =  await getImagesByQuery(inputForm.value.trim(), page)
            const totalPages = Math.ceil(value.TotalHits / 15);

            if (value.TotalHits === 0){
                throw new Error('Sorry, there are no images matching your search query. Please try again!');
            }
            
            UserPrompt = inputForm.value;            
    
            clearGallery();
            createGallery(value.Images);
            const li = document.querySelectorAll('li');
            
            if(value.TotalHits > 0){
                showLoadMoreButton();
                

            }
            else{
                hideLoadMoreButton()
            }
            if(page >= totalPages){
                hideLoadMoreButton();
            }
            if( li.length < 15){
                hideLoadMoreButton();

            }
            
            

            
        } catch (error) {
            clearGallery();
            iziToast.show({
                
                        message: error.message,
                        color: 'red',
                        messageColor: 'white',
                        position: 'topRight'
        
                    });
            
            
                
                

            
                    
                    
                
        }
        
        
        hideLoader();
        
    }
    

    form.reset();
    
}



formDoc.addEventListener('submit', formHandler);


loadButton.addEventListener('click', handleLoadButton);


async function handleLoadButton(event) {
    page += 1;
    
    
    const images = await getImagesByQuery(UserPrompt, page);
    showLoader()
    createGallery(images.Images);
    
    hideLoader();
    
    const TotalPages = Math.ceil(images.TotalHits / 15);
    
    if(page >= TotalPages){
        iziToast.show({
                        
            message: "We're sorry, but you've reached the end of search results.",

            color: 'red',
            messageColor: 'white',
            position: 'topRight'

        });
        
        hideLoadMoreButton();

    }
    
    const img = document.querySelector('li');
    let rect = img.getBoundingClientRect();
    window.scrollBy({
        top: 2 * rect.height,
        left: 0,
        behavior: "smooth",
      });
      
    console.log(2 * rect.height);
    
    
    
    
}
