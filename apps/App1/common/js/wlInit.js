// Uncomment the initialization options as required. For advanced initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center 
 
 var wlInitOptions = {
};

if (window.addEventListener) {
    window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
    window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}

function wlCommonInit(){
     var env = WL.Client.getEnvironment();
    if(env === WL.Environment.IPHONE || env === WL.Environment.IPAD){
        document.body.classList.add('platform-ios'); 
    } else if(env === WL.Environment.ANDROID){
        document.body.classList.add('platform-android'); 
    }
}