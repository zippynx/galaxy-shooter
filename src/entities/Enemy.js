import { GAME_CONFIG } from '../utils/constants.js';

export class Enemy {
  constructor() {
    this.active = false;
    this.width = 30;
    this.height = 30;
    this.x = 0;
    this.y = 0;
    this.speed = 150;
    this.color = GAME_CONFIG.COLORS.NEON_RED;
  }

  spawn(x, y) {
    this.active = true;
    this.x = x;
    this.y = y;
  }

  update(dt) {
    if (!this.active) return;
    
    this.y += this.speed * dt;

    if (this.y > GAME_CONFIG.GAME_HEIGHT) {
      this.active = false;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    
    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    
    ctx.beginPath();
    ctx.moveTo(this.x + this.width / 2, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height / 2);
    ctx.lineTo(this.x + this.width / 2, this.y + this.height);
    ctx.lineTo(this.x, this.y + this.height / 2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}