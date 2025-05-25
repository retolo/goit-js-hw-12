import getImagesByQuery from "./js/pixabay-api";
import createGallery from "./js/render-functions";
import { clearGallery, showLoader, hideLoader , showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const inputForm = document.querySelector('input');
const formDoc = document.querySelector('form');





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
        // if(page > totalPages){
        //     iziToast.show({
            
        //         message: "We're sorry, but you've reached the end of search results.",
        //         color: 'red',
        //         messageColor: 'white',
        //         position: 'topRight'
    
        //     });
        // }
        hideLoadMoreButton();
        showLoader();
        try {
            
            const value =  await getImagesByQuery(inputForm.value.trim())
            
        
            
            clearGallery();
            createGallery(value);
            if(value.length > 0){
                showLoadMoreButton();

            }else{
                hideLoadMoreButton();
            }
            
        } catch (error) {
            if(error){
                    iziToast.show({
                        
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        color: 'red',
                        messageColor: 'white',
                        position: 'topRight'
            
                    });
                }
        }
        
        hideLoader();
        
    }

    form.reset();
    
}



formDoc.addEventListener('submit', formHandler);


