import { GAME_CONFIG } from '../utils/constants.js';

export class SpawnSystem {
  constructor(game) {
    this.game = game;
    this.spawnRate = 1.0; 
    this.spawnTimer = 0;
  }

  update(dt) {
    this.spawnTimer += dt;

    if (this.spawnTimer >= this.spawnRate) {
      this.spawnEnemy();
      this.spawnTimer = 0;
    }
  }

  spawnEnemy() {
    const enemy = this.game.enemyPool.get();
    
    if (enemy) {

      const randomX = Math.random() * (GAME_CONFIG.GAME_WIDTH - enemy.width);
      
      enemy.spawn(randomX, -enemy.height);
    }
  }
}