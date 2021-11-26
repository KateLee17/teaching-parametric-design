function setup() {
  // Create the canvas
  createCanvas(400, 400);
  background("white");
  noLoop();
}

function draw (){
  noStroke();
  fill (color(150));
  for(let i = 25;i < 375; i += 50){
    for(let n = 25; n <375; n += 50){
      rect(i,n,40,40)
    }
  }

  fill (color(75));
  ellipse(150, 275, 80, 80);
  ellipse(240, 240, 80, 80);
  triangle(300, 100, 320, 100, 310, 80);

  fill (color(0));
  translate(200, 200);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  save();
}