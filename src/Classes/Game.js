import { ParallaxController } from './ParallaxController.js';
import { Player } from './Player.js';

class Game {
  constructor() {
    this.animationFrame = null;
    this.player = new Player(
      document.querySelector('.ground_grass'),
      dodocument.querySelector('.character_img')
    );
    this.parallax = new ParallaxController();
    this.keyPressed = {};
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('keydown', (e) => (this.keyPressed[e.key] = true));
    window.addEventListener('keyup', (e) => (this.keyPressed[e.key] = true));
  }
  //main game loop
  gameLoop() {

  }
}
