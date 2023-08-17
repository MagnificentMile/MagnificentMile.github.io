let slideIndex2018 = 1;
displaySlide2018(slideIndex2018);
 
function moveSlides2018(n) {
    displaySlide2018(slideIndex2018 += n);
}
 
function activeSlide2018(n) {
    displaySlide2018(slideIndex2018 = n);
}
 
/* Main function */
function displaySlide2018(n) {
    let i;
    let totalslides2018 =
        document.getElementsByClassName("slide2018");
    let totaldots2018 =
        document.getElementsByClassName("footerdot2018");
 
    if (n > totalslides2018.length) {
        slideIndex2018 = 1;
    }
 
    if (n < 1) {
        slideIndex2018 = totalslides2018.length;
    }
    for (i = 0; i < totalslides2018.length; i++) {
        totalslides2018[i].style.display = "none";
    }
    for (i = 0; i < totaldots2018.length; i++) {
        totaldots2018[i].className =
            totaldots2018[i].className.replace(" active", "");
    }
    totalslides2018[slideIndex2018 - 1].style.display = "block";
    totaldots2018[slideIndex2018 - 1].className += " active";
}