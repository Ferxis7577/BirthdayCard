document.getElementById('birthdayCard').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    this.classList.toggle('open');
});

document.getElementById('birthdayCard').addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent default behavior
    this.classList.toggle('open');
});