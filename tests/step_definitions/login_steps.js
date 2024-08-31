const { I } = inject();
const landingPage = require("../page-objects/landingPage_page")
const loginPage = require("../page-objects/loginPage_page")

Given('I Login into account', async () => {
    await I.waitForVisible(landingPage.webViewMenu,5)
    await I.tap(landingPage.loginMenu)
    await I.fillField(loginPage.inputEmail,'TestEmail@email.com')
    await I.fillField(loginPage.inputPassword,'Password123')
    await I.tap(loginPage.btnLogin)
}); 

Given('I see success message', async () => {
    await I.see('Success')
}); 
