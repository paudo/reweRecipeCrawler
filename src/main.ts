import puppeteer from 'puppeteer';
import fs from 'fs';
import userAgent from 'user-agents';
import readline from 'readline';

const dir = './recipes';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const pdfPath = dir + '/pdf';
if (!fs.existsSync(pdfPath)) {
  fs.mkdirSync(pdfPath);
}
const htmlPath = dir + '/html';
if (!fs.existsSync(htmlPath)) {
  fs.mkdirSync(htmlPath);
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('./recipes/recipeList.txt'),
});

readInterface.on('line', (url) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString());
    await page.goto(url);
    const html = await page.content();
    let pageTitle = await page.title();
    pageTitle = pageTitle.split(' - ')[0];

    await page.pdf({path: `${pdfPath}/${pageTitle}.pdf`, format: 'A4'});
    fs.writeFile(`${htmlPath}/${pageTitle}.html`, html, (err) => {
      if (err) throw err;
      console.log(`Saved ${pageTitle}`);
    });

    await browser.close();
  })();
});


