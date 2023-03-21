import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';
const basePath = '/transactions';
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

test.describe('Validate Transactions and Revenue Lifecycle End Points', () => {
  test("GET Transactions Fiscal Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=fiscalYear&runDate=09/30/2023`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Monthly Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthlyReport&runDate=08/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Yearly Report", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=calendarYear&runDate=08/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Month Yearly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthYearly&runDate=08/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Custom Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=customReport&runDate=12/01/2022&endDate=12/31/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

});


