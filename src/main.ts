import { canvas, ctx, config } from './canvas';
import { Player } from './components';
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

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  playerMovement(player);
  player.draw();

  generateEnemy(10);
  shootProjectile();
};

animate();
