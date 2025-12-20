# Copilot Instructions for @asobiba/mahjong-api

## 目的（想定）
麻雀のスコア管理を行うRESTful APIを提供するパッケージ。Hono フレームワークと Prisma ORM を使用し、麻雀の役情報、スコア申告、スコア回答などの機能を実装。

## 重要ポイント
- **フレームワーク**: Hono + @hono/zod-openapi による型安全な API 設計
- **データベース**: @asobiba/common の Prisma Client を使用
- **API設計**: OpenAPI 仕様に準拠した Swagger UI 対応
- **ドメイン駆動設計**: domain と infrastructure の分離
- **エンドポイント**:
  - `/hands`: 役情報の取得
  - `/score-declarations`: スコア申告の管理（取得、登録、計算、集計）
  - `/scores`: スコア回答の管理

## ローカル検証コマンド
```bash
# 開発サーバーの起動（ホットリロード）
pnpm --filter @asobiba/mahjong-api dev

# ビルド
pnpm --filter @asobiba/mahjong-api build

# テスト実行
pnpm --filter @asobiba/mahjong-api test

# テストカバレッジ
pnpm --filter @asobiba/mahjong-api test -- --coverage

# Lint チェック
pnpm --filter @asobiba/mahjong-api lint

# Lint 自動修正
pnpm --filter @asobiba/mahjong-api lint:fix

# Prisma Studio の起動（データベース確認）
pnpm --filter @asobiba/mahjong-api prisma:studio

# マイグレーション実行
pnpm --filter @asobiba/mahjong-api prisma:migrate
```

## Copilot 用ルール（必須）
1. **API ハンドラー作成時**: Hono の OpenAPI プラグイン（@hono/zod-openapi）を使用し、スキーマ定義と型を統合
2. **データベースアクセス**: `@asobiba/common` の `db` インスタンスをインポートして使用（新規 PrismaClient を作成しない）
3. **バリデーション**: Zod スキーマでリクエスト/レスポンスを検証
4. **エラーハンドリング**: 適切な HTTP ステータスコードと共にエラーレスポンスを返す
5. **テスト**: Vitest を使用し、ドメインロジックとインフラストラクチャ層を分離してテスト
6. **ファイル構成**: `src/<feature>/domain/` と `src/<feature>/infrastructure/` の構造を維持

## テスト / CI
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: ドメインロジックの検証
  - インテグレーションテスト: API エンドポイントの動作確認
  - データベースモック: テスト用の Prisma Client モック使用を推奨

## サンプル Copilot プロンプト
```
「@asobiba/mahjong-api パッケージに新しいエンドポイント /players を追加してください。
プレイヤー情報の取得と登録ができるようにし、Zod でバリデーションを行い、
OpenAPI スキーマを定義してください。データベースアクセスには @asobiba/common の db を使用してください。」
```
