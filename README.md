TypeScript Eslint with Prettier Demo
===========================

Eslint中的rule与Prettier中可能有冲突，需要使用`eslint-plugin-prettier`插件。

它做了三件事：
1. 在Eslint中运行prettier，不需要手动执行prettier命令，可以一次完成
2. 提供了`prettier` rule（来自`eslint-config-prettier`），把eslint中与格式相关的rules都关闭了，使得eslint失去了检查格式的功能
3. 提供了`plugin:prettier/recommended` rule，它内置了一些prettier选项，同时会读取`.prettierrc`等文件中的选项合并为eslint的rule

通常我们会使用在eslint文件中 extends `plugin:prettier/recommended`。

如果仅希望eslint完全不检查格式，仅依赖prettier手动格式化，可以只extends `prettier` rule.

另外发现：在webstorm中修改`.eslintrc.js`内容时可能不生效，需要手动重启eslint服务，比较麻烦。
可以使用插件 https://plugins.jetbrains.com/plugin/14119-eslint-restart-service-action/

```
npm install
npm run lint
```

will see some lint errors
