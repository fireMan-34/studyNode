/**
 * 分别用 node 启动和 nodemon 启动
 * 如果不想在 shell 命令的话， 可以在 package 里面启动
 * 启动前确保自己的 终端是在 当前可视区域内，这样才能看到两者的区分
 */
console.log('启动');

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        // 无头浏览器模式
        headless: 'new',
        // 自定义使用数据文件夹，无的话，应该是走默认文件夹共用
        // 这些文件夹放着我们书签、插件、临时文件……
        // userDataDir: '',
        // 启动参数
        args: [
            // 后面补充
            // 可以实现跨域等功能
        ]
    });

    const page = await browser.newPage();
    // 接下来就说愉快的脚本工作了


    // 回收浏览器实例
    browser.close();
})();