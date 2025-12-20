import {afterAll, beforeEach} from 'vitest';
import {cleanupDatabase, disconnectDatabase} from '@asobiba/common';

// 各テストの前にデータベースをクリーンアップ
beforeEach(async () => {
  await cleanupDatabase();
});

// すべてのテスト終了後にデータベース接続を切断
afterAll(async () => {
  await disconnectDatabase();
});
