# git  修改远程仓库地址
## 命令行修改远程仓库地址
```
git remote set-url origin 远程仓库地址
```
## 修改配置文件
```
//  .git>config 文件

[core]
  repositoryformatversion = 0
  filemode = true
  logallrefupdates = true
  precomposeunicode = true

[remote "origin"]
  # 修改成新的仓库地址
  url = 远程仓库地址
  fetch = +refs/heads/*:refs/remotes/origin/*

[branch "master"]
  remote = origin
  merge = refs/heads/master
```