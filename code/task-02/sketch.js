
const sketchHeight = 400;
const sketchWidth = 400;
const shapeSize = 40;

let colorValues = [50, 100, 200];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}
let test = 0;
function draw() {
  noLoop();
  background(255);
  strokeWeight(5);
  for (let y = 0; y < sketchHeight; y += shapeSize) 
  {
    for (let x = 0; x < sketchWidth; x += shapeSize) 
    {
      let counter = Math.round(random(0.5,3.5));
      if(counter == 1){

        fill("white");
        circle(x + shapeSize/2, y + shapeSize/2, shapeSize);
      }else if(counter == 2){
        fill("white");
        let triangleType = Math.round(random(-0.5, 3.4999));
        if (triangleType == 0) {
          triangle(
            x, y,
            x + shapeSize, y,
            x + shapeSize, y + shapeSize
          );
        }else if (triangleType == 1) {
          triangle(
            x + shapeSize, y,
            x + shapeSize, y + shapeSize,
            x, y + shapeSize
          );
        }else if (triangleType == 2) {
          triangle(
            x + shapeSize, y + shapeSize,
            x, y + shapeSize,
            x, y
          )
        } else if (triangleType == 3){
          triangle(
            x, y + shapeSize,
            x + shapeSize, y + shapeSize,
            x + shapeSize, y
          );
        }
      }else if(counter == 3){

        fill("white");
        rect(x, y, shapeSize)
      }
    }
  }
}

