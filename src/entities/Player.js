import { GAME_CONFIG } from '../utils/constants.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = GAME_CONFIG.GAME_WIDTH / 2 - this.width / 2;
    this.y = GAME_CONFIG.GAME_HEIGHT - this.height - 20;
    this.speed = GAME_CONFIG.PLAYER_SPEED;
    this.color = GAME_CONFIG.COLORS.NEON_BLUE;
    this.fireRate = 0.15; 
    this.fireTimer = 0;
  } 

  reset() {
    this.x = GAME_CONFIG.GAME_WIDTH / 2 - this.width / 2;
    this.y = GAME_CONFIG.GAME_HEIGHT - this.height - 20;
    this.fireTimer = 0;
  }

  update(dt) {
    const input = this.game.inputManager;

    if (input.isMovingLeft()) this.x -= this.speed * dt;
    if (input.isMovingRight()) this.x += this.speed * dt;
    if (input.isMovingUp()) this.y -= this.speed * dt;
    if (input.isMovingDown()) this.y += this.speed * dt;

    if (this.x < 0) this.x = 0;
    if (this.x > GAME_CONFIG.GAME_WIDTH - this.width) this.x = GAME_CONFIG.GAME_WIDTH - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y > GAME_CONFIG.GAME_HEIGHT - this.height) this.y = GAME_CONFIG.GAME_HEIGHT - this.height;

    this.fireTimer += dt;
    if (input.isShooting() && this.fireTimer >= this.fireRate) {
      this.shoot();
      this.fireTimer = 0; 
    }
  }

  shoot() {
    const bullet = this.game.bulletPool.get();
    if (bullet) {
      bullet.spawn(this.x + this.width / 2, this.y);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x + this.width / 2, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}