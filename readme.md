# MY-NAME-IS project
## Demo

## バージョン
* docker-compose - 1.13.0+
* dockerエンジン - 19.03.0+

## Usage

### 初期設定
```sh
# dockerビルド
docker-compose build --no-cache
# コンテナ 立ち上げ
docker-compose up -d
# アクセス
http://localhost:8000/
```

### ビルド
```
docker-compose exec front yarn run build
```