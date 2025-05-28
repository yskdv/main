import { test, expect } from "@playwright/test";
import { ContractorSearchPage } from "../pages/contractorSearchPage";
import { tourDetailhPage } from "../pages/tourDetailPage";
test.use({ storageState: ".auth/user.json" });

test("Verify the initial and detail price", async ({ page }) => {
  const contractorSearchPage = new ContractorSearchPage(page);
  //fill the form
  await contractorSearchPage.goToContractorSearchPage();
  await contractorSearchPage.arrivalDate("4");
  await contractorSearchPage.departureDate("20");
  await contractorSearchPage.nights("15");
  await contractorSearchPage.country("Turkey");
  await contractorSearchPage.currency("2");
  await contractorSearchPage.searchDate("20");
  await contractorSearchPage.rooms("2");
  await contractorSearchPage.children("1");
  await contractorSearchPage.childrenAges("3");
  await contractorSearchPage.hotel("HILLSIDE BEACH CLUB");
  await contractorSearchPage.hotelType("Superior Double (Type A)");
  await contractorSearchPage.food("FB+");
  await contractorSearchPage.search();
  //get the initial price
  const initialPrice = await contractorSearchPage.getInitialPrice();
  console.log("Initial price:", initialPrice);
  //go to the detail page
  await contractorSearchPage.clickOnDetails();
  const tourDetailPage = new tourDetailhPage(page);
  const detailPrice = await tourDetailPage.getDetailPrice();
  console.log("Detail price:", detailPrice);
  //verify the initial and detail price
  expect(initialPrice).toBe(detailPrice);
  console.log("Test passed");
  await page.close();
});
