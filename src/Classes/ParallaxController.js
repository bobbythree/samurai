export class ParallaxController {
  constructor() {
    this.parallaxLayers = this.getParallaxLayers();
    this.bgPositions = [0, 0, 0];
  }
  getParallaxLayers() {
    const layers = [
      {
        element: document.querySelector('.ground_grass'),
        duplicate: document.querySelector('.ground_grass.duplicate'),
        speed: 10.0,
        z: 0,
        scale: 1.0,
        width: 0
      },
      {
        element: document.querySelector('.bg1'),
        duplicate: document.querySelector('.bg1.duplicate'),
        speed: 2.0,
        z: -3,
        scale: 1.5,
        width: 0
      },
      {
        element: document.querySelector('.bg2'),
        duplicate: document.querySelector('.bg2.duplicate'),
        speed: 1.0,
        z: -6,
        scale: 2.0,
        width: 0
      },
      {
        element: document.querySelector('.bg3'),
        duplicate: document.querySelector('.bg3.duplicate'),
        speed: 0.5,
        z: -9,
        scale: 2.5,
        width: 0
      },
    ];

    layers.forEach(layer => {
      layer.width = layer.element.offsetWidth;
    });

    return layers;
  }
  update(keyPressed) {
    if (!keyPressed['ArrowRight']) return;

    this.parallaxLayers.forEach((layer, i) => {
      this.bgPositions[i] -= layer.speed;
      layer.element.style.transform = `translateZ(${layer.z}px) scale(${layer.scale}) translateX(${this.bgPositions[i]}px)`;
      layer.duplicate.style.transform = `translateZ(${layer.z}px) scale(${layer.scale}) translateX(${this.bgPositions[i] + layer.width}px)`;

      //reset position for seamless loop
      if (this.bgPositions[i] < -layer.width) {
        this.bgPositions[i] = 0;
      }
    });
  }
}
