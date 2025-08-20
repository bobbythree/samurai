import { handleKeyDown, handleKeyUp, characterRun } from './modules/gameControls.js';


function animate() {
  // Use a different variable for clarity
  characterRun();

  requestAnimationFrame(animate);
}
animate();

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

