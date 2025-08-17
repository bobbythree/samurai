// Get all parallax layers (original and duplicates)
const bg1 = document.querySelector('.bg1:not(.duplicate)');
const bg1Duplicate = document.querySelector('.bg1.duplicate');
const bg2 = document.querySelector('.bg2:not(.duplicate)');
const bg2Duplicate = document.querySelector('.bg2.duplicate');
const bg3 = document.querySelector('.bg3:not(.duplicate)');
const bg3Duplicate = document.querySelector('.bg3.duplicate');

// Get all parallax elements into an array
const parallaxLayers = [
  { element: bg1, duplicate: bg1Duplicate, speed: 2.0, z: -3, scale: 1.5 },
  { element: bg2, duplicate: bg2Duplicate, speed: 1.0, z: -6, scale: 2.0 },
  { element: bg3, duplicate: bg3Duplicate, speed: 0.5, z: -9, scale: 2.5 }
];

// bg starting positions
let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

function animate() {
  // Use a different variable for clarity
  let firstLayerWidth = bg1.offsetWidth;
  let secondLayerWidth = bg2.offsetWidth;
  let thirdLayerWidth = bg3.offsetWidth;

  // Update positions based on their respective speeds
  pos1 -= parallaxLayers[0].speed;
  pos2 -= parallaxLayers[1].speed;
  pos3 -= parallaxLayers[2].speed;

  // Apply transforms to both original and duplicate elements
  bg1.style.transform = `translateZ(${parallaxLayers[0].z}px) scale(${parallaxLayers[0].scale}) translateX(${pos1}px)`;
  bg1Duplicate.style.transform = `translateZ(${parallaxLayers[0].z}px) scale(${parallaxLayers[0].scale}) translateX(${pos1 + firstLayerWidth}px)`;

  bg2.style.transform = `translateZ(${parallaxLayers[1].z}px) scale(${parallaxLayers[1].scale}) translateX(${pos2}px)`;
  bg2Duplicate.style.transform = `translateZ(${parallaxLayers[1].z}px) scale(${parallaxLayers[1].scale}) translateX(${pos2 + secondLayerWidth}px)`;

  bg3.style.transform = `translateZ(${parallaxLayers[2].z}px) scale(${parallaxLayers[2].scale}) translateX(${pos3}px)`;
  bg3Duplicate.style.transform = `translateZ(${parallaxLayers[2].z}px) scale(${parallaxLayers[2].scale}) translateX(${pos3 + thirdLayerWidth}px)`;

  // Reset positions for a seamless loop
  if (pos1 < -firstLayerWidth) pos1 = 0;
  if (pos2 < -secondLayerWidth) pos2 = 0;
  if (pos3 < -thirdLayerWidth) pos3 = 0;

  requestAnimationFrame(animate);
}
animate();
