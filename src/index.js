import * as PIXI from 'pixi.js';
import './styles.css';

import AppModel from './AppModel';
import AppView from './AppView';
import AppController from './AppController';
import refs from './refs';

const { div } = refs;

const APP_SIZE = {
  BOARD_WIDTH: 1100,
  BOARD_HEUGHT: 400,
  MAX_SHAPE_SIZE: 50,
};
const app = new PIXI.Application({
  width: APP_SIZE.BOARD_WIDTH,
  height: APP_SIZE.BOARD_HEUGHT,
  backgroundColor: 0x4e3030,
});

div.appendChild(app.view);

const model = new AppModel(app, APP_SIZE),
  view = new AppView(model),
  controller = new AppController(model, view);
