const h3 = document.querySelector('h3');

alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

let randomLetter = getRandomLetter();

document.body.addEventListener('keypress', function(event) {
    console.log(event.key);
    if (event.key == randomLetter) {
        const secretKeyPressed = document.createElement('h2');
        secretKeyPressed.textContent = "Secret key pressed: " + randomLetter;
        h3.appendChild(secretKeyPressed);

        randomLetter = getRandomLetter();
    }
});

