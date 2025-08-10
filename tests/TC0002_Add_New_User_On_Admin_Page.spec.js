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
        height: 880,
        width: 1920
    }
});

test.describe('OrangeHRM Admin', () => {
    TC0002_Add_New_User_On_Admin_Page.forEach((item, index) => {
        test(`Login using password ${index + 1}`, async ({ page }) => {
            const actiondriver = new ActionDriver(page);
            Navigation.initialize(page);
            AdminPage.initialize(page); 

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
