# 概要
- 技術検証 → アプリケーションとして表現する

# モノレポ構成

このリポジトリは pnpm workspaces を使用したモノレポ構成です。

## パッケージ一覧

- `packages/mahjong-api` - 麻雀スコア管理API（Hono + Prisma）
- `packages/share-photo-api` - 写真共有API（Hono + Prisma）
- `packages/gsc-trigger` - Google Cloud Storage トリガー関数

## 開発方法

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# 環境変数の設定
cp .env.example .env

# テスト用データベースの起動（Docker）
pnpm db:up

# Prisma Clientの生成
pnpm prisma:generate

# データベースマイグレーションの実行
pnpm prisma:migrate

# 全パッケージのビルド
pnpm build

# 全パッケージのテスト実行
pnpm test

# 全パッケージのLint実行
pnpm lint
```

### データベース管理

```bash
# テスト用データベースの起動
pnpm db:up

# テスト用データベースの停止
pnpm db:down

# テスト用データベースのリセット（データを削除して再起動）
pnpm db:reset

# Prisma Studioの起動（データベースGUI）
pnpm prisma:studio
```

### 個別パッケージの操作

```bash
# 特定のパッケージで作業
cd packages/mahjong-api
pnpm dev

# 特定のパッケージでコマンド実行
pnpm --filter @asobiba/mahjong-api dev
```

## 非推奨ディレクトリ

- `mahjong-hono/` - `packages/mahjong-api` に移行済み
- `triggers/` - `packages/gsc-trigger` に移行済み
