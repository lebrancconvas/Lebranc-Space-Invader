import { Enemy } from "../components";

export function generateEnemy(number: number) {
  for (let i = 1; i <= number; i++) {
    const enemy = new Enemy(i * 50, 50);
    enemy.draw();
  }
};
