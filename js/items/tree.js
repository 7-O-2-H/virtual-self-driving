class Tree {
  constructor(center, size) {
    this.center = center;
    this.size = size; //base of tree
  }

  draw(ctx) {
    //const diff = subtract(this.center, viewPoint);

    this.center.draw(ctx, { size: this.size, color: "green" })

    // const top = add(this.center, diff);
    // new Segment(this.center, top).draw(ctx);
  }
}