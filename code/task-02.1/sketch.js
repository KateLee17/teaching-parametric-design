function setup() {
  createCanvas(400, 400);
  noLoop();
}

let space = 20;

function draw() {
  background("black");
  for (x = 0; x < width; x += space) {
    for (y = 0; y < height; y += space) {
      fill("pink");
      beginShape();
      vertex(x+space/2, y+space/2);
      bezierVertex(x+space/2 - (space/2)/2, y+space/2 - (space/2)/2, x+space/2 - space/2, y+space/2 + (space/2)/3, x+space/2, y+space/2 + space/2 );
      bezierVertex(x+space/2 + space/2,y+space/2 + (space/2)/3, x+space/2 + (space/2)/2, y+space/2 - (space/2)/2, x+space/2, y+space/2);
      endShape(CLOSE);
    }
  }
}
