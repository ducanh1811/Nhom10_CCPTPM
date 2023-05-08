const { Builder, By, Key, until } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

test('Login Test', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://localhost:3000/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('username'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('login-button'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('ducanh');
    await passwordField.sendKeys('anh181102');
    await submitButton.click();

    // Wait for the page to load

    await driver.wait(until.urlContains('/dashboard'), 100000);

    // Check if the page contains the dashboard header
    const header = await driver.findElement(By.css('h1.dashboard-header'));
    expect(await header.getText()).toEqual('Dashboard');
});
