import { unique } from '../helpers/unique.js';

let timer;
const board = document.querySelector('memory-game');

Object.defineProperties(board, {
  matched: {
    get () {
      return board._matched || [];
    },
    set (value) {
      board._matched = unique(value);
    }
  },
  selected: {
    get () {
      return board.revealed
        .filter(idx => !board.matched.includes(idx));
    }
  },
  gotNewMatch: {
    get () {
      return board.cards
        .filter((card, idx) => board.selected.includes(idx))
        .map(card => card.username)
        .reduce((prev, next) => prev === next);
    }
  }
});

board.addEventListener('try', evt => {
  const { index } = evt.detail;

  if (board.matched.length === board.cards.length) {
    console.log('game over');
    return undefined;
  }

  if (board.matched.includes(index)) {
    console.log('already matched');
    return undefined;
  }

  clearTimeout(timer);

  board.revealed = (board.selected.length === 2)
    ? [...board.matched, index]
    : [...board.revealed, index];

  if (board.selected.length === 2) {
    if (board.gotNewMatch) {
      board.matched = [...board.matched, ...board.selected];
    } else {
      timer = setTimeout(() => {
        board.revealed = [...board.matched];
      }, 4000);
    }
  }
});
