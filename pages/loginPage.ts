import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async goToLoginPage() {
    await this.page.goto("/login");
  }

  async setEmail(email: string) {
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
  }
  async setPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }
  async clickSignIn() {
    await this.page.getByRole("button", { name: "Sign In" }).click();
  }
}
