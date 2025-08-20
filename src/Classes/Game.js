import { ParallaxController } from './ParallaxController.js';
import { Player } from './Player.js';

export class Game {
  constructor() {
    this.animationFrameId = null;
    this.player = new Player(
      document.querySelector('.character_img'),
      document.querySelector('.ground_grass')
    );
    this.parallax = new ParallaxController();
    this.keyPressed = {};
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('keydown', (e) => (this.keyPressed[e.key] = true));
    window.addEventListener('keyup', (e) => (this.keyPressed[e.key] = false));
  }
  //main game loop
  gameLoop() {
    this.player.update(this.keyPressed);
    //this.parallax.update(this.keyPressed);

    //request next frame
    this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
  }
  start() {
    this.gameLoop();
  }
  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
