document.getElementById('card').addEventListener('touchend', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
}, false);

document.getElementById('card').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
});
