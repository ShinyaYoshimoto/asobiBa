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

### @asobiba/mahjong-api

#### 目的（想定）
麻雀のスコア管理を行うRESTful APIを提供するパッケージ。Hono フレームワークと Prisma ORM を使用し、麻雀の役情報、スコア申告、スコア回答などの機能を実装。

#### 重要ポイント
- **フレームワーク**: Hono + @hono/zod-openapi による型安全な API 設計
- **データベース**: @asobiba/common の Prisma Client を使用
- **API設計**: OpenAPI 仕様に準拠した Swagger UI 対応
- **ドメイン駆動設計**: domain と infrastructure の分離
- **エンドポイント**:
  - `/hands`: 役情報の取得
  - `/score-declarations`: スコア申告の管理（取得、登録、計算、集計）
  - `/scores`: スコア回答の管理

#### ローカル検証コマンド
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

#### Copilot 用ルール（必須）
1. **API ハンドラー作成時**: Hono の OpenAPI プラグイン（@hono/zod-openapi）を使用し、スキーマ定義と型を統合
2. **データベースアクセス**: `@asobiba/common` の `db` インスタンスをインポートして使用（新規 PrismaClient を作成しない）
3. **バリデーション**: Zod スキーマでリクエスト/レスポンスを検証
4. **エラーハンドリング**: 適切な HTTP ステータスコードと共にエラーレスポンスを返す
5. **テスト**: Vitest を使用し、ドメインロジックとインフラストラクチャ層を分離してテスト
6. **ファイル構成**: `src/<feature>/domain/` と `src/<feature>/infrastructure/` の構造を維持

#### テスト / CI
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: ドメインロジックの検証
  - インテグレーションテスト: API エンドポイントの動作確認
  - データベースモック: テスト用の Prisma Client モック使用を推奨

#### サンプル Copilot プロンプト
```
「@asobiba/mahjong-api パッケージに新しいエンドポイント /players を追加してください。
プレイヤー情報の取得と登録ができるようにし、Zod でバリデーションを行い、
OpenAPI スキーマを定義してください。データベースアクセスには @asobiba/common の db を使用してください。」
```

---

### @asobiba/share-photo-api

#### 目的（想定）
写真共有機能を提供するRESTful API。Google Cloud Storage と連携し、写真のアップロード、検索、タグ管理などの機能を実装。

#### 重要ポイント
- **フレームワーク**: Hono + @hono/zod-openapi による型安全な API 設計
- **データベース**: @asobiba/common の Prisma Client を使用
- **ストレージ**: Google Cloud Storage (@google-cloud/storage) による画像管理
- **API設計**: OpenAPI 仕様に準拠した Swagger UI 対応
- **エンドポイント**:
  - `/photos`: 写真の管理（登録、検索、署名付きURL取得、説明更新、タグ付け）
  - `/tags`: タグの管理

#### ローカル検証コマンド
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

#### Copilot 用ルール（必須）
1. **API ハンドラー作成時**: Hono の OpenAPI プラグイン（@hono/zod-openapi）を使用し、スキーマ定義と型を統合
2. **データベースアクセス**: `@asobiba/common` の `db` インスタンスをインポートして使用（新規 PrismaClient を作成しない）
3. **バリデーション**: Zod スキーマでリクエスト/レスポンスを検証
4. **GCS 連携**: 署名付き URL の生成や画像アップロードは Google Cloud Storage SDK を使用
5. **テスト**: Vitest を使用し、ドメインロジックと外部サービス連携を分離してテスト
6. **環境変数**: GCS バケット名などの設定は環境変数で管理

#### テスト / CI
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: ドメインロジックの検証
  - インテグレーションテスト: API エンドポイントの動作確認
  - 外部サービスモック: GCS のモック使用を推奨

#### サンプル Copilot プロンプト
```
「@asobiba/share-photo-api パッケージの写真検索機能に、タグによるフィルタリング機能を追加してください。
複数タグのAND検索に対応し、Zodスキーマでバリデーションを行い、
適切なデータベースクエリを実装してください。」
```

---

### @asobiba/gsc-trigger

#### 目的（想定）
Google Cloud Functions として動作する、Cloud Storage トリガー関数。ZIP ファイルや画像ファイルのアップロードイベントに反応して処理を実行。

#### 重要ポイント
- **実行環境**: Google Cloud Functions (第2世代)
- **トリガー**: Cloud Storage オブジェクトの finalize イベント
- **処理内容**:
  - ZIP ファイル: 解凍して画像を抽出・リサイズ・保存
  - 画像ファイル: リサイズして最適化
- **依存ライブラリ**:
  - `@google-cloud/functions-framework`: Cloud Functions ランタイム
  - `adm-zip`: ZIP ファイルの解凍
  - `sharp`: 画像処理（リサイズ、最適化）

#### ローカル検証コマンド
```bash
# ビルド
pnpm --filter @asobiba/gsc-trigger build

# テスト実行
pnpm --filter @asobiba/gsc-trigger test

# テストカバレッジ
pnpm --filter @asobiba/gsc-trigger test -- --coverage

# Lint チェック
pnpm --filter @asobiba/gsc-trigger lint

# Lint 自動修正
pnpm --filter @asobiba/gsc-trigger lint:fix

# ローカルでの関数実行テスト（functions-framework使用）
cd packages/gsc-trigger
pnpm build
npx @google-cloud/functions-framework --target=triggerUploadGcs --signature-type=event
```

#### Copilot 用ルール（必須）
1. **関数シグネチャ**: Cloud Functions のイベントドリブン型（CloudEvent）に準拠
2. **エラーハンドリング**: 例外を適切にキャッチし、ログ出力を行う
3. **画像処理**: Sharp を使用し、メモリ効率を考慮した実装
4. **ZIP処理**: adm-zip を使用し、大容量ファイルの取り扱いに注意
5. **非同期処理**: async/await を適切に使用し、Promise チェーンを避ける
6. **テスト**: Cloud Storage イベントのモックを作成してテスト

#### テスト / パフォーマンス
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: 各処理ロジックの検証
  - モックテスト: Cloud Storage イベントとファイル操作のモック
- **パフォーマンス考慮事項**:
  - 大容量ファイル処理時のメモリ使用量
  - Sharp による画像処理の最適化（品質とサイズのバランス）
  - タイムアウト設定（Cloud Functions の実行時間制限）

#### サンプル Copilot プロンプト
```
「@asobiba/gsc-trigger パッケージに、WebP形式への変換機能を追加してください。
アップロードされた画像をWebPに変換し、元の画像と併せて保存するようにしてください。
Sharpライブラリを使用し、品質とファイルサイズのバランスを最適化してください。」
```

---

### @asobiba/common

#### 目的（想定）
モノレポ全体で共有される共通機能を提供するパッケージ。主に Prisma による データベース接続とスキーマ定義を一元管理。

#### 重要ポイント
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

#### ローカル検証コマンド
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

#### Copilot 用ルール（必須）
1. **スキーマ変更**: 新しいテーブルやフィールドを追加する際は `prisma/schema.prisma` を編集
2. **マイグレーション**: スキーマ変更後は必ず `prisma:migrate` を実行
3. **Client 生成**: スキーマ変更後は `prisma:generate` を実行して型定義を更新
4. **インポート**: 他パッケージから使用する際は `import { db } from '@asobiba/common'` を使用
5. **型定義**: Prisma 生成型を使用する際は `import type { PrismaClient } from '@asobiba/common'`
6. **シングルトン維持**: 新規 PrismaClient インスタンスを作成せず、常に `db` を使用
7. **環境変数**: `DATABASE_URL` を適切に設定

#### テスト / CI
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

#### サンプル Copilot プロンプト
```
「@asobiba/common パッケージに、新しいモデル Category を追加してください。
Category には id, name, description, createdAt, updatedAt フィールドを持たせ、
Photo と多対多のリレーションを設定してください。マイグレーションファイルも生成してください。」
```

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
