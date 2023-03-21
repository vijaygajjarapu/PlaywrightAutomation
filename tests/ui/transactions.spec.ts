import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verify', () => {
  test('Transactions History', async ({ page }) => {
    await expect(page.locator('a[href="#menu"]')).toBeVisible();

    await expect(page.locator('div#dasboard-container')).toContainText('Transaction & Revenue Lifecycle');
    await expect(page.locator('.card-title.fw-bold.ps-1.d-flex > div> div>>nth=0')).toContainText('Previous Month');

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

  test('Verify the presence of all Cards in Transaction & Revenue Lifecycle', async ({ page }) => {
    await page.locator('(//img[@alt="Transaction & Revenue Lifecycle"])[1]').click();
    await expect(page.locator('.left-container-date-range.pdf-margin-top-25')).toBeVisible();
    await expect(page.locator('div.container tspan>>nth=4')).toBeVisible();
    await expect(page.locator('div.container tspan>>nth=4')).toContainText('EZ Tags');
    await expect(page.locator('div.container tspan>>nth=5')).toContainText('License plate images');
    await expect(page.locator('div.container tspan>>nth=6')).toContainText('Autopaid(pre-invoice)');
    await expect(page.locator('div.container tspan>>nth=7')).toContainText('Paid IOP');
    await expect(page.locator('div.container tspan>>nth=8')).toContainText('Not ready to invoice');
    await expect(page.locator('div.container tspan>>nth=9')).toContainText('Ready to invoice');
    await expect(page.locator('div.container tspan>>nth=10')).toContainText('Invoiced');
    await expect(page.locator('div.container tspan>>nth=11')).toContainText('Unpaid invoice');
    await expect(page.locator('div.container tspan>>nth=12')).toContainText('Paid invoice');
    await expect(page.locator('div.container tspan>>nth=13')).toContainText('Paid online');
    await expect(page.locator('div.container tspan>>nth=14')).toContainText('Paid in collections');
    await expect(page.locator('div.container tspan>>nth=15')).toContainText('Unpaid in collections');
    await expect(page.locator('div.container tspan>>nth=16')).toContainText('Excused');
    await expect(page.locator('div.container tspan>>nth=17')).toContainText('IOP');
    await expect(page.locator('div.container tspan>>nth=18')).toHaveText('Rejected');
  });

  test('', async ({ }) => {

  });
});

