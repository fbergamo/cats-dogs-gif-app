import { CatsDogsAppPage } from './app.po';

describe('cats-dogs-app App', () => {
  let page: CatsDogsAppPage;

  beforeEach(() => {
    page = new CatsDogsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
