import { KendoDemoPage } from './app.po';

describe('kendo-demo App', () => {
  let page: KendoDemoPage;

  beforeEach(() => {
    page = new KendoDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
