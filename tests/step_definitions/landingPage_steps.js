const { I } = inject();
const landingPage = require("../page-objects/landingPage_page")

Given('Validate app is launched', async () => {
    await I.seeElement(landingPage.homePageLogo)
    await I.seeElement(landingPage.appDesc)
    await I.seeElement(landingPage.appTextLogo)
});

Given('Validate all Six menues are present', async () => {
    await I.see('Home')
    await I.see('Webview')
    await I.see('Login')
    await I.see('Forms')
    await I.see('Swipe')
    await I.see('Drag')
}); 
