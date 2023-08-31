import { canvas, ctx, config } from './canvas';
import { Player, Projectile, Enemy } from './components';
import { keys, keydownAction, keyupAction } from './actions';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
window.addEventListener('keydown', keydownAction);
window.addEventListener('keyup', keyupAction);

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
  for(let i = 1; i <= 10; i++) {
    const enemy = new Enemy(i * 50, 50);
    enemy.draw();
  }
  projectiles.forEach((projectile: Projectile, index: number) => {
    if(projectile.y <= projectile.radius) {
      projectiles.splice(index, 1);
    } else {
      projectile.update();
    }
  });
};

animate();
