let slideIndex2022 = 1;
displaySlide2022(slideIndex2022);
 
function moveSlides2022(n) {
    displaySlide2022(slideIndex2022 += n);
}
 
function activeSlide2022(n) {
    displaySlide2022(slideIndex2022 = n);
}
 
/* Main function */
function displaySlide2022(n) {
    let i;
    let totalslides2022 =
        document.getElementsByClassName("slide2022");
    let totaldots2022 =
        document.getElementsByClassName("footerdot2022");
 
    if (n > totalslides2022.length) {
        slideIndex2022 = 1;
    }
 
    if (n < 1) {
        slideIndex2022 = totalslides2022.length;
    }
    for (i = 0; i < totalslides2022.length; i++) {
        totalslides2022[i].style.display = "none";
    }
    for (i = 0; i < totaldots2022.length; i++) {
        totaldots2022[i].className =
            totaldots2022[i].className.replace(" active", "");
    }
    totalslides2022[slideIndex2022 - 1].style.display = "block";
    totaldots2022[slideIndex2022 - 1].className += " active";
}