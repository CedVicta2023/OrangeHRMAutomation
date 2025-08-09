// @ts-check
import HomePage from '../pom/HomePage';
import LoginPage from '../pom/LoginPage';

//This file is for page initialization. Add necessary pages below
async function initializePages(page) {
    HomePage.initialize(page);
    LoginPage.initialize(page);
}

export default initializePages;
