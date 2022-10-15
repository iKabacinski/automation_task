/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {

    get smartFrame() {
        return $('smart-frame');
    }

    get smartFrameMainComponent() {
        return $('[data-layer="main"]');
    }

    get shareButton() {
        return $('[data-title="Share"]');
    }

    get smartFrameCaptionBox() {
        return $('.caption-text')
    }

    open(path) {
        return browser.url(`${path}`)
    }

}
