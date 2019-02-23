import { MemoryGameFactory } from './component/MemoryGameFactory.js';
import { MemoryGameView } from './component/MemoryGameView.js';
import { WithComponent } from '../../hocs/WithComponent.js';

const MemoryGameController = MemoryGameFactory(WithComponent(HTMLElement));

export { MemoryGameController, MemoryGameView };
