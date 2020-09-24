import { Shapes } from '../app';
import { gravitiValue } from './scripts';
import refs from '../refs';
const { interfaceValueCurrentNumber, interfaceValueSurfaceArea } = refs;
let counterShapes = 0;

let surfaceAreaValue = 0;

export default class NewRandomShapes extends Shapes {
  constructor(position, randomShapes, randomColor) {
    super(position, randomShapes, randomColor);
  }

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
}
