import refs from './refs';

const { btnShapesNumber, btnGravitiValue } = refs;

export default class AppController {
  model = null;
  background = null;
  view = null;
  constructor(appModel, appView) {
    this.model = appModel;
    this.view = appView;
    this.background = this.model.initStageBackground();
    this.onCLickCreateShape();
    this.initListeners();

    console.dir(this.background);
  }
  initListeners() {
    btnShapesNumber.addEventListener('click', evt => {
      this.model.setNumberShapes(evt);
    });
    btnGravitiValue.addEventListener('click', evt => {
      this.model.setGravityValue(evt);
    });
  }
  onCLickCreateShape() {
    this.background.on('click', evt => this.view.renderShape(evt.data?.global));
  }
}
