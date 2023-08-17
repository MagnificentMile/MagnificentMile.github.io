let slideIndex2016 = 1;
displaySlide2016(slideIndex2016);
 
function moveSlides2016(n) {
    displaySlide2016(slideIndex2016 += n);
}
 
function activeSlide2016(n) {
    displaySlide2016(slideIndex2016 = n);
}
 
/* Main function */
function displaySlide2016(n) {
    let i;
    let totalslides2016 =
        document.getElementsByClassName("slide2016");
    let totaldots2016 =
        document.getElementsByClassName("footerdot2016");
 
    if (n > totalslides2016.length) {
        slideIndex2016 = 1;
    }
 
    if (n < 1) {
        slideIndex2016 = totalslides2016.length;
    }
    for (i = 0; i < totalslides2016.length; i++) {
        totalslides2016[i].style.display = "none";
    }
    for (i = 0; i < totaldots2016.length; i++) {
        totaldots2016[i].className =
            totaldots2016[i].className.replace(" active", "");
    }
    totalslides2016[slideIndex2016 - 1].style.display = "block";
    totaldots2016[slideIndex2016 - 1].className += " active";
}