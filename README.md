# 説明

MeCab を用いて漢字をふりがなに変換する

- MeCab でフリガナ抽出
- カタカナ → ひらがな変換

# 本スクリプトの利用方法

### コンテナを起動する（コンテナ内に mecab がインストールされる）

docker-compose up -d

### 起動したコンテナに入る

docker exec -it mecab-node sh

### src 配下にいること確認

pwd

### packge をインストールする

npm install

### アプリを起動する

node index.js 昔々、ある所にお爺さんとお婆さんが居たそうですよ！！

出力結果

> フリガナ： ムカシ々、アルトコロニオジイサントオバアサンガイタソウデスヨ！！
> ふりがな： むかし々、あるところにおじいさんとおばあさんがいたそうですよ！！

# その他

## Docker の基本操作

### コンテナ の起動

docker-compose up -d

### コンテナの停止

docker stop ${CONTAINER ID}

### コンテナ の削除

docker rm ${CONTAINER ID}

### 起動したコンテナ内に入る

docker exec -it ${CONTAINER NAME} sh
