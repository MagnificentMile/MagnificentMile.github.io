let slideIndex2017 = 1;
displaySlide2017(slideIndex2017);
 
function moveSlides2017(n) {
    displaySlide2017(slideIndex2017 += n);
}
 
function activeSlide2017(n) {
    displaySlide2017(slideIndex2017 = n);
}
 
/* Main function */
function displaySlide2017(n) {
    let i;
    let totalslides2017 =
        document.getElementsByClassName("slide2017");
    let totaldots2017 =
        document.getElementsByClassName("footerdot2017");
 
    if (n > totalslides2017.length) {
        slideIndex2017 = 1;
    }
 
    if (n < 1) {
        slideIndex2017 = totalslides2017.length;
    }
    for (i = 0; i < totalslides2017.length; i++) {
        totalslides2017[i].style.display = "none";
    }
    for (i = 0; i < totaldots2017.length; i++) {
        totaldots2017[i].className =
            totaldots2017[i].className.replace(" active", "");
    }
    totalslides2017[slideIndex2017 - 1].style.display = "block";
    totaldots2017[slideIndex2017 - 1].className += " active";
}