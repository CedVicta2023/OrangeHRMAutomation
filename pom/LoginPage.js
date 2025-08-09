// @ts-check
import ActionDriver from '../main/ActionDriver';
require('@playwright/test');


class LoginPage {
    static actiondriver;

    static initialize(page) {
        LoginPage.actiondriver = new ActionDriver(page);
    }
    static UserNameTextfield = {
        locator: "//input[@name='username']",
        setText: async function (value) {
            await LoginPage.actiondriver.setText(this.locator, value);
        }
    };

    static PasswordTextfield = {
        locator: "//input[@name='password']",
        setText: async function (value) {
            await LoginPage.actiondriver.setText(this.locator, value);
        }
    };

    static LoginButton = {
        locator: "//button[contains(.,'Login')]",
        clickElement: async function () {
            await LoginPage.actiondriver.clickElement(this.locator);
        }
    };
}

export default LoginPage;
