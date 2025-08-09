import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';


async function loginUsingValidCredentials (page,item) {
    const actiondriver = new ActionDriver(page);

    await actiondriver.navigateURL(item.url);
    await LoginPage.UserNameTextfield.setText(item.username);
    await LoginPage.PasswordTextfield.setText(item.password);
    await LoginPage.LoginButton.clickElement();
    await actiondriver.waitForPageToLoad();
};

export default loginUsingValidCredentials