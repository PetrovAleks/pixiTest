import { App } from './app';
import refs from './refs';

import './styles.css';

import {
  setRandomShapes,
  setRandomColor,
  setRandomPosition,
  createShapes,
  shapesPerSec,
} from './scripts';

const app = new App();

app.bgshapes.on('click', e => {
  const position = e.data.global;
  createShapes(position);
});

setInterval(() => {
  for (let i = 1; i <= shapesPerSec; i += 1) {
    createShapes(setRandomPosition());
  }
}, 1000);
