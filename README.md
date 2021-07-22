# 本スクリプトの利用方法

## コンテナを起動する（コンテナ内に mecab がインストールされる）

docker-compose up -d

## 起動したコンテナに入る

docker exec -it mecab-node sh

## src 配下にいること確認

pwd

## packge をインストールする

npm install

## アプリを起動する

node index.js

# Docker の基本操作

## コンテナ の起動

docker-compose up -d

## コンテナの停止

docker stop ${CONTAINER ID}

## コンテナ の削除

docker rm ${CONTAINER ID}

## 起動したコンテナ内に入る

docker exec -it ${CONTAINER NAME} sh