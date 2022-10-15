const Page = require('./page');

class Smartframe2Page extends Page {

    get seButton() {
        return $('[class="action-buttons__caption"]');
    }

    open() {
        return super.open('/p/w.html');
    }


    mouseOnSmartFrame() {
        return this.smartFrame.moveTo();
    }

}

module.exports = new Smartframe2Page();
