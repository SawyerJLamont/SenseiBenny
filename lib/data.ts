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
  "Word": {
    "dictionary": {
      "kanji": "分かる",
      "hiragana": "わかる"
    },
    "definition": "To understand",
    "type": "verb-u"
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
    "type": "verb-irregular"
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
    "type": "verb-u"
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
    "type": "verb-ru"
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
    "type": "verb-u"
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
    "type": "verb-u"
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
    "type": "verb-u"
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
    "type": "verb-ru"
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
    "type": "verb-ru"
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
    "type": "verb-ru"
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
    "type": "verb-u"
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
      "kanji": "使いる",
      "hiragana": "つかいる"
    },
    "definition": "To use",
    "type": "verb-ru"
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
    "type": "verb-u"
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
    "type": "verb-u"
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
    "type": "verb-ru"
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
    "kanji": null,
    "hiragana": null
  }
},  {
  "Word": {
    "dictionary": {
      "kanji": "ある",
      "hiragana": "ある"
    },
    "definition": "To be (animate)",
    "type": "verb-u"
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
    "kanji": null,
    "hiragana": null
  }
}]