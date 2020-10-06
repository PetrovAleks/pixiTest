import * as PIXI from 'pixi.js';
import refs from './refs';
const {
  interfaceValueCurrentNumber,
  interfaceValueSurfaceArea,
  interfaceValueNumberSecond,
  interfaceValueGraviti,
} = refs;

const SHAPES_INCREMENT = 'shapes-number__increment';
const SHAPES_DECREMENT = 'shapes-number__decrement';
const GRAVITI_INCREMENT = 'gravity-value__increment';
const GRAVITI_DECREMENT = 'gravity-value__decrement';

export default class AppModel {
  shapesPerSec = 1;
  gravitiValue = 1;
  counterShapes = 0;
  surfaceAreaValue = 0;
  app = null;
  APP_SIZE = null;

  constructor(App, SIZE) {
    this.app = App;
    this.APP_SIZE = SIZE;
    this.shapesPerSec;
    this.gravitiValue;
    this.counterShapes;
    this.surfaceAreaValue;
  }

  createShape({ x, y }) {
    const shape = new PIXI.Graphics();

    shape.lineStyle(0, 0xffffff, 1);

    shape.beginFill(this.getRandomColor());
    this.setRandomShapes(shape);
    shape.endFill();
    shape.x = x;
    shape.y = y;
    shape.interactive = true;
    shape.buttonMode = true;
    shape.show = true;
    return this.app.stage.addChild(shape);
  }

  getRandomPosition(min, max) {
    const randomPositionX = Math.floor(Math.random() * max);
    const startPosition = {
      x: min + randomPositionX,
      y: 0,
    };
    return startPosition;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '0x';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomShapes(shape) {
    const randomIndex = Math.floor(Math.random() * (7 - 1) + 1);

    switch (randomIndex) {
      case 1:
        shape.name = 'circle';
        shape.surfaceArea = 2 * Math.PI * 32;
        return shape.drawCircle(0, 0, 32);
      case 2:
        shape.name = 'ellipse';
        shape.surfaceArea = 2 * Math.PI * 50;
        return shape.drawEllipse(0, 0, 50, 25);
      case 3:
        const RCircle = 60;
        shape.name = 'star';
        shape.surfaceArea = 1.12 * Math.pow(RCircle, 2);
        return shape.drawStar(0, 0, 5, 60);
      case 4:
        const rectSize = 50;
        shape.name = 'rect';
        shape.surfaceArea = Math.pow(rectSize, 2);
        return shape.drawRect(0, 0, rectSize, rectSize);
      case 5:
        shape.name = 'triangle';
        shape.surfaceArea = (64 * 64) / 2;
        return shape.drawPolygon([-32, 64, 32, 64, 0, 0]);
      case 6:
        shape.name = 'pentagon';
        shape.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2);
        return shape.drawPolygon([-32, 32, 32, 32, 32, -32, -32, -32, -64, 0]);
      case 7:
        shape.name = 'hexagon';
        shape.surfaceArea = (32 * 32) / 2 + Math.pow(32, 2) + (32 * 32) / 2;
        return shape.drawPolygon([
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
  }

  setGravityValue(evt) {
    if (evt.target.dataset.action === GRAVITI_INCREMENT) {
      this.gravitiValue += 1;
    }
    if (
      evt.target.dataset.action === GRAVITI_DECREMENT &&
      this.gravitiValue > 1
    ) {
      this.gravitiValue -= 1;
    }
  }
  setNumberShapes(evt) {
    if (evt.target.dataset.action === SHAPES_INCREMENT) {
      this.shapesPerSec += 1;
    }
    if (
      evt.target?.dataset?.action === SHAPES_DECREMENT &&
      this.shapesPerSec > 1
    ) {
      this.shapesPerSec -= 1;
    }
  }

  initStageBackground() {
    const { BOARD_WIDTH, BOARD_HEUGHT } = this.APP_SIZE;
    const backGroundApp = new PIXI.Graphics();
    backGroundApp.lineStyle(0, 0xffffff, 1);
    backGroundApp.beginFill(0, 0xffffff, 1);
    backGroundApp.drawRect(0, 0, BOARD_WIDTH, BOARD_HEUGHT);
    backGroundApp.endFill();

    backGroundApp.interactive = true;

    return this.app.stage.addChild(backGroundApp);
  }

  destroyShape(shape) {
    const { BOARD_WIDTH, BOARD_HEUGHT, MAX_SHAPE_SIZE } = this.APP_SIZE;
    if (shape.position.y > BOARD_HEUGHT + MAX_SHAPE_SIZE) {
      shape.clear();
    }
    if (shape.position.y === BOARD_HEUGHT + MAX_SHAPE_SIZE) {
      this.counterShapes -= 1;
      this.surfaceAreaValue -= shape.surfaceArea;

      this.showCurrentShapes();
      this.showValueSurfaceArea();
    }
  }

  onCLickRedrawShapes(shape) {
    shape.on('click', () => {
      shape.show = false;
      this.toChangeСolor(shape, shape.name);
      this.counterShapes -= 1;
      this.surfaceAreaValue -= shape.surfaceArea;

      this.showCurrentShapes();
      this.showValueSurfaceArea();
      shape.clear();
    });
  }

  toChangeСolor(shape, name) {
    const { BOARD_HEUGHT } = this.APP_SIZE;
    shape.parent.children.forEach(element => {
      if (
        element.name === name &&
        element.show &&
        element.y <= BOARD_HEUGHT + 50
      ) {
        element.clear();

        element.beginFill(this.getRandomColor());
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

  showGravitiValue() {
    interfaceValueGraviti.innerHTML = this.gravitiValue;
  }
  showNumberShapeSecond() {
    interfaceValueNumberSecond.innerHTML = this.shapesPerSec;
  }
  showCurrentShapes() {
    interfaceValueCurrentNumber.innerHTML = this.counterShapes;
  }
  showValueSurfaceArea() {
    interfaceValueSurfaceArea.innerHTML = Math.floor(this.surfaceAreaValue);
  }
}
