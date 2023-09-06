import { canvas, ctx, config } from './canvas';
import { Player, Enemy } from './components';
import { keydownAction, keyupAction } from './actions';
import { playerMovement, generateEnemy, shootProjectile } from './events';
import { audio } from './audio';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Input.

// Audio.
audio.bgm.play();

// Action.
window.addEventListener('keydown', keydownAction);
window.addEventListener('keyup', keyupAction);

// Initial.
const player = new Player();
const enemy = new Enemy(50, 50);

// Game Loop.
function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  playerMovement(player);

  // generateEnemy(10);
  enemy.draw();

  shootProjectile(enemy);
};

animate();
