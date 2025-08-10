// @ts-check
import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';
import AdminPage from '../pom/AdminPage';
import Navigation from '../pom/Navigation';
import '../main/Hooks';
import { TC0002_Add_New_User_On_Admin_Page } from '../resources/TC0002_Add_New_User_On_Admin_Page.json';
import {loginUsingValidCredentials, addNewUser } from '../main/ModuleGroup';


test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test.describe('OrangeHRM Admin', () => {
    TC0002_Add_New_User_On_Admin_Page.forEach((item, index) => {
        test(`Add new ESS user`, async ({ page }) => {
            const actiondriver = new ActionDriver(page);
            await test.step(`Access URL ${item.url}`, async () => {
                await actiondriver.navigateURL(item.url);
                
            });

            await test.step('Login into site', async () => {
                await loginUsingValidCredentials(page,item);
            });

            await test.step('Navigate to Admin Page', async () => {
                await Navigation.navigateAdmin.clickAdmin()
                await actiondriver.waitForPageToLoad();
            });

            await test.step('Add New User', async () => {
                await AdminPage.clickBtnAddUser.clickElement();
                await addNewUser(item);
            });

            await page.waitForTimeout(3000);
        });
    });
});
