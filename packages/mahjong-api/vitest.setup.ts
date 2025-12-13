import {afterAll, beforeEach} from 'vitest';
import {DbTestHelper} from '@asobiba/common';

// 各テストの前にデータベースをクリーンアップ
beforeEach(async () => {
  await DbTestHelper.cleanup();
});

// すべてのテスト終了後にデータベース接続を切断
afterAll(async () => {
  await DbTestHelper.disconnect();
});
