import { GAME_CONFIG } from '../utils/constants.js';

export class Bullet {
  constructor() {
    this.active = false;
    this.width = 6;
    this.height = 20;
    this.x = 0;
    this.y = 0;
    this.speed = 800; 
    this.color = GAME_CONFIG.COLORS.NEON_PINK;
  }

  spawn(x, y) {
    this.active = true;
    this.x = x - this.width / 2; 
    this.y = y;
  }

  update(dt) {
    if (!this.active) return;
    
    this.y -= this.speed * dt;

    if (this.y + this.height < 0) {
      this.active = false;
    }
  }

  draw(ctx) {
    if (!this.active) return;
    
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, 5);
    ctx.fill();
    ctx.restore();
  }
}