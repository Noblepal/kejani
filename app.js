window.addEventListener('load', () =>{ 
    //Install Service Worker
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('/serviceworker.js');
            console.log('Service Worker registered');   
        } catch(error){
            console.log('Service Worker registration failed ' + error);
        }
    }
});