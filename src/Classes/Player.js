export class Player {
  constructor(character) {
    this.characterImg = character;
  }
  update(keyPressed) {
    if (keyPressed['ArrowRight']) {
      this.characterImg.classList.remove('idle_spritesheet');
      this.characterImg.classList.add('run_spritesheet', "run_animate");
      this.characterImg.src = '../../assets/samurai/Sprites/RUN.png';
    } else {
      this.characterImg.classList.remove('run_spritesheet', 'run_animate');
      this.characterImg.classList.add('idle_spritesheet');
      this.characterImg.src = '../../assets/samurai/Sprites/IDLE.png';
    }
  }
}
