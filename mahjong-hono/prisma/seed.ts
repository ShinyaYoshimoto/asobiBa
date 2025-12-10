import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.hand.createMany({
    data: [
      {
        name: '門前清自摸和',
        nameKana: 'ツモ',
        fanCount: 1,
        fanCountForCall: 0,
      },
      {
        name: '立直',
        nameKana: 'リーチ',
        fanCount: 1,
        fanCountForCall: 0,
      },
      {
        name: '一発',
        nameKana: 'イッパツ',
        fanCount: 1,
        fanCountForCall: 0,
      },
      {
        name: '役牌',
        nameKana: 'ヤクハイ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: '平和',
        nameKana: 'ピンフ',
        fanCount: 1,
        fanCountForCall: 0,
      },
      {
        name: '断么九',
        nameKana: 'タンヤオ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: '一盃口',
        nameKana: 'イーペーコー',
        fanCount: 1,
        fanCountForCall: 0,
      },
      {
        name: '海底摸月',
        nameKana: 'ハイテイ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: '河底撈魚',
        nameKana: 'ホウテイ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        // ミンカンに対するロンあがり
        name: '搶槓',
        nameKana: 'チャンカン',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: '嶺上開花',
        nameKana: 'リンシャンカイハツ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: 'ダブル立直',
        nameKana: 'ダブルリーチ',
        fanCount: 2,
        fanCountForCall: 0,
      },
      {
        // 時風、場風が揃う（ダブ東、ダブ南etc...）
        name: '連風牌',
        nameKana: 'リンフンハイ',
        fanCount: 1,
        fanCountForCall: 1,
      },
      {
        name: '対々和',
        nameKana: 'トイトイ',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '三暗刻',
        nameKana: 'サンアンコウ',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '三色同刻',
        nameKana: 'サンショクドウコウ',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '三槓子',
        nameKana: 'サンカンツ',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '小三元',
        nameKana: 'ショウサンゲン',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '混老頭',
        nameKana: 'ホンロウトウ',
        fanCount: 2,
        fanCountForCall: 2,
      },
      {
        name: '三色同順',
        nameKana: 'サンショクドウジュン',
        fanCount: 2,
        fanCountForCall: 1,
      },
      {
        name: '一気通貫',
        nameKana: 'イッキツウカン',
        fanCount: 2,
        fanCountForCall: 1,
      },
      {
        name: '全帯么九',
        nameKana: 'チャンタ',
        fanCount: 2,
        fanCountForCall: 1,
      },
      {
        name: '七対子',
        nameKana: 'チートイツ',
        fanCount: 2,
        fanCountForCall: 0,
      },
      {
        name: '二盃口',
        nameKana: 'リャンペーコウ',
        fanCount: 3,
        fanCountForCall: 0,
      },
      {
        name: '混一色',
        nameKana: 'ホンイツ',
        fanCount: 3,
        fanCountForCall: 2,
      },
      {
        name: '純全帯么九',
        nameKana: 'ジュンチャン',
        fanCount: 3,
        fanCountForCall: 2,
      },
      {
        name: '清一色',
        nameKana: 'チンイツ',
        fanCount: 6,
        fanCountForCall: 5,
      },
      {
        name: '天和',
        nameKana: 'テンホウ',
        fanCount: 13,
        fanCountForCall: 0,
      },
      {
        name: '地和',
        nameKana: 'チーホウ',
        fanCount: 13,
        fanCountForCall: 0,
      },
      {
        name: '国士無双',
        nameKana: 'コクシムソウ',
        fanCount: 13,
        fanCountForCall: 0,
      },
      {
        name: '四暗刻',
        nameKana: 'スーアンコク',
        fanCount: 13,
        fanCountForCall: 0,
      },
      {
        name: '大三元',
        nameKana: 'ダイサンゲン',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '緑一色',
        nameKana: 'リューイーソー',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '字一色',
        nameKana: 'ツーイーソー',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '小四喜',
        nameKana: 'ショウスーシー',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '大四喜',
        nameKana: 'ダイスーシー',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '清老頭',
        nameKana: 'チンロウトウ',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '四槓子',
        nameKana: 'スーカンツ',
        fanCount: 13,
        fanCountForCall: 13,
      },
      {
        name: '九蓮宝燈',
        nameKana: 'チューレンポウトウ',
        fanCount: 13,
        fanCountForCall: 0,
      },
    ],
  });
};

main()
  .catch(e => {
    console.error(e);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
