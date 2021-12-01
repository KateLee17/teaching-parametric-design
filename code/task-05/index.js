const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const donut = () => torus({ innerRadius: 1, outerRadius: 1.2 });
  let shapes  = donut();

  for (let i = 0; i < 4; i++){
    shapes = translate([7,0,0], shapes);
    
    let shape = donut();
    shape = colorize (colorNameToRgb("red"), shape);
    shape = translate([2,0,0], shape);  
    if (i == 0){
      shape = union ([shape, donut()]);
    } else if (i == 1){
      shape = subtract ([shape, donut()]);
    } else if (i == 2){
      shape = intersect ([shape, donut()]);
    } else if (i == 3){
      shape = scission ([shape, donut()]);
    }
    shapes = union([shapes, shape]);
  }
  return shapes;
};

module.exports = { main };