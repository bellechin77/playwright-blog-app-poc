import { Page, Locator } from '@playwright/test';

export class ArticlePage {
  private page: Page;
  private searchInput: Locator;
  private articleLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search articles...');
  }

  async searchArticle(articleTitle: string) {
    await this.searchInput.fill(articleTitle);
    await this.page.keyboard.press('Enter');
  }

  async openArticle(articleTitle: string) {
    this.articleLink = this.page.getByRole('link', { name: articleTitle });
    await this.articleLink.click();
  }
}
