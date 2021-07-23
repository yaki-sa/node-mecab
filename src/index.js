const MeCab = require('mecab-async');

// 半角(英数字)→全角(英数字)に変換する関数
const fullEiSujiConverter = (text) => {
  return text.replace(/[!-~]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
  });
};

// MeCabを用いてフリガナ(全角)を抽出する関数
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

// カタカナ(全角)→ひらがな(全角)に変換する関数
const hiraganaConverter = (text) => {
  return text.replace(/[\u30a1-\u30f6]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0x60);
  });
};

(() => {
  // コマンドラインから引数を指定した場合、ふりがなを抽出する
  if (process.argv.length > 2) {
    const text = process.argv[2];
    const fullEiSuji = fullEiSujiConverter(text);
    console.log('全角（英数字）変換：', fullEiSuji);
    const furigana_katakana = katakanaConverter(fullEiSuji);
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
