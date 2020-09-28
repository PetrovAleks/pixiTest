import { gravitiValue, setRandomPosition, shapesPerSec } from './scripts';
import refs from '../refs';
const { interfaceValueCurrentNumber, interfaceValueSurfaceArea } = refs;
export default class ShapeService {
  counterShapes = 0;
  surfaceAreaValue = 0;

  getRandomPosition(min, max) {
    const randomPositionX = Math.floor(Math.random() * max);
    const startPosition = {
      x: min + randomPositionX,
      y: -50,
    };
    return startPosition;
  }

  destroyShapes(setDestroy, shapes) {
    interfaceValueCurrentNumber.innerHTML = this.counterShapes -= 1;
    this.surfaceAreaValue = this.surfaceAreaValue - shapes.surfaceArea;
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
    shapes.destroy(true);
    clearInterval(setDestroy);
  }

  loweringShapes(shapes) {
    interfaceValueCurrentNumber.innerHTML = this.counterShapes += 1;
    this.surfaceAreaValue = this.surfaceAreaValue + shapes.surfaceArea;
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);

    const setDestroy = setInterval(() => {
      shapes.y = shapes.y + gravitiValue;

      if (shapes.y > 500) {
        this.destroyShapes(setDestroy, shapes);
      }
    }, 50);
    shapes.on('click', e => {
      this.destroyShapes(setDestroy, shapes);
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '0x';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  setRandomShapes(shapes) {
    const randomIndex = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

    if (randomIndex === 3) {
      const RCircle = 60;
      shapes.surfaceArea = 1.12 * Math.pow(RCircle, 2);
      return shapes.drawStar(0, 0, 5, 60);
    }
    if (randomIndex === 4) {
      const rectSize = 50;

      shapes.surfaceArea = Math.pow(rectSize, 2);
      return shapes.drawRect(0, 0, rectSize, rectSize);
    }
    if (randomIndex === 5) {
      shapes.surfaceArea = (64 * 64) / 2;
      return shapes.drawPolygon([-32, 64, 32, 64, 0, 0]);
    }
    if (randomIndex === 6) {
      shapes.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2);
      return shapes.drawPolygon([-32, 32, 32, 32, 32, -32, -32, -32, -64, 0]);
    }
    if (randomIndex === 7) {
      shapes.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2) + (32 * 32) / 2;
      return shapes.drawPolygon([
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
