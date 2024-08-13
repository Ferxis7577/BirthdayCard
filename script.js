document.getElementById('birthdayCard').addEventListener('touchstart', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
}, false);

document.getElementById('birthdayCard').addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('open');
});
