const noButton = document.getElementById('no-button');

function getRandomPosition() {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    return { x, y };
}

function moveButton() {
    const { x, y } = getRandomPosition();
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

noButton.addEventListener('mouseover', moveButton);

function redirectToSite() {
    window.location.href = "https://www.instagram.com/fer.devslop/"; 
}
