window.onload = init;

function init() {
    loadEvents()
    const header = document.getElementById("header-container");
    window.addEventListener('scroll', debounce(hideNav));
    console.log(header)
  
  
    // icon.addEventListener('click', openNav);
    // var url = window.location.pathname;
    // if (url == "/index.html" || "/") {
    //     setTimeout(function () {
    //         document.getElementById('lead1').classList.remove('none');
    //         document.getElementById('lead2').classList.remove('none');
    //         displayText();
    //        }, 500)
        
    //     bannerLoop();
    // }
}


// https://www.educative.io/answers/how-to-use-the-debounce-function-in-javascript

// debounce to stop scroll event firing too often
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



function hideNav() {

    var currentScrollPos = window.pageYOffset;
    // const commonlinks = document.getElementById("commonlinkscontainer");
    // const logo = document.getElementById("logoimage");
    // const logonav = document.getElementById("logonav");
    const mainheader = document.getElementById("header-container");
    const logo = document.getElementById("logo");

    if (currentScrollPos > 200) {
        mainheader.classList.add('small');
        logo.classList.add('small');
        // logo.classList.add("small");
        // logonav.classList.add("nopadding");
        // commonlinks.style.top = '-100px';
        mainheader.style.opacity = '.95';
    } else {
        // logo.classList.remove("small");
        mainheader.classList.remove('small');
        logo.classList.remove('small');
        // logonav.classList.remove("nopadding");
        // commonlinks.style.top = '0px';
        mainheader.style.opacity = '1';
    }
}


async function loadEvents(max=8){
    try {
      const endpoint = await fetch(`./.netlify/functions/callFetch?maxResults=${max}`);
      const data = await endpoint.json();
     console.log(data)
    } catch (e) {
      console.log(e);
    }
  }

