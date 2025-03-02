export interface ConjugationItem {
  Word: {
    kanji: string
    hiragana: string
    romaji: string
  }
  "Present Affirmative": {
    kanji: string
    hiragana: string
    romaji: string
  }
  "Present Negative": {
    kanji: string
    hiragana: string
    romaji: string
  }
  "Past Affirmative": {
    kanji: string
    hiragana: string
    romaji: string
  }
  "Past Negative": {
    kanji: string
    hiragana: string
    romaji: string
  }
  "Te Form": {
    kanji: string
    hiragana: string
    romaji: string
  } | null
}

export type WritingSystem = "kanji" | "hiragana" | "romaji"

export const conjugationData: ConjugationItem[] = [
  {
    Word: {
      kanji: "見る",
      hiragana: "みる",
      romaji: "miru",
    },
    "Present Affirmative": {
      kanji: "見ます",
      hiragana: "みます",
      romaji: "mimasu",
    },
    "Present Negative": {
      kanji: "見ません",
      hiragana: "みません",
      romaji: "mimasen",
    },
    "Past Affirmative": {
      kanji: "見ました",
      hiragana: "みました",
      romaji: "mimashita",
    },
    "Past Negative": {
      kanji: "見ませんでした",
      hiragana: "みませんでした",
      romaji: "mimasendeshita",
    },
    "Te Form": {
      kanji: "見て",
      hiragana: "みて",
      romaji: "mite",
    },
  },
  {
    Word: {
      kanji: "食べる",
      hiragana: "たべる",
      romaji: "taberu",
    },
    "Present Affirmative": {
      kanji: "食べます",
      hiragana: "たべます",
      romaji: "tabemasu",
    },
    "Present Negative": {
      kanji: "食べません",
      hiragana: "たべません",
      romaji: "tabemasen",
    },
    "Past Affirmative": {
      kanji: "食べました",
      hiragana: "たべました",
      romaji: "tabemashita",
    },
    "Past Negative": {
      kanji: "食べませんでした",
      hiragana: "たべませんでした",
      romaji: "tabemasendeshita",
    },
    "Te Form": {
      kanji: "食べて",
      hiragana: "たべて",
      romaji: "tabete",
    },
  },
  {
    Word: {
      kanji: "飲む",
      hiragana: "のむ",
      romaji: "nomu",
    },
    "Present Affirmative": {
      kanji: "飲みます",
      hiragana: "のみます",
      romaji: "nomimasu",
    },
    "Present Negative": {
      kanji: "飲みません",
      hiragana: "のみません",
      romaji: "nomimasen",
    },
    "Past Affirmative": {
      kanji: "飲みました",
      hiragana: "のみました",
      romaji: "nomimashita",
    },
    "Past Negative": {
      kanji: "飲みませんでした",
      hiragana: "のみませんでした",
      romaji: "nomimasendeshita",
    },
    "Te Form": {
      kanji: "飲んで",
      hiragana: "のんで",
      romaji: "nonde",
    },
  },
  {
    Word: {
      kanji: "話す",
      hiragana: "はなす",
      romaji: "hanasu",
    },
    "Present Affirmative": {
      kanji: "話します",
      hiragana: "はなします",
      romaji: "hanashimasu",
    },
    "Present Negative": {
      kanji: "話しません",
      hiragana: "はなしません",
      romaji: "hanashimasen",
    },
    "Past Affirmative": {
      kanji: "話しました",
      hiragana: "はなしました",
      romaji: "hanashimashita",
    },
    "Past Negative": {
      kanji: "話しませんでした",
      hiragana: "はなしませんでした",
      romaji: "hanashimasendeshita",
    },
    "Te Form": {
      kanji: "話して",
      hiragana: "はなして",
      romaji: "hanashite",
    },
  },
  {
    Word: {
      kanji: "聞く",
      hiragana: "きく",
      romaji: "kiku",
    },
    "Present Affirmative": {
      kanji: "聞きます",
      hiragana: "ききます",
      romaji: "kikimasu",
    },
    "Present Negative": {
      kanji: "聞きません",
      hiragana: "ききません",
      romaji: "kikimasen",
    },
    "Past Affirmative": {
      kanji: "聞きました",
      hiragana: "ききました",
      romaji: "kikimashita",
    },
    "Past Negative": {
      kanji: "聞きませんでした",
      hiragana: "ききませんでした",
      romaji: "kikimasendeshita",
    },
    "Te Form": {
      kanji: "聞いて",
      hiragana: "きいて",
      romaji: "kiite",
    },
  },
  {
    Word: {
      kanji: "書く",
      hiragana: "かく",
      romaji: "kaku",
    },
    "Present Affirmative": {
      kanji: "書きます",
      hiragana: "かきます",
      romaji: "kakimasu",
    },
    "Present Negative": {
      kanji: "書きません",
      hiragana: "かきません",
      romaji: "kakimasen",
    },
    "Past Affirmative": {
      kanji: "書きました",
      hiragana: "かきました",
      romaji: "kakimashita",
    },
    "Past Negative": {
      kanji: "書きませんでした",
      hiragana: "かきませんでした",
      romaji: "kakimasendeshita",
    },
    "Te Form": {
      kanji: "書いて",
      hiragana: "かいて",
      romaji: "kaite",
    },
  },
  {
    Word: {
      kanji: "読む",
      hiragana: "よむ",
      romaji: "yomu",
    },
    "Present Affirmative": {
      kanji: "読みます",
      hiragana: "よみます",
      romaji: "yomimasu",
    },
    "Present Negative": {
      kanji: "読みません",
      hiragana: "よみません",
      romaji: "yomimasen",
    },
    "Past Affirmative": {
      kanji: "読みました",
      hiragana: "よみました",
      romaji: "yomimashita",
    },
    "Past Negative": {
      kanji: "読みませんでした",
      hiragana: "よみませんでした",
      romaji: "yomimasendeshita",
    },
    "Te Form": {
      kanji: "読んで",
      hiragana: "よんで",
      romaji: "yonde",
    },
  },
  {
    Word: {
      kanji: "買う",
      hiragana: "かう",
      romaji: "kau",
    },
    "Present Affirmative": {
      kanji: "買います",
      hiragana: "かいます",
      romaji: "kaimasu",
    },
    "Present Negative": {
      kanji: "買いません",
      hiragana: "かいません",
      romaji: "kaimasen",
    },
    "Past Affirmative": {
      kanji: "買いました",
      hiragana: "かいました",
      romaji: "kaimashita",
    },
    "Past Negative": {
      kanji: "買いませんでした",
      hiragana: "かいませんでした",
      romaji: "kaimasendeshita",
    },
    "Te Form": {
      kanji: "買って",
      hiragana: "かって",
      romaji: "katte",
    },
  },
  {
    Word: {
      kanji: "行く",
      hiragana: "いく",
      romaji: "iku",
    },
    "Present Affirmative": {
      kanji: "行きます",
      hiragana: "いきます",
      romaji: "ikimasu",
    },
    "Present Negative": {
      kanji: "行きません",
      hiragana: "いきません",
      romaji: "ikimasen",
    },
    "Past Affirmative": {
      kanji: "行きました",
      hiragana: "いきました",
      romaji: "ikimashita",
    },
    "Past Negative": {
      kanji: "行きませんでした",
      hiragana: "いきませんでした",
      romaji: "ikimasendeshita",
    },
    "Te Form": {
      kanji: "行って",
      hiragana: "いって",
      romaji: "itte",
    },
  },
  {
    Word: {
      kanji: "来る",
      hiragana: "くる",
      romaji: "kuru",
    },
    "Present Affirmative": {
      kanji: "来ます",
      hiragana: "きます",
      romaji: "kimasu",
    },
    "Present Negative": {
      kanji: "来ません",
      hiragana: "きません",
      romaji: "kimasen",
    },
    "Past Affirmative": {
      kanji: "来ました",
      hiragana: "きました",
      romaji: "kimashita",
    },
    "Past Negative": {
      kanji: "来ませんでした",
      hiragana: "きませんでした",
      romaji: "kimasendeshita",
    },
    "Te Form": {
      kanji: "来て",
      hiragana: "きて",
      romaji: "kite",
    },
  },
  {
    Word: {
      kanji: "する",
      hiragana: "する",
      romaji: "suru",
    },
    "Present Affirmative": {
      kanji: "します",
      hiragana: "します",
      romaji: "shimasu",
    },
    "Present Negative": {
      kanji: "しません",
      hiragana: "しません",
      romaji: "shimasen",
    },
    "Past Affirmative": {
      kanji: "しました",
      hiragana: "しました",
      romaji: "shimashita",
    },
    "Past Negative": {
      kanji: "しませんでした",
      hiragana: "しませんでした",
      romaji: "shimasendeshita",
    },
    "Te Form": {
      kanji: "して",
      hiragana: "して",
      romaji: "shite",
    },
  },
  {
    Word: {
      kanji: "分かる",
      hiragana: "わかる",
      romaji: "wakaru",
    },
    "Present Affirmative": {
      kanji: "分かります",
      hiragana: "わかります",
      romaji: "wakarimasu",
    },
    "Present Negative": {
      kanji: "分かりません",
      hiragana: "わかりません",
      romaji: "wakarimasen",
    },
    "Past Affirmative": {
      kanji: "分かりました",
      hiragana: "わかりました",
      romaji: "wakarimashita",
    },
    "Past Negative": {
      kanji: "分かりませんでした",
      hiragana: "わかりませんでした",
      romaji: "wakarimasendeshita",
    },
    "Te Form": {
      kanji: "分かって",
      hiragana: "わかって",
      romaji: "wakatte",
    },
  },
  {
    Word: {
      kanji: "有る",
      hiragana: "ある",
      romaji: "aru",
    },
    "Present Affirmative": {
      kanji: "有ります",
      hiragana: "あります",
      romaji: "arimasu",
    },
    "Present Negative": {
      kanji: "有りません",
      hiragana: "ありません",
      romaji: "arimasen",
    },
    "Past Affirmative": {
      kanji: "有りました",
      hiragana: "ありました",
      romaji: "arimashita",
    },
    "Past Negative": {
      kanji: "有りませんでした",
      hiragana: "ありませんでした",
      romaji: "arimasendeshita",
    },
    "Te Form": {
      kanji: "有って",
      hiragana: "あって",
      romaji: "atte",
    },
  },
  {
    Word: {
      kanji: "居る",
      hiragana: "いる",
      romaji: "iru",
    },
    "Present Affirmative": {
      kanji: "居ます",
      hiragana: "います",
      romaji: "imasu",
    },
    "Present Negative": {
      kanji: "居ません",
      hiragana: "いません",
      romaji: "imasen",
    },
    "Past Affirmative": {
      kanji: "居ました",
      hiragana: "いました",
      romaji: "imashita",
    },
    "Past Negative": {
      kanji: "居ませんでした",
      hiragana: "いませんでした",
      romaji: "imasendeshita",
    },
    "Te Form": {
      kanji: "居て",
      hiragana: "いて",
      romaji: "ite",
    },
  },
  {
    Word: {
      kanji: "泳ぐ",
      hiragana: "およぐ",
      romaji: "oyogu",
    },
    "Present Affirmative": {
      kanji: "泳ぎます",
      hiragana: "およぎます",
      romaji: "oyogimasu",
    },
    "Present Negative": {
      kanji: "泳ぎません",
      hiragana: "およぎません",
      romaji: "oyogimasen",
    },
    "Past Affirmative": {
      kanji: "泳ぎました",
      hiragana: "およぎました",
      romaji: "oyogimashita",
    },
    "Past Negative": {
      kanji: "泳ぎませんでした",
      hiragana: "およぎませんでした",
      romaji: "oyogimasendeshita",
    },
    "Te Form": {
      kanji: "泳いで",
      hiragana: "およいで",
      romaji: "oyoide",
    },
  },
]

