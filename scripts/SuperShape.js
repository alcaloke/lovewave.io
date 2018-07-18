class SuperShape {
  constructor(m, xr, yr, n1, n2, n3) {
    this.m = m;
    this.xradius = xr;
    this.yradius = yr;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;

    this.a = 1;
    this.b = 1;

    this.dn1 = 0.005;
  }

  setShape(theta) {
    let part1 = (1 / this.a) * cos(theta * this.m / 4);
    part1 = abs(part1);
    part1 = pow(part1, this.n2);

    let part2 = (1 / this.b) * sin(theta * this.m / 4);
    part2 = abs(part2);
    part2 = pow(part2, this.n3);

    let part3 = pow(part1 + part2, 1 / this.n1);

    if (part3 === 0) {
      return 0;
    }

    return (1 / part3);
  }

  drawShape() {
    let divisor = 1000;
    let increment = TWO_PI / divisor;

    beginShape()
    for (let angle = 0; angle < TWO_PI; angle += increment) {
      let r = this.setShape(angle);
      let x = this.xradius * r * cos(angle);
      let y = this.yradius * r * sin(angle);

      vertex(x, y);
    }
    endShape(CLOSE);
  }

  fluctuate() {
    this.n1 += this.dn1;
    if (this.n1 > 1.5 || this.n1 < 0.4) {
      this.dn1 = this.dn1 * -1;
    }
  }
}
