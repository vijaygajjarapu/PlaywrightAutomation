import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verifying sum of Transactions for License Plate and EZ Tag and Tallying it against the Total Transactions present below the dashboard Title', () => {

  test('Verify the Sum of Transactions for License Plate and EZ Tag and compare with Total transactions in dashboard', async ({ page }) => {
    await expect(page.locator('a[href="#menu"]')).toBeVisible();

    await expect(page.locator('div#dasboard-container')).toContainText('Transaction & Revenue Lifecycle');

    await page.locator('div#dasboard-container', { has: page.getByText('Transaction & Revenue Lifecycle') }).click();

    await expect(page.locator('div.container', { has: page.getByText('EZ Tags') })).toBeVisible();

    var sum1 = await page.locator('div.container tspan>>nth=19').textContent();
    let n1 = Number(sum1?.toString().replace('M', ''));
    var sum2 = await page.locator('div.container tspan>>nth=23').textContent();
    let n2 = Number(sum2?.toString().replace('M', ''));
    let sum = getSum(n1, n2);
    await expect(page.locator('h2.sub-header', { hasText: sum })).toBeVisible();
    await expect(page.locator('h2.sub-header')).toContainText(sum);
  });

  test('Verify the Sum of Revenue for License Plate and EZ Tag and compare with Total revenue in dashboard', async ({ page }) => {
    await expect(page.locator('a[href="#menu"]')).toBeVisible();

    await expect(page.locator('div#dasboard-container')).toContainText('Transaction & Revenue Lifecycle');

    await page.locator('div#dasboard-container', { has: page.getByText('Transaction & Revenue Lifecycle') }).click();

    await expect(page.locator('div.container', { has: page.getByText('EZ Tags') })).toBeVisible();

    var sum1 = await page.locator('div.container tspan>>nth=21').textContent();
    let n1 = Number(sum1?.toString().replace('M', ''));
    n1 = Number(sum1?.toString().replace('$', ''));
    var sum2 = await page.locator('div.container tspan>>nth=25').textContent();
    let n2 = Number(sum2?.toString().replace('M', ''));
    n2 = Number(sum2?.toString().replace('$', ''));
    let sum = getSum(n1, n2);
    await expect(page.locator('h2.sub-header', { hasText: sum })).toBeVisible();
    await expect(page.locator('h2.sub-header')).toContainText(sum);
  });

});

