import { allure } from 'allure-playwright';
import fs from 'fs';

//contains report generation and screenshot capture and attachment for failed steps

class ReportManager {
    constructor() { }

    async attachScreenshot(page, testInfo) {
        const screenshotsDir = './allure/screenshots';
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }
        const testName = testInfo.title;

        const status = testInfo.status;
        // Generate a timestamp to include in the filename
        const timestamp = new Date().toISOString().replace(/:/g, '-');

        // Construct the filename with the test name and timestamp
        const screenshotFilename = `${testName}_${timestamp}.png`;
        const screenshotPath = `${screenshotsDir}/${screenshotFilename}`;

        // Capture screenshot on failure
        if (status === "failed") {
            await page.screenshot({ path: screenshotPath });
            const screenshotData = fs.readFileSync(screenshotPath);

            // Attach the screenshot to the Allure report
            allure.attachment(`${testName}_${timestamp}`, screenshotData, 'image/png');
        }
    }
}

export default ReportManager;