# Copilot Instructions for @asobiba/gsc-trigger

## 目的（想定）
Google Cloud Functions として動作する、Cloud Storage トリガー関数。ZIP ファイルや画像ファイルのアップロードイベントに反応して処理を実行。

## 重要ポイント
- **実行環境**: Google Cloud Functions (第2世代)
- **トリガー**: Cloud Storage オブジェクトの finalize イベント
- **処理内容**:
  - ZIP ファイル: 解凍して画像を抽出・リサイズ・保存
  - 画像ファイル: リサイズして最適化
- **依存ライブラリ**:
  - `@google-cloud/functions-framework`: Cloud Functions ランタイム
  - `adm-zip`: ZIP ファイルの解凍
  - `sharp`: 画像処理（リサイズ、最適化）

## ローカル検証コマンド
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

## Copilot 用ルール（必須）
1. **関数シグネチャ**: Cloud Functions のイベントドリブン型（CloudEvent）に準拠
2. **エラーハンドリング**: 例外を適切にキャッチし、ログ出力を行う
3. **画像処理**: Sharp を使用し、メモリ効率を考慮した実装
4. **ZIP処理**: adm-zip を使用し、大容量ファイルの取り扱いに注意
5. **非同期処理**: async/await を適切に使用し、Promise チェーンを避ける
6. **テスト**: Cloud Storage イベントのモックを作成してテスト

## テスト / パフォーマンス
- **テストフレームワーク**: Vitest
- **カバレッジツール**: @vitest/coverage-v8
- **テスト戦略**:
  - ユニットテスト: 各処理ロジックの検証
  - モックテスト: Cloud Storage イベントとファイル操作のモック
- **パフォーマンス考慮事項**:
  - 大容量ファイル処理時のメモリ使用量
  - Sharp による画像処理の最適化（品質とサイズのバランス）
  - タイムアウト設定（Cloud Functions の実行時間制限）

## サンプル Copilot プロンプト
```
「@asobiba/gsc-trigger パッケージに、WebP形式への変換機能を追加してください。
アップロードされた画像をWebPに変換し、元の画像と併せて保存するようにしてください。
Sharpライブラリを使用し、品質とファイルサイズのバランスを最適化してください。」
```
