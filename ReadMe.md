##学习git

#初始化一个空的项目
- echo "# vuelearn" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master

#将本地仓库与远端仓库绑定
- git remote add origin https://github.com/crashsol/crashsol.github.io.git
- git push -u origin master