let angle = Math.PI / 4;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, angle, 0.01);
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
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();

    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
