import { canvas, ctx } from "../canvas";

export class Player {
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
  image!: HTMLImageElement;
  width!: number;
  height!: number;

  constructor() {
    this.position = {
      x: canvas.width / 2 - 1,
      y: canvas.height - 180
    };

    this.velocity = {
      x: 10,
      y: 10
    }

    const image = new Image();
    image.src = '/assets/sprite/rocket.png';
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
    };
  }

  draw() {
    if (this.image) {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }

}
