import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';
const basePath = '/license-plate/image-transactions';
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

test.describe('Validate License Plate End Points', () => {
  test("GET LP Fiscal Year Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=fiscalYear&runDate=01/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET LP Yearly Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=calendarYear&runDate=01/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET LP Custom Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=customReport&runDate=09/14/2022&endDate=09/29/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

