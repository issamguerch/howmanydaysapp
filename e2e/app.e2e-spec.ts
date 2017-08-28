import { HowManyDaysPage } from './app.po';

describe('how-many-days App', () => {
  let page: HowManyDaysPage;

  beforeEach(() => {
    page = new HowManyDaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
