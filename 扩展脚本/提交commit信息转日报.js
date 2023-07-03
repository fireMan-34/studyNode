const fp = require('fs/promises');
const path = require('path');

const testStr = `马旭烽's avatar
🐞 fix: 51486 实名认证弹框样式异常 ...
马旭烽 authored 7 minutes ago
9ec020e1
马旭烽's avatar
🐞 fix: 51501 订单完成的商品展示异常
马旭烽 authored 16 minutes ago
9fed0199
马旭烽's avatar
🐞 fix: 51506 待评价页面的“写评价” ...
马旭烽 authored 28 minutes ago
ec3db32e
马旭烽's avatar
🐞 fix: 51507 评价点击图片无法预览
马旭烽 authored 2 hours ago
492c3ae3
马旭烽's avatar
🐞 fix: 51544 上传凭证样式异常
马旭烽 authored 2 hours ago
439dc7b9
马旭烽's avatar
📃 docs: 添加组件结构注释
马旭烽 authored 2 hours ago
0e702ffc
马旭烽's avatar
🐞 fix: 51547 已评价页面的右侧样式异常 ...
马旭烽 authored 2 hours ago
9c3f2c98
马旭烽's avatar
🐞 fix: 51550 购买商品底部按钮样式异常 ...
马旭烽 authored 3 hours ago
dd1fbb2d
马旭烽's avatar
🐞 fix: 51560 修复品牌样式无间距 ...`;

const avatarReg = /^.*?'s avatar/gm;
const pushTimeReg = /^.*\s*authored\s*\d{1,2}\s*(minutes|hours)\s*ago$/gm;
const commitReg = /^[\d\w]{8}$/gm;

const moreReg = /\.{3}/gm;
const emptLine = /^\n$/gm;

const commitBefore = /.*[fix|docs]:/gm;

const generateStr = testStr
  .replace(avatarReg, '')
  .replace(pushTimeReg, '')
  .replace(commitReg, '')
  .replace(moreReg, '')
  .replace(emptLine, '')
  .replace(commitBefore, '')
  ;
// console.log(emptLine.test(generateStr))
// console.log(pushTimeReg.test(testStr), testStr.match(pushTimeReg))
console.log(generateStr);
// console.log(commitBefore.test(generateStr))

fp.writeFile(path.join(__dirname, 'temp.txt'), generateStr, { encoding: 'utf8' });