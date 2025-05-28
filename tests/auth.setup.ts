import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const authFile = ".auth/user.json";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.setEmail(process.env.TEST_USER ?? "");
  await loginPage.setPassword(process.env.TEST_USER_PASSWORD ?? "");
  await loginPage.clickSignIn();
  await page.context().storageState({ path: authFile });
  await page.waitForURL("/contract-search");
});
