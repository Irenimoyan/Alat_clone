let index = 0;
const images = document.querySelectorAll('#carousel img');
const captions = document.querySelectorAll('#carousel h4 .caption');

function showImage() {
    images[index].classList.add('active');
    captions[index].style.display = 'block';
}

function hideImage() {
    images[index].classList.remove('active');
    captions[index].style.display = 'block';
}

function nextImage() {
    hideImage();
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

images[index].classList.add('active');
captions[index].style.display = 'block';
setInterval(nextImage, 5000);