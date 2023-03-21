import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';
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

test.describe('Validate Service Performance End Points', () => {
  test("GET Service Monthly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}/call-center/calls-answered?filterType=monthlyReport&runDate=06/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Service Yearly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}/call-center/calls-answered?filterType=monthYearly&runDate=02/01/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Service Weekly", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}/call-center/calls-answered?filterType=weekly&runDate=10/30/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Service Daily Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}/call-center/calls-answered?filterType=daily&runDate=11/07/2022`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test("GET Service Custom Filter", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}/call-center/calls-answered?filterType=customReport&runDate=01/01/2023&endDate=01/07/2023`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

