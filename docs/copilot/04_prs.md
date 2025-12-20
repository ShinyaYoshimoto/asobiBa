# 04_prs — PR / ブランチ / コミット規約とチェックリスト

ブランチとコミット
- ブランチ名: feat/<short-desc>, fix/<short-desc>, chore/<short-desc>
- コミットメッセージ例:
  - feat(pack): add X
  - fix(pack): correct Y
  - chore(deps): update Z
- TDD を守る場合のコミット例:
  1) chore(<pkg>): add failing test
  2) feat(<pkg>): implement minimal code to satisfy test
  3) refactor(<pkg>): cleanup / types / docs

PR の説明に含めるべき情報
- 変更の要約
- 影響範囲（パッケージ、API、DB）
- テスト手順（ローカルでの再現コマンド）
- Prisma 変更がある場合は migrate / generate の手順
- 互換性に関する注意点

PR 前チェックリスト（必須）
- [ ] pnpm -r build が通る
- [ ] pnpm -r test が通る
- [ ] pnpm -r lint が通る
- [ ] 型チェック / format を実行済み
- [ ] Prisma の変更がある場合は migration / generate の手順を PR に記載
- [ ] シークレットを含めていない

PR の運用
- 1 PR = 1 主題（可能ならパッケージ単位）
- 複数パッケージに跨る変更は影響範囲を明記し、可能なら分割する案を提示する
- 自動マージを行わない（人のレビューと CI を必須にする）

## PR サイズとファイル数の自動チェック

GitHub Actions により、PR のサイズが自動的にチェックされます。

**チェック内容**:
- 変更行数（追加 + 削除）: 200 行以内
- 変更ファイル数: 10 ファイル以内

**トリガー**:
- PR が opened, synchronize, reopened, edited のいずれかの状態になったとき

**制限を超えた場合**:
- GitHub Actions のチェックが失敗し、エラーメッセージが表示されます
- ブランチ保護ルールで必須チェックに設定されている場合、マージがブロックされます

**対処方法**:
- PR を複数の小さな PR に分割することを検討してください
- 大きな変更が必要な場合は、段階的に実装し、レビュー可能な単位でコミットしてください
- バイナリファイルは行数カウントから除外されますが、ファイル数にはカウントされます

**ワークフローファイル**: `.github/workflows/pr-size-file-count-check.yml`
