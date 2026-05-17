export class CollisionSystem {
  constructor(game) {
    this.game = game;
  }

  checkAABB(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

  update() {
    if (this.game.isGameOver) return;

    const bullets = this.game.bulletPool.pool;
    const enemies = this.game.enemyPool.pool;
    const player = this.game.player;

    for (let j = 0; j < enemies.length; j++) {
      const e = enemies[j];
      if (!e.active) continue;

      if (this.checkAABB(player, e)) {
        this.game.isGameOver = true;
        
        this.game.particleSystem.createExplosion(player.x + player.width/2, player.y + player.height/2, player.color, 50);
        return; 
      }

      for (let i = 0; i < bullets.length; i++) {
        const b = bullets[i];
        if (!b.active) continue;

        if (this.checkAABB(b, e)) {
          e.active = false;
          b.active = false;
          
          this.game.score += 10;
          this.game.particleSystem.createExplosion(e.x + e.width/2, e.y + e.height/2, e.color, 15);
          break; 
        }
      }
    }
  }
}