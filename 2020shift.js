let slideIndex2020 = 1;
displaySlide2020(slideIndex2020);
 
function moveSlides2020(n) {
    displaySlide2020(slideIndex2020 += n);
}
 
function activeSlide2020(n) {
    displaySlide2020(slideIndex2020 = n);
}
 
/* Main function */
function displaySlide2020(n) {
    let i;
    let totalslides2020 =
        document.getElementsByClassName("slide2020");
    let totaldots2020 =
        document.getElementsByClassName("footerdot2020");
 
    if (n > totalslides2020.length) {
        slideIndex2020 = 1;
    }
 
    if (n < 1) {
        slideIndex2020 = totalslides2020.length;
    }
    for (i = 0; i < totalslides2020.length; i++) {
        totalslides2020[i].style.display = "none";
    }
    for (i = 0; i < totaldots2020.length; i++) {
        totaldots2020[i].className =
            totaldots2020[i].className.replace(" active", "");
    }
    totalslides2020[slideIndex2020 - 1].style.display = "block";
    totaldots2020[slideIndex2020 - 1].className += " active";
}