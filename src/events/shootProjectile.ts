import { Projectile, projectiles } from "../components";

export function shootProjectile() {
  projectiles.forEach((projectile: Projectile, index: number) => {
    if (projectile.y <= projectile.radius) {
      projectiles.splice(index, 1);
    } else {
      projectile.update();
    }
  });
}
