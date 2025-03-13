export interface ConjugationItem {
  Word: {
    // Dictionary form information
    dictionary: {
      kanji: string
      hiragana: string
    }
    // Word metadata
    definition: string
    type: WordType
  }
  // Conjugation forms
  "Present Affirmative": {
    kanji: string
    hiragana: string
  }
  "Present Negative": {
    kanji: string
    hiragana: string
  }
  "Past Affirmative": {
    kanji: string
    hiragana: string
  }
  "Past Negative": {
    kanji: string
    hiragana: string
  }
  "Te Form": {
    kanji: string
    hiragana: string
  } | null
}

export type WritingSystem = "kanji" | "hiragana"
export type VerbForm = "dictionary" | "masu"
export type WordType =
  | "verb-ru"
  | "verb-u"
  | "verb-irregular"
  | "noun"
  | "adjective-i"
  | "adjective-na"
  | "adverb"
  | "particle"
  | "expression"

// Restructured conjugation data with improved organization
export const conjugationData: ConjugationItem[] = [
  {
    Word: {
      dictionary: {
        kanji: "見る",
        hiragana: "みる",
      },
      definition: "to see/to look",
      type: "verb-ru",
    },
    "Present Affirmative": {
      kanji: "見ます",
      hiragana: "みます",
    },
    "Present Negative": {
      kanji: "見ません",
      hiragana: "みません",
    },
    "Past Affirmative": {
      kanji: "見ました",
      hiragana: "みました",
    },
    "Past Negative": {
      kanji: "見ませんでした",
      hiragana: "みませんでした",
    },
    "Te Form": {
      kanji: "見て",
      hiragana: "みて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "食べる",
        hiragana: "たべる",
      },
      definition: "to eat",
      type: "verb-ru",
    },
    "Present Affirmative": {
      kanji: "食べます",
      hiragana: "たべます",
    },
    "Present Negative": {
      kanji: "食べません",
      hiragana: "たべません",
    },
    "Past Affirmative": {
      kanji: "食べました",
      hiragana: "たべました",
    },
    "Past Negative": {
      kanji: "食べませんでした",
      hiragana: "たべませんでした",
    },
    "Te Form": {
      kanji: "食べて",
      hiragana: "たべて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "飲む",
        hiragana: "のむ",
      },
      definition: "to drink",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "飲みます",
      hiragana: "のみます",
    },
    "Present Negative": {
      kanji: "飲みません",
      hiragana: "のみません",
    },
    "Past Affirmative": {
      kanji: "飲みました",
      hiragana: "のみました",
    },
    "Past Negative": {
      kanji: "飲みませんでした",
      hiragana: "のみませんでした",
    },
    "Te Form": {
      kanji: "飲んで",
      hiragana: "のんで",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "話す",
        hiragana: "はなす",
      },
      definition: "to speak/to talk",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "話します",
      hiragana: "はなします",
    },
    "Present Negative": {
      kanji: "話しません",
      hiragana: "はなしません",
    },
    "Past Affirmative": {
      kanji: "話しました",
      hiragana: "はなしました",
    },
    "Past Negative": {
      kanji: "話しませんでした",
      hiragana: "はなしませんでした",
    },
    "Te Form": {
      kanji: "話して",
      hiragana: "はなして",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "聞く",
        hiragana: "きく",
      },
      definition: "to listen/to hear",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "聞きます",
      hiragana: "ききます",
    },
    "Present Negative": {
      kanji: "聞きません",
      hiragana: "ききません",
    },
    "Past Affirmative": {
      kanji: "聞きました",
      hiragana: "ききました",
    },
    "Past Negative": {
      kanji: "聞きませんでした",
      hiragana: "ききませんでした",
    },
    "Te Form": {
      kanji: "聞いて",
      hiragana: "きいて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "書く",
        hiragana: "かく",
      },
      definition: "to write",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "書きます",
      hiragana: "かきます",
    },
    "Present Negative": {
      kanji: "書きません",
      hiragana: "かきません",
    },
    "Past Affirmative": {
      kanji: "書きました",
      hiragana: "かきました",
    },
    "Past Negative": {
      kanji: "書きませんでした",
      hiragana: "かきませんでした",
    },
    "Te Form": {
      kanji: "書いて",
      hiragana: "かいて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "読む",
        hiragana: "よむ",
      },
      definition: "to read",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "読みます",
      hiragana: "よみます",
    },
    "Present Negative": {
      kanji: "読みません",
      hiragana: "よみません",
    },
    "Past Affirmative": {
      kanji: "読みました",
      hiragana: "よみました",
    },
    "Past Negative": {
      kanji: "読みませんでした",
      hiragana: "よみませんでした",
    },
    "Te Form": {
      kanji: "読んで",
      hiragana: "よんで",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "買う",
        hiragana: "かう",
      },
      definition: "to buy",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "買います",
      hiragana: "かいます",
    },
    "Present Negative": {
      kanji: "買いません",
      hiragana: "かいません",
    },
    "Past Affirmative": {
      kanji: "買いました",
      hiragana: "かいました",
    },
    "Past Negative": {
      kanji: "買いませんでした",
      hiragana: "かいませんでした",
    },
    "Te Form": {
      kanji: "買って",
      hiragana: "かって",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "行く",
        hiragana: "いく",
      },
      definition: "to go",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "行きます",
      hiragana: "いきます",
    },
    "Present Negative": {
      kanji: "行きません",
      hiragana: "いきません",
    },
    "Past Affirmative": {
      kanji: "行きました",
      hiragana: "いきました",
    },
    "Past Negative": {
      kanji: "行きませんでした",
      hiragana: "いきませんでした",
    },
    "Te Form": {
      kanji: "行って",
      hiragana: "いって",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "来る",
        hiragana: "くる",
      },
      definition: "to come",
      type: "verb-irregular",
    },
    "Present Affirmative": {
      kanji: "来ます",
      hiragana: "きます",
    },
    "Present Negative": {
      kanji: "来ません",
      hiragana: "きません",
    },
    "Past Affirmative": {
      kanji: "来ました",
      hiragana: "きました",
    },
    "Past Negative": {
      kanji: "来ませんでした",
      hiragana: "きませんでした",
    },
    "Te Form": {
      kanji: "来て",
      hiragana: "きて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "する",
        hiragana: "する",
      },
      definition: "to do",
      type: "verb-irregular",
    },
    "Present Affirmative": {
      kanji: "します",
      hiragana: "します",
    },
    "Present Negative": {
      kanji: "しません",
      hiragana: "しません",
    },
    "Past Affirmative": {
      kanji: "しました",
      hiragana: "しました",
    },
    "Past Negative": {
      kanji: "しませんでした",
      hiragana: "しませんでした",
    },
    "Te Form": {
      kanji: "して",
      hiragana: "して",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "分かる",
        hiragana: "わかる",
      },
      definition: "to understand",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "分かります",
      hiragana: "わかります",
    },
    "Present Negative": {
      kanji: "分かりません",
      hiragana: "わかりません",
    },
    "Past Affirmative": {
      kanji: "分かりました",
      hiragana: "わかりました",
    },
    "Past Negative": {
      kanji: "分かりませんでした",
      hiragana: "わかりませんでした",
    },
    "Te Form": {
      kanji: "分かって",
      hiragana: "わかって",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "有る",
        hiragana: "ある",
      },
      definition: "to exist/to have (inanimate)",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "有ります",
      hiragana: "あります",
    },
    "Present Negative": {
      kanji: "有りません",
      hiragana: "ありません",
    },
    "Past Affirmative": {
      kanji: "有りました",
      hiragana: "ありました",
    },
    "Past Negative": {
      kanji: "有りませんでした",
      hiragana: "ありませんでした",
    },
    "Te Form": {
      kanji: "有って",
      hiragana: "あって",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "居る",
        hiragana: "いる",
      },
      definition: "to exist/to be (animate)",
      type: "verb-ru",
    },
    "Present Affirmative": {
      kanji: "居ます",
      hiragana: "います",
    },
    "Present Negative": {
      kanji: "居ません",
      hiragana: "いません",
    },
    "Past Affirmative": {
      kanji: "居ました",
      hiragana: "いました",
    },
    "Past Negative": {
      kanji: "居ませんでした",
      hiragana: "いませんでした",
    },
    "Te Form": {
      kanji: "居て",
      hiragana: "いて",
    },
  },
  {
    Word: {
      dictionary: {
        kanji: "泳ぐ",
        hiragana: "およぐ",
      },
      definition: "to swim",
      type: "verb-u",
    },
    "Present Affirmative": {
      kanji: "泳ぎます",
      hiragana: "およぎます",
    },
    "Present Negative": {
      kanji: "泳ぎません",
      hiragana: "およぎません",
    },
    "Past Affirmative": {
      kanji: "泳ぎました",
      hiragana: "およぎました",
    },
    "Past Negative": {
      kanji: "泳ぎませんでした",
      hiragana: "およぎませんでした",
    },
    "Te Form": {
      kanji: "泳いで",
      hiragana: "およいで",
    },
  },
]

