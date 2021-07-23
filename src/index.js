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

// カタカナ→ひらがなに変換する関数
const hiraganaConverter = (text) => {
  return text.replace(/[\u30a1-\u30f6]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0x60);
  });
};

(() => {
  // コマンドラインから引数を指定した場合、ふりがなを抽出する
  if (process.argv.length > 2) {
    const text = process.argv[2];
    const furigana_katakana = katakanaConverter(text);
    console.log('フリガナ：', furigana_katakana);
    const furigana_hiragana = hiraganaConverter(furigana_katakana);
    console.log('ふりがな：', furigana_hiragana);
  } else {
    console.log('引数を設定してください');
    console.log(
      '（例）node index.js 昔々、ある所にお爺さんとお婆さんが居たそうですよ！！'
    );
  }
})();
