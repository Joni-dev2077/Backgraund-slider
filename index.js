const images = [
    'url("/images/image 1.jpg")',
    'url("/images/image 2.jpg")',
    'url("/images/image 3.jpg")'
];

let currentIndex = 0;
const header = document.getElementById('header');

function changeBackgroundImage() {
    header.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);
changeBackgroundImage();