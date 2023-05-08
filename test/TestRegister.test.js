// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { beforeAll, afterAll, test, describe } = require('@jest/globals');
jest.setTimeout(1000000); // timeout toàn cục



jest.describe('TestRegister', function() {
    jest.setTimeout(3000000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('test1_AllNull', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("   ")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("   ")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()
        assert(await driver.switchTo().alert().getText() == "Register fail")
    })
    it('test2_user_name_null', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("   quocchi1905@gmail.com")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("   19052002")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).sendKeys("19052002")
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()
        assert(await driver.switchTo().alert().getText() == "Register fail")
    })
    it('test3_Email_null', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).sendKeys("chi")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("  ")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("   19052002")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).sendKeys("19052002")
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()

        //assert(await driver.switchTo().alert().getText() == "Register success")
    })
    it('test4_pass_null', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).sendKeys("chi")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("  quocchi1905@gmail.com")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("  ")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).sendKeys("19052002")
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()
        assert(await driver.switchTo().alert().getText() == "Register fail")
    })
    it('test5_not_confirm_pass', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).sendKeys("chi")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("  quocchi1905@gmail.com")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("  19052002")
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()
        assert(await driver.switchTo().alert().getText() == "Register fail")
    })
    it('test6_comfirmPass_false', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).sendKeys("chi")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("  quocchi1905@gmail.com")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("  19052002")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).sendKeys("20021950")
        await driver.findElement(By.css(".Signup_button__0EPHY")).click()
        assert(await driver.switchTo().alert().getText() == "Register fail")
    })
    it('test7_AllCorrect', async function() {
        await driver.get("http://localhost:3000/login")
        await driver.findElement(By.linkText("Signup")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(1) > input")).sendKeys("chi")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(2) > input")).sendKeys("  quocchi1905@gmail.com")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(3) > input")).sendKeys("  19052002")
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).click()
        await driver.findElement(By.css(".Signup_input__rpKog:nth-child(4) > input")).sendKeys("19052002")
            // await driver.findElement(By.css(".Signup_button__0EPHY")).click()
            // await driver.get("http://localhost:3000/login")
        try {

            await driver.findElement(By.css(".Signup_button__0EPHY")).click()
            await driver.get("http://localhost:3000/login")
        } catch (error) {
            if (error.name === 'UnexpectedAlertOpenError') {
                await driver.switchTo().alert().dismiss(); // Dismiss the alert
                await driver.get("http://localhost:3000/login");
            } else {
                throw error;
            }
        }

    })
})