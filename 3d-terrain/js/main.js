const gridWidth = 2000;
const gridHeight = 600;
const gridSize = 5;
const rows = gridHeight / gridSize;
const cols = gridWidth / gridSize;
const heightMap = [];

setup = function setup() {
  createCanvas(600, 600, WEBGL);

  for (let y = 0; y < rows; y++) {
    heightMap[y] = [];
    for (let x = 0; x < cols; x++) {
      heightMap[y][x] = map(noise(x * 0.02, y * 0.02), 0, 1, -100, 100);
    }
  }
};

draw = function draw() {
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 100);
  translate(-width / 2, 100);
  rotateX(HALF_PI);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * gridSize, y * gridSize, heightMap[y][x]);
      vertex(x * gridSize, (y + 1) * gridSize, heightMap[y + 1][x]);
    }
    endShape();
  }
  noLoop();
};
