const groundGrass = document.querySelector('.ground_grass');
const characterImg = document.querySelector('.character_img');

const keyPressed = {};

export function handleKeyDown(e) {
  keyPressed[e.key] = true;
}

export function handleKeyUp() {
  keyPressed[e.key] = false;
}

export function run() {
  if (keyPressed['ArrowRight']) {
    groundGrass.classList.add('ground_animate');
    characterImg.src = '/assets/samurai/Sprites/RUN.png';
  } else {
    groundGrass.classList.remove('ground_animate');
    characterImg.src = '/assets/samurai/Sprites/IDLE.png';
  }
}
