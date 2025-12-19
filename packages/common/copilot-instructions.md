# Copilot Instructions for @asobiba/common

## 目的（想定）
モノレポ全体で共有される共通機能を提供するパッケージ。主に Prisma による データベース接続とスキーマ定義を一元管理。

## 重要ポイント
- **Prisma Client のシングルトン**: `db` エクスポートで統一されたデータベース接続を提供
- **スキーマ管理**: `prisma/schema.prisma` で全テーブル定義を集約
- **型定義の共有**: Prisma で生成された型を他パッケージで利用可能
- **ホットリロード対応**: 開発環境でのシングルトンパターン実装
- **モデル**:
  - Answer: 麻雀のスコア計算の回答
  - Hand: 役と翻数の管理
  - Account: ユーザーアカウント
  - Photo: 写真データ
  - Tag: タグ情報
  - PhotoTag: 写真とタグの関連付け

## ローカル検証コマンド
```bash
# Prisma Client の生成（他パッケージのビルド前に必要）
pnpm --filter @asobiba/common prisma:generate

# または、ルートから
pnpm prisma:generate

# マイグレーションの実行
pnpm --filter @asobiba/common prisma:migrate

# または、ルートから
pnpm prisma:migrate

# Prisma Studio の起動（データベースGUI）
pnpm --filter @asobiba/common prisma:studio

# または、ルートから
pnpm prisma:studio

# パッケージのビルド
pnpm --filter @asobiba/common build

# テスト実行
pnpm --filter @asobiba/common test

# Lint チェック
pnpm --filter @asobiba/common lint
```

## Copilot 用ルール（必須）
1. **スキーマ変更**: 新しいテーブルやフィールドを追加する際は `prisma/schema.prisma` を編集
2. **マイグレーション**: スキーマ変更後は必ず `prisma:migrate` を実行
3. **Client 生成**: スキーマ変更後は `prisma:generate` を実行して型定義を更新
4. **インポート**: 他パッケージから使用する際は `import { db } from '@asobiba/common'` を使用
5. **型定義**: Prisma 生成型を使用する際は `import type { PrismaClient } from '@asobiba/common'`
6. **シングルトン維持**: 新規 PrismaClient インスタンスを作成せず、常に `db` を使用
7. **環境変数**: `DATABASE_URL` を適切に設定

## テスト / CI
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: db エクスポートの動作確認
  - インテグレーションテスト: 実際のデータベース接続（テスト DB 使用）
  - スキーマバリデーション: Prisma のマイグレーション検証
- **CI 考慮事項**:
  - CI 環境でのデータベースセットアップ
  - マイグレーションの自動実行
  - Prisma Client の生成確認

## サンプル Copilot プロンプト
```
「@asobiba/common パッケージに、新しいモデル Category を追加してください。
Category には id, name, description, createdAt, updatedAt フィールドを持たせ、
Photo と多対多のリレーションを設定してください。マイグレーションファイルも生成してください。」
```
