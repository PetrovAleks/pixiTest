import refs from '../refs';
import NewRandomShapes from './randomShapes';

const {
  btnShapesNumber,
  interfaceValueNumberSecond,
  btnGravitiValue,
  interfaceValueGraviti,
} = refs;

btnShapesNumber.addEventListener('click', setShapesPerSec);
btnGravitiValue.addEventListener('click', setGravitiValue);

let shapesPerSec = 1;
let gravitiValue = 1;

function createShapes(pisition) {
  const newShapes = new NewRandomShapes(
    pisition,
    setRandomShapes,
    setRandomColor,
  );

  return newShapes.loweringShapes();
}

function setRandomShapes(shapes) {
  const randomIndex = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  if (randomIndex === 1) {
    const ellipseWidth = 50;
    const ellipseHeight = 20;
    shapes.surfaceArea = Math.PI * ellipseWidth * ellipseHeight;

    return shapes.drawEllipse(0, 0, ellipseWidth, ellipseHeight);
  }
  if (randomIndex === 2) {
    const RCircle = 32;

    shapes.surfaceArea = Math.PI * Math.pow(RCircle, 2);
    return shapes.drawCircle(0, 0, RCircle);
  }
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

function setRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '0x';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomPosition() {
  const randomPositionX = Math.floor(Math.random() * 800);
  const startPosition = {
    x: 200 + randomPositionX,
    y: -50,
  };
  return startPosition;
}

function setShapesPerSec(e) {
  const dataAction = e.target.dataset.action;

  if (dataAction === 'shapes-number__increment') {
    shapesPerSec += 1;
  }
  if (dataAction === 'shapes-number__decrement') {
    if (shapesPerSec === 0) {
      return;
    }
    shapesPerSec -= 1;
  }
  return (interfaceValueNumberSecond.innerHTML = shapesPerSec);
}

function setGravitiValue(e) {
  const dataAction = e.target.dataset.action;

  if (dataAction === 'gravity-value__increment') {
    gravitiValue += 1;
  }
  if (dataAction === 'gravity-value__decrement') {
    if (gravitiValue === 1) {
      return;
    }
    gravitiValue -= 1;
  }
  return (interfaceValueGraviti.innerHTML = gravitiValue);
}

export {
  setRandomShapes,
  setRandomColor,
  setRandomPosition,
  createShapes,
  shapesPerSec,
  gravitiValue,
};
