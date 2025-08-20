import { ParallaxController } from './ParallaxController.js';
import { Player } from './Player.js';

export class Game {
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
    this.player.update(this.keyPressed);
    this.parallax.update(this.keyPressed);

    //request next frame
    this.animationFrame = requestAnimationFrame(this.gameLoop.bind(this));
  }
  start() {
    this.gameLoop();
  }
  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
}
