// @ts-check
import { test } from '@playwright/test';
import initializePages from './PageInitialize';
import ReportManager from '../utilities/ReportManager';

//Hook.js contains all setup for before each and after each test
const reportmanager = new ReportManager;

test.beforeEach('Page Initialization', async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 30000);
    await initializePages(page);

});

test.afterEach(async ({ page }, testInfo) => {
    await reportmanager.attachScreenshot(page, testInfo);

})
export { };