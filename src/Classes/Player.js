export class Player {
  constructor(character) {
    this.characterImg = character;
    this.isAttacking = false;
    this.currentState = 'idle';
  }

  update(keyPressed) {
    // Attack has the highest priority. We use `!this.isAttacking` to prevent a new attack from starting.
    if (keyPressed[' '] && !this.isAttacking) {
      this.isAttacking = true;
      this.currentState = 'attack';

      this.characterImg.classList.remove('idle_spritesheet', 'run_spritesheet', 'run_animate');
      this.characterImg.classList.add('attack_spritesheet', 'attack_animate');
      this.characterImg.src = '../../assets/samurai/Sprites/ATTACK.png';

      const attackDuration = 300;

      setTimeout(() => {
        this.isAttacking = false;

        // Revert to the appropriate state based on current key presses
        if (keyPressed['ArrowRight']) {
          this.currentState = 'run';
          this.characterImg.classList.remove('attack_spritesheet', 'attack_animate', 'idle_spritesheet');
          this.characterImg.classList.add('run_spritesheet', 'run_animate');
          this.characterImg.src = '../../assets/samurai/Sprites/RUN.png';
        } else {
          this.currentState = 'idle';
          this.characterImg.classList.remove('attack_spritesheet', 'attack_animate', 'run_spritesheet', 'run_animate');
          this.characterImg.classList.add('idle_spritesheet');
          this.characterImg.src = '../../assets/samurai/Sprites/IDLE.png';
        }
      }, attackDuration);

      return; // Exit early to prevent other actions
    }

    // Do not allow other state changes if an attack is in progress
    if (this.isAttacking) {
      return;
    }

    // Now handle other states
    if (keyPressed['ArrowRight']) {
      if (this.currentState !== 'run') {
        this.currentState = 'run';
        this.characterImg.classList.remove('idle_spritesheet', 'attack_spritesheet', 'attack_animate');
        this.characterImg.classList.add('run_spritesheet', "run_animate");
        this.characterImg.src = '../../assets/samurai/Sprites/RUN.png';
      }
    } else {
      if (this.currentState !== 'idle') {
        this.currentState = 'idle';
        this.characterImg.classList.remove('run_spritesheet', 'run_animate', 'attack_spritesheet', 'attack_animate');
        this.characterImg.classList.add('idle_spritesheet');
        this.characterImg.src = '../../assets/samurai/Sprites/IDLE.png';
      }
    }
  }
}
