## やりたいこと

- [ ] DB
  - [x] RDB（prisma x sqlite）面倒なのでsqlite
  - [ ] Firestore（出番は来ないかも？）
  - [ ] Elasticsearch（view indexとして利用してみる？）
- [x] Cloud Runにデプロイする
  - ただし、SQLiteとの疎通がうまくいってない。CI/CD組み込んでから考えたい
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

## 24.09.01時点におけるデプロイ

1. Cloud Buildを介して、Artifact Registryに登録
```
gcloud builds submit \
    --region asia-east1 \
    --config cloudbuild.yaml
```

2. Cloud Runのコンソール画面から、適用させる

### 備考
- あくまで、cloud Runで動かせるよね？を確認したかったのでCI/CDの優先度は決して高くない。

## API作成における手順

1. エンドポイントを決めて、フォルダを作成
2. schema.tsを作成。zodを用いて、リクエスト、レスポンスの型を定義する。
3. route.tsを作成。APIの定義を行う
4. handler.tsを作成。一旦、最低限のhandlerメソッドを作るところまで。
5. app.tsに定義を追加。
6. __tests__以下にテストファイルを作成し、テストを実装
7. 以降、TDDのアプローチで実装を行う

## フォルダ構成等

```
.- src
  |- __tests__ ... API単位でのテストを書く際には、こちら（ぶっちゃけ、handler.tsの横にhandler.test.tsを置くでもいい気はする）
    |- **
      |- {method}
        |- *.test.ts
  |- api
    |- **
      |- {method}
        |- handler.ts
        |- route.ts
        |- schema.ts
  |- modules
    |- **
      |- domain
        |- entityクラス
        |- valueObjectクラス
        |- *.query.ts（interface）
        |- *.command.ts（interface）
      |- infrastructure
        |- *.query.{infra}.ts（ex. sqlite, firestore, elasticsearch ...）
        |- *.command.{infra}.ts（ex. sqlite, firestore, elasticsearch ...）
  |- app.ts
  |- index.ts
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