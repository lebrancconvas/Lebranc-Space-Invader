import { canvas, ctx, config } from './canvas';
import { Player, Enemy } from './components';
import { keydownAction, keyupAction } from './actions';
import { playerMovement, generateEnemy, shootProjectile } from './events';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.
window.addEventListener('keydown', keydownAction);
window.addEventListener('keyup', keyupAction);
const player = new Player();
const enemy = new Enemy(50, 50);

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  playerMovement(player);

  // generateEnemy(10);
  enemy.draw();

  shootProjectile(enemy);
};

animate();
