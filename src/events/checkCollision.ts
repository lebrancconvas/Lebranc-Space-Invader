import { Player, Projectile } from "../components";

export function checkCollision(player: Player, projectile: Projectile): boolean {
  return projectile.y - projectile.radius <= player.position.y + player.height;
};
