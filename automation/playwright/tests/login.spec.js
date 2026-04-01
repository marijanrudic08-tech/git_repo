
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://demo.baasic.com/angular/starterkit-photo-gallery/main');
  await expect(page).toBeTruthy();
});
