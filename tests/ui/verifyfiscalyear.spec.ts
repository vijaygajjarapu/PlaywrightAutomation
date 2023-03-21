import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verify', () => {
  test('Verify Fiscal year in Safety Performance', async ({ page }) => {
    await page.locator('(//img[@alt="Safety Performance"])[1]').click();
    await expect(page.locator('.left-container-date-range.pdf-margin-top-25')).toBeVisible();
    await expect(await page.locator(".left-container-date-range.pdf-margin-top-25").textContent()).toContain('2023');
  });

  test('Verify Fiscal year in Transaction & Revenue Lifecycle', async ({ page }) => {
    await page.locator('(//img[@alt="Transaction & Revenue Lifecycle"])[1]').click();
    await expect(page.locator('.left-container-date-range.pdf-margin-top-25')).toBeVisible();
    await expect(await page.locator(".left-container-date-range.pdf-margin-top-25").textContent()).toContain('2023');
  });

  test.skip('Verify Fiscal year in Service Performance', async ({ page }) => {
    await page.locator('(//img[@alt="Service Performance"])[1]').click();
    await expect(page.locator('.left-container-date-range.pdf-margin-top-25')).toBeVisible();
    await expect(await page.locator(".left-container-date-range.pdf-margin-top-25").textContent()).toContain('2023');
  });

  test.skip('Verify Fiscal year in FINANCIAL PERFORMANCE', async ({ page }) => {
    await page.locator('(//img[@alt="FINANCIAL PERFORMANCE])[1]').click();
    await expect(page.locator('.h3.pdf-h3')).toBeVisible();
    await expect(await page.locator('.h3.pdf-h3').textContent()).toContain('2023');
  });

  test('Verify Fiscal year in LICENSE PLATE IMAGE TRANSACTIONS', async ({ page }) => {
    await page.locator('(//img[@alt="LICENSE PLATE IMAGE TRANSACTIONS"])[1]').click();
    await expect(page.locator('.h3.pdf-h3')).toBeVisible();
    await expect(await page.locator('.h3.pdf-h3').textContent()).toContain('2023');
  });

  test.skip('Verify Fiscal year in EZ TAG FULFILLMENT PERFORMANCE', async ({ page }) => {
    await page.locator('(//img[@alt="EZ TAG FULFILLMENT PERFORMANCE"])[1]').click();
    await expect(page.locator('.left-container-date-range.pdf-margin-top-25')).toBeVisible();
    await expect(await page.locator(".left-container-date-range.pdf-margin-top-25").textContent()).toContain('2023');
  });
});