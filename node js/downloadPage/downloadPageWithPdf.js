const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://aslamjon.github.io/domd/", {
        waitUntil: "networkidle2"
    });
    await page.setViewport({ width: 1680, height: 1050 });
    await page.pdf({
        path: "hacker_news.pdf",
        format: "A4"
    });

    await browser.close();
})();