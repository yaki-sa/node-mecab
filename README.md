# 説明

MeCab を用いて漢字をふりがな(全角)に変換する
※ただし、文章によっては Mecab の形態素解析が漏れる場合がある。

- 半角(英数字)→ 全角(英数字)に変換
- 半角（カタカナ）→ 全角（カタカナ）に変換
- MeCab でフリガナ(全角)抽出
- カタカナ(全角) → ひらがな(全角)変換

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

node index.js 昔々、ある所にお爺さんとお婆さんとﾏｲｹﾙが居たそうですよ!!

出力結果

> 全角（英数字）変換： 昔々、ある所にお爺さんとお婆さんとﾏｲｹﾙが居たそうですよ！！

> 全角（カタカナ）変換： 昔々、ある所にお爺さんとお婆さんとマイケルが居たそうですよ！！

> フリガナ： ムカシ々、アルトコロニオジイサントオバアサントマイケルガイタソウデスヨ！！

> ふりがな： むかし々、あるところにおじいさんとおばあさんとまいけるがいたそうですよ！！

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
