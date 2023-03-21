import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
    login(page);
});


test.describe('Verify the  titles in left container', () => {
    test('Verify Safety Performance title', async ({ page }) => {
        await page.locator('(//img[@alt="Safety Performance"])[1]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('SAFETY PERFORMANCE');
    });

    test('Verify Transaction & Revenue Lifecycle title', async ({ page }) => {
        await page.locator('(//img[@alt="Transaction & Revenue Lifecycle"])[1]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('TRANSACTION & REVENUE LIFECYCLE');
    });

    test('Verify Service Performance title', async ({ page }) => {
        await page.locator('(//img[@alt="Service Performance"])[1]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('Service Performance');
    });

    test('Verify FINANCIAL PERFORMANCE title', async ({ page }) => {
        await page.locator('//img[@alt="FINANCIAL PERFORMANCE"]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('Financial Performance');
    });

    test('Verify LICENSE PLATE IMAGE TRANSACTIONS title', async ({ page }) => {
        await page.locator('(//img[@alt="LICENSE PLATE IMAGE TRANSACTIONS"])[1]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('License Plate Image Transactions');
    });

    test('Verify EZ TAG FULFILLMENT PERFORMANCE title', async ({ page }) => {
        await page.locator('(//img[@alt="EZ TAG FULFILLMENT PERFORMANCE"])[1]').click();
        await expect(page.locator('.page-title.pdf-margin-top')).toBeVisible();
        await expect(await page.locator(".page-title.pdf-margin-top").textContent()).toContain('EZ TAG FULFILLMENT PERFORMANCE');
    });

});