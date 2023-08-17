let slideIndex2021 = 1;
displaySlide2021(slideIndex2021);
 
function moveSlides2021(n) {
    displaySlide2021(slideIndex2021 += n);
}
 
function activeSlide2021(n) {
    displaySlide2021(slideIndex2021 = n);
}
 
/* Main function */
function displaySlide2021(n) {
    let i;
    let totalslides2021 =
        document.getElementsByClassName("slide2021");
    let totaldots2021 =
        document.getElementsByClassName("footerdot2021");
 
    if (n > totalslides2021.length) {
        slideIndex2021 = 1;
    }
 
    if (n < 1) {
        slideIndex2021 = totalslides2021.length;
    }
    for (i = 0; i < totalslides2021.length; i++) {
        totalslides2021[i].style.display = "none";
    }
    for (i = 0; i < totaldots2021.length; i++) {
        totaldots2021[i].className =
            totaldots2021[i].className.replace(" active", "");
    }
    totalslides2021[slideIndex2021 - 1].style.display = "block";
    totaldots2021[slideIndex2021 - 1].className += " active";
}