import { test, expect } from '@playwright/test';
import { ArticlePage } from './articlePage';
import { CommentPage } from './commentPage';

test.describe('Blog Commenting Feature', () => {
  let articlePage: ArticlePage;
  let commentPage: CommentPage;

  // Before hook: Navigates to the homepage before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example-blog.com');
    articlePage = new ArticlePage(page);
    commentPage = new CommentPage(page);
  });

  // After hook: Takes a screenshot if the test fails
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
    }
  });

  // ✅ Test 1: Posting a valid comment
  test('should allow a user to post a comment on an article', async ({ page }) => {
    await articlePage.searchArticle('How to Learn TypeScript');
    await articlePage.openArticle('How to Learn TypeScript');
    
    await commentPage.postComment('This article is very helpful, thanks!');
    
    // Auto-retrying assertion: Waits until the comment is visible
    await commentPage.verifyCommentVisible('This article is very helpful, thanks!');
  });

  // ❌ Test 2: Prevent posting an empty comment
  test('should not allow posting an empty comment', async () => {
    await articlePage.openArticle('Understanding Async/Await');
    await commentPage.postComment('');

    // Non-retrying assertion: Fails immediately if the button isn't disabled
    expect(await commentPage.postButton.isDisabled()).toBeTruthy();
  });
});
