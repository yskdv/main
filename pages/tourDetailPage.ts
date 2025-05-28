import { Page } from "@playwright/test";
export class tourDetailhPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async getDetailPrice(): Promise<string> {
    const detailPrice = await this.page
      .locator('xpath=//*[@id="quotation-table"]/tbody/tr[8]/td[2]')
      .textContent();
    return detailPrice?.trim() || "";
  }
}
