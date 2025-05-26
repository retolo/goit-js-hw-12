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
        showLoadMoreButton();
        try {
            
            const value =  await getImagesByQuery(inputForm.value.trim())
            const totalPages = Math.ceil(value.TotalHits / 15);
            
            UserPrompt = inputForm.value;            
    
            clearGallery();
            createGallery(value.Images);
            
            
                

            
            
            
            
            
        } catch (error) {
            
                    iziToast.show({
                        
                        message: 'Sorry, there are no images matching your search query. Please try again!',
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
    
    
    const images = await getImagesByQuery(UserPrompt);
    const TotalPages = Math.ceil(images.TotalHits / 15);
    if(page >= TotalPages){
        iziToast.show({
                        
            message: "We're sorry, but you've reached the end of search results.",

            color: 'red',
            messageColor: 'white',
            position: 'topRight'

        });
        page = 32;
        hideLoadMoreButton();

    }
    showLoader()
    createGallery(images.Images);
    hideLoader();
    
    
}
