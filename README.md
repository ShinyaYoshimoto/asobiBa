# 概要
- 技術検証用のいろいろを詰め込むリポジトリ（の予定）

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

# 全パッケージのビルド
pnpm build

# 全パッケージのテスト実行
pnpm test

# 全パッケージのLint実行
pnpm lint
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

# Cursorの活用
- Cursorエディタを活用します
- 以下のRuleを参考にさせていただいてます（25.04時点）

参考）
https://github.com/Shin-sibainu/shincode-tech-stack-rules/tree/main
https://github.com/kinopeee/cursorrules