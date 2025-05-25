import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import axios from 'axios';
import createGallery from "./render-functions";
import { hideLoader, showLoader, hideLoadMoreButton } from "./render-functions";
const loadButton = document.querySelector('.load-button');






let Page = 1;
let limit = 15;
let totalhits = 0;
let totalPages = 0;
let userPrompt = '';


async function getImagesByQuery(query){
    let totalhits = 0;
    
            

    
            const getHttp = axios({
                method:'get',
                url: 'https://pixabay.com/api/',
                params:{
                    key: '50347067-e28b29b4ef237673f62dbb07b',
                    q: query,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    per_page: limit,
                    page: Page,
                    } 

            })
            const value = await getHttp;
                const images = value.data.hits;
                
                
                totalhits = value.data.totalHits;
                totalPages = Math.ceil(totalhits / limit);
                userPrompt = query;
                if(images.length === 0){
                    iziToast.show({
                
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        color: 'red',
                        messageColor: 'white',
                        position: 'topRight'
        
                    });
                    

                }

                
                
                
                

                
                
                
                
                return images; 
        }
        

        loadButton.addEventListener('click',   async (event) =>{
            
            Page += 1;
            
            if(Page > totalPages){
                iziToast.show({
                
                    message: "We're sorry, but you've reached the end of search results.",

                    color: 'red',
                    messageColor: 'white',
                    position: 'topRight'
    
                });
                hideLoadMoreButton();

            }
            else{
                const images = await getImagesByQuery(userPrompt);
                
                showLoader()
                createGallery(images);
                hideLoader();

            }

            
            
            
            
            
            
                
            
        })


        

        


        


        


   

export default getImagesByQuery;



