import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';
const basePath = '/ez-tags';
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

test.describe('Validate EZ Tags End Points', () => {
  test("GET EZ - Monthly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/monthly-fulfillment?filterType=monthlyReport&runDate=11/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET EZ - Weekly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/weekly-fulfillment?runDate=11/13/2022&filterType=weekly`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET EZ - Daily", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/daily-data?startDate=11/13/2022&endDate=11/18/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

