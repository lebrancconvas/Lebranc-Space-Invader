import { canvas, ctx, config } from './canvas';
import { Player, Projectile } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

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
