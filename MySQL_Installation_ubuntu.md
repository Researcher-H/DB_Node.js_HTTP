# MySQL インストールの仕方 (Ubuntu)

## source  

https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/#apt-repo-fresh-install

<br>
<br>

先ずはアップデート　　

`shell> sudo apt-get update`

次に mysql-sever

`sudo apt-get install mysql-sever`

次に　mysql-workbench-community  

`shell> sudo apt-get install mysql-workbench-community`

workbench　はインストール出来ないらしい  

`No apt package "mysql-workbench-community", but there is a snap with that name.`  
`Try "snap install mysql-workbench-community"`

でも snap install mysql-workbench-community は出来た！

そして、アップデート  

`shell> sudo apt-get update`

---

次に MySQL NDB Cluster  

先ずはファイルをダウンロードして、インストール  

`sudo dpkg -i mysql-apt-config_w.x.y-z_all.deb`

そして、アップデート  

`shell> sudo apt-get update`

