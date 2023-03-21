import ENV from "../utils/env";
import { test, expect, type Page, APIResponse, request, APIRequestContext } from '@playwright/test';

export function getSum(value1: number, value2: number): string {
  return (value1 + value2).toString();
}

export async function login(page) {
  await page.goto(ENV.BASE_UI_URL);
  await page.locator('input[name="username"]').fill(ENV.USERNAME);
  await page.locator('input[name="password"]').fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
}

// export function getToken(): string {
//   //var context;
//   //async () => {
//     // Create a context that will issue http requests.
//     // const response = await request.post(`${ENV.BASE_API_URL}/authenticate  `, {
//     //   data: {
//     //     username:"user",
//     //     password: "password123"
//     //   },
//     // });

//      const response = request.newContext({
//       baseURL: `${ENV.BASE_API_URL}/authenticate`,
//       httpCredentials: {
//         username:"user",
//         password: "password123"
//       }
//     });
//     const responseBody = JSON.parse(response.then.text());
//   return responseBody.token;
//  // }
// }
