import { ctx } from "../canvas";

export class Projectile {
  x: number;
  y: number;
  radius: number;
  color?: string;

  constructor(x: number, y: number, radius: number, color?: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color || 'White';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    this.y -= 10;
  }
};
