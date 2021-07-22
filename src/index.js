const MeCab = require('mecab-async');

// MeCabを用いてカタカナに変換する関数
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
  let text = '昔々、ある所にお爺さんとお婆さんが居たそうですよ！！';

  const output = katakanaConverter(text);
  console.log('カタカナ変換結果：', output);
})();
