class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();

    this.selected = null;
    this.hovered = null;
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (e) => {
      const mouse = new Point(e.offsetX, e.offsetY);
      if(e.button === 2) { // rigth click
        if (this.hovered) {
          this.graph.removePoint(this.hovered);
        }
      }
      if (e.button === 0) {
        if (this.hovered) {
          this.selected = this.hovered;
          return;
        }
        this.graph.addPoint(mouse);
        this.selected = mouse;
      }
    });
    this.canvas.addEventListener("mousemove", (e) => {
      const mouse = new Point(e.offsetX, e.offsetY);
      this.hovered = getNearestPoint(mouse, this.graph.points, 10);
    });
    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  }
  
  display() {
    this.graph.draw(this.ctx);
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true });
    }
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}