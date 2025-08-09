// @ts-check
require('@playwright/test');
import ActionDriver from '../main/ActionDriver';

//contains all locator for each page and corresponding actions to be executed on that element

class AdminPage {
  static actiondriver;

  static initialize(page) {
    AdminPage.actiondriver = new ActionDriver(page);
  }
  static clickBtnAddUser = {
    locator: "//button[contains(.,' Add ')]",
    clickElement: async function () {
      await AdminPage.actiondriver.clickElement(this.locator);
    }

  };
}

export default AdminPage;
