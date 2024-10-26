import {Context} from 'hono';
import {basicLogger, loggerInterface} from '../../../utils/logger';

/**
 * TODO
 * - 役と翻数を全件取得するAPIを作る
 *   - [x] 役と翻数を管理するテーブルを作る
 *   - [x] DBにデータを登録するマイグレーション作成・データ投入
 *   - [x] APIのpath, schema検討
 *   - [] APIのテスト実装
 *   - [] APIの実装
 */
export class HandsHander {
  private logger: loggerInterface;

  constructor(dep?: {logger?: loggerInterface}) {
    this.logger = dep?.logger ?? new basicLogger();
  }

  handle = async (c: Context) => {
    try {
      return c.json({hands: []}, 200);
    } catch (e) {
      this.logger.error('Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
