const puppeteer = require('puppeteer');
import fs from 'fs';

const dir = './recipes';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const chromeOptions = {
  headless: false,
  defaultViewport: null,
};

(async () => {
  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();
  await page.goto('https://www.rewe.de/rezepte/gefuellte-haehnchenbrust-vom-grill/');
  // await page.screenshot({path: 'example.png'});
  const html = await page.content();
  // console.log(html);
  const pageTitle = await page.title();
  fs.writeFile(`${dir}/${pageTitle}.html`, html, (err) => {
    if (err) throw err;
    console.log('Saved');
  });

  await browser.close();
})();
