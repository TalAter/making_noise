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
  background(0);
  pointLight(250, 250, 250, 0, 0, 500);

  for (let index = 0; index < 10; index++) {
    const ang = getValue(0, 100, t);
    const { x, y } = getCirclePoint(ang, r);
    spheres.push({ x, y, z: -700, r: random(0, 1) });
    t += 1;
  }

  spheres.forEach(({ x, y, z, r }, i) => {
    if (z > 500) {
      spheres.splice(i, 1);
      return;
    }
    push();
    translate(x, y, z);
    ambientMaterial(getValue(0, 255, i * 0.2));
    noStroke();
    sphere(r);
    spheres[i].z += 5;
    spheres[i].x += getValue(-1, 1, (i + t) * 100);
    spheres[i].y += getValue(-1, 1, (i + t) * 100 + 5);
    pop();
  });
};
