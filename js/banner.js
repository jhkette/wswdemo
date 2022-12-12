var bannerStatus = 1;
var bannerTimer = 11000;

var startBannerTimer = setInterval(function () {
    bannerLoop();
}, bannerTimer)

function bannerLoop() {
    // select all and use array.from - converts html collection to an array. 
    // means we can access index
    const images = Array.from(document.querySelectorAll('.banner'));
    
   
    
    if (bannerStatus === 1) {
        images[1].style.opacity = 0;
        setTimeout(function () {
            images[0].style.right = "0px";
            images[0].style.zIndex = "1000";
            images[1].style.right = "-100%";
            images[1].style.zIndex = "1500";
            images[2].style.right = "100%";
            images[2].style.zIndex = "500";
        }, 500)
        setTimeout(function () {
            images[1].style.opacity = "1";
            
        }, 1000)
        bannerStatus = 2;
    } else if (bannerStatus === 2) {
        images[2].style.opacity = 0;
        setTimeout(function () {
            images[1].style.right = "0px";
            images[1].style.zIndex = "1000";
            images[2].style.right = "-100%";
            images[2].style.zIndex = "1500";
            images[0].style.right = "100%";
            images[0].style.zIndex = "500";

        }, 500)
        setTimeout(function () {
            images[2].style.opacity = "1";
        }, 1000)
        bannerStatus = 3;
    } else if (bannerStatus === 3) {
        images[0].style.opacity = 0;
        setTimeout(function () {
            images[2].style.right = "0px";
            images[2].style.zIndex = "1000";
            images[0].style.right = "-100%";
            images[0].style.zIndex = "1500";
            images[1].style.right = "100%";
            images[1].style.zIndex = "500";

        }, 500)
        setTimeout(function () {
            images[0].style.opacity = "1";
        }, 1000)
        bannerStatus = 1;
    }
}

function displayText() {

    const texts = document.querySelectorAll('.heading-text');
    texts.forEach(function (text) {
        text.style.display = "block";
        text.style.zIndex = "4000";
    })
    console.log(texts)
}