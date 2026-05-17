import { GAME_CONFIG } from './utils/constants.js';
import { InputManager } from './managers/InputManager.js';
import { Player } from './entities/Player.js';
import { ObjectPool } from './utils/ObjectPool.js'; 
import { Bullet } from './entities/Bullet.js';     
import { Enemy } from './entities/Enemy.js';         
import { SpawnSystem } from './systems/SpawnSystem.js'; 
import { CollisionSystem } from './systems/CollisionSystem.js'; // Import baru

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvas.width = GAME_CONFIG.GAME_WIDTH;
    this.canvas.height = GAME_CONFIG.GAME_HEIGHT;

    this.lastTime = 0;
    this.deltaTime = 0;

    this.initSystems();
  }

  initSystems() {
    this.inputManager = new InputManager();
    
    this.bulletPool = new ObjectPool(() => new Bullet(), 50);
    this.enemyPool = new ObjectPool(() => new Enemy(), 30); 
    
    this.player = new Player(this);
    this.spawnSystem = new SpawnSystem(this);
    
    this.collisionSystem = new CollisionSystem(this); 
  }

  loop(timestamp) {
    this.deltaTime = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;
    if (this.deltaTime > 0.1) this.deltaTime = 0.1;

    this.update(this.deltaTime);
    this.draw();

    requestAnimationFrame((ts) => this.loop(ts));
  }

  update(dt) {
    this.player.update(dt);
    this.bulletPool.updateAll(dt);
    this.enemyPool.updateAll(dt); 
    this.spawnSystem.update(dt);  
    
    this.collisionSystem.update(); 
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.bulletPool.drawAll(this.ctx);
    this.enemyPool.drawAll(this.ctx); 
    this.player.draw(this.ctx);
  }

  start() {
    requestAnimationFrame((ts) => {
      this.lastTime = ts;
      this.loop(ts);
    });
  }
}