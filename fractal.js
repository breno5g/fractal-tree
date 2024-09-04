let angle = Math.PI / 4;
let slider;

let checkbox;

const pastelColors = [
  [255, 128, 144],
  [255, 194, 128],
  [255, 255, 128],
  [128, 255, 160],
  [128, 255, 255],
  [128, 194, 255],
  [194, 128, 255],
  [255, 128, 255],
  [255, 128, 194],
  [255, 153, 153],
  [255, 204, 153],
  [255, 255, 153],
  [153, 255, 153],
  [153, 255, 255],
  [153, 204, 255],
  [204, 153, 255],
  [255, 153, 204],
  [255, 102, 102],
  [255, 153, 102],
  [153, 255, 102],
];

const createCheckboxToDisaleLoop = () => {
  checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      noLoop();
    } else {
      loop();
    }
  });
  return checkbox;
};

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, angle, 0.01);

  createCheckboxToDisaleLoop();
  document.body.appendChild(checkbox);
}

function draw() {
  background(0);

  angle = slider.value();
  stroke(255);

  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  // rotate(angle);
  if (len > 2) {
    if (checkbox.checked) stroke(random(pastelColors));
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();

    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
    // stroke(255);
  }
}
