import * as PIXI from 'pixi.js';
import { ShapeService } from '../scripts';
import './app.css';
import refs from '../refs';
const { div } = refs;

export default class App {
  app = null;
  backGroundApp = null;
  shapes = null;
  shapeService = new ShapeService();
  constructor() {
    this.app = new PIXI.Application({
      width: 1100,
      height: 400,
      backgroundColor: 0x4e3030,
    });
    this.backGroundApp = new PIXI.Graphics();
  }

  start() {
    div.appendChild(this.app.view);
    this.backGroundApp.lineStyle(0, 0xffffff, 1);
    this.backGroundApp.beginFill(0, 0xffffff, 1);
    this.backGroundApp.drawRect(0, 0, 1100, 400);
    this.backGroundApp.endFill();
    this.app.stage.addChild(this.backGroundApp);
    this.backGroundApp.interactive = true;
    this.backGroundApp.on('click', e => {
      const position = e.data.global;
      this.renderShapes(position);
    });
  }
  renderShapes({ x, y }) {
    this.shapes = new PIXI.Graphics();
    this.shapes.lineStyle(0, 0xffffff, 1);
    this.shapes.beginFill(this.shapeService.setRandomColor());
    this.shapeService.setRandomShapes(this.shapes);
    this.shapes.endFill();
    this.shapes.surfaceArea;
    this.shapes.x = x;
    this.shapes.y = y;
    this.shapes.interactive = true;
    this.shapes.buttonMode = true;
    this.app.stage.addChild(this.shapes);
    this.shapeService.loweringShapes(this.shapes);
  }
}
