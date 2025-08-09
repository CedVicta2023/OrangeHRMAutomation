// @ts-check
require('@playwright/test');
import ActionDriver from '../main/ActionDriver';

//contains all locator for each page and corresponding actions to be executed on that element

class HomePage {
  static actiondriver;

  static initialize(page) {
    HomePage.actiondriver = new ActionDriver(page);
  }
  static Title = {
    locator: "//span[@class='title']",
    assertElementDisplayed: async function () {
      await HomePage.actiondriver.assertElementDisplayed(this.locator);
    }

  };
}

export default HomePage;
