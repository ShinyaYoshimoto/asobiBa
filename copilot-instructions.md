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
- ブランチ名: feat/, fix/, chore/
- 1 PR = 1 主題（可能ならパッケージ単位）
- PR 説明に含めるべき情報:
  - 変更の要約
  - 影響範囲（パッケージ、API、DB）
  - テスト手順とローカル検証コマンド
  - prisma 変更がある場合は migrate / generate の実行手順
  - 互換性に関する注意点
- コミットメッセージ規約（例）:
  - feat(pack): add X
  - fix(pack): correct Y
  - chore(deps): update Z

## Issue からの実装と TDD に関するルール

パッケージ共通：Issue からの実装依頼時のルール（Copilot 向け）
- 適用範囲
  - Issue を基に Copilot に実装を依頼する場合、ここに定めるルールは本リポジトリ全体で必須とする。
- 事前要件（Issue 側）
  - 実装要求は必ず Issue 番号（例: #123）と Issue の URL を含めること。
  - Issue には受け入れ基準（Acceptance criteria）を具体的に列挙すること（期待される入力・出力、エッジケース、性能要件など）。
  - もし Issue が不明瞭なら、まず Copilot は「明確化のための質問」を出し、人の回答を待つこと。具体的な要件が得られるまで実装を行わない。
- TDD（テスト駆動開発）ワークフロー（必須）
  - 実装は必ず TDD のステップで行うこと：1) 失敗するテスト（Red）を追加、2) 必要最小限の実装でテストを成功させる（Green）、3) リファクタリングしてコード品質を改善（Refactor）。
  - Copilot に依頼する際は「まずテストを作ってください。テストが失敗することを示す差分（またはテスト単体の実行結果の期待値）を出してから、次に実装差分を出してください」と明示すること。
  - コミット/差分の推奨構成（PR に含める履歴例）:
    - chore(<package>): add failing test for <feature>
    - feat(<package>): implement minimal code to satisfy test
    - refactor(<package>): cleanup code / update types / add docs
  - もし一つの PR にまとめる場合でも、出力としては上記の段階を分かるように差分と説明で示すこと（テスト追加部分と実装部分を明確に分ける）。
- 出力要求（Copilot へ指示する際に必須）
  - 変更差分は unified diff 形式で出すこと。
  - 追加したテストファイル名とテストケース名、失敗時の期待されるメッセージ（テストが Red であることを示す）を明記すること。
  - 実装差分と合わせてローカルでの検証手順を示すこと（例: pnpm install && pnpm --filter <package> test など）。
  - PR 用の説明文（テンプレート）を生成すること：Issue 参照、変更概要、テスト手順、影響範囲、マイグレーション手順（あれば）。
- テストの粒度とモック方針
  - 単体テストはユニットに集中し、外部依存（DB/GCS/外部API）はモックまたはスタブを使うこと。統合が必要なら E2E を別途用意し、実行条件を明記する。
  - パッケージごとに標準的なテストフレームワーク（vitest または jest）を使うこと（package.json の設定を参照）。
- DB / Prisma の変更が必要な Issue の扱い
  - Prisma schema の変更を伴う場合、Copilot は「schema 変更案（schema.prisma の diff）」「migration 手順（pnpm --filter @asobiba/common prisma:migrate 等）」「prisma:generate 実行箇所」を必ず提示すること。
  - 生成済みクライアントの差分は自動的に編集しない。生成物の差分は「生成後に出る差分」として提示する。
- 複数パッケージに跨る変更
  - 影響を受けるパッケージを列挙し、可能なら変更をパッケージ単位に分割する案を提示すること。
  - ルートでの pnpm -r build / test を通す手順を必ず含めること。
- PR 作成に関する出力（Copilot が PR 文面を出す場合）
  - PR のタイトルに Issue 番号を含める（例: "feat(pack): implement X (fixes #123)"）。
  - PR 本文は少なくとも次を含める：Issue リンク、変更の要約、追加したテストの一覧、ローカルでの検証手順、影響範囲、マイグレーション手順（必要なら）。
  - 自動でマージしてはならない。生成物は必ず人のレビューを経てマージすること。
- 例：Copilot に渡すプロンプト雛形（日本語）
  - 「Issue #123（URL: ...）の実装を TDD で進めてください。まず vitest の失敗するユニットテストを追加する差分を unified diff で出して下さい（テストが失敗することが明確にわかる内容にしてください）。次に、そのテストが通るための最小限の実装差分を提示してください。最後にリファクタ差分を示し、ローカルでの検証コマンド（pnpm --filter @asobiba/<package> test 等）と PR 用の説明文を出してください。DB 変更がある場合は prisma schema の差分と migrate/generate の手順も含めてください。」
- 不明点・曖昧な要件がある場合
  - Copilot は勝手に仮定して実装を進めず、まず「実装を進めるための前提（例: デフォルトの挙動は X とする）」を複数提案し、ユーザーに確認を求めること。

運用上の注意事項
- Copilot に「PR をそのまま作成してマージする」権限は与えない（自動マージは不可）。Copilot の出力（diff / PR 文面）を人が検査してから CI を通しマージするフローを厳守する。
- 小さな修正でも TDD を崩してはならないが、限定的なドキュメント修正などテスト不要な作業は例外として扱ってよい（ただしその例外は Issue に明示すること）。

チェックリスト（Issue → Copilot 実装依頼用）
- [ ] Issue に受け入れ基準が書かれている
- [ ] 必要なデータや環境（DB / GCS / env）について説明があるか、またはモックで代替する指示がある
- [ ] Copilot に「まず failing test を作る」ことを明示している
- [ ] PR 用のテンプレート（タイトル・本文）を生成するよう指示している
- [ ] Prisma 変更がある場合、migration 手順を含めるよう指示している
