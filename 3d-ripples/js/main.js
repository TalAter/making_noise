const spheres = [];
const sections = 40;
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
  camera(0, 800, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
};

draw = function draw() {
  background(0);
  pointLight(250, 250, 250, 0, 0, 500);

  for (let index = 0; index <= sections; index++) {
    const ang = map(index, 0, sections, 0, TWO_PI);
    const dist = 0;
    spheres.push({ r: 2, dist, ang, alpha: 255 });
  }

  spheres.forEach(({ r, dist, ang, alpha }, i) => {
    if (alpha < 0) {
      return;
    }
    if (dist > width / 4) {
      alpha -= 10;
    }
    push();
    const { x, y } = getCirclePoint(ang, dist);
    const z = getValue(-90, 90, i);
    translate(x, y, z);
    ambientMaterial(getValue(0, 255, i), 0, 255 - getValue(0, 255, i), alpha);
    noStroke();
    sphere(r);
    spheres[i].dist += 5;
    spheres[i].alpha = alpha;
    pop();
    t++;
  });
};
