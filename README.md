
[![Build Status](https://travis-ci.org/katoy/katoy-sample.png?branch=master)](https://travis-ci.org/katoy/katoy-sample)  


Heroku で node.js + express
============================

heroku 上で node.js + express で作成したサービスを公開する実験をしました。  

次の記事を参考にしています。  
 
 [http://tacamy.hatenablog.com/entry/2013/02/16/235127](http://tacamy.hatenablog.com/entry/2013/02/16/235127)  
 ＞Node.js + Express を Heroku で動かすまでの手順まとめ  
 
 [http://blog.ruedap.com/entry/20110129/git_heroku_app_push_github](http://blog.ruedap.com/entry/20110129/git_heroku_app_push_github)  
 ＞ HerokuアプリをGitHubにもプッシュする  
 
公開した heroku 上のアプリケーション  (ほぼ express の サンプルのままだけど)  
　[http://katoy-sample.herokuapp.com/](http://katoy-sample.herokuapp.com/)  


commit 方法
============

heroku 

- commit の設定


    $ git remote add heroku git@heroku.com:katoy-sample.git

- heroku への commit 


    $ git push heroku master 

github

- commit の設定  


    git remote add origin https://github.com/katoy/katoy-sample.git

- gitgub への commit


    $ git push origin master
	
commit 前のテスト
==================

    $ npm test

express のサーバーを起動し、headless なブラウザ (zombie) でアクセスして、テストをおこなっています。  
 

