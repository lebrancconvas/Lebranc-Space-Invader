import { ctx } from "../canvas";

export class Enemy {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillStyle = "Orange";
    ctx.fillRect(this.x, this.y, 50, 50);
  }

  destroy() {
    this.x = -10000000;
    this.y = -10000000;
  }
}
