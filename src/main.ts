import { canvas, ctx, config } from './canvas';
import { Player, Enemy } from './components';
import { keydownAction, keyupAction } from './actions';
import { playerMovement, generateEnemy, shootProjectile } from './events';
import { audio } from './audio';
import { random } from './helpers';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Input.

// Audio.
// audio.bgm.play();

// Action.
window.addEventListener('keydown', keydownAction);
window.addEventListener('keyup', keyupAction);

// Initial.
const player = new Player();
const enemies: Enemy[] = [];

for (let i = 1; i <= 10; i++) {
  const enemy = new Enemy(random(100, canvas.width - 100), Math.random() * config.height / 2);
  enemies.push(enemy);
}

// Game Loop.
function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, config.width, config.height);

  playerMovement(player);
  enemies.forEach((enemy: Enemy) => {
    enemy.draw();
    shootProjectile(enemy);
  });

};

animate();
