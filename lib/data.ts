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
    class: ClassLevel // New field for class level
  }
  // Conjugation forms - all can be null for non-verb types
  "Present Affirmative": { kanji: string; hiragana: string } | null
  "Present Negative": { kanji: string; hiragana: string } | null
  "Past Affirmative": { kanji: string; hiragana: string } | null
  "Past Negative": { kanji: string; hiragana: string } | null
  "Te Form": { kanji: string; hiragana: string } | null
}

export type WritingSystem = "kanji" | "hiragana"
export type VerbForm = "dictionary" | "masu"
export type ClassLevel = "111" | "112" |"113" | "EX" // Type for class levels
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

export const conjugationData: ConjugationItem[] = [
  {
  "Word": {
    "dictionary": {
      "kanji": "分かる",
      "hiragana": "わかる"
    },
    "definition": "To understand",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "分かります",
    "hiragana": "わかります"
  },
  "Present Negative": {
    "kanji": "分かりません",
    "hiragana": "わかりません"
  },
  "Past Affirmative": {
    "kanji": "分かりました",
    "hiragana": "わかりました"
  },
  "Past Negative": {
    "kanji": "分かりませんでした",
    "hiragana": "わかりませんでした"
  },
  "Te Form": {
    "kanji": "分かって",
    "hiragana": "わかって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "する",
      "hiragana": "する"
    },
    "definition": "To do/ To play",
    "type": "verb-irregular",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "します",
    "hiragana": "します"
  },
  "Present Negative": {
    "kanji": "しません",
    "hiragana": "しません"
  },
  "Past Affirmative": {
    "kanji": "しました",
    "hiragana": "しました"
  },
  "Past Negative": {
    "kanji": "しませんでした",
    "hiragana": "しませんでした"
  },
  "Te Form": {
    "kanji": "して",
    "hiragana": "して"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "飲む",
      "hiragana": "のむ"
    },
    "definition": "To drink",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "飲みます",
    "hiragana": "のみます"
  },
  "Present Negative": {
    "kanji": "飲みません",
    "hiragana": "のみません"
  },
  "Past Affirmative": {
    "kanji": "飲みました",
    "hiragana": "のみました"
  },
  "Past Negative": {
    "kanji": "飲みませんでした",
    "hiragana": "のみませんでした"
  },
  "Te Form": {
    "kanji": "飲んで",
    "hiragana": "のんで"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "食べる",
      "hiragana": "たべる"
    },
    "definition": "To eat",
    "type": "verb-ru",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "食べます",
    "hiragana": "たべます"
  },
  "Present Negative": {
    "kanji": "食べません",
    "hiragana": "たべません"
  },
  "Past Affirmative": {
    "kanji": "食べました",
    "hiragana": "たべました"
  },
  "Past Negative": {
    "kanji": "食べませんでした",
    "hiragana": "たべませんでした"
  },
  "Te Form": {
    "kanji": "食べて",
    "hiragana": "たべて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "行く",
      "hiragana": "いく"
    },
    "definition": "To go",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "行きます",
    "hiragana": "いきます"
  },
  "Present Negative": {
    "kanji": "行きません",
    "hiragana": "いきません"
  },
  "Past Affirmative": {
    "kanji": "行きました",
    "hiragana": "いきました"
  },
  "Past Negative": {
    "kanji": "行きませんでした",
    "hiragana": "いきませんでした"
  },
  "Te Form": {
    "kanji": "行って",
    "hiragana": "いって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "来る",
      "hiragana": "くる"
    },
    "definition": "To come",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "来ます",
    "hiragana": "きます"
  },
  "Present Negative": {
    "kanji": "来ません",
    "hiragana": "きません"
  },
  "Past Affirmative": {
    "kanji": "来ました",
    "hiragana": "きました"
  },
  "Past Negative": {
    "kanji": "来ませんでした",
    "hiragana": "きませんでした"
  },
  "Te Form": {
    "kanji": "来て",
    "hiragana": "きて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "帰る",
      "hiragana": "かえる"
    },
    "definition": "To return",
    "type": "verb-u",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "帰ります",
    "hiragana": "かえります"
  },
  "Present Negative": {
    "kanji": "帰りません",
    "hiragana": "かえりません"
  },
  "Past Affirmative": {
    "kanji": "帰りました",
    "hiragana": "かえりました"
  },
  "Past Negative": {
    "kanji": "帰りませんでした",
    "hiragana": "かえりませんでした"
  },
  "Te Form": {
    "kanji": "帰って",
    "hiragana": "かえって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "見る",
      "hiragana": "みる"
    },
    "definition": "To see",
    "type": "verb-ru",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "見ます",
    "hiragana": "みます"
  },
  "Present Negative": {
    "kanji": "見ません",
    "hiragana": "みません"
  },
  "Past Affirmative": {
    "kanji": "見ました",
    "hiragana": "みました"
  },
  "Past Negative": {
    "kanji": "見ませんでした",
    "hiragana": "みませんでした"
  },
  "Te Form": {
    "kanji": "見て",
    "hiragana": "みて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "見せる",
      "hiragana": "みせる"
    },
    "definition": "To be seen",
    "type": "verb-ru",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "見せます",
    "hiragana": "みせます"
  },
  "Present Negative": {
    "kanji": "見せません",
    "hiragana": "みせません"
  },
  "Past Affirmative": {
    "kanji": "見せました",
    "hiragana": "みせました"
  },
  "Past Negative": {
    "kanji": "見せませんでした",
    "hiragana": "みせませんでした"
  },
  "Te Form": {
    "kanji": "見せて",
    "hiragana": "みせて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "出来る",
      "hiragana": "できる"
    },
    "definition": "To be done",
    "type": "verb-ru",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "出来ます",
    "hiragana": "できます"
  },
  "Present Negative": {
    "kanji": "出来ません",
    "hiragana": "できません"
  },
  "Past Affirmative": {
    "kanji": "出来ました",
    "hiragana": "できましした"
  },
  "Past Negative": {
    "kanji": "出来ませんでした",
    "hiragana": "できませんでした"
  },
  "Te Form": {
    "kanji": "出来て",
    "hiragana": "できて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "作る",
      "hiragana": "つくる"
    },
    "definition": "To make",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "作ります",
    "hiragana": "つくります"
  },
  "Present Negative": {
    "kanji": "作りません",
    "hiragana": "つくりません"
  },
  "Past Affirmative": {
    "kanji": "作りました",
    "hiragana": "つくりました"
  },
  "Past Negative": {
    "kanji": "作りませんでした",
    "hiragana": "つくりませんでした"
  },
  "Te Form": {
    "kanji": "作って",
    "hiragana": "つくって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "使う",
      "hiragana": "つかう"
    },
    "definition": "To use",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "使います",
    "hiragana": "つかいます"
  },
  "Present Negative": {
    "kanji": "使いません",
    "hiragana": "つかいません"
  },
  "Past Affirmative": {
    "kanji": "使いました",
    "hiragana": "つかいました"
  },
  "Past Negative": {
    "kanji": "使いませんでした",
    "hiragana": "つかいませんでした"
  },
  "Te Form": {
    "kanji": "使って",
    "hiragana": "つかって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "違う",
      "hiragana": "ちがう"
    },
    "definition": "To differ",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "違います",
    "hiragana": "ちがいます"
  },
  "Present Negative": {
    "kanji": "違いません",
    "hiragana": "ちがいません"
  },
  "Past Affirmative": {
    "kanji": "違いました",
    "hiragana": "ちがいました"
  },
  "Past Negative": {
    "kanji": "違いませんでした",
    "hiragana": "ちがいませんでした"
  },
  "Te Form": {
    "kanji": "違って",
    "hiragana": "ちがって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "困る",
      "hiragana": "こまる"
    },
    "definition": "To become a problem",
    "type": "verb-u",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "困ります",
    "hiragana": "こまります"
  },
  "Present Negative": {
    "kanji": "困りません",
    "hiragana": "こまりません"
  },
  "Past Affirmative": {
    "kanji": "困りました",
    "hiragana": "こまりました"
  },
  "Past Negative": {
    "kanji": "困りませんでした",
    "hiragana": "こまりませんでした"
  },
  "Te Form": {
    "kanji": "困って",
    "hiragana": "こまって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "いる",
      "hiragana": "いる"
    },
    "definition": "To be (Animate)",
    "type": "verb-ru",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "います",
    "hiragana": "います"
  },
  "Present Negative": {
    "kanji": "いません",
    "hiragana": "いません"
  },
  "Past Affirmative": {
    "kanji": "いました",
    "hiragana": "いました"
  },
  "Past Negative": {
    "kanji": "いませんでした",
    "hiragana": "いませんでした"
  },
  "Te Form": {
    "kanji": "いて",
    "hiragana": "いて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "ある",
      "hiragana": "ある"
    },
    "definition": "To be (Inanimate)",
    "type": "verb-u",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "あります",
    "hiragana": "あります"
  },
  "Present Negative": {
    "kanji": "ありません",
    "hiragana": "ありません"
  },
  "Past Affirmative": {
    "kanji": "ありました",
    "hiragana": "ありました"
  },
  "Past Negative": {
    "kanji": "ありませんでした",
    "hiragana": "ありませんでした"
  },
  "Te Form": {
    "kanji": "あって",
    "hiragana": "あって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "買う",
      "hiragana": "かう"
    },
    "definition": "To buy",
    "type": "verb-ru",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "買います",
    "hiragana": "かいます"
  },
  "Present Negative": {
    "kanji": "買いません",
    "hiragana": "かいません"
  },
  "Past Affirmative": {
    "kanji": "買いました",
    "hiragana": "かいました"
  },
  "Past Negative": {
    "kanji": "買いませんでした",
    "hiragana": "かいませんでした"
  },
  "Te Form": {
    "kanji": "買って",
    "hiragana": "かって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "起きる",
      "hiragana": "おきる"
    },
    "definition": "To get up",
    "type": "verb-ru",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "起きます",
    "hiragana": "おきます"
  },
  "Present Negative": {
    "kanji": "起きません",
    "hiragana": "おきません"
  },
  "Past Affirmative": {
    "kanji": "起きました",
    "hiragana": "おきました"
  },
  "Past Negative": {
    "kanji": "起きませんでした",
    "hiragana": "おきませんでした"
  },
  "Te Form": {
    "kanji": "起きて",
    "hiragana": "おきて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "寝る",
      "hiragana": "ねる"
    },
    "definition": "To sleep",
    "type": "verb-ru",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "寝ます",
    "hiragana": "ねます"
  },
  "Present Negative": {
    "kanji": "寝ません",
    "hiragana": "ねません"
  },
  "Past Affirmative": {
    "kanji": "寝ました",
    "hiragana": "ねました"
  },
  "Past Negative": {
    "kanji": "寝ませんでした",
    "hiragana": "ねませんでした"
  },
  "Te Form": {
    "kanji": "寝て",
    "hiragana": "ねて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "教える",
      "hiragana": "おしえる"
    },
    "definition": "To teach",
    "type": "verb-ru",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "教えます",
    "hiragana": "おしえます"
  },
  "Present Negative": {
    "kanji": "教えません",
    "hiragana": "おしえません"
  },
  "Past Affirmative": {
    "kanji": "教えました",
    "hiragana": "おしえました"
  },
  "Past Negative": {
    "kanji": "教えませんでした",
    "hiragana": "おしえませんでした"
  },
  "Te Form": {
    "kanji": "教えて",
    "hiragana": "おしえて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "覚える",
      "hiragana": "おぼえる"
    },
    "definition": "To remember/memorize",
    "type": "verb-ru",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "覚えます",
    "hiragana": "おぼえます"
  },
  "Present Negative": {
    "kanji": "覚えません",
    "hiragana": "おぼえません"
  },
  "Past Affirmative": {
    "kanji": "覚えました",
    "hiragana": "おぼえました"
  },
  "Past Negative": {
    "kanji": "覚えませんでした",
    "hiragana": "おぼえませんでした"
  },
  "Te Form": {
    "kanji": "覚えて",
    "hiragana": "おぼえて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "聞く",
      "hiragana": "きく"
    },
    "definition": "To listen",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "聞きます",
    "hiragana": "ききます"
  },
  "Present Negative": {
    "kanji": "聞きません",
    "hiragana": "ききません"
  },
  "Past Affirmative": {
    "kanji": "聞きました",
    "hiragana": "ききました"
  },
  "Past Negative": {
    "kanji": "聞きませんでした",
    "hiragana": "ききませんでした"
  },
  "Te Form": {
    "kanji": "聞いて",
    "hiragana": "きいて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "話す",
      "hiragana": "はなす"
    },
    "definition": "To speak",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "話します",
    "hiragana": "はなします"
  },
  "Present Negative": {
    "kanji": "話しません",
    "hiragana": "はなしません"
  },
  "Past Affirmative": {
    "kanji": "話しました",
    "hiragana": "はなしました"
  },
  "Past Negative": {
    "kanji": "話しませんでした",
    "hiragana": "はなしませんした"
  },
  "Te Form": {
    "kanji": "話して",
    "hiragana": "はなして"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "読む",
      "hiragana": "よむ"
    },
    "definition": "To read",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "読みます",
    "hiragana": "よみます"
  },
  "Present Negative": {
    "kanji": "読みません",
    "hiragana": "よみません"
  },
  "Past Affirmative": {
    "kanji": "読みました",
    "hiragana": "よみました"
  },
  "Past Negative": {
    "kanji": "読みませんでした",
    "hiragana": "よみませんでした"
  },
  "Te Form": {
    "kanji": "読んで",
    "hiragana": "よんで"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "座る",
      "hiragana": "すわる"
    },
    "definition": "To sit",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "座ります",
    "hiragana": "すわります"
  },
  "Present Negative": {
    "kanji": "座りません",
    "hiragana": "すわりません"
  },
  "Past Affirmative": {
    "kanji": "座りました",
    "hiragana": "すわりました"
  },
  "Past Negative": {
    "kanji": "座りませんでした",
    "hiragana": "すわりませんでした"
  },
  "Te Form": {
    "kanji": "座って",
    "hiragana": "すわって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "立つ",
      "hiragana": "たつ"
    },
    "definition": "To stand",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "立ちます",
    "hiragana": "たちます"
  },
  "Present Negative": {
    "kanji": "立ちません",
    "hiragana": "たちません"
  },
  "Past Affirmative": {
    "kanji": "立ちました",
    "hiragana": "たちました"
  },
  "Past Negative": {
    "kanji": "立ちませんでした",
    "hiragana": "たちませんでした"
  },
  "Te Form": {
    "kanji": "立って",
    "hiragana": "たって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "書く",
      "hiragana": "かく"
    },
    "definition": "To write",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "書きます",
    "hiragana": "かきます"
  },
  "Present Negative": {
    "kanji": "書きません",
    "hiragana": "かきません"
  },
  "Past Affirmative": {
    "kanji": "書きました",
    "hiragana": "かきました"
  },
  "Past Negative": {
    "kanji": "書きませんでした",
    "hiragana": "かきませんでした"
  },
  "Te Form": {
    "kanji": "書いて",
    "hiragana": "かいて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "踊る",
      "hiragana": "おどる"
    },
    "definition": "To dance",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "踊ります",
    "hiragana": "おどります"
  },
  "Present Negative": {
    "kanji": "踊りません",
    "hiragana": "おどりません"
  },
  "Past Affirmative": {
    "kanji": "踊りました",
    "hiragana": "おどりました"
  },
  "Past Negative": {
    "kanji": "踊りませんでした",
    "hiragana": "おどりませんでした"
  },
  "Te Form": {
    "kanji": "踊って",
    "hiragana": "おどって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "泳ぐ",
      "hiragana": "およぐ"
    },
    "definition": "To swim",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "泳ぎます",
    "hiragana": "およぎます"
  },
  "Present Negative": {
    "kanji": "泳ぎません",
    "hiragana": "およぎません"
  },
  "Past Affirmative": {
    "kanji": "泳ぎました",
    "hiragana": "およぎました"
  },
  "Past Negative": {
    "kanji": "泳ぎませんでした",
    "hiragana": "およぎませんでした"
  },
  "Te Form": {
    "kanji": "泳いで",
    "hiragana": "およいで"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "遊ぶ",
      "hiragana": "あそぶ"
    },
    "definition": "To play",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "遊びます",
    "hiragana": "あそびます"
  },
  "Present Negative": {
    "kanji": "遊びません",
    "hiragana": "あそびません"
  },
  "Past Affirmative": {
    "kanji": "遊びました",
    "hiragana": "あそびました"
  },
  "Past Negative": {
    "kanji": "遊びませんでした",
    "hiragana": "あそびませんでした"
  },
  "Te Form": {
    "kanji": "遊んで",
    "hiragana": "あそんで"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "勉強する",
      "hiragana": "べんきょうする"
    },
    "definition": "To study",
    "type": "verb-u",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "勉強します",
    "hiragana": "べんきょうします"
  },
  "Present Negative": {
    "kanji": "勉強しません",
    "hiragana": "べんきょうしません"
  },
  "Past Affirmative": {
    "kanji": "勉強しました",
    "hiragana": "べんきょうしました"
  },
  "Past Negative": {
    "kanji": "勉強しませんでした",
    "hiragana": "べんきょうしませんでした"
  },
  "Te Form": {
    "kanji": "勉強して",
    "hiragana": "べんきょうして"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "待つ",
      "hiragana": "まつ"
    },
    "definition": "To wait",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "待ちます",
    "hiragana": "まちます"
  },
  "Present Negative": {
    "kanji": "待ちません",
    "hiragana": "まちません"
  },
  "Past Affirmative": {
    "kanji": "待ちました",
    "hiragana": "まちました"
  },
  "Past Negative": {
    "kanji": "待ちませんでした",
    "hiragana": "まちませんでした"
  },
  "Te Form": {
    "kanji": "待って",
    "hiragana": "まって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "会う",
      "hiragana": "あう"
    },
    "definition": "To meet (a person)",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "会います",
    "hiragana": "あいます"
  },
  "Present Negative": {
    "kanji": "会いません",
    "hiragana": "あいません"
  },
  "Past Affirmative": {
    "kanji": "会いました",
    "hiragana": "あいました"
  },
  "Past Negative": {
    "kanji": "会いませんでした",
    "hiragana": "あいませんでした"
  },
  "Te Form": {
    "kanji": "会って",
    "hiragana": "あって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "大きい",
      "hiragana": "おおきい"
    },
    "definition": "Big",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "大きいです",
    "hiragana": "おおきいです"
  },
  "Present Negative": {
    "kanji": "大きくないです",
    "hiragana": "おおきくないです"
  },
  "Past Affirmative": {
    "kanji": "大きかったです",
    "hiragana": "おおきかったです"
  },
  "Past Negative": {
    "kanji": "大きくなかったです",
    "hiragana": "おおきくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "小さい",
      "hiragana": "ちいさい"
    },
    "definition": "Small",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "小さいです",
    "hiragana": "ちいさいです"
  },
  "Present Negative": {
    "kanji": "小さくないです",
    "hiragana": "ちいさくないです"
  },
  "Past Affirmative": {
    "kanji": "小さかったです",
    "hiragana": "ちいさかったです"
  },
  "Past Negative": {
    "kanji": "小さくなかったです",
    "hiragana": "ちいさくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "新しい",
      "hiragana": "あたらしい"
    },
    "definition": "New",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "新しいです",
    "hiragana": "あたらしいです"
  },
  "Present Negative": {
    "kanji": "新しくないです",
    "hiragana": "あたらしくないです"
  },
  "Past Affirmative": {
    "kanji": "新しかったです",
    "hiragana": "あたらしかったです"
  },
  "Past Negative": {
    "kanji": "新しくなかったです",
    "hiragana": "あたらしくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "古い",
      "hiragana": "ふるい"
    },
    "definition": "Old (thing)",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "古いです",
    "hiragana": "ふるいです"
  },
  "Present Negative": {
    "kanji": "古くないです",
    "hiragana": "ふるくないです"
  },
  "Past Affirmative": {
    "kanji": "古かったです",
    "hiragana": "ふるかったです"
  },
  "Past Negative": {
    "kanji": "古くなかったです",
    "hiragana": "ふるくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "面白い",
      "hiragana": "おもしろい"
    },
    "definition": "Intresting/Funny",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "面白いです",
    "hiragana": "おもしろいです"
  },
  "Present Negative": {
    "kanji": "面白くないです",
    "hiragana": "おもしろくないです"
  },
  "Past Affirmative": {
    "kanji": "面白かったです",
    "hiragana": "おもしろかったです"
  },
  "Past Negative": {
    "kanji": "面白くなかったです",
    "hiragana": "おもしろくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "楽しい",
      "hiragana": "たのしい"
    },
    "definition": "Fun",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "楽しいです",
    "hiragana": "たのしいです"
  },
  "Present Negative": {
    "kanji": "楽しくないです",
    "hiragana": "たのしくないです"
  },
  "Past Affirmative": {
    "kanji": "楽しかったです",
    "hiragana": "たのしかったです"
  },
  "Past Negative": {
    "kanji": "楽しくなかったです",
    "hiragana": "たのしくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "詰まらない",
      "hiragana": "つまらない"
    },
    "definition": "Boring",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "詰まらないです",
    "hiragana": "つまらないです"
  },
  "Present Negative": {
    "kanji": "詰まらなくないです",
    "hiragana": "つまらなくないです"
  },
  "Past Affirmative": {
    "kanji": "詰まらなかったです",
    "hiragana": "つまらなかったです"
  },
  "Past Negative": {
    "kanji": "詰まらなくなかったです",
    "hiragana": "つまらなくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "可愛い",
      "hiragana": "かわいい"
    },
    "definition": "Cute",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "可愛いです",
    "hiragana": "かわいいです"
  },
  "Present Negative": {
    "kanji": "可愛くないです",
    "hiragana": "かわいくないです"
  },
  "Past Affirmative": {
    "kanji": "可愛かったです",
    "hiragana": "かわいかったです"
  },
  "Past Negative": {
    "kanji": "可愛くなかったです",
    "hiragana": "かわいくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "怖い",
      "hiragana": "こわい"
    },
    "definition": "Frightning",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "怖いです",
    "hiragana": "こわいです"
  },
  "Present Negative": {
    "kanji": "怖くないです",
    "hiragana": "こわくないです"
  },
  "Past Affirmative": {
    "kanji": "怖かったです",
    "hiragana": "こわかったです"
  },
  "Past Negative": {
    "kanji": "怖くなかったです",
    "hiragana": "こわくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "優しい",
      "hiragana": "やさしい"
    },
    "definition": "Easy(Problem)/Kind(Person)",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "優しいです",
    "hiragana": "やさしいです"
  },
  "Present Negative": {
    "kanji": "優しくないです",
    "hiragana": "やさしくないです"
  },
  "Past Affirmative": {
    "kanji": "優しかったです",
    "hiragana": "やさしかったです"
  },
  "Past Negative": {
    "kanji": "優しくなかったです",
    "hiragana": "やさしくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "難しい",
      "hiragana": "むずかしい"
    },
    "definition": "Difficult",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "難しいです",
    "hiragana": "むずかしいです"
  },
  "Present Negative": {
    "kanji": "難しくないです",
    "hiragana": "むずかしくないです"
  },
  "Past Affirmative": {
    "kanji": "難しかったです",
    "hiragana": "むずかしかったです"
  },
  "Past Negative": {
    "kanji": "難しくなかったです",
    "hiragana": "むずかしくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "高い",
      "hiragana": "たかい"
    },
    "definition": "Expensive",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "高いです",
    "hiragana": "たかいです"
  },
  "Present Negative": {
    "kanji": "高くないです",
    "hiragana": "たかくないです"
  },
  "Past Affirmative": {
    "kanji": "高かったです",
    "hiragana": "たかかったです"
  },
  "Past Negative": {
    "kanji": "高くなかったです",
    "hiragana": "たかくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "安い",
      "hiragana": "やすい"
    },
    "definition": "Inexpensive",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "安いです",
    "hiragana": "やすいです"
  },
  "Present Negative": {
    "kanji": "安くないです",
    "hiragana": "やすくないです"
  },
  "Past Affirmative": {
    "kanji": "安かったです",
    "hiragana": "やすかったです"
  },
  "Past Negative": {
    "kanji": "安くなかったです",
    "hiragana": "やすくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "低い",
      "hiragana": "ひくい"
    },
    "definition": "Low",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "低いです",
    "hiragana": "ひくいです"
  },
  "Present Negative": {
    "kanji": "低くないです",
    "hiragana": "ひくくないです"
  },
  "Past Affirmative": {
    "kanji": "低かったです",
    "hiragana": "ひくかったです"
  },
  "Past Negative": {
    "kanji": "低くなかったです",
    "hiragana": "ひくくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "暑い",
      "hiragana": "あつい"
    },
    "definition": "Hot(weather)",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "暑いです",
    "hiragana": "あついです"
  },
  "Present Negative": {
    "kanji": "暑くないです",
    "hiragana": "あつくないです"
  },
  "Past Affirmative": {
    "kanji": "暑かったです",
    "hiragana": "あつかったです"
  },
  "Past Negative": {
    "kanji": "暑くなかったです",
    "hiragana": "あつくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "寒い",
      "hiragana": "さむい"
    },
    "definition": "Cold(weather)",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "寒いです",
    "hiragana": "さむいです"
  },
  "Present Negative": {
    "kanji": "寒くないです",
    "hiragana": "さむくないです"
  },
  "Past Affirmative": {
    "kanji": "寒かったです",
    "hiragana": "さむかったです"
  },
  "Past Negative": {
    "kanji": "寒くなかったです",
    "hiragana": "さむくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "冷たい",
      "hiragana": "つめたい"
    },
    "definition": "Cold(thing)",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "冷たいです",
    "hiragana": "つめたいです"
  },
  "Present Negative": {
    "kanji": "冷たくないです",
    "hiragana": "つめたくないです"
  },
  "Past Affirmative": {
    "kanji": "冷たかったです",
    "hiragana": "つめたかったです"
  },
  "Past Negative": {
    "kanji": "冷たくなかったです",
    "hiragana": "つめたくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "暖かい",
      "hiragana": "あたたかい"
    },
    "definition": "Warm(mild)",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "暖かいです",
    "hiragana": "あたたかいです"
  },
  "Present Negative": {
    "kanji": "暖かくないです",
    "hiragana": "あたたかくないです"
  },
  "Past Affirmative": {
    "kanji": "暖かかったです",
    "hiragana": "あたたかかったです"
  },
  "Past Negative": {
    "kanji": "暖かくなかったです",
    "hiragana": "あたたかくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "忙しい",
      "hiragana": "いそがしい"
    },
    "definition": "Busy(people)",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "忙しいです",
    "hiragana": "いそがしいです"
  },
  "Present Negative": {
    "kanji": "忙しくないです",
    "hiragana": "いそがしくないです"
  },
  "Past Affirmative": {
    "kanji": "忙しかったです",
    "hiragana": "いそがしかったです"
  },
  "Past Negative": {
    "kanji": "忙しくなかったです",
    "hiragana": "いそがしくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "眠い",
      "hiragana": "ねむい"
    },
    "definition": "Sleepy",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "眠いです",
    "hiragana": "ねむいです"
  },
  "Present Negative": {
    "kanji": "眠くないです",
    "hiragana": "ねむくないです"
  },
  "Past Affirmative": {
    "kanji": "眠かったです",
    "hiragana": "ねむかったです"
  },
  "Past Negative": {
    "kanji": "眠くなかったです",
    "hiragana": "ねむくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "長い",
      "hiragana": "ながい"
    },
    "definition": "Long",
    "type": "adjective-i",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "長いです",
    "hiragana": "ながいです"
  },
  "Present Negative": {
    "kanji": "長くないです",
    "hiragana": "ながくないです"
  },
  "Past Affirmative": {
    "kanji": "長かったです",
    "hiragana": "ながかったです"
  },
  "Past Negative": {
    "kanji": "長くなかったです",
    "hiragana": "ながくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "早い",
      "hiragana": "はやい"
    },
    "definition": "Fast/Early",
    "type": "adjective-i",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "早いです",
    "hiragana": "はやいです"
  },
  "Present Negative": {
    "kanji": "早くないです",
    "hiragana": "はやくないです"
  },
  "Past Affirmative": {
    "kanji": "早かったです",
    "hiragana": "はやかったです"
  },
  "Past Negative": {
    "kanji": "早くなかったです",
    "hiragana": "はやくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "いい",
      "hiragana": "いい"
    },
    "definition": "Good",
    "type": "adjective-i",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "いいです",
    "hiragana": "いいです"
  },
  "Present Negative": {
    "kanji": "良くないです",
    "hiragana": "よくないです"
  },
  "Past Affirmative": {
    "kanji": "良かったです",
    "hiragana": "よかったです"
  },
  "Past Negative": {
    "kanji": "良くなかったです",
    "hiragana": "よくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "綺麗",
      "hiragana": "きれい"
    },
    "definition": "Beautiful/clean",
    "type": "adjective-na",
    "class": "111"
  },
  "Present Affirmative": {
    "kanji": "綺麗です",
    "hiragana": "きれいです"
  },
  "Present Negative": {
    "kanji": "綺麗じゃないです",
    "hiragana": "きれいじゃないです"
  },
  "Past Affirmative": {
    "kanji": "綺麗でした",
    "hiragana": "きれいでした"
  },
  "Past Negative": {
    "kanji": "綺麗じゃなかったです",
    "hiragana": "きれいじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "元気",
      "hiragana": "げんき"
    },
    "definition": "Healthy/energetic",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "元気です",
    "hiragana": "げんきです"
  },
  "Present Negative": {
    "kanji": "元気じゃないです",
    "hiragana": "げんきじゃないです"
  },
  "Past Affirmative": {
    "kanji": "元気でした",
    "hiragana": "げんきでした"
  },
  "Past Negative": {
    "kanji": "元気じゃなかったです",
    "hiragana": "げんきじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "賑やか",
      "hiragana": "にぎやか"
    },
    "definition": "Lively",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "賑やかです",
    "hiragana": "にぎやかです"
  },
  "Present Negative": {
    "kanji": "賑やかじゃないです",
    "hiragana": "にぎやかじゃないです"
  },
  "Past Affirmative": {
    "kanji": "賑やかでした",
    "hiragana": "にぎやかでした"
  },
  "Past Negative": {
    "kanji": "賑やかじゃなかったです",
    "hiragana": "にぎやかじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "有名",
      "hiragana": "ゆうめい"
    },
    "definition": "Famous",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "有名です",
    "hiragana": "ゆうめいです"
  },
  "Present Negative": {
    "kanji": "有名じゃないです",
    "hiragana": "ゆうめいじゃないです"
  },
  "Past Affirmative": {
    "kanji": "有名でした",
    "hiragana": "ゆうめいでした"
  },
  "Past Negative": {
    "kanji": "有名じゃなかったです",
    "hiragana": "ゆうめいじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "暇",
      "hiragana": "ひま"
    },
    "definition": "Not busy",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "暇です",
    "hiragana": "ひまです"
  },
  "Present Negative": {
    "kanji": "暇じゃないです",
    "hiragana": "ひまじゃないです"
  },
  "Past Affirmative": {
    "kanji": "暇でした",
    "hiragana": "ひまでした"
  },
  "Past Negative": {
    "kanji": "暇じゃなかったです",
    "hiragana": "ひまじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "便利",
      "hiragana": "べんり"
    },
    "definition": "Convient",
    "type": "adjective-na",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "便利です",
    "hiragana": "べんりです"
  },
  "Present Negative": {
    "kanji": "便利じゃないです",
    "hiragana": "べんりじゃないです"
  },
  "Past Affirmative": {
    "kanji": "便利でした",
    "hiragana": "べんりでした"
  },
  "Past Negative": {
    "kanji": "便利じゃなかったです",
    "hiragana": "べんりじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "上手",
      "hiragana": "じょうず"
    },
    "definition": "Good/skilled at",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "上手です",
    "hiragana": "じょうずです"
  },
  "Present Negative": {
    "kanji": "上手じゃないです",
    "hiragana": "じょうずじゃないです"
  },
  "Past Affirmative": {
    "kanji": "上手でした",
    "hiragana": "じょうずでした"
  },
  "Past Negative": {
    "kanji": "上手じゃなかったです",
    "hiragana": "じょうずじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "下手",
      "hiragana": "へた"
    },
    "definition": "Bad at",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "下手です",
    "hiragana": "へたです"
  },
  "Present Negative": {
    "kanji": "下手じゃないです",
    "hiragana": "へたじゃないです"
  },
  "Past Affirmative": {
    "kanji": "下手でした",
    "hiragana": "へたでした"
  },
  "Past Negative": {
    "kanji": "下手じゃなかったです",
    "hiragana": "へたじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "変",
      "hiragana": "へん"
    },
    "definition": "Strange",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "変です",
    "hiragana": "へんです"
  },
  "Present Negative": {
    "kanji": "変じゃないです",
    "hiragana": "へんじゃないです"
  },
  "Past Affirmative": {
    "kanji": "変でした",
    "hiragana": "へんでした"
  },
  "Past Negative": {
    "kanji": "変じゃなかったです",
    "hiragana": "へんじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "静か",
      "hiragana": "しずか"
    },
    "definition": "Quiet",
    "type": "adjective-na",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "静かです",
    "hiragana": "しずかです"
  },
  "Present Negative": {
    "kanji": "静かじゃないです",
    "hiragana": "しずかじゃないです"
  },
  "Past Affirmative": {
    "kanji": "静かでした",
    "hiragana": "しずかでした"
  },
  "Past Negative": {
    "kanji": "静かじゃなかったです",
    "hiragana": "しずかじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "不便",
      "hiragana": "ふべん"
    },
    "definition": "Inconvient",
    "type": "adjective-na",
    "class": "112"
  },
  "Present Affirmative": {
    "kanji": "不便です",
    "hiragana": "ふべんです"
  },
  "Present Negative": {
    "kanji": "不便じゃないです",
    "hiragana": "ふべんじゃないです"
  },
  "Past Affirmative": {
    "kanji": "不便でした",
    "hiragana": "ふべんでした"
  },
  "Past Negative": {
    "kanji": "不便じゃなかったです",
    "hiragana": "ふべんじゃなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "歩く",
      "hiragana": "あるく"
    },
    "definition": "To walk",
    "type": "verb-u",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "歩きます",
    "hiragana": "あるきます"
  },
  "Present Negative": {
    "kanji": "歩きません",
    "hiragana": "あるきません"
  },
  "Past Affirmative": {
    "kanji": "歩きました",
    "hiragana": "あるきました"
  },
  "Past Negative": {
    "kanji": "歩きませんでした",
    "hiragana": "あるきませんでした"
  },
  "Te Form": {
    "kanji": "歩いて",
    "hiragana": "あるいて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "写す",
      "hiragana": "うつす"
    },
    "definition": "To copy",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "写します",
    "hiragana": "うつします"
  },
  "Present Negative": {
    "kanji": "写しません",
    "hiragana": "うつしません"
  },
  "Past Affirmative": {
    "kanji": "写しました",
    "hiragana": "うつしました"
  },
  "Past Negative": {
    "kanji": "写しませんでした",
    "hiragana": "うつしませんでした"
  },
  "Te Form": {
    "kanji": "写して",
    "hiragana": "うつして"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "休む",
      "hiragana": "やすむ"
    },
    "definition": "To rest",
    "type": "verb-u",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "休みます",
    "hiragana": "やすみます"
  },
  "Present Negative": {
    "kanji": "休みません",
    "hiragana": "やすみません"
  },
  "Past Affirmative": {
    "kanji": "休みました",
    "hiragana": "やすみました"
  },
  "Past Negative": {
    "kanji": "休みませんでした",
    "hiragana": "やすみませんでした"
  },
  "Te Form": {
    "kanji": "休んで",
    "hiragana": "やすんで"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "見える",
      "hiragana": "みえる"
    },
    "definition": "To be visable",
    "type": "verb-ru",
    "class": "EX"
  },
  "Present Affirmative": {
    "kanji": "見えます",
    "hiragana": "みえます"
  },
  "Present Negative": {
    "kanji": "見えません",
    "hiragana": "みえません"
  },
  "Past Affirmative": {
    "kanji": "見えました",
    "hiragana": "みえました"
  },
  "Past Negative": {
    "kanji": "見えませんでした",
    "hiragana": "みえませんでした"
  },
  "Te Form": {
    "kanji": "見えて",
    "hiragana": "みえて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "走る",
      "hiragana": "はしる"
    },
    "definition": "To run",
    "type": "verb-u",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "走ります",
    "hiragana": "はしります"
  },
  "Present Negative": {
    "kanji": "走りません",
    "hiragana": "はしりません"
  },
  "Past Affirmative": {
    "kanji": "走りました",
    "hiragana": "はしりました"
  },
  "Past Negative": {
    "kanji": "走りませんでした",
    "hiragana": "はしりませんでした"
  },
  "Te Form": {
    "kanji": "走って",
    "hiragana": "はしって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "曲る",
      "hiragana": "まがる"
    },
    "definition": "To turn",
    "type": "verb-u",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "曲がります",
    "hiragana": "まがります"
  },
  "Present Negative": {
    "kanji": "曲がりません",
    "hiragana": "まがりません"
  },
  "Past Affirmative": {
    "kanji": "曲がりました",
    "hiragana": "まがりました"
  },
  "Past Negative": {
    "kanji": "曲がりませんでした",
    "hiragana": "まがりませんでした"
  },
  "Te Form": {
    "kanji": "曲がって",
    "hiragana": "まがって"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "止める",
      "hiragana": "とめる"
    },
    "definition": "To stop",
    "type": "verb-ru",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "止めます",
    "hiragana": "とめます"
  },
  "Present Negative": {
    "kanji": "止めません",
    "hiragana": "とめません"
  },
  "Past Affirmative": {
    "kanji": "止めました",
    "hiragana": "とめました"
  },
  "Past Negative": {
    "kanji": "止めませんでした",
    "hiragana": "とめませんでした"
  },
  "Te Form": {
    "kanji": "止めて",
    "hiragana": "とめて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "危ない",
      "hiragana": "あぶない"
    },
    "definition": "Dangerous",
    "type": "adjective-i",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "危ないです",
    "hiragana": "あぶないです"
  },
  "Present Negative": {
    "kanji": "危なくないです",
    "hiragana": "あぶなくないです"
  },
  "Past Affirmative": {
    "kanji": "危なかったです",
    "hiragana": "あぶなかったです"
  },
  "Past Negative": {
    "kanji": "危なくなかったです",
    "hiragana": "あぶなくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "遅い",
      "hiragana": "おそい"
    },
    "definition": "Slow/Late",
    "type": "adjective-i",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "遅いです",
    "hiragana": "おそいです"
  },
  "Present Negative": {
    "kanji": "遅くないです",
    "hiragana": "おそくないです"
  },
  "Past Affirmative": {
    "kanji": "遅かったです",
    "hiragana": "おそかったです"
  },
  "Past Negative": {
    "kanji": "遅くなかったです",
    "hiragana": "おそくなかったです"
  },
  "Te Form": null
},
  {
  "Word": {
    "dictionary": {
      "kanji": "止める",
      "hiragana": "やめる"
    },
    "definition": "To quit",
    "type": "verb-ru",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "止めます",
    "hiragana": "やめます"
  },
  "Present Negative": {
    "kanji": "止めません",
    "hiragana": "やめません"
  },
  "Past Affirmative": {
    "kanji": "止めました",
    "hiragana": "やめました"
  },
  "Past Negative": {
    "kanji": "止めませんでした",
    "hiragana": "やめませんでした"
  },
  "Te Form": {
    "kanji": "止めて",
    "hiragana": "やめて"
  }
},
  {
  "Word": {
    "dictionary": {
      "kanji": "呼びる",
      "hiragana": "よびる"
    },
    "definition": "To call out",
    "type": "verb-ru",
    "class": "113"
  },
  "Present Affirmative": {
    "kanji": "呼びます",
    "hiragana": "よびます"
  },
  "Present Negative": {
    "kanji": "呼びません",
    "hiragana": "よびません"
  },
  "Past Affirmative": {
    "kanji": "呼びました",
    "hiragana": "よびました"
  },
  "Past Negative": {
    "kanji": "呼びませんでした",
    "hiragana": "よびませんでした"
  },
  "Te Form": {
    "kanji": "呼びて",
    "hiragana": "よびて"
  }
}
]