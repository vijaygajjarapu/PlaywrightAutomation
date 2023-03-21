import { test, expect, type Page } from '@playwright/test';
import ENV from '../../../utils/env';
const basePath = '/configure/estimated-revenues';
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

test.describe('Validate Configuration License Plate End Points', () => {
  test("GET Estimated Revenue", async ({ request }) => {
    response = await request.get(`${ENV.BASE_API_URL}`+basePath+`?year=2021`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

});


