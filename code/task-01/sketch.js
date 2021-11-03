// Erstellung des Canvas
function setup() {
  createCanvas(400, 400);
}

// Funktion zum Zeichnen
function draw() {
  background(120, 80, 900);
  fill(0, 70, 20); // Füllfarbe der Kreise
  strokeWeight(5); // Strichstärke
  circle(20, 20, 20); // Erstellung der Form
  fill(120, 250, 180);
  arc(100, 100, 25, 25, 0, Math.PI, OPEN); // Extra Form
  ellipse(50, 70, 20, 50);
  line(10, 10, 40, 40);
  square(160, 80, 40);
  rect(200, 150, 40, 20);
}
