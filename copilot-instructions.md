# Copilot Instructions for asobiBa

## 全般的なガイダンス

このリポジトリは技術検証用のモノレポで、pnpm workspaces を使用しています。

### 基本方針
- TypeScript を使用したモダンな開発
- Biome を使用した Lint とフォーマット
- Vitest を使用したテスト
- Prisma を使用したデータベース管理（該当パッケージ）
- Hono を使用した API 実装（該当パッケージ）

### コーディング規約
- コードスタイルは Biome の設定に従う
- 型安全性を重視し、any の使用を避ける
- 関数とクラスには適切な型注釈を付ける
- エラーハンドリングを適切に行う

---

## パッケージ別ルール（packages配下）

### 共通ルール（packages 全体）

#### パッケージ管理
- **pnpm workspaces** を使用したモノレポ構成
- パッケージ間の依存関係は `workspace:*` プロトコルを使用
- 共通の依存関係は pnpm-workspace.yaml の catalog で管理

#### コマンドパターン
- ルートから実行: `pnpm --filter @asobiba/<package-name> <command>`
- パッケージ内から実行: `pnpm <command>`
- 全パッケージ実行: `pnpm -r <command>` (root から)

#### 共通スクリプト
- `pnpm build`: TypeScript のビルド
- `pnpm test`: Vitest によるテスト実行
- `pnpm lint`: Biome による Lint チェック
- `pnpm lint:fix`: Biome による Lint 自動修正
- `pnpm format`: Biome によるフォーマット

#### 開発ルール
- 新しい依存関係を追加する際は、可能な限り catalog に登録
- TypeScript の設定は各パッケージの tsconfig.json で管理
- テストファイルは `.test.ts` または `.spec.ts` の命名規則
- ビルド成果物は `dist/` ディレクトリに出力

---

### パッケージ固有のルール

各パッケージには専用の Copilot 指示ファイルがあります：

- **[@asobiba/mahjong-api](./packages/mahjong-api/copilot-instructions.md)** - 麻雀スコア管理 API
- **[@asobiba/share-photo-api](./packages/share-photo-api/copilot-instructions.md)** - 写真共有 API
- **[@asobiba/gsc-trigger](./packages/gsc-trigger/copilot-instructions.md)** - Google Cloud Storage トリガー
- **[@asobiba/common](./packages/common/copilot-instructions.md)** - 共通パッケージ

---

## 追加のベストプラクティス

### モノレポ全体の開発フロー
1. **初回セットアップ**:
   ```bash
   pnpm install
   pnpm prisma:generate  # Prisma Client 生成
   pnpm build            # 全パッケージビルド
   ```

2. **機能開発時**:
   ```bash
   # 特定パッケージで開発
   pnpm --filter @asobiba/<package-name> dev
   
   # 変更をテスト
   pnpm --filter @asobiba/<package-name> test
   
   # Lint チェック
   pnpm --filter @asobiba/<package-name> lint:fix
   ```

3. **スキーマ変更時**:
   ```bash
   # common パッケージでスキーマ編集
   # vim packages/common/prisma/schema.prisma
   
   # マイグレーション実行
   pnpm prisma:migrate
   
   # Client 再生成
   pnpm prisma:generate
   
   # 依存パッケージを再ビルド
   pnpm build
   ```

### トラブルシューティング
- **型エラーが発生**: `pnpm prisma:generate` で Prisma Client を再生成
- **ビルドエラー**: 依存パッケージ（特に @asobiba/common）を先にビルド
- **テスト失敗**: データベース接続と環境変数を確認
- **パッケージ間の依存関係エラー**: `pnpm install` で依存関係を再インストール
