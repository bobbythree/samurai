import { handleKeyDown, handleKeyUp, run, runParallax } from './modules/gameControls.js';


function animate() {
  // Use a different variable for clarity
  run();

  requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

