function showDivs(n) {
    "use strict";
    var i;
    var x = document.getElementsByClassName("Slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
    x[sLideIndex+1].style.display = "block";
}

var slideIndex = 1;
showDivs(slideIndex);




function arrows(n) {
    showDivs(slideIndex += n);
}