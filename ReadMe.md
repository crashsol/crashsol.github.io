# 学习git 一级标题  

## 初始化一个空的项目  二级标题
- echo "# vuelearn" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master

## 将本地仓库与远端仓库绑定 二级标题
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master

## git 常用指令
- 将本地修改或则添加的文件添加到本地 git add .  
- 提交本次操作 git commit -m "操作描述"
- 查看本地仓库状态 git status
- 查看本地仓库远程是否绑定远程地址 git remote