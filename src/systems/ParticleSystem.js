import { ObjectPool } from '../utils/ObjectPool.js';
import { Particle } from '../entities/Particle.js';

export class ParticleSystem {
  constructor() {
    this.pool = new ObjectPool(() => new Particle(), 200);
  }

  createExplosion(x, y, color, amount = 15) {
    for (let i = 0; i < amount; i++) {
      const p = this.pool.get();
      if (p) p.spawn(x, y, color);
    }
  }

  update(dt) { this.pool.updateAll(dt); }
  draw(ctx) { this.pool.drawAll(ctx); }
}