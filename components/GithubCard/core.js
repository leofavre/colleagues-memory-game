import { GithubCardFactory } from './component/GithubCardFactory.js';
import { GithubCardView } from './component/GithubCardView.js';
import { WithComponent } from '../../hocs/WithComponent.js';

const GithubCardController = GithubCardFactory(WithComponent(HTMLElement));

export { GithubCardController, GithubCardView };
