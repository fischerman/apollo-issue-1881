import { ApolloTestPage } from './app.po';

describe('apollo-test App', () => {
  let page: ApolloTestPage;

  beforeEach(() => {
    page = new ApolloTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
