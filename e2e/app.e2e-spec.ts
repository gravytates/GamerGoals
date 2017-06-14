import { GamerGoalsPage } from './app.po';

describe('gamer-goals App', () => {
  let page: GamerGoalsPage;

  beforeEach(() => {
    page = new GamerGoalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
