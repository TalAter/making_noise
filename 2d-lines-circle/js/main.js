let t = 0;
const pointCount = 500;
const r = 100;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

const getCirclePoint = (ang, rad) => {
  const x = rad * cos(ang);
  const y = rad * sin(ang);
  return { x, y };
};

setup = function setup() {
  createCanvas(600, 600);
};

draw = function draw() {
  background(100);
  translate(width / 2, height / 2);
  strokeWeight(3);
  for (let i = 0; i < pointCount; i++) {
    const ang = getValue(0, TWO_PI, i, t);
    const ang2 = map(i, 0, pointCount - 1, 0, TWO_PI);
    const { x: x1, y: y1 } = getCirclePoint(ang, r);
    const { x: x2, y: y2 } = getCirclePoint(ang2, r);
    stroke(getValue(150, 255, i, 0), getValue(0, 40, 0, i), getValue(100, 200, 0, 0, i));
    line(x1, y1, x2, y2);
  }
  t += 1;
};
