import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
for (const wait of [500, 1500, 3000, 5000]) {
  await page.waitForTimeout(wait);
  const r = await page.evaluate(() => {
    const c = document.querySelector("canvas");
    const rect = c.getBoundingClientRect();
    return { attrW: c.width, attrH: c.height, cssW: c.style.width, cssH: c.style.height, rectW: rect.width, rectH: rect.height };
  });
  console.log(`after +${wait}ms:`, JSON.stringify(r));
}
await page.evaluate(() => window.dispatchEvent(new Event("resize")));
await page.waitForTimeout(500);
const r2 = await page.evaluate(() => {
  const c = document.querySelector("canvas");
  const rect = c.getBoundingClientRect();
  return { attrW: c.width, attrH: c.height, cssW: c.style.width, cssH: c.style.height, rectW: rect.width, rectH: rect.height };
});
console.log("after resize event:", JSON.stringify(r2));
await page.screenshot({ path: "/tmp/quaise-hero-debug4.png" });
await browser.close();
