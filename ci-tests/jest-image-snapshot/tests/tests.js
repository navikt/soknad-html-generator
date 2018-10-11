const puppeteer = require('puppeteer');
const pdf = { width: 800, height: 1 };

const config = [['enkel', pdf], ['komplett', pdf], ['ekstrem', pdf]];

 describe('soknad-kontantstotte', () => {
    let browser;
    beforeAll(async () => {
        browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    });

    describe.each(config)('%s', (type, size) => {
        let page;
        beforeAll(async () => {
            page = await browser.newPage();
            page.setViewport(size);
        });
         test('html-generering', async () => {
            await page.goto(`http://ci-test-server:9000/test/getHtml/${type}`);
            await page.waitFor(1000);
            await takeSnapshot(`html-generering-${type}`, page);
        });
    });
    afterAll(async () => {
        await browser.close();
    });
});