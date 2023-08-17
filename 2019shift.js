let slideIndex2019 = 1;
displaySlide2019(slideIndex2019);
 
function moveSlides2019(n) {
    displaySlide2019(slideIndex2019 += n);
}
 
function activeSlide2019(n) {
    displaySlide2019(slideIndex2019 = n);
}
 
/* Main function */
function displaySlide2019(n) {
    let i;
    let totalslides2019 =
        document.getElementsByClassName("slide2019");
    let totaldots2019 =
        document.getElementsByClassName("footerdot2019");
 
    if (n > totalslides2019.length) {
        slideIndex2019 = 1;
    }
 
    if (n < 1) {
        slideIndex2019 = totalslides2019.length;
    }
    for (i = 0; i < totalslides2019.length; i++) {
        totalslides2019[i].style.display = "none";
    }
    for (i = 0; i < totaldots2019.length; i++) {
        totaldots2019[i].className =
            totaldots2019[i].className.replace(" active", "");
    }
    totalslides2019[slideIndex2019 - 1].style.display = "block";
    totaldots2019[slideIndex2019 - 1].className += " active";
}