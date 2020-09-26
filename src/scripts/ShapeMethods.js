import { gravitiValue } from './scripts';
import refs from '../refs';
const { interfaceValueCurrentNumber, interfaceValueSurfaceArea } = refs;
let counterShapes = 0;
let surfaceAreaValue = 0;

export default class ShapeMethods {
  destroyShapes(setDestroy) {
    interfaceValueCurrentNumber.innerHTML = counterShapes -= 1;
    surfaceAreaValue = surfaceAreaValue - this.shapes.surfaceArea;
    interfaceValueSurfaceArea.innerHTML = Math.floor(surfaceAreaValue);
    this.shapes.destroy(true);
    clearInterval(setDestroy);
  }

  loweringShapes() {
    interfaceValueCurrentNumber.innerHTML = counterShapes += 1;
    surfaceAreaValue = surfaceAreaValue + this.shapes.surfaceArea;
    interfaceValueSurfaceArea.innerHTML = Math.floor(surfaceAreaValue);

    const setDestroy = setInterval(() => {
      this.shapes.y = this.shapes.y + gravitiValue;

      if (this.shapes.y > 500) {
        this.destroyShapes(setDestroy);
      }
    }, 50);
    this.shapes.on('click', e => {
      this.destroyShapes(setDestroy);
    });
  }

  setRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '0x';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  setRandomShapes() {
    const randomIndex = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    if (randomIndex === 1) {
      const ellipseWidth = 50;
      const ellipseHeight = 20;
      this.shapes.surfaceArea = Math.PI * ellipseWidth * ellipseHeight;

      return this.shapes.drawEllipse(0, 0, ellipseWidth, ellipseHeight);
    }
    if (randomIndex === 2) {
      const RCircle = 32;

      this.shapes.surfaceArea = Math.PI * Math.pow(RCircle, 2);
      return this.shapes.drawCircle(0, 0, RCircle);
    }
    if (randomIndex === 3) {
      const RCircle = 60;
      this.shapes.surfaceArea = 1.12 * Math.pow(RCircle, 2);
      return this.shapes.drawStar(0, 0, 5, 60);
    }
    if (randomIndex === 4) {
      const rectSize = 50;

      this.shapes.surfaceArea = Math.pow(rectSize, 2);
      return this.shapes.drawRect(0, 0, rectSize, rectSize);
    }
    if (randomIndex === 5) {
      this.shapes.surfaceArea = (64 * 64) / 2;
      return this.shapes.drawPolygon([-32, 64, 32, 64, 0, 0]);
    }
    if (randomIndex === 6) {
      this.shapes.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2);
      return this.shapes.drawPolygon([
        -32,
        32,
        32,
        32,
        32,
        -32,
        -32,
        -32,
        -64,
        0,
      ]);
    }
    if (randomIndex === 7) {
      this.shapes.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2) + (32 * 32) / 2;
      return this.shapes.drawPolygon([
        -64,
        0,
        -32,
        32,
        32,
        32,
        64,
        0,
        32,
        -32,
        -32,
        -32,
      ]);
    }
  }
}
