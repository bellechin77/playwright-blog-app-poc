# playwright-blog-app-poc
Playwright Green Badge Application 

# 📝 Playwright Blog Application Test Suite (TypeScript)

This project showcases a **Proof of Concept (PoC)** using **Playwright** with **TypeScript** to automate testing for a blog application. The tests cover:
- Searching for articles
- Opening articles
- Posting comments
- Verifying that comments are displayed correctly

The tests are built using the **Page Object Model (POM)** for better maintainability and scalability.

---

## 🚀 **Features**

- ✅ Interactions with web elements (buttons, inputs, forms)
- ✅ Usage of specific locators (`getByRole`, `getByLabel`, `getByPlaceholder`)
- ✅ Handling parent-child relationships (comments under blog posts)
- ✅ Structured Page Object Model (POM) for modularity
- ✅ Assertions with auto-retry and non-retry behaviors
- ✅ Use of `async/await` for handling asynchronous operations
- ✅ Debugging tools and error handling
- ✅ Test lifecycle hooks (`beforeEach`, `afterEach`)
- ✅ Built-in fixtures (`page`, `browser`, `context`)

---

## 📂 **Project Structure**

```
/tests
  ├── articlePage.ts          // Page Object for interacting with articles
  ├── commentPage.ts          // Page Object for handling comments
  ├── blog.spec.ts            // Main test suite for blog features
  ├── playwright.config.ts    // Playwright configuration
  └── README.md               // Project documentation
```

---

## 🔧 **Setup Instructions**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/bellechin77/playwright-blog-app-poc.git
cd playwright-blog-app-poc
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Install Playwright Browsers**

```bash
npx playwright install
```

---

## ✅ **Running the Tests**

### 🏃 **Run All Tests**

```bash
npx playwright test
```

### 📸 **Generate a Visual Report**

```bash
npx playwright show-report
```

### 🔍 **Run in Debug Mode**

For step-by-step debugging:

```bash
npx playwright test --debug
```

---

## ⚙️ **Configuration**

The `playwright.config.ts` file configures:
- Headless or headed mode
- Screenshot capture on test failure
- Test retries on failure
- HTML report generation

**Sample Configuration:**

```typescript
use: {
  headless: true,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  baseURL: 'https://example-blog.com',
},
retries: 1,
reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
```

---

## 🧪 **Test Scenarios Explained**

### 📄 **Test 1: Posting a Valid Comment**

- 🔍 Search for an article titled **"How to Learn TypeScript"**.
- 📖 Open the article.
- 💬 Post a comment: _"This article is very helpful, thanks!"_.
- ✅ Verify that the comment appears under the article.

### 🚫 **Test 2: Prevent Posting an Empty Comment**

- 📖 Open the article **"Understanding Async/Await"**.
- ❌ Try posting an empty comment.
- 🛍️ Ensure the **Post Comment** button remains disabled.

---

## 🔍 **Debugging Tips**

- **Use `page.pause()`** → Opens the Playwright Inspector for live debugging.
- **Log Console Messages:**
  ```typescript
  page.on('console', msg => console.log(msg.text()));
  ```
- **Capture Screenshots on Errors:**
  ```typescript
  await page.screenshot({ path: 'error.png' });
  ```
- **View Page Source:**
  ```typescript
  console.log(await page.content());
  ```

---

## 🛠️ **Built-in Fixtures**

Playwright provides built-in fixtures to handle browser instances and contexts:
- **`page`** → Represents a browser tab for testing.
- **`context`** → Manages multiple tabs (useful for multi-tab testing).
- **`browser`** → Controls the browser instance used for testing.

---

## 🔗 **Key Concepts Used**

### 🟢 **Auto-Retrying Assertion**

Playwright automatically retries until the condition is met or the timeout expires.

```typescript
await expect(commentList).toContainText(commentText);
```

### 🔴 **Non-Retrying Assertion**

Fails immediately if the condition is not met.

```typescript
expect(await postButton.isDisabled()).toBeTruthy();
```

### 🔁 **Hooks**

- **`beforeEach()`** → Runs before every test (e.g., setting up browser navigation).
- **`afterEach()`** → Runs after each test (e.g., taking screenshots if the test fails).

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 **Acknowledgments**

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)


