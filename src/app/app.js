import * as PIXI from 'pixi.js';
import { ShapeService } from '../service';
import refs from '../refs';
import './app.css';
const {
  btnShapesNumber,
  interfaceValueNumberSecond,
  interfaceValueGraviti,
  interfaceValueCurrentNumber,
  interfaceValueSurfaceArea,
  btnGravitiValue,
  div,
} = refs;

const SHAPES_INCREMENT = 'shapes-number__increment';
const SHAPES_DECREMENT = 'shapes-number__decrement';
const GRAVITI_INCREMENT = 'gravity-value__increment';
const GRAVITI_DECREMENT = 'gravity-value__decrement';
const BOARD_WIDTH = 1100;
const BOARD_HEUGHT = 400;
const MAX_SHAPE_SIZE = 50;

export default class App {
  app = null;
  backGroundApp = null;
  shapes = null;
  shapeService = null;
  shapesPerSec = 1;
  gravitiValue = 1;
  counterShapes = 0;
  surfaceAreaValue = 0;

  constructor() {
    this.app = new PIXI.Application({
      width: BOARD_WIDTH,
      height: BOARD_HEUGHT,
      backgroundColor: 0x4e3030,
    });
    div.appendChild(this.app.view);

    this.shapeService = new ShapeService();
    this.initStageBackground();
    this.initListeners();
  }

  initListeners() {
    btnShapesNumber.addEventListener('click', e => {
      if (e.target.dataset.action === SHAPES_INCREMENT) {
        this.shapesPerSec += 1;
      }
      if (
        e.target?.dataset?.action === SHAPES_DECREMENT &&
        this.shapesPerSec > 1
      ) {
        this.shapesPerSec -= 1;
      }
    });

    btnGravitiValue.addEventListener('click', e => {
      if (e.target.dataset.action === GRAVITI_INCREMENT) {
        this.gravitiValue += 1;
      }
      if (
        e.target.dataset.action === GRAVITI_DECREMENT &&
        this.gravitiValue > 1
      ) {
        this.gravitiValue -= 1;
      }
    });
  }

  initStageBackground() {
    const backGroundApp = new PIXI.Graphics();
    backGroundApp.lineStyle(0, 0xffffff, 1);
    backGroundApp.beginFill(0, 0xffffff, 1);
    backGroundApp.drawRect(0, 0, 1100, 400);
    backGroundApp.endFill();

    backGroundApp.interactive = true;
    backGroundApp.on('click', e => this.renderShape(e.data?.global));

    this.app.stage.addChild(backGroundApp);
  }

  start() {
    setInterval(() => this.drawShapes(), 1000);
  }

  drawShapes() {
    for (let i = 1; i <= this.shapesPerSec; i += 1) {
      const coords = this.shapeService.getRandomPosition(
        MAX_SHAPE_SIZE,
        BOARD_WIDTH - MAX_SHAPE_SIZE,
      );
      this.renderShape(coords);
    }
  }

  renderShape(coords) {
    const newShape = new Shape(coords, this.shapeService, this.app);
    const { shape } = newShape;

    this.app.ticker.add(() => {
      shape.position.y += this.gravitiValue;
      this.destroyShape(shape);
    });

    this.counterShapes += 1;
    this.surfaceAreaValue += shape.surfaceArea;

    interfaceValueCurrentNumber.innerHTML = this.counterShapes;
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
    interfaceValueNumberSecond.innerHTML = this.shapesPerSec;
    interfaceValueGraviti.innerHTML = this.gravitiValue;

    shape.on('click', e => {
      shape.show = false;
      console.log(shape);
      this.toChangeСolor(shape, shape.name);
      this.counterShapes -= 1;
      this.surfaceAreaValue -= shape.surfaceArea;

      interfaceValueCurrentNumber.innerHTML = this.counterShapes;
      interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
      shape.clear();
    });
  }
  toChangeСolor(shape, name) {
    shape.parent.children.forEach(element => {
      if (element.name === name && element.show) {
        element.clear();

        element.beginFill(this.shapeService.getRandomColor());
        switch (name) {
          case 'circle':
            return element.drawCircle(0, 0, 32);
          case 'ellipse':
            return element.drawEllipse(0, 0, 50, 25);
          case 'star':
            return element.drawStar(0, 0, 5, 60);
          case 'rect':
            return element.drawRect(0, 0, 50, 50);
          case 'triangle':
            return element.drawPolygon([-32, 64, 32, 64, 0, 0]);
          case 'pentagon':
            return element.drawPolygon([
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
          case 'hexagon':
            return element.drawPolygon([
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

          default:
            break;
        }

        element.endFill();
        this.app.stage.addChild(element);
      }
    });
  }

  destroyShape(shape) {
    if (shape.position.y > BOARD_HEUGHT + 50) {
      shape.clear();
    }
    if (shape.position.y === BOARD_HEUGHT + 50) {
      this.counterShapes -= 1;
      this.surfaceAreaValue -= shape.surfaceArea;

      interfaceValueCurrentNumber.innerHTML = this.counterShapes;
      interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
    }
  }
}

class Shape {
  shape = null;
  constructor({ x, y }, shapeService, app) {
    this.shape = new PIXI.Graphics();

    this.shape.lineStyle(0, 0xffffff, 1);

    this.shape.beginFill(shapeService.getRandomColor());
    shapeService.setRandomShapes(this.shape);
    this.shape.endFill();
    this.shape.x = x;
    this.shape.y = y;
    this.shape.interactive = true;
    this.shape.buttonMode = true;
    this.shape.show = true;
    app.stage.addChild(this.shape);
  }
}
