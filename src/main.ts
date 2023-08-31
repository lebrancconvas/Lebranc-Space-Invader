import { canvas, ctx, config } from './canvas';
import { Projectile, Enemy, Player, projectiles } from './components';
import { keydownAction, keyupAction } from './actions';
import { playerMovement } from './events';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
window.addEventListener('keydown', keydownAction);
window.addEventListener('keyup', keyupAction);
const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  playerMovement(player);

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
