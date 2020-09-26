import * as PIXI from 'pixi.js';
import { ShapeMethods } from '../scripts';
import './app.css';
import refs from '../refs';
const { div } = refs;
const app = new PIXI.Application({
  width: 1100,
  height: 400,
  backgroundColor: 0x4e3030,
});

class App extends ShapeMethods {
  constructor() {
    super();
  }
  bgshapes = new PIXI.Graphics();

  createApp() {
    return div.appendChild(app.view);
  }

  createBackBackground() {
    this.bgshapes.lineStyle(0, 0xffffff, 1);
    this.bgshapes.beginFill(0, 0xffffff, 1);
    this.bgshapes.drawRect(0, 0, 1100, 400);
    this.bgshapes.endFill();
    app.stage.addChild(this.bgshapes);
    this.bgshapes.interactive = true;
  }
}

class Shapes extends App {
  constructor({ x, y }) {
    super();
    this.shapes = new PIXI.Graphics();
    this.shapes.lineStyle(0, 0xffffff, 1);
    this.shapes.beginFill(this.setRandomColor());
    this.setRandomShapes();
    this.shapes.endFill();
    this.shapes.x = x;
    this.shapes.y = y;
    this.shapes.interactive = true;
    this.shapes.buttonMode = true;
    this.shapes.surfaceArea;
    app.stage.addChild(this.shapes);
    this.loweringShapes();
  }
}
export { App, Shapes };
