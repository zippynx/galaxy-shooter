export class Particle {
  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.vx = 0; 
    this.vy = 0; 
    this.life = 0;
    this.maxLife = 0;
    this.size = 0;
    this.color = '';
  }

  spawn(x, y, color) {
    this.active = true;
    this.x = x;
    this.y = y;
    this.color = color;
    
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 150 + 50;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.size = Math.random() * 4 + 2;
    this.maxLife = Math.random() * 0.5 + 0.2; 
    this.life = this.maxLife;
  }

  update(dt) {
    if (!this.active) return;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    
    if (this.life <= 0) this.active = false;
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.save();
    
    ctx.globalAlpha = Math.max(0, this.life / this.maxLife); 
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}