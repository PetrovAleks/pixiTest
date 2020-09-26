import { App, Shapes } from './app';
import refs from './refs';

import './styles.css';

import { setRandomPosition, shapesPerSec } from './scripts';

const app = new App();

app.createApp();
app.createBackBackground();

app.bgshapes.on('click', e => {
  const position = e.data.global;
  new Shapes(position);
});

setInterval(() => {
  for (let i = 1; i <= shapesPerSec; i += 1) {
    new Shapes(setRandomPosition());
  }
}, 1000);
