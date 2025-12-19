# Copilot Instructions for @asobiba/share-photo-api

## 目的（想定）
写真共有機能を提供するRESTful API。Google Cloud Storage と連携し、写真のアップロード、検索、タグ管理などの機能を実装。

## 重要ポイント
- **フレームワーク**: Hono + @hono/zod-openapi による型安全な API 設計
- **データベース**: @asobiba/common の Prisma Client を使用
- **ストレージ**: Google Cloud Storage (@google-cloud/storage) による画像管理
- **API設計**: OpenAPI 仕様に準拠した Swagger UI 対応
- **エンドポイント**:
  - `/photos`: 写真の管理（登録、検索、署名付きURL取得、説明更新、タグ付け）
  - `/tags`: タグの管理

## ローカル検証コマンド
```bash
# 開発サーバーの起動（ホットリロード）
pnpm --filter @asobiba/share-photo-api dev

# ビルド
pnpm --filter @asobiba/share-photo-api build

# テスト実行
pnpm --filter @asobiba/share-photo-api test

# テストカバレッジ
pnpm --filter @asobiba/share-photo-api test -- --coverage

# Lint チェック
pnpm --filter @asobiba/share-photo-api lint

# Lint 自動修正
pnpm --filter @asobiba/share-photo-api lint:fix

# Prisma Studio の起動（データベース確認）
pnpm --filter @asobiba/share-photo-api prisma:studio

# マイグレーション実行
pnpm --filter @asobiba/share-photo-api prisma:migrate
```

## Copilot 用ルール（必須）
1. **API ハンドラー作成時**: Hono の OpenAPI プラグイン（@hono/zod-openapi）を使用し、スキーマ定義と型を統合
2. **データベースアクセス**: `@asobiba/common` の `db` インスタンスをインポートして使用（新規 PrismaClient を作成しない）
3. **バリデーション**: Zod スキーマでリクエスト/レスポンスを検証
4. **GCS 連携**: 署名付き URL の生成や画像アップロードは Google Cloud Storage SDK を使用
5. **テスト**: Vitest を使用し、ドメインロジックと外部サービス連携を分離してテスト
6. **環境変数**: GCS バケット名などの設定は環境変数で管理

## テスト / CI
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: ドメインロジックの検証
  - インテグレーションテスト: API エンドポイントの動作確認
  - 外部サービスモック: GCS のモック使用を推奨

## サンプル Copilot プロンプト
```
「@asobiba/share-photo-api パッケージの写真検索機能に、タグによるフィルタリング機能を追加してください。
複数タグのAND検索に対応し、Zodスキーマでバリデーションを行い、
適切なデータベースクエリを実装してください。」
```
