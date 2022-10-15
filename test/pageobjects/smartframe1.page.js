const Page = require('./page');

class Smartframe1Page extends Page {

    get iFrame(){
        return $('iframe');
    }

    get embedButton(){
        return $('[class="action-buttons__wrapper --buyshare"]');
    }

    get embedShareLayer(){
        return $('[data-sharelayer="embed"]');
    }

    open() {
        return super.open('/p/e.html');
    }

    moveOnIframe(){
        return this.iFrame.moveTo();
    }
    switchToIframe() {
        return browser.switchToFrame(0);
    }
}

module.exports = new Smartframe1Page();
