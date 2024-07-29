function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  stroke(255, 255, 0);
  strokeWeight(16);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
