let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let index = 0;

let slide = document.getElementById("slide");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

// show image
function showImage() {
    slide.src = images[index];
}

// next
nextBtn.addEventListener("click", function () {
    index++;
    if (index >= images.length) index = 0;
    showImage();
});

// previous
prevBtn.addEventListener("click", function () {
    index--;
    if (index < 0) index = images.length - 1;
    showImage();
});

// auto change every 3 sec
let autoSlide = setInterval(function () {
    index++;
    if (index >= images.length) index = 0;
    showImage();
}, 3000);

// pause on hover
slide.addEventListener("mouseenter", function () {
    clearInterval(autoSlide);
});

slide.addEventListener("mouseleave", function () {
    autoSlide = setInterval(function () {
        index++;
        if (index >= images.length) index = 0;
        showImage();
    }, 3000);
});
