addEventListener("DOMContentLoaded", (event) => {
  init();
});

function init() {
  const header = document.getElementById("header-container");
  window.addEventListener("scroll", debounce(hideNav));
  loadEvents();

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
}

function hideNav() {
  var currentScrollPos = window.pageYOffset;
  // const commonlinks = document.getElementById("commonlinkscontainer");
  // const logo = document.getElementById("logoimage");
  // const logonav = document.getElementById("logonav");
  const mainheader = document.getElementById("header-container");
  const logo = document.getElementById("logo");

  if (currentScrollPos > 200) {
    mainheader.classList.add("small");
    logo.classList.add("small");
    // logo.classList.add("small");
    // logonav.classList.add("nopadding");
    // commonlinks.style.top = '-100px';
    mainheader.style.opacity = ".95";
  } else {
    // logo.classList.remove("small");
    mainheader.classList.remove("small");
    logo.classList.remove("small");
    // logonav.classList.remove("nopadding");
    // commonlinks.style.top = '0px';
    mainheader.style.opacity = "1";
  }
}

const formatDate = (date) => {
   const splitDate = date.split("-");
   return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`
}

async function loadEvents() {
  try {
    const endpoint = await fetch(`./.netlify/functions/callFetch`);
    const data = await endpoint.json();

    const list = document.getElementById("calender-list");

    data.items.slice(0, 3).map((item) => {
      const newLi = document.createElement("li");
      const newP3 = document.createElement("h3");
      
      const newContent = document.createTextNode(item.summary);
      newP3.append(newContent);
      
      const newP = document.createElement("p");
      const newDesc = document.createTextNode(item.description);
      newP.append(newDesc)
      
      const newP2 = document.createElement("p");
      const date = document.createTextNode(formatDate(item.start.date));
      newP2.append(date)
      
      newLi.append(newP3,newP2, newP)
      list.append(newLi);
     
      console.log(item, item.summary, item.start.date, item.description);
    });
  } catch (e) {
    console.log(e);
  }
}

//   var paragraph = document.getElementById("p");
// var text = document.createTextNode("This just got added");

// paragraph.appendChild(text);
