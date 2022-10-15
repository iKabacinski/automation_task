const SmartFrame2 = require('../pageobjects/smartframe2.page');
describe('Smartframe2', () => {

    beforeEach(async () => {
        await SmartFrame2.open();
        await SmartFrame2.mouseOnSmartFrame();
    });

    it('should share button to be displayed', async () => {

        await expect(SmartFrame2.shareButton).toBeDisplayed();

    });

    it('should redirect to SmartFrame page', async () => {
        await SmartFrame2.seButton.click();
        await browser.pause(5000);

        //TODO figure out how to assert url in new tab after redirection
        await expect(browser).toHaveUrl('https://smartframe.io/');
    });
});