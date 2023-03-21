import { test, expect, type Page } from '@playwright/test';
import ENV from '../../../utils/env';
const basePath = '/configure-comments';
let response;
let token;

test.beforeEach(async ({ request }, testInfo) => {
  response = await request.post(`${ENV.BASE_API_URL}/authenticate  `, {
    data: {
      username: "user",
      password: "password123"
    },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());

  const responseBody = JSON.parse(await response.text());
  token = responseBody.token;
});

test.describe('Validate Comments License Plate Image Transactions End Points', () => {
  test("GET LP Fiscal Year", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=fiscalYear&screenName=LicensePlate`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET LP Calendar Year", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=calendarYear&screenName=LicensePlate`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET LP Custom Report", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=customReport&screenName=LicensePlate`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

