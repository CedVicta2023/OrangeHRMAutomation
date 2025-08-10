import ActionDriver from '../main/ActionDriver';
import LoginPage from '../pom/LoginPage';
import AdminPage from '../pom/AdminPage';


async function loginUsingValidCredentials (page,item) {
    const actiondriver = new ActionDriver(page);

    await actiondriver.navigateURL(item.url);
    await LoginPage.UserNameTextfield.setText(item.username);
    await LoginPage.PasswordTextfield.setText(item.password);
    await LoginPage.LoginButton.clickElement();
    await actiondriver.waitForPageToLoad();
};

async function addNewUser(item) {
    await AdminPage.clickDropDownUserRole.clickElement();
    await AdminPage.selectUserRoleOption.selectOption(item.userrole);
    await AdminPage.EmployeeNameTextfieldHint.setText(item.employeeName);
    await AdminPage.selectEmployeeName.selectOption(item.employeeName);
    await AdminPage.clickDropDownStatus.clickElement();
    await AdminPage.selectStatusOption.selectOption(item.status);
    await AdminPage.UsernameTextfield.setText(item.usernameNew);
    await AdminPage.PasswordTextfield.setText(item.passwordNew);
    await AdminPage.ConfirmPasswordTextfield.setText(item.passwordNew);
    await AdminPage.SaveNewUserButton.clickElement();
}

export { loginUsingValidCredentials, addNewUser };