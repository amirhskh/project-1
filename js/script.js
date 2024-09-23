// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
  let menu = document.querySelector(".menu");

    
    let mainHeader = document.getElementById("mainHeader");
    //console.log(mainHeader);
    menu.addEventListener("click",e=>{
        menu.classList.toggle("open");
        mainHeader.classList.toggle("d-none");
        mainHeader.classList.toggle("d-md-block");
        mainHeader.classList.toggle("h-100");
        mainHeader.classList.toggle("position-fixed");
        mainHeader.classList.toggle("top-0");
        mainHeader.classList.toggle("end-0");
        mainHeader.classList.toggle("z-3");
        mainHeader.classList.toggle("w-100");
        mainHeader.classList.toggle("fadeInLeft");
        var nav = mainHeader.querySelectorAll("nav");
       console.log(nav);
         nav.forEach((e)=>{
            e.classList.toggle("d-flex");
            e.classList.toggle("d-block");
        })
        var div1 = document.getElementById("div1")
        console.log(div1);
    div1.classList.toggle("d-flex")
        var div2 = document.getElementById("div2")
        console.log(div2);
    div2.classList.toggle("d-flex")
    });

