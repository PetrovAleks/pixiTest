import refs from '../refs';

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
function shapesInterval(app) {
  return setInterval(() => {
    for (let i = 1; i <= shapesPerSec; i += 1) {
      app.renderShapes(setRandomPosition());
    }
  }, 1000);
}
export { setRandomPosition, shapesInterval, shapesPerSec, gravitiValue };
