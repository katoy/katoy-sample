
Heroku で node.js + express
============================

次の記事を参考にした。
 
 http://tacamy.hatenablog.com/entry/2013/02/16/235127  
 ＞Node.js + Express を Heroku で動かすまでの手順まとめ
 
 http://blog.ruedap.com/entry/20110129/git_heroku_app_push_github  
 ＞ HerokuアプリをGitHubにもプッシュする
 

heroku 上のアプリケーション  
　http://katoy-sample.herokuapp.com/

commit 方法
============

heroku 

- commit の設定

    $ git remote add heroku git@heroku.com:katoy-sample.git

  heroku への commit 

    $ git push heroku master 

github

- commit の設定  

    git remote add origin https://github.com/katoy/katoy-sample.git

- gitgub への commit

    $ git push origin master 
