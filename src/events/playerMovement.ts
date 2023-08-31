import { keys } from "../actions";
import { canvas } from "../canvas";
import { Projectile, projectiles, Player } from "../components";

export function playerMovement(player: Player) {
  if (keys.left.pressed && player.position.x >= player.width / 2) player.position.x -= player.velocity.x;
  else if (keys.right.pressed && player.position.x <= canvas.width - (player.width)) player.position.x += player.velocity.x;
  else if (keys.space.pressed) {
    const projectile = new Projectile(player.position.x + player.width / 2, player.position.y, 5, 'Yellow');
    projectiles.push(projectile);
  }
  player.draw();
};
