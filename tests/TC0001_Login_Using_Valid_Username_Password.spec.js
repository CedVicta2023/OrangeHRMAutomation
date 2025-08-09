// @ts-check

import { test } from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';
import HomePage from '../pom/HomePage';
import '../main/Hooks';
import { TC0001_Login_Using_Valid_Username_Password } from '../resources/TC0001_Login_Using_Valid_Username_Password.json';

test.describe('Saucedemo Login', () => {
    TC0001_Login_Using_Valid_Username_Password.forEach((item, index) => {
        test(`Login using password ${index + 1}`, async ({ page }) => {
            const actiondriver = new ActionDriver(page);
            await test.step('Login into site', async () => {

                await actiondriver.navigateURL(item.url);
                await LoginPage.UserNameTextfield.setText(item.username);
                await LoginPage.PasswordTextfield.setText(item.password);
                await LoginPage.LoginButton.clickElement();
            });
        });
    });
});