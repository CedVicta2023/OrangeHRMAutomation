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

  static clickDropDownUserRole = {
    locator: "//label[contains(text(),'User Role')]/parent::div/parent::div/div/div[@class='oxd-select-wrapper']/div",
    clickElement: async function () {
      await AdminPage.actiondriver.clickElement(this.locator);
    }
  };

  static selectUserRoleOption = {
    selectOption: async function (option) {
      await AdminPage.actiondriver.selectOptionByName(option);
    }
  };

  static EmployeeNameTextfieldHint = {
      locator: "//label[contains(text(),'Employee Name')]/parent::div/parent::div/div/div/div/input",
      setText: async function (value) {
          await AdminPage.actiondriver.setText(this.locator, value);
      }
  };

  static EmployeeNameSelectOption = {
      selectOption: async function () {
          await AdminPage.actiondriver.selectOptionByIndex();
      }
  };

  static clickDropDownStatus = {
    locator: "//label[contains(text(),'Status')]/parent::div/parent::div/div/div[@class='oxd-select-wrapper']/div",
    clickElement: async function () {
      await AdminPage.actiondriver.clickElement(this.locator);
    }
  };

  static selectStatusOption = {
    selectOption: async function (option) {
      await AdminPage.actiondriver.selectOptionByName(option);
    }
  };

  static UsernameTextfield = {
      locator: "//label[contains(text(),'Username')]/parent::div/parent::div/div/input",
      setText: async function (value) {
          await AdminPage.actiondriver.setText(this.locator, value);
      }
  };

  static PasswordTextfield = {
      locator: "//label[text()='Password']/parent::div/parent::div/div/input",
      setText: async function (value) {
          await AdminPage.actiondriver.setText(this.locator, value);
      }
  };

  static ConfirmPasswordTextfield = {
      locator: "//label[text()='Confirm Password']/parent::div/parent::div/div/input",
      setText: async function (value) {
          await AdminPage.actiondriver.setText(this.locator, value);
      }
  };

  static SaveNewUserButton = {
        locator: "//button[text()=' Save ']",
        clickElement: async function () {
            await AdminPage.actiondriver.clickElement(this.locator);
        }
    };
}

export default AdminPage;
