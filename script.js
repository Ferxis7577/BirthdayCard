document.getElementById('birthdayCard').addEventListener('touchend', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
}, false);

document.getElementById('birthdayCard').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
});
