import { AngularMaxPage } from './app.po';

describe('angular-max App', () => {
  let page: AngularMaxPage;

  beforeEach(() => {
    page = new AngularMaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
