let slideIndex2023 = 1;
displaySlide2023(slideIndex2023);
 
function moveSlides2023(n) {
    displaySlide2023(slideIndex2023 += n);
}
 
function activeSlide2023(n) {
    displaySlide2023(slideIndex2023 = n);
}
 
/* Main function */
function displaySlide2023(n) {
    let i;
    let totalslides2023 =
        document.getElementsByClassName("slide2023");
    let totaldots2023 =
        document.getElementsByClassName("footerdot2023");
 
    if (n > totalslides2023.length) {
        slideIndex2023 = 1;
    }
 
    if (n < 1) {
        slideIndex2023 = totalslides2023.length;
    }
    for (i = 0; i < totalslides2023.length; i++) {
        totalslides2023[i].style.display = "none";
    }
    for (i = 0; i < totaldots2023.length; i++) {
        totaldots2023[i].className =
            totaldots2023[i].className.replace(" active", "");
    }
    totalslides2023[slideIndex2023 - 1].style.display = "block";
    totaldots2023[slideIndex2023 - 1].className += " active";
}