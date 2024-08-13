document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('is-flipped');
});

document.querySelector('.card').addEventListener('touchstart', function() {
    this.classList.toggle('is-flipped');
});