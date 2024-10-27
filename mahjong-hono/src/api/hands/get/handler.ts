import {Context} from 'hono';
import {loggerInterface} from '../../../utils/logger';
import {AbstractHandler} from '../../common/abstractHandler';

/**
 * TODO
 * - 役と翻数を全件取得するAPIを作る
 *   - [x] 役と翻数を管理するテーブルを作る
 *   - [x] DBにデータを登録するマイグレーション作成・データ投入
 *   - [x] APIのpath, schema検討
 *   - [] APIのテスト実装
 *   - [] APIの実装
 */
export class HandsHander extends AbstractHandler {
  constructor(dep?: {logger?: loggerInterface}) {
    super(dep);
  }

  execute = async (c: Context) => {
    try {
      return c.json({hands: []}, 200);
    } catch (e) {
      this.logger.error('Internal Server Error', e);
      return c.json({message: 'Internal Server Error'}, 500);
    }
  };
}
