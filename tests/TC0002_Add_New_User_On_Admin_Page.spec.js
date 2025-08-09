// @ts-check

import { test } from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';
import AdminPage from '../pom/AdminPage';
import Navigation from '../pom/Navigation';
import '../main/Hooks';
import { TC0001_Login_Using_Valid_Username_Password } from '../resources/TC0001_Login_Using_Valid_Username_Password.json';
// Import or define loginUsingValidCredentials
import loginUsingValidCredentials from '../main/ModuleGroup';


test.describe('OrangeHRM Admin', () => {
    TC0001_Login_Using_Valid_Username_Password.forEach((item, index) => {
        test(`Login using password ${index + 1}`, async ({ page }) => {
            const actiondriver = new ActionDriver(page);
            Navigation.initialize(page);
            AdminPage.initialize(page); 

            await test.step('Login into site', async () => {
                await loginUsingValidCredentials(page,item);
                await actiondriver.waitForPageToLoad();
            });

            await test.step('Navigate to Admin Page', async () => {
                await Navigation.navigateAdmin.clickAdmin()
                await actiondriver.waitForPageToLoad();
            });

            await test.step('Add New User', async () => {
                await AdminPage.clickBtnAddUser.clickElement()
            });

            await page.waitForTimeout(10000);
        });
    });
});
