import { MemoryGameFactory } from './component/MemoryGameFactory.js';
import { MemoryGameView } from './component/MemoryGameView.js';
import { withComponent } from '../../hocs/withComponent.js';

const MemoryGameController = MemoryGameFactory(withComponent(HTMLElement));

export { MemoryGameController, MemoryGameView };
