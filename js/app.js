if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./service-worker.js',{scope:'./'})
    .then(function(){console.log('Service Worker Registered');})
    .catch(function(){console.log('Service Worker registration Failed');});
}

