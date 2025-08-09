// @ts-check

import { test } from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';
import HomePage from '../pom/HomePage';
import '../main/Hooks';
import { credentials } from '../resources/testdata.json';

test.describe('Saucedemo Login', () => {
    credentials.forEach((item, index) => {

        test(`Login using password ${index + 1}`, async ({ page }) => {
            const actiondriver = new ActionDriver(page);
            await test.step('Login into site', async () => {

                await actiondriver.navigateURL("https://www.saucedemo.com/");
                await LoginPage.UserNameTextfield.setText(item.username);
                await LoginPage.PasswordTextfield.setText(item.password);
                await LoginPage.LoginButton.clickElement();
                await actiondriver.verifyTitle("Swag Labs");
                await HomePage.Title.assertElementDisplayed();
            });
        });
    });
});