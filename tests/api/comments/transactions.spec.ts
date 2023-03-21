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

test.describe('Validate Comments Transactions End Points', () => {
  test("GET Transactions FiscalYear Comments", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=fiscalYear&screenName=Transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Monthly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthlyReport&screenName=Transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transaction Calendar Yearly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=calendarYear&screenName=Transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Month Yearly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthYearly&screenName=Transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions Custom Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=customReport&screenName=Transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

