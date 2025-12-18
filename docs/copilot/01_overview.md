# 01_overview — 目的 / 対象 / 技術スタック

目的
- このディレクトリは GitHub Copilot Chat（および開発者）が参照するためのリポジトリ固有ガイダンスを格納します。生成コードは必ず人のレビューを前提としてください。

対象
- 主に Copilot Chat 向け。人間のコントリビューターも参照可能。

技術スタック（重要）
- 言語: TypeScript（モノレポ、pnpm workspaces）
- パッケージ管理: pnpm（ルートスクリプトは pnpm -r を想定）
- Node エンジン: >= 20.0.0（package.json に準拠）
- フォーマット / Lint: biome（各パッケージで使用）
- テスト: vitest が中心。一部パッケージで jest が使われる場合あり
- ORM: Prisma（generated client がパッケージ内に存在する箇所あり）
- 実行環境: Google Cloud Functions / GCS 等の構成あり（認証は外部で管理）
- その他の主要ライブラリ: hono, zod, @prisma/client, sharp, uuid 等

利用上の注意（概要）
- 生成物（Prisma client 等）は直接編集しない。変更が必要なら schema 側を修正して prisma generate を実行する手順を提示してください。
- シークレットは決してハードコードしない。外部環境変数（.env / GitHub Secrets）を使う案のみ提示すること。