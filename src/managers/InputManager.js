export class InputManager {
  constructor() {
    this.keys = new Set();
    this.init();
  }
  
  isRestarting() { 
    return this.isKeyPressed('Enter') || this.isKeyPressed('Space'); 
  }
  
  init() {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
  }
  isShooting() { return this.isKeyPressed('Space'); }
  isKeyPressed(keyCode) {
    return this.keys.has(keyCode);
  }

  isMovingLeft() { return this.isKeyPressed('ArrowLeft') || this.isKeyPressed('KeyA'); }
  isMovingRight() { return this.isKeyPressed('ArrowRight') || this.isKeyPressed('KeyD'); }
  isMovingUp() { return this.isKeyPressed('ArrowUp') || this.isKeyPressed('KeyW'); }
  isMovingDown() { return this.isKeyPressed('ArrowDown') || this.isKeyPressed('KeyS'); }
}