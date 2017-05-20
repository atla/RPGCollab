import { RpgCollabPage } from './app.po';

describe('rpg-collab App', () => {
  let page: RpgCollabPage;

  beforeEach(() => {
    page = new RpgCollabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
