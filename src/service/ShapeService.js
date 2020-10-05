export default class ShapeService {
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
}
