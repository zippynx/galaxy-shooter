export class ObjectPool {
  constructor(createFn, initialSize) {
    this.pool = [];
    this.createFn = createFn;
    
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(this.createFn());
    }
  }

  get() {

    const item = this.pool.find(i => !i.active);
    if (item) return item;
    
    const newItem = this.createFn();
    this.pool.push(newItem);
    return newItem;
  }

  updateAll(dt) {
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].active) this.pool[i].update(dt);
    }
  }

  drawAll(ctx) {
    for (let i = 0; i < this.pool.length; i++) {
      if (this.pool[i].active) this.pool[i].draw(ctx);
    }
  }
}