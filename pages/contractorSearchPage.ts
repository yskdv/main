import { Page } from "@playwright/test";
export class ContractorSearchPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async goToContractorSearchPage() {
    await this.page.goto("/contract-search");
  }
  async arrivalDate(arrivalDate: string) {
    await this.page.getByRole("textbox", { name: "Заезд" }).click();
    await this.page.getByRole("cell", { name: "»" }).click();
    await this.page.getByRole("cell", { name: arrivalDate }).first().click();
  }
  async departureDate(departureDate: string) {
    await this.page.getByRole("textbox", { name: "Отъезд" }).click();
    await this.page
      .getByRole("cell", { name: departureDate, exact: true })
      .click();
  }
  async nights(nights: string) {
    await this.page.getByRole("textbox", { name: "Ночей" }).fill(nights);
  }
  async country(country: string) {
    await this.page.getByRole("textbox", { name: "Страна" }).click();
    await this.page.getByRole("searchbox").nth(4).fill("Turkey");
    await this.page.keyboard.press("Enter");
  }
  async currency(currency: string) {
    await this.page
      .locator('select[name="currency_id"]')
      .selectOption(currency);
  }
  async searchDate(searchDate: string) {
    await this.page.locator('input[name="search_date"]').click();
    await this.page
      .getByRole("cell", { name: searchDate, exact: true })
      .click();
  }
  async rooms(rooms: string) {
    await this.page
      .locator('select[name="rooms\\[1\\]\\[adults\\]"]')
      .selectOption(rooms);
  }
  async children(children: string) {
    await this.page
      .locator('select[name="rooms\\[1\\]\\[children\\]"]')
      .selectOption(children);
  }
  async childrenAges(childrenAges: string) {
    await this.page
      .locator('input[name="rooms\\[1\\]\\[children_ages\\]\\[0\\]"]')
      .fill(childrenAges);
  }
  async hotel(hotel: string) {
    await this.page
      .locator(
        'xpath=(//*[@id="search_form"]//span[contains(@class, "select2-selection__arrow")])[2]'
      )
      .click();
    await this.page.getByRole("searchbox").nth(4).fill(hotel);
    await this.page.getByRole("searchbox").nth(4).press("Enter");
    await this.page.waitForTimeout(500);
  }
  async hotelType(hotelType: string) {
    await this.page
      .locator(
        "#search_form > div.row > div:nth-child(2) > fieldset > div:nth-child(3) > div > span > span.selection > span > ul > li > input"
      )
      .click();
    await this.page
      .locator(
        "#search_form > div.row > div:nth-child(2) > fieldset > div:nth-child(3) > div > span > span.selection > span > ul > li > input"
      )
      .fill(hotelType);
    await this.page.keyboard.press("Enter");
  }
  async food(food: string) {
    await this.page
      .getByRole("group", { name: "Размещение" })
      .getByRole("list")
      .nth(1)
      .click();
    await this.page.getByRole("option", { name: food }).click();
  }
  async search() {
    await this.page.getByRole("button", { name: "Найти" }).click();
  }
  async getInitialPrice() {
    const initialPrice = await this.page
      .locator("span[data-original-title]")
      .innerText();
    return initialPrice.trim();
  }
  async clickOnDetails() {
    const href = await this.page
      .getByRole("link", { name: "Детали" })
      .getAttribute("href");
    if (href) {
      await this.page.goto(href);
    }
  }
}
