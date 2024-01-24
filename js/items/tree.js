class Tree {
  constructor(center, size, heigthCoef = 0.3) {
    this.center = center;
    this.size = size; //base of tree
    this.heigthCoef = heigthCoef;
  }

  draw(ctx, viewPoint) {

    const diff = subtract(this.center, viewPoint);

    this.center.draw(ctx, { size: this.size, color: "green" })

    const top = add(this.center, diff)
    new Segment(this.center, top).draw(ctx);
  }
}