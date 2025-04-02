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
  "Present Affirmative": {
    kanji: string
    hiragana: string
  } | null
  "Present Negative": {
    kanji: string
    hiragana: string
  } | null
  "Past Affirmative": {
    kanji: string
    hiragana: string
  } | null
  "Past Negative": {
    kanji: string
    hiragana: string
  } | null
  "Te Form": {
    kanji: string
    hiragana: string
  } | null
}

export type WritingSystem = "kanji" | "hiragana"
export type VerbForm = "dictionary" | "masu"
export type ClassLevel = "111" | "112" | "EX" // Type for class levels
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

// Japanese conjugation data
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
  "Word": {
    "dictionary": {
      "kanji": "使う" ,
      "hiragana": "つかう"
    },
    "definition": "To use",
    "type": "verb-ru",
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
},  {
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
},  {
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
},  {
  "Word": {
    "dictionary": {
      "kanji": "いる",
      "hiragana": "いる"
    },
    "definition": "To be (not alive)",
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
  "Te Form": null
},  {
  "Word": {
    "dictionary": {
      "kanji": "ある",
      "hiragana": "ある"
    },
    "definition": "To be (animate)",
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
  "Te Form": null
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
},  {
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
}]