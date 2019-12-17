const pointCount = 500;
const r = 100;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1) => map(noise(d1 / 60), 0, 1, min, max);

const drawShape = () => {
  translate(width / 2, height / 2);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < pointCount; i++) {
    const ang = map(i, 0, pointCount - 1, 0, TWO_PI);
    const r2 = r * getValue(0.6, 1.3, i);
    const x = r2 * cos(ang);
    const y = r2 * sin(ang);
    vertex(x, y);
  }
  endShape(CLOSE);
};

setup = function setup() {
  createCanvas(300, 300);
};

draw = function draw() {
  background(0);
  drawShape();
  noLoop();
};
