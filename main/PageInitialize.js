// @ts-check
import HomePage from '../pom/HomePage';
import LoginPage from '../pom/LoginPage';
import Navigation from '../pom/Navigation';
import AdminPage from '../pom/AdminPage';

//This file is for page initialization. Add necessary pages below
async function initializePages(page) {
    HomePage.initialize(page);
    LoginPage.initialize(page);
    Navigation.initialize(page);
    AdminPage.initialize(page); 
}

export default initializePages;
