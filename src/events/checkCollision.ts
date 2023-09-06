import { Enemy, Projectile } from "../components";

export function checkCollision(enemy: Enemy, projectile: Projectile): boolean {
  return projectile.y <= enemy.y + 50 && (projectile.x >= enemy.x && projectile.x <= enemy.x + 50);
};
