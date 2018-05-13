# 学习git 

## 初始化一个空的项目  
- echo "# vuelearn" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master

## 将本地仓库与远端仓库绑定 
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master

## git 常用指令
- 将本地修改或则添加的文件添加到本地 git add .  
- 提交本次操作 git commit -m "操作描述"
- 查看本地仓库状态 git status
- 查看本地仓库远程是否绑定远程地址 git remote
- 创建一个 **dev** 分支并进入
    - git branch dev -b dev
    - 上面一个命令等效于这两条命令： git branch dev   git checkout dev
    - 返回**master** 分支 git checkout master
- 将**dev**分支合并到**master**
    - 必须是在主分支下操作:  git checkout master
    - 将dev分支合并到master： git merge dev
- 创建一个.gitignore 文件,在里面添加忽略上传的内容
    - 添加忽略的**文件**: 1.txt  
    - 添加忽略的**文件夹** /dir1
---
## 参考资料
- <a href="https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000">史上最浅显易懂的Git教程(廖雪峰)</a>

- <a href="https://www.jianshu.com/p/191d1e21f7ed">MarkDown语法</a>