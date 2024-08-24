## やりたいこと

- [ ] DB（firestore, RDB, ES）
- [ ] Cloud Runにデプロイする
- [ ] モジュール作成
- [ ] ユーザー認証（firebase authとか？）
- [ ] secret manager導入

## 簡易実行
```
npm install
npm run dev
```

```
open http://localhost:3000
```

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