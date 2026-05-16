import { GAME_CONFIG } from '../utils/constants.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    // Start di tengah bawah
    this.x = GAME_CONFIG.GAME_WIDTH / 2 - this.width / 2;
    this.y = GAME_CONFIG.GAME_HEIGHT - this.height - 20;
    this.speed = GAME_CONFIG.PLAYER_SPEED;
    this.color = GAME_CONFIG.COLORS.NEON_BLUE;
  }

  update(dt) {
    const input = this.game.inputManager;

    // Time-based movement
    if (input.isMovingLeft()) this.x -= this.speed * dt;
    if (input.isMovingRight()) this.x += this.speed * dt;
    if (input.isMovingUp()) this.y -= this.speed * dt;
    if (input.isMovingDown()) this.y += this.speed * dt;

    // Boundary constraints (Collision dengan screen)
    if (this.x < 0) this.x = 0;
    if (this.x > GAME_CONFIG.GAME_WIDTH - this.width) this.x = GAME_CONFIG.GAME_WIDTH - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y > GAME_CONFIG.GAME_HEIGHT - this.height) this.y = GAME_CONFIG.GAME_HEIGHT - this.height;
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