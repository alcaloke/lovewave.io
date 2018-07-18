let l, o, w, a;
let vLeft, vRight;
let eBig, eSmall, eMid;

function setup() {
  let canvas = createCanvas(960, 192);
  canvas.parent('logo');
  l = new SuperShape(1, 80, 80, 0.4, 9.5, 0.3); // m, xr, xl, n1, n2, n3
  o = new SuperEllipse(60, 60, 2); // xr, xl, n
  vLeft = new SuperEllipse(60, 40, 2);
  vRight = new SuperEllipse(60, 40, 2);
  eBig = new SuperShape(2, 55, 55, 11.5, 20, 3.4);
  eSmall = new SuperEllipse(45, 45 * 2.5 / 3, 2);
  eMid = new SuperEllipse(45, 45 / 3, 2)
  w = new SuperShape(3, 80, 80, 0.7, 2.3, 0.5);
  a = new SuperShape(1, 60, 60, 2.7, 0.2, 2.2);
}

function draw() {
  background(color('white'));

  // // Guide
  stroke(0);
  strokeWeight(0.2);
  // line(0, height/2, width, height/2);
  //
  // let d = width / 9;
  // for (let i=0; i < 9; i++) {
  // 	line(i*d, 0, i*d, height);
  // }

  // "O"
  push();

  fill(color('#b6e1fc'));
  translate(width * 2 / 9, height / 2);
  o.drawShape();
  // o.fluctuate();
  pop();

  // vLeft 1
  push();
  noStroke();
  fill(color('hotpink'));
  translate(width * 2.85 / 9, height / 2);
  rotate(PI * 55 / 180);
  vLeft.drawShape();
  vLeft.fluctuate();
  pop();
  // vRight 1
  push();
  noStroke();
  fill(color('hotpink'));
  translate(width * 3.15 / 9, height / 2);
  rotate(-PI * 55 / 180);
  vRight.drawShape();
  vRight.fluctuate();
  pop();

  //eBig 2
  push();

  fill(color('hotpink'));
  translate(width * 8 / 9, height / 2);
  eBig.drawShape();
  // eBig.fluctuate();
  pop();
  //eSmall 2
  push();
  fill(color('plum'));
  noStroke();
  translate(width * 8.1 / 9, height / 2);
  eSmall.drawShape();
  // eSmall.fluctuate();
  pop();
  //eMid 2
  push();
  fill(color('hotpink'));
  noStroke();
  translate(width * 8.15 / 9, height / 2);
  eMid.drawShape();
  pop();

  // vLeft 2
  push();
  noStroke();
  fill(color('#b6e1fc'));
  translate(width * 6.85 / 9, height / 2);
  rotate(PI * 55 / 180);
  vLeft.drawShape();
  vLeft.fluctuate();
  pop();
  // vRight 2
  push();
  noStroke();
  fill(color('#b6e1fc'));
  translate(width * 7.15 / 9, height / 2);
  rotate(-PI * 55 / 180);
  vRight.drawShape();
  vRight.fluctuate();
  pop();

  //eBig 1
  push();
  fill(color('orange'));
  translate(width * 4 / 9, height / 2);
  eBig.drawShape();
  // eBig.fluctuate();
  pop();
  //eSmall 1
  push();
  fill(color('gold'));
  noStroke();
  translate(width * 4.1 / 9, height / 2);
  eSmall.drawShape();
  // eSmall.fluctuate();
  pop();
  //eMid 1
  push();
  fill(color('orange'));
  noStroke();
  translate(width * 4.15 / 9, height / 2);
  eMid.drawShape();
  pop();

  // "a"
  push();

  fill(color('plum'));
  translate(width * 6 / 9, height / 2);
  // rotate(-PI * 150 / 180);
  a.drawShape();
  // a.fluctuate();
  fill(255);
  // ellipse(4, 4, 40);
  pop();

  // "W"
  push();

  fill(color('#990099'));
  translate(width * 5 / 9, height / 2);
  rotate(-PI * 150 / 180);
  w.drawShape();
  w.fluctuate();
  pop();

  // "L"
  push();

  fill(color('plum'));
  translate(width / 9, height / 2);
  rotate(-PI / 2);
  l.drawShape();
  l.fluctuate();
  pop();


}
