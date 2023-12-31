import { Enemy, Projectile, projectiles } from "../components";
import { checkCollision } from "./checkCollision";

export function shootProjectile(enemy: Enemy) {
  projectiles.forEach((projectile: Projectile, index: number) => {
    if (checkCollision(enemy, projectile)) {
      projectiles.splice(index, 1);
      enemy.destroy();
    } else {
      projectile.update();
    }
  });
};
