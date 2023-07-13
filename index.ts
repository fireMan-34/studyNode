import puppeteer from "puppeteer";
import path from "path";
import { getProcessIdAccessRequest } from './api/gitlab';

// work

//  gitlab token gYgydzHDx2Cym9GBoaiG
// !async function () {
//   try {
//     const browser = await puppeteer.launch({
//       headless: 'new',
//       userDataDir: 'data',
//     });
//     const page = await browser.newPage();
//     await page.setRequestInterception(true);
//     page.on('requestfailed', ev => {
//       console.log('请求错误', ev.headers(), ev.abortErrorReason())
//     })
//     await page.goto('http://chandao.shushangyun.com/index.php?m=effort&f=calendar', {
//       referer: 'http://chandao.shushangyun.com/index.php?m=my&f=index'
//     });
//     console.log('hello')
//     browser.close();
//   } catch (error) {
//   }
// }();

getProcessIdAccessRequest().then(console.log)