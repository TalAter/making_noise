const width = 300;
const height = 300;
const padding = 30;
let z = 0;

// const getValue = (i, min, max) => random(min, max);
const getValue = (d1, d2, d3, min, max) => min + noise(d1 / 50, d2 / 50, d3 / 40) * max;

const chartValues = () => {
  const points = [];
  for (let x = padding; x < width - padding; x++) {
    for (let y = padding; y < height - padding; y++) {
      points.push(createVector(x, y));
    }
  }
  for (let i = 0; i < points.length; i++) {
    const { x } = points[i];
    const { y } = points[i];
    set(x, y, color(getValue(x, y, z, 0, 255)));
  }
  updatePixels();
};

const drawFPS = () => {
  fill(255);
  stroke(0);
  text(`${int(getFrameRate())} FPS`, padding, height - 15);
};

setup = function setup() {
  createCanvas(width, height);
};

draw = function draw() {
  background(0);
  chartValues();
  drawFPS();
  z++;
};
