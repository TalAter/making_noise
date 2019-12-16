const width = 200;
const height = 200;
let z = 0;

// const getValue = (i, min, max) => random(min, max);
const getValue = (d1, d2, d3, min, max) => min + noise(d1 / 50, d2 / 50, d3 / 40) * max;

const chartValues = () => {
  const points = [];
  for (let x = 20; x < width - 20; x++) {
    for (let y = 20; y < height - 20; y++) {
      points.push(createVector(x, y));
    }
  }
  for (let i = 0; i < points.length; i++) {
    const { x } = points[i];
    const { y } = points[i];
    stroke(getValue(x, y, z, 0, 255));
    point(x, y);
  }
};

setup = function setup() {
  createCanvas(width, height);
};

draw = function draw() {
  background(0);
  chartValues();
  z++;
};
