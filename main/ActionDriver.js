// @ts-check
import { expect } from '@playwright/test';

// This file contains all the methods you want to use on your tests
class ActionDriver {
    constructor(page) {
        this.page = page;
    }

    getElement(locator) {
        const element = this.page.locator(locator);
        return element;
    }

    //open desired URL    
    async navigateURL(value) {
        await this.page.goto(value);
    }

    //click desired element
    async clickElement(locator) {
        await this.getElement(locator).click();
    }

    //input text in desired element
    async setText(locator, value) {
        await this.getElement(locator).fill(value);
    }

    //verify page title if matched witch expected value
    async verifyTitle(value) {
        await expect(this.page).toHaveTitle(value);

    }

    //verify element if is displayed
    async assertElementDisplayed(locator) {
        await expect(this.getElement(locator)).toBeVisible();

    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    //verify element if is not displayed
    async assertElementNotDisplayed(locator) {
        await expect(this.getElement(locator)).toBeHidden();
    }

    async selectOptionByName(option) {
        await this.page.getByRole('option', { name: option }).click();
    }
}
export default ActionDriver;

