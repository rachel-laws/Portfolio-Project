// Skills Card Animation

const skillsCard = document.querySelector('.skills__container');

document.addEventListener('mousemove', e => {
  rotateCard(e, skillsCard);
});

// Track mouse movements
const rotateCard = (event, card) => {
  const x = event.clientX;
  const y = event.clientY;

  // Middle of the page
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // Get % offset from middle
  const offsetX = ((x - middleX) / middleX) * 20;
  const offsetY = ((y - middleY) / middleY) * 20;

  card.style.setProperty('--rotateX', offsetY + 'deg');
  card.style.setProperty('--rotateY', offsetX + 'deg');
};
