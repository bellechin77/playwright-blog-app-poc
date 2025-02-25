import { Page, Locator } from '@playwright/test';

export class CommentPage {
  private page: Page;
  private commentInput: Locator;
  private postButton: Locator;
  private commentList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentInput = page.getByLabel('Write a comment');
    this.postButton = page.getByRole('button', { name: 'Post Comment' });
    this.commentList = page.locator('.comment-list');
  }

  async postComment(commentText: string) {
    await this.commentInput.fill(commentText);
    await this.postButton.click();
  }

  async verifyCommentVisible(commentText: string) {
    await this.page.waitForSelector(`.comment-list >> text=${commentText}`);
  }
}
