export default class AppView {
  model = null;

  constructor(modelApp) {
    this.model = modelApp;

    this.start();
  }

  start() {
    setInterval(() => this.drawShapes(), 1000);
  }
  drawShapes() {
    const { MAX_SHAPE_SIZE, BOARD_WIDTH } = this.model.APP_SIZE;
    for (let i = 1; i <= this.model.shapesPerSec; i += 1) {
      const coords = this.model.getRandomPosition(
        MAX_SHAPE_SIZE,
        BOARD_WIDTH - MAX_SHAPE_SIZE,
      );
      this.renderShape(coords);
    }
  }
  renderShape(coords) {
    const shape = this.model.createShape(coords);
    this.model.onCLickRedrawShapes(shape);

    this.model.app.ticker.add(() => {
      shape.y += this.model.gravitiValue;
      this.model.destroyShape(shape);
    });

    this.model.counterShapes += 1;
    this.model.surfaceAreaValue += shape.surfaceArea;

    this.model.showValueSurfaceArea();
    this.model.showCurrentShapes();
    this.model.showNumberShapeSecond();
    this.model.showGravitiValue();
  }
}
