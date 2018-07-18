class SuperEllipse {
  constructor(p, a, b, n) {
    this.a = a;
    this.b = b;
    this.n = n;

    this.dn = 0.005;

    this.p = p;
  }

  fluctuate() {
    this.n += this.dn;
    if(this.n > 2.4 || this.n < 2) {
      this.dn *= -1;
    }
  }

  drawShape() {
    let p = this.p;
    p.beginShape();
    for (let angle = 0; angle < p.TWO_PI; angle += 0.1) {
      let na = 2 / this.n;
      let x = p.pow(p.abs(p.cos(angle)), na) * this.a * this.sgn(p.cos(angle));
      let y = p.pow(p.abs(p.sin(angle)), na) * this.b * this.sgn(p.sin(angle));
      p.vertex(x, y);
    }
    p.endShape(p.CLOSE);
  }

  sgn(x) {
    if (x > 0) {
      return 1;
    } else if (x < 0) {
      return -1;
    } else {
      return 0;
    }
  }
}
