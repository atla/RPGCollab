import { RpgFrontendPage } from './app.po';

describe('rpg-frontend App', () => {
  let page: RpgFrontendPage;

  beforeEach(() => {
    page = new RpgFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
