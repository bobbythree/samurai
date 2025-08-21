export class Player {
  constructor(character, ground) {
    this.characterImg = character;
    this.groundGrass = ground;
  }
  update(keyPressed) {
    if (keyPressed['ArrowRight']) {
      this.groundGrass.classList.add('grass_animate');
      this.characterImg.classList.remove('idle_spritesheet');
      this.characterImg.classList.add('run_spritesheet', "run_animate");
      this.characterImg.src = '../../assets/samurai/Sprites/RUN.png';
    } else {
      this.groundGrass.classList.remove('grass_animate');
      this.characterImg.classList.remove('run_spritesheet', 'run_animate');
      this.characterImg.classList.add('idle_spritesheet');
      this.characterImg.src = '../../assets/samurai/Sprites/IDLE.png';
    }
  }
}
