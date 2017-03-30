import { Demoapp5Page } from './app.po';

describe('demoapp5 App', () => {
  let page: Demoapp5Page;

  beforeEach(() => {
    page = new Demoapp5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
