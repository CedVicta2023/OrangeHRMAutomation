// @ts-check
import ActionDriver from '../main/ActionDriver';
require('@playwright/test');


class LoginPage {
    static actiondriver;

    static initialize(page) {
        LoginPage.actiondriver = new ActionDriver(page);
    }
    static UserNameTextfield = {
        locator: "//input[@id='user-name']",
        setText: async function (value) {
            await LoginPage.actiondriver.setText(this.locator, value);
        }
    };

    static PasswordTextfield = {
        locator: "//input[@id='password']",
        setText: async function (value) {
            await LoginPage.actiondriver.setText(this.locator, value);
        }
    };

    static LoginButton = {
        locator: "//input[@id='login-button']",
        clickElement: async function () {
            await LoginPage.actiondriver.clickElement(this.locator);
        }
    };
}

export default LoginPage;
