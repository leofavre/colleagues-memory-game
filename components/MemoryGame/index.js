import { MemoryGameController, MemoryGameView } from './core.js';

export const MemoryGame = MemoryGameController(MemoryGameView);

if (!customElements.get('memory-game')) {
  customElements.define('memory-game', MemoryGame);
}
