import { GAME_CONFIG } from '../utils/constants.js';

export class HUD {
  constructor(game) {
    this.game = game;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px "Courier New", Courier, monospace';
    ctx.textAlign = 'left';
    ctx.shadowBlur = 5;
    ctx.shadowColor = GAME_CONFIG.COLORS.NEON_BLUE;

    ctx.fillText(`SCORE: ${this.game.score}`, 20, 40);

    if (this.game.isGameOver) {
      ctx.fillStyle = GAME_CONFIG.COLORS.NEON_RED;
      ctx.font = 'bold 48px "Courier New", Courier, monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = GAME_CONFIG.COLORS.NEON_RED;
      
      ctx.fillText('SYSTEM FAILURE', GAME_CONFIG.GAME_WIDTH / 2, GAME_CONFIG.GAME_HEIGHT / 2);
      
      ctx.font = '20px "Courier New", Courier, monospace';
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 0;
      ctx.fillText('Press ENTER to reboot', GAME_CONFIG.GAME_WIDTH / 2, GAME_CONFIG.GAME_HEIGHT / 2 + 40);
    }
    
    ctx.restore();
  }
}