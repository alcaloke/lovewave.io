// Lovewave Logo
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

      p.stroke(0);
      p.strokeWeight(0.2);

      p.push();
      p.fill(p.color('#b6e1fc'));
      p.translate(p.width * 2 / 9, p.height / 2);
      o.drawShape();
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
      p.pop();
      //eSmall 2
      p.push();
      p.fill(p.color('plum'));
      p.noStroke();
      p.translate(p.width * 8.1 / 9, p.height / 2);
      eSmall.drawShape();
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
      p.pop();
      //eSmall 1
      p.push();
      p.fill(p.color('gold'));
      p.noStroke();
      p.translate(p.width * 4.1 / 9, p.height / 2);
      eSmall.drawShape();
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
      p.fill(255);
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

// About Sketch
new p5(function(p) {
    let wave;
    let sample;
    let filter;
    let h, h1, h2;

    let n1_max = 0.4;
    let n1_min = 1.5;
    let n2_min = 1.3;
    let n2_max = 3.3;

    let bauhaus;
    let mute = true;
    let xr, yr;
    let r = 10;

    let x = 1;

    p.preload = function() {
      sample = p.loadSound('../assets/audio/D47 - 119.wav');
      bauhaus = p.loadFont('../assets/fonts/BauhausStd-Medium.otf')
      // sample  = p.loadSound('../assets/audio/C04 - 87.wav');
    }

    p.setup = function() {
      p.createCanvas(x * 300, x * 300);

      wave = new SuperShape(p, 3, x * 150, x * 150, 0.7, 2.3, 0.5); //
      p.colorMode(p.HSB, 1000);

      // sample.loop();
      sample.disconnect(filter);
      filter = new p5.LowPass;
      sample.connect(filter);
    }

    p.draw = function() {
      p.background(p.color('white'));
      p.strokeWeight(0.2)
      h1 = p.map(wave.n1, n1_min, n1_max, 21, 29);
      h2 = p.map(wave.n2, n2_min, n2_max, 21, 29);
      h = h1 * h2;
      // s = p.map(wave.n2, 1.3, 3.3, 0, 1000);
      // p.print(h);
      p.fill(h, 1000, 1000);

      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(-p.PI * 150 / 180);
      wave.drawShape();
      // wave.fluctuate();
      p.pop();

      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height && !mute) {
        wave.n2 = p.map(p.mouseX, 0, p.width, n2_min, n2_max);
        wave.n1 = p.map(p.mouseY, p.height, 0, n1_min, n1_max);
      };

      let freQ = p.map(wave.n2, n2_min, n2_max, 10, 22050 / 4);
      let res = p.map(wave.n1, n1_min, n1_max, 0, 10);

      filter.set(freQ, res);

      // Mute function
      p.textSize(18);
      p.textFont(bauhaus);
      p.textAlign(p.CENTER);

      xr = p.width - r * 2;
      yr = p.height - r * 2

      if (mute) {
        sample.stop();
        p.text("PLAY", xr, yr - 15);
        p.fill(p.color('limegreen'));

        p.ellipse(xr, yr, r * 2);
        p.masterVolume(0);
      } else if (!mute) {
        if(!sample.isPlaying()) {
          sample.loop();
        }
        p.text("STOP", xr, yr - 15);
        p.fill(p.color('darkred'));

        p.ellipse(xr, yr, r * 2);
        p.masterVolume(1);
      }
    }

    p.touchEnded = function() {
      let dx = p.dist(xr, yr, p.mouseX, p.mouseY)
      if (dx < r) {
        mute = !mute;
      }
    }


  },
  'aboutSketch');
