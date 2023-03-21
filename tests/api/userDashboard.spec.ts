import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';
const basePath = '/dashboard';
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

test.describe('Validate User Dashboard End Points', () => {
  test("GET Safety Performance", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/service-performance`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Transactions-Revenue", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/revenue-transactions`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Safety-EZ Tag", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`/safety-ezTag`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

