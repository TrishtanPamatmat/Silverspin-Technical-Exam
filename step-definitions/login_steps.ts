import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser } from 'playwright';

let browser: Browser;
let page: Page;

Given('the user is on the login page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('your-login-page-url'); // Replace with the actual URL
});

When('the user enters a valid email address {string}', async (email: string) => {
  const emailField = await page.locator('#email'); // Replace with the actual selector
  await emailField.type(email);
});

When('the user enters a valid password {string}', async (password: string) => {
  const passwordField = await page.locator('#password'); // Replace with the actual selector
  await passwordField.type(password);
});

When('the user clicks the "Login" button', async () => { // Corrected step definition
  const loginButton = await page.locator(`button:has-text("Login")`); // Use text selector
  await loginButton.click();
});

Then('the user should be logged in', async () => {
  //  Replace with a selector that identifies a logged-in state.
  const welcomeMessage = await page.locator('#welcome-message');
  await expect(welcomeMessage).toBeVisible();
  await browser.close();
});