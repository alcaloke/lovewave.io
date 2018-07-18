class SuperEllipse {
  constructor(a, b, n) {
    this.a = a;
    this.b = b;
    this.n = n;

    this.dn = 0.005;
  }

  fluctuate() {
    this.n += this.dn;
    if(this.n > 2.4 || this.n < 2) {
      this.dn *= -1;
    }
  }

  drawShape() {
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.1) {
      let na = 2 / this.n;
      let x = pow(abs(cos(angle)), na) * this.a * this.sgn(cos(angle));
      let y = pow(abs(sin(angle)), na) * this.b * this.sgn(sin(angle));
      vertex(x, y);
    }
    endShape(CLOSE);
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
