
// tslint:disable-next-line:no-implicit-dependencies
import { browser, by, element } from 'protractor';

describe('localhost_app', () => {

    it('should_have_a_title', () => {
        browser.get('/home');
        expect<any>(browser.getTitle()).toEqual('Parallel Task Hacker News!');
    });

    it('should add one and two', () => {
        browser.get('/about');
        element(by.tagName('button')).click();

        expect<any>(element(by.css('.email')).getText()).
            toEqual('dummy@example.com');
    });
});