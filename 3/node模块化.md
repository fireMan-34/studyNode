# nodeJs 模块化是什么呢。

1. nodeJs 模块化是 nodeJs 提供的一种集成代码逻辑的能力。使得我们使用 node 执行脚本的时候可以把代码逻辑分散到各个文件，也可以获得 nodeJs api 的能力。
2. nodeJs 最初的模块是 CommonJs 规范，就是今天的主角 node 16, node 16 版本默认的是 commonJs 规范。
 不得不说，node 迭代非常的快，目前已经默认使用 es 规范了。
 不同规范的包同时引入也导致了模块🌹解析之前的冲突。比方说 commonJs 规范的入口引入了 es 规范的模块会导致 node 执行爆模块错误，通常来说会有个波浪线强调 import 的字段。通常来说确定模块化规范会根据 package 的 字段 、 如果是 ts 的 还有 tsconfig 字段来确定模块化规范。 
 、node 执行的时候会依据当前目录最近的上一级的 package 文件，来确定模块化规范，如果没有的话，就是走 node 默认的模块化规范解析逻辑。
3. 说了这么多，让我们看看 CommonJs 的模块化规范吧
  导入模块
```javascript
// Common JS module pattern
// 这些都是  nodeJs 内置的 api 模块
const path = require('path') // 相当于 es 规范的 import * as default 语法
const { writeFile } = require('fs'); // 相当于 import {} frojm 'xxx'

const axios = require('axios'); // 相当于我们 import node_module 下的模块

const 𝔘𝔫𝔦𝔠𝔬𝔡𝔢 = require('./animu-gentil'); // 相当于我们引入自己的模块

```

导出模块
```javascript

exports[属性｜方法名] = ‘属性值｜方法’

// 导出一个对象供外部使用
module.exports = {

}

```

好了，话不多说，简单实操一下。
1. 参考 `index.js` 文件， 在 `my.js` 操作
2. 使用`require` 引入模块解构出 join 方法（该方法是用来拼接路径）
3. 继续引入文件模块 fs ，仔细观察 `vscode` ，是否有 require 方法提示,有的话，恭喜你获取了 vscode 的智能提示可以更加愉快的编码工作。
  没有的话，可以安装 node-snippet 或者在当前项目根目录安装 ts 提示 `npm install @types/node@16.x -D`
4. 记住由于现在模块规范在过度，往往市面上的 npm 包有可能是 es 规范，导致我们的 cjs 规范解析异常，所以可以尝试降级版本，每一次降级一个一个大版本。
如果是模块的模块版本异常，可以尝试手动修改包依赖版本，或者找更适合的包。（建议的话，还是找替代品或者看一下 issue 是否有解决方案）

5. 代码从 index.js 手动搬到 index.js 加深一些 api 的理解

6. 在看一下当前文件夹下 package.json ， script 字段，这里有两条命令， 一条是 "start" ，另一条是 “start:my”, 都是用 包管理器去启动 node 程序去执行一个脚本文件，所以我们可以用文字描述 
```bash
node [文件路径] (参数1) (参数2) ...
```
然后，我们可以将鼠标悬浮在上面，会出现两个文字，如果是英文的是 run/debug ，如果是中文则是 运行/调试。
这一节，我们了解运行这一个就好了，后面有机会话会挑个章节讲讲。点击后，vscode 就会自动调用对应脚本命令，这是我们学到的第二种 node 脚本启动方式

7. 如果文件创建成功了，我们就进如下一个实操。

8. 这一节主要分享了几个知识点
    1. 模块化 是什么 ？
    2. 引入不同入口的模块化规范的话，会导致解析异常。
    3. 什么是 CommonJs 规范
    4. CommonJs 模块 智能提示的办法
    5. 四个路径常量(相对于执行的时候)
    6. 导入导出的简单使用
    7. 第二种执行 node 脚本的方法。（第一种就是之前的 shell 执行）
    8. 面对当前 es 模块规范盛行的 node npm 包 ，我们要使用 commonJs 规范的时候要如何解决。
