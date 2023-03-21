import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verify', () => {
  test('Transactions History', async ({ page }) => {
    await page.locator('(//img[@alt="LICENSE PLATE IMAGE TRANSACTIONS"])[1]').click();
    const barChart = page.locator("(//*[local-name()='svg']//*[name()='g' and contains(@class,'highcharts-column-series')]//*[name()='rect' and not(@height='0')])[1]");
    await expect(barChart).toBeVisible();
    let Months_FiscalYear: string[] = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    const totalBarsPresent = await page.$$("(//*[local-name()='svg']//*[name()='g' and contains(@class,'highcharts-column-series')]//*[name()='rect' and not(@height='0')])");
    const totalBarsCount = totalBarsPresent.length;
    let count = 0
    for (const bars of totalBarsPresent) {
      if (count < totalBarsCount) {
        await bars.hover();
        await expect(await page.locator("//*[local-name()='svg']//*[name()='g' and @class='highcharts-label highcharts-tooltip highcharts-color-undefined']//*[name()='text']//*[name()='tspan'][1]").textContent()).toContain(Months_FiscalYear[count]);
        count++;
      }
    }
  });
});