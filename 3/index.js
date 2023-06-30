// 提供路径的操作函数
const { join } = require('path');
// process 进程 存储了 shell 执行进程的中的参数
const process = require('process');
// 提供文件处理函数
const { writeFile } = require('fs/promises');
const { myName, age } = require('./util');

// 在 node Js 有四个特殊的路径
// 分别是两个常量
// 当前脚步所在的文件夹路径
const dirname = __dirname;
const filename = __filename;

// 脚本执行路径
// 启动脚步的 shell 脚本所在文件夹路径
const cwd = process.cwd();
// 【node 执行程序路径, shell 脚本所在路径, ...剩余参数是脚本执行的参数】
// 例如 node index.js hellow
// hellow 就是 第三个匹配的参数，每一个空格匹配一个参数
const [ nodePath ] = process.argv;
/**
 * join 语法可以拼接路径，将所有参数拼接成路径的字符串
 */
const tempJson = join(__dirname, 'temp.json');

console.log('临时文件路径', tempJson);

// 让我们创建一个临时的文件吧

writeFile(tempJson, JSON.stringify({ name: '临时文件' }), { encoding: 'utf-8' });

// 接着 node 启动一下改脚本

// 查看文件夹内的变化

// 做到这一步的话，恭喜你，你已经学会简单的读写，可能你还不太熟，但没有太多的关系，你已经入门了。接下来就是 api 的理解了