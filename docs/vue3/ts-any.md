# vue3+ts,解决编译时,控制台报警告:存在any类型
```
warning: Unexpected any. Specify a different type (@typescript-eslint/no-explicit-any) at xxxxxx
```
直接关闭any类型的警告:
在 .eslintrc.js文件中找到rules 添加 "@typescript-eslint/no-explicit-any": ["off"]
```
module.exports = {
  rules: {
      "@typescript-eslint/no-explicit-any": ["off"]
  }
}
```