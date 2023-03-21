import { test, expect, type Page } from '@playwright/test';
import ENV from '../../../utils/env';
const basePath = '/incident-management/response-clearance-time';
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

test.describe('Validate Safety Performance End Points - Response Clearance Times', () => {
  test("GET Clearance Time Monthly Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthlyReport&runDate=01/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Clearance Time Month Yearly Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=monthYearly&runDate=01/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Clearance Time Weekly Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=weekly&runDate=09/25/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Clearance Time Daily Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=daily&runDate=11/27/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Clearance Time Custom Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?filterType=customReport&runDate=10/30/2022&endDate=11/02/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

});

