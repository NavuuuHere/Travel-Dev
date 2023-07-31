const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


const typewriterText = "DISCOVER THE COLOURFUL WORLD";

let index = 0;
function typeWriter() {
  const textElement = document.getElementById('top-p-main');
  if (index < typewriterText.length) {
    textElement.innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}

window.addEventListener('load', typeWriter);

const scrollButton = document.getElementById('landing-main-button');
scrollButton.addEventListener('click', () => {
  const targetElement = document.getElementById('loactions-part'); 
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }})