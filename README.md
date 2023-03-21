#Install Node and NPM
Windows:
https://phoenixnap.com/kb/install-node-js-npm-on-windows

Mac:
https://phoenixnap.com/kb/install-npm-mac

#How to install playwright

npm init playwright@latest
Other required installations:
npm install --save-dev cross-env 
npm install dotenv --save

#Resources: 
https://playwright.dev/docs/intro
https://www.npmjs.com/package/cross-env
https://www.npmjs.com/package/dotenv

Plugins required in VS code for better look and feel of the code:
Can be added via left panel - Extentions:
1. Bracket Pair Colorization Toggler.
2. Color Highlight
3. Playwright Test for VSCode
4. Material Icon Theme
5. npm Intellisense

Folders Description:

1. environmentData: It contains files like .env.dev, .env.stage which stores environment related data like BASE_UI_URL, BASE_API_URL, USERNAME and PASSWORD.
2. tests: It contains our test cases. Created two folders named ui and api
3. utils: Reusable classes are kept here.
    For example helpers.ts contains re-usable functions like login, getAuthenticationToken, getSum methods which  can be called directly.

#How to execute:
For Dev environment: c

Similarly for other environments, configuration is done in Scripts section in package.json.

Post Execution, below folders will be generated:
1. playwright-report: It contains html report
2. test-results: It contains screenshots(on failure) and vedio of test execution


