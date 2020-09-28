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
  counterShapes = 1;
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
        this.shapesPerSec >= 0
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

  renderShape({ x, y }) {
    const shape = new PIXI.Graphics();

    shape.lineStyle(0, 0xffffff, 1);

    shape.beginFill(this.shapeService.getRandomColor());
    this.shapeService.setRandomShapes(shape);
    shape.endFill();
    shape.x = x;
    shape.y = y;
    shape.interactive = true;
    shape.buttonMode = true;
    this.app.stage.addChild(shape);

    this.counterShapes += 1;
    this.surfaceAreaValue += shape.surfaceArea;

    interfaceValueCurrentNumber.innerHTML = this.counterShapes;
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
    interfaceValueNumberSecond.innerHTML = this.shapesPerSec;
    interfaceValueGraviti.innerHTML = this.gravitiValue;

    const destroyInterval = setInterval(() => {
      shape.y = shape.y + this.gravitiValue;

      if (shape.y > 500) {
        clearInterval(destroyInterval);
        this.destroyShape(shape);
      }
    }, 50);

    shape.on('click', e => {
      clearInterval(destroyInterval);
      this.destroyShape(shape);
    });
  }

  destroyShape(shape) {
    this.counterShapes -= 1;
    this.surfaceAreaValue -= shape.surfaceArea;

    interfaceValueCurrentNumber.innerHTML = this.counterShapes;
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
    shape.destroy(true);
  }
}
