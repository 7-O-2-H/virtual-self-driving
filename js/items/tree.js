class Tree {
  constructor(center, size, heigthCoef = 0.3) {
    this.center = center;
    this.size = size; //base of tree
    this.heigthCoef = heigthCoef;
  }

  draw(ctx, viewPoint) {

    const diff = subtract(this.center, viewPoint);
    const top = add(this.center, scale(diff, this.heigthCoef));

    const levelCount = 7;
    for (let level = 0; level < levelCount; level++) {
      const t = level / (levelCount - 1);
      const point = lerp2D(this.center, top, t);
      const color = "rgb(30," + lerp(50, 200, t) + ",70)";
      const size = lerp(this.size, 40, t);
      point.draw(ctx, { size, color });
    }
  }
}