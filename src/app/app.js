import * as PIXI from 'pixi.js';
import './app.css';
import refs from '../refs';
const { div } = refs;
const app = new PIXI.Application({
  width: 1100,
  height: 400,
  backgroundColor: 0x4e3030,
});

class App {
  constructor() {
    this.bgshapes = new PIXI.Graphics();
    this.bgshapes.lineStyle(0, 0xffffff, 1);
    this.bgshapes.beginFill(0, 0xffffff, 1);
    this.bgshapes.drawRect(0, 0, 1100, 400);
    this.bgshapes.endFill();
    app.stage.addChild(this.bgshapes);
    this.bgshapes.interactive = true;
  }
  doc = div.appendChild(app.view);
}
class Shapes {
  constructor({ x, y }, randomShapes, randomColor) {
    this.shapes = new PIXI.Graphics();
    this.shapes.lineStyle(0, 0xffffff, 1);
    this.shapes.beginFill(randomColor());
    randomShapes(this.shapes);
    this.shapes.endFill();
    this.shapes.x = x;
    this.shapes.y = y;
    this.shapes.interactive = true;
    this.shapes.buttonMode = true;
    this.shapes.surfaceArea;
    app.stage.addChild(this.shapes);
  }
}
export { App, Shapes };
