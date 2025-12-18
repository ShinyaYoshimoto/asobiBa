# GitHub Copilot 用指示（asobiBa リポジトリ向け）

目的
- このファイルは Copilot Chat（AI）に対して、本リポジトリで期待される振る舞い・制約・検証手順を明確に伝えるためのものです。生成するコードは必ず人のレビューを前提としてください。

対象
- 主に Copilot Chat 向け。ただし人間のコントリビューターも参照してください。

リポジトリの技術スタック（重要）
- 言語: TypeScript（複数パッケージのモノレポ構成）
- パッケージ管理: pnpm（ルートのスクリプトは pnpm -r を使用）
- Node エンジン: >= 20.0.0（package.json に準拠）
- フォーマット / Lint: biome（各パッケージで使用）
- テスト: vitest（多くのパッケージ）、一部で jest が使われているパッケージあり
- ORM: Prisma（generated client が存在するパッケージあり）
- 実行環境: Google Cloud Functions / GCS を使うパッケージあり（認証は外部で管理）
- その他: hono, zod, @prisma/client, sharp, uuid 等

高レベル振る舞いルール（必須）
- 既存の public API、型、DB スキーマ（Prisma）の破壊的変更は原則行わない。大きな変更案は「提案（diff + 互換性維持案）」として出力すること。
- 生成済みファイル（prisma client の生成物や mahjong-hono/src/generated 以下）は直接編集しない。変更が必要なら「schema 変更 -> prisma generate 実行 -> 生成物の差分を確認する」手順を提示する。
- Secrets/API キー/認証情報は決して生成・ハードコードしない。外部環境変数 (.env / GitHub Secrets) を使う案のみ提示する。
- any の濫用禁止。やむを得ない場合は明示的に理由と TODO コメントを付与する。
- 変更を行う場合は必ずテストの追加・更新を提案する。テストフレームワーク（vitest/jest）に合わせた例を含める。
- 自動生成されたコードでも人によるレビューを必須とする旨を明示する。

リクエスト時の出力要件（Copilot に期待する成果物）
- 「変更差分（ファイル単位のパッチまたは簡潔な diff）」を示す。
- 変更理由、影響範囲（どのパッケージに影響するか）を明記する。
- ローカルで検証するためのコマンド（インストール、ビルド、テスト、型チェック、lint、prisma 関連）を提示する。
- Prisma スキーマを変更する場合は、必要な migration コマンド（pnpm --filter @asobiba/common prisma:migrate 等）と prisma:generate 実行箇所を提案する。
- 変更によって増える脆弱性や性能影響がある場合は、代替案とベンチマーク方法を提示する。

ローカル検証コマンド（よく使うもの）
- インストール: pnpm install
- ルート全体ビルド: pnpm -r build
- ルート全体テスト: pnpm -r test
- Lint: pnpm -r lint
- Lint 自動修正: pnpm -r lint:fix
- Format: pnpm -r format
- 型チェック（package によって別コマンドがある場合あり）: 各パッケージの tsconfig/スクリプトに従う
- Prisma（common パッケージでの操作が多い）:
  - migrate: pnpm --filter @asobiba/common prisma:migrate
  - generate: pnpm --filter @asobiba/common prisma:generate
  - studio: pnpm --filter @asobiba/common prisma:studio

Prisma と生成クライアントについての注意
- mahjong-hono 等に生成済みクライアントがある（src/generated 下など）。直接編集しない。
- Prisma schema を変更する場合は:
  1) schema を更新
  2) pnpm --filter @asobiba/common prisma:migrate（必要なら）
  3) pnpm --filter @asobiba/common prisma:generate
  4) 生成物の差分を確認（生成物は明示的に PR に含めるかどうか運用方針に従う）
- 変更は DB 互換性と既存 API へ与える影響を明記すること。

パッケージ境界（設計上の制約）
- 変更を提案する場合は、影響を受けるパッケージを明示（例: @asobiba/common -> @asobiba/mahjong-api -> mahjong-hono）。
- 1 PR が複数パッケージを跨ぐ場合は、明確な説明とテスト手順を提示する。可能なら変更を分割する提案をする。

セキュリティ / プライバシー
- 認証情報や個人データはテストデータでも含めない。ダミーデータは明確に識別可能にする。
- 外部 API を呼ぶコードの提案時は、タイムアウト/リトライ/エラーハンドリングを含める。
- GCS / Google Cloud の接続情報はサンプル.env として出力し、実鍵は絶対に含めない。

コーディング規約（守ること）
- フォーマット: biome format（package scripts 参照）
- lint: biome check（修正は lint:fix を推奨）
- 型安全: public API には明示的な型注釈をつける
- テスト: 新しい機能・修正にはユニットテストを追加。既存テストがある場合はそれらも通す。
- 非同期処理: Promise のエラーハンドリングを怠らない

PR / ブランチ / コミットのルール（Copilot が PR 文を生成する場合）
- ブランチ名: feat/
