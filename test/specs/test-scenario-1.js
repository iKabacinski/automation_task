const SmartFrame1 = require('../pageobjects/smartframe1.page');

describe('SmartFrame1', () => {

    beforeEach(async () => {
        await SmartFrame1.open();
        await SmartFrame1.moveOnIframe()
        await SmartFrame1.switchToIframe();

        await browser.pause(3000);
    });

    it('should caption be proper displayed', async () => {

        await expect(SmartFrame1.smartFrameMainComponent).toHaveElementClassContaining('active');
        await expect(SmartFrame1.smartFrameCaptionBox).toBeDisplayed();
    });

    it('should open the layer', async () => {
        await SmartFrame1.embedButton.click();

        await expect(SmartFrame1.embedShareLayer).toHaveElementClassContaining('active');
        await expect(SmartFrame1.embedShareLayer).toBeDisplayed();

    });
});


