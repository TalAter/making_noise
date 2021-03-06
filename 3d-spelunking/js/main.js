const r = 100;
const spheres = [];
let t = 0;

// const getValue = (min, max) => random(min, max);
const getValue = (min, max, d1, d2 = 0, d3 = 0) => map(noise(d1 / 250, d2 / 250, d3 / 120), 0, 1, min, max);

const getCirclePoint = (ang, rad) => {
  const x = rad * cos(ang);
  const y = rad * sin(ang);
  return { x, y };
};

setup = function setup() {
  createCanvas(600, 600, WEBGL);
};

draw = function draw() {
  background(100);
  pointLight(250, 250, 250, 0, 0, 500);

  const ang = getValue(0, 100, t);
  const { x, y } = getCirclePoint(ang, r);
  spheres.push({ x, y, z: -700 });
  t += 1;

  spheres.forEach(({ x, y, z }, i) => {
    if (z > 500) {
      spheres.splice(i, 1);
      return;
    }
    push();
    translate(x, y, z);
    ambientMaterial(245, 128, 122);
    noStroke();
    sphere(40);
    spheres[i].z += 10;
    pop();
  });
};
