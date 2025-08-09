// @ts-check
import ActionDriver from '../main/ActionDriver';
require('@playwright/test');

class Navigation {
  static actiondriver;

  static initialize(page) {
    Navigation.actiondriver = new ActionDriver(page);
  }

  static navigateAdmin = {
    locator: "//a[@href='/web/index.php/admin/viewAdminModule']",
    clickAdmin: async function () {
      await Navigation.actiondriver.clickElement(this.locator);
    }

  };
}

export default Navigation;
