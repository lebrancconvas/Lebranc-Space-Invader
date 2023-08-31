import { canvas, ctx, config } from './canvas';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
class Player {
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
    if(this.image) {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }


}

class Projectile {
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

const keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  },
  space: {
    pressed: false
  }
};

window.addEventListener('keydown', (event: KeyboardEvent) => {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left.pressed = true;
      break;
    case 'ArrowRight':
      keys.right.pressed = true;
      break;
    case 'Space':
      keys.space.pressed = true;
      break;
  }
});

window.addEventListener('keyup', (event: KeyboardEvent) => {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      keys.right.pressed = false;
      break;
    case 'Space':
      keys.space.pressed = false;
      break;
  }
});

const player = new Player();
const projectiles: Projectile[] = [];

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  if(keys.left.pressed && player.position.x >= player.width / 2) player.position.x -= player.velocity.x;
  else if(keys.right.pressed && player.position.x <= canvas.width - (player.width)) player.position.x += player.velocity.x;
  else if(keys.space.pressed) {
    const projectile = new Projectile(player.position.x + player.width / 2, player.position.y, 5, 'Yellow');
    projectiles.push(projectile);
  }
  player.draw();
  projectiles.forEach((projectile: Projectile, index: number) => {
    if(projectile.y <= projectile.radius) {
      projectiles.splice(index, 1);
    } else {
      projectile.update();
    }
  });
};

animate();
