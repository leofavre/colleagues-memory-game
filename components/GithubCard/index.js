import { GithubCardController, GithubCardView } from './core.js';

export const GithubCard = GithubCardController(GithubCardView);

if (!customElements.get('github-card')) {
  customElements.define('github-card', GithubCard);
}
