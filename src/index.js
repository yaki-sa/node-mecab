const MeCab = require('mecab-async');

// MeCabを用いてフリガナを抽出する関数
const katakanaConverter = (text) => {
  MeCab.command = 'mecab';
  let katakana = '';
  const result = MeCab.parseSyncFormat(text);
  result.map((morph) => {
    // カタカナの取得方法は「reading」と「pronunciation」の2つ存在する
    // 本実装では「reading」だけを取得している
    if (morph.reading) {
      katakana += morph.reading;
    }
  });
  return katakana;
};

(() => {
  // コマンドラインから引数を指定した場合、フリガナを抽出する
  if (process.argv.length > 2) {
    const text = process.argv[2];
    const output = katakanaConverter(text);
    console.log('フリガナ抽出結果：', output);
  } else {
    console.log('引数を設定してください');
    console.log(
      '（例）node index.js 昔々、ある所にお爺さんとお婆さんが居たそうですよ！！'
    );
  }
})();
