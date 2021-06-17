# vscode使用ctrl+左键
vue项目中,使用ctrl+左键点击DOM中的组件标签,自动打开跳转到对应组件功能
在设置中打开vscode的设置选项(ctrl+,),输入setting搜索,打开在setting.json中编辑,粘贴入以下选项,即可使用此功能
```
{
  "configurations": [
    {
      "includePath": ["${workspaceFolder}/**", "C:/Keil_v5/ARM/ARMCC/include"]
    }
  ]
}
```