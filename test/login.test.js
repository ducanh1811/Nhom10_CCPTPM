const { Builder, By, Key, until } = require('selenium-webdriver');
const { before } = require('@jest/globals');
const { after } = require('@jest/globals');
const { expect } = require('@jest/globals');

const chromedriver = require('chromedriver');

describe('Login', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('should login with valid credentials', async function () {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('username')).sendKeys('ducanh');
        await driver
            .findElement(By.name('password'))
            .sendKeys('anh181102', Key.RETURN);
        await driver.wait(until.titleIs('Home Page'), 10000);
        const url = await driver.getCurrentUrl();
        expect(url).toBe('http://localhost:3000/home');
    });

    after(async function () {
        await driver.quit();
    });
});
