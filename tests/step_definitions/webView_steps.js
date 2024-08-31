const { I } = inject();
const Webview = require("../page-objects/webView_page")
const landingPage = require("../page-objects/landingPage_page")

Given('I open webview option', async() => {
    await I.waitForVisible(landingPage.webViewMenu,5)
    await I.tap(landingPage.webViewMenu)
});

Given('Validate all Six menues are present', async() => {
    await I.see('Home')
    await I.see('Webview')
    await I.see('Login')
    await I.see('Forms')
    await I.see('Swipe')
    await I.see('Drag')
}); 
