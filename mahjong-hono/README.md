## やりたいこと

- [ ] DB
  - [x] RDB（prisma x sqlite）面倒なのでsqlite
  - [ ] Firestore（出番は来ないかも？）
  - [ ] Elasticsearch（view indexとして利用してみる？）
- [ ] Cloud Runにデプロイする
- [x] モジュール作成
- [ ] ユーザー認証（firebase authとか？）
- [ ] secret manager導入
- [ ] logger

## 簡易実行
```
npm install
npm run dev
```

```
open http://localhost:3000
```

## API作成における手順

1. エンドポイントを決めて、フォルダを作成
2. schema.tsを作成。zodを用いて、リクエスト、レスポンスの型を定義する。
3. route.tsを作成。APIの定義を行う
4. handler.tsを作成。一旦、最低限のhandlerメソッドを作るところまで。
5. app.tsに定義を追加。
6. __tests__以下にテストファイルを作成し、テストを実装
7. 以降、TDDのアプローチで実装を行う

## 構築時のメモ

### プロジェクトの作成

```
$ pnpm create hono mahjong-hono
```

- node
- pnpm

### パッケージの追加

```
$ pnpm add zod @hono/zod-openapi @hono/swagger-ui
```