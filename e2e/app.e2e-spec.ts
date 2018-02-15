
// tslint:disable-next-line:no-implicit-dependencies
import { browser, by, element } from 'protractor';

describe('localhost_app', () => {

    it('should_have_a_title', () => {
        browser.get('/home');
        expect<any>(browser.getTitle()).toEqual('Parallel Task Hacker News!');
    });

    it('should_have_dummy@example.com_on_button_click', () => {
        browser.get('/about');
        element(by.css('.runMe')).click();

        expect<any>(element(by.css('.email')).getText()).
            toEqual('dummy@example.com');
    });
});