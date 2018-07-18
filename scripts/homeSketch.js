new p5(function(p) {

    let l, o, w, a;
    let vLeft, vRight;
    let eBig, eSmall, eMid;

    p.setup = function() {
      p.createCanvas(960, 192);

      l = new SuperShape(p, 1, 80, 80, 0.4, 9.5, 0.3); // m, xr, xl, n1, n2, n3
      o = new SuperEllipse(p, 60, 60, 2); // xr, xl, n
      vLeft = new SuperEllipse(p, 60, 40, 2);
      vRight = new SuperEllipse(p, 60, 40, 2);
      eBig = new SuperShape(p, 2, 55, 55, 11.5, 20, 3.4);
      eSmall = new SuperEllipse(p, 45, 45 * 2.5 / 3, 2);
      eMid = new SuperEllipse(p, 45, 45 / 3, 2)
      w = new SuperShape(p, 3, 80, 80, 0.7, 2.3, 0.5);
      a = new SuperShape(p, 1, 60, 60, 2.7, 0.2, 2.2);
    }

    p.draw = function() {
      p.background(p.color('white'));

      // // Guide
      p.stroke(0);
      p.strokeWeight(0.2);
      // line(0, height/2, width, height/2);
      //
      // let d = width / 9;
      // for (let i=0; i < 9; i++) {
      // 	line(i*d, 0, i*d, height);
      // }

      // "O"
      p.push();

      p.fill(p.color('#b6e1fc'));
      p.translate(p.width * 2 / 9, p.height / 2);
      o.drawShape();
      // o.fluctuate();
      p.pop();

      // vLeft 1
      p.push();
      p.noStroke();
      p.fill(p.color('hotpink'));
      p.translate(p.width * 2.85 / 9, p.height / 2);
      p.rotate(p.PI * 55 / 180);
      vLeft.drawShape();
      vLeft.fluctuate();
      p.pop();
      // vRight 1
      p.push();
      p.noStroke();
      p.fill(p.color('hotpink'));
      p.translate(p.width * 3.15 / 9, p.height / 2);
      p.rotate(-p.PI * 55 / 180);
      vRight.drawShape();
      vRight.fluctuate();
      p.pop();

      //eBig 2
      p.push();

      p.fill(p.color('hotpink'));
      p.translate(p.width * 8 / 9, p.height / 2);
      eBig.drawShape();
      // eBig.fluctuate();
      p.pop();
      //eSmall 2
      p.push();
      p.fill(p.color('plum'));
      p.noStroke();
      p.translate(p.width * 8.1 / 9, p.height / 2);
      eSmall.drawShape();
      // eSmall.fluctuate();
      p.pop();
      //eMid 2
      p.push();
      p.fill(p.color('hotpink'));
      p.noStroke();
      p.translate(p.width * 8.15 / 9, p.height / 2);
      eMid.drawShape();
      p.pop();

      // vLeft 2
      p.push();
      p.noStroke();
      p.fill(p.color('#b6e1fc'));
      p.translate(p.width * 6.85 / 9, p.height / 2);
      p.rotate(p.PI * 55 / 180);
      vLeft.drawShape();
      vLeft.fluctuate();
      p.pop();
      // vRight 2
      p.push();
      p.noStroke();
      p.fill(p.color('#b6e1fc'));
      p.translate(p.width * 7.15 / 9, p.height / 2);
      p.rotate(-p.PI * 55 / 180);
      vRight.drawShape();
      vRight.fluctuate();
      p.pop();

      //eBig 1
      p.push();
      p.fill(p.color('orange'));
      p.translate(p.width * 4 / 9, p.height / 2);
      eBig.drawShape();
      // eBig.fluctuate();
      p.pop();
      //eSmall 1
      p.push();
      p.fill(p.color('gold'));
      p.noStroke();
      p.translate(p.width * 4.1 / 9, p.height / 2);
      eSmall.drawShape();
      // eSmall.fluctuate();
      p.pop();
      //eMid 1
      p.push();
      p.fill(p.color('orange'));
      p.noStroke();
      p.translate(p.width * 4.15 / 9, p.height / 2);
      eMid.drawShape();
      p.pop();

      // "a"
      p.push();

      p.fill(p.color('plum'));
      p.translate(p.width * 6 / 9, p.height / 2);
      // rotate(-PI * 150 / 180);
      a.drawShape();
      // a.fluctuate();
      p.fill(255);
      // ellipse(4, 4, 40);
      p.pop();

      // "W"
      p.push();

      p.fill(p.color('#990099'));
      p.translate(p.width * 5 / 9, p.height / 2);
      p.rotate(-p.PI * 150 / 180);
      w.drawShape();
      w.fluctuate();
      p.pop();

      // "L"
      p.push();

      p.fill(p.color('plum'));
      p.translate(p.width / 9, p.height / 2);
      p.rotate(-p.PI / 2);
      l.drawShape();
      l.fluctuate();
      p.pop();


    }
  },
  'logo');
