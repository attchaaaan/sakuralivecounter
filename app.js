// =====================
// 1) データ（ここを手入力で増やしていく）
// =====================

// 曲マスタ：songId -> 表示名
const songs = {
  1: { name: "Nobody’s fault" },
  2: { name: "なぜ　恋をして来なかったんだろう？" },
  3: { name: "最終の地下鉄に乗って" },
  4: { name: "Plastic regret" },
  5: { name: "半信半疑" },
  6: { name: "Buddies" },
  7: { name: "ブルームーンキス" },
  8: { name: "BAN" },
  9: { name: "偶然の答え" },
  10: { name: "それが愛なのね" },
  11: { name: "君と僕と洗濯物" },
  12: { name: "Microscope" },
  13: { name: "思ったよりも寂しくない" },
  14: { name: "櫻坂の詩" },
  15: { name: "流れ弾" },
  16: { name: "Dead end" },
  17: { name: "ソニア" },
  18: { name: "On my way" },
  19: { name: "ジャマイカビール" },
  20: { name: "無言の宇宙" },
  21: { name: "美しきNervous" },
  22: { name: "五月雨よ" },
  23: { name: "僕のジレンマ" },
  24: { name: "I'm in" },
  25: { name: "断絶" },
  26: { name: "制服の人魚" },
  27: { name: "車間距離" },
  28: { name: "恋が絶滅する日" },
  29: { name: "Overture" },
  30: { name: "摩擦係数" },
  31: { name: "条件反射で泣けて来る" },
  32: { name: "One-way stairs" },
  33: { name: "タイムマシーンでYeah!" },
  34: { name: "ずっと　春だったらなあ" },
  35: { name: "桜月" },
  36: { name: "Cool" },
  37: { name: "無念" },
  38: { name: "もしかしたら真実" },
  39: { name: "魂のLiar" },
  40: { name: "夏の近道" },
  41: { name: "その日まで" },
  42: { name: "Start over!" },
  43: { name: "静寂の暴力" },
  44: { name: "風の音" },
  45: { name: "コンビナート" },
  46: { name: "Anthem time" },
  47: { name: "一瞬の馬" },
  48: { name: "ドローン旋回中" },
  49: { name: "承認欲求" },
  50: { name: "マモリビト" },
  51: { name: "確信的クロワッサン" },
  52: { name: "僕たちの La vie en rose" },
  53: { name: "Don’t cut in line!" },
  54: { name: "マンホールの蓋の上" },
  55: { name: "隙間風よ" },
  56: { name: "何歳の頃に戻りたいのか？" },
  57: { name: "何度　LOVE SONGの歌詞を読み返しただろう" },
  58: { name: "油を注せ！" },
  59: { name: "真夏に何か起きるのかしら" },
  60: { name: "心の影絵" },
  61: { name: "恋は向いてない" },
  62: { name: "泣かせて　Hold me tight!" },
  63: { name: "自業自得" },
  64: { name: "引きこもる時間はない" },
  65: { name: "愛し合いなさい" },
  66: { name: "イザベルについて" },
  67: { name: "縁起担ぎ" },
  68: { name: "標識" },
  69: { name: "もう一曲　欲しいのかい？" },
  70: { name: "I want tomorrow to come" },
  71: { name: "本質的なこと" },
  72: { name: "僕は僕を好きになれない" },
  73: { name: "今さらSuddenly" },
  74: { name: "嵐の前、世界の終わり" },
  75: { name: "19歳のガレット" },
  76: { name: "TOKYO SNOW" },
  77: { name: "UDAGAWA GENERATION" },
  78: { name: "Nightmare症候群" },
  79: { name: "Nothing special" },
  80: { name: "紋白蝶が確か飛んでた" },
  81: { name: "行かないで" },
  82: { name: "ULTRAVIOLET" },
  83: { name: "やるしかないじゃん" },
  84: { name: "Addiction" },
  85: { name: "Make or Break" },
  86: { name: "死んだふり" },
  87: { name: "港区パセリ" },
  88: { name: "恋愛無双" },
  89: { name: "真夏の大統領" },
  90: { name: "君のことを想いながら" },
  91: { name: "ノンアルコール" },
  92: { name: "Unhappy birthday構文" },
  93: { name: "Alter ego" },
  94: { name: "木枯らしは泣かない" },
  95: { name: "青空が見えるまで" },
  96: { name: "I will be" },
  97: { name: "Buddies (English Version)" },
  98: { name: "夜空で一番輝いてる星の名前を僕は知らない" },
  99: { name: "ピッカーン!" },
  100:{ name: "君がサヨナラ言えたって・・・" },
  101:{name:"ここにない足跡" },
  102:{name:"青空が違う" },
  103:{name:"二人セゾン"},
  104:{name:"手を繋いで帰ろうか"},
  105:{name:"制服と太陽"},
  106:{name:"世界には愛しかない"},
  107:{name:"太陽は見上げる人を選ばない"},
  108:{name:"危なっかしい計画"},
  109:{name:"風に吹かれても"},
  110:{name:"僕たちの戦争"},
  111:{name:"割れたスマホ"},
  112:{name:"波打ち際を走らないか?"},
  113:{name:"NO WAR in the future"},
  114:{name:"コンセントレーション"},
  115:{name:"カレイドスコープ"},
  116:{name:"音楽室に片思い"},
  117:{name:"バスルームトラベル"},
  118:{name:"バレエと少年"},
  119:{name:"10月のプールに飛び込んだ"},
  120:{name:"ヒールの高さ"},
  121:{name:"不協和音"},
  122:{name:"砂塵"},
};

// ライブ：setlist は songId の配列にする（表記揺れ対策）
const lives = [
  // 櫻坂46「BACKS LIVE!!」2021/06/16 @舞浜アンフィシアター
  {
  id: "20210616",
  name: "BACKS LIVE!! DAY1",
  date: "2021-06-16",
  venue: "舞浜アンフィシアター",
  // MC / VTR / ダンストラック等は除外して、曲のみ
  setlist: [
    1,  // Nobody's fault
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    9,  // 偶然の答え
    11, // 君と僕と洗濯物
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    14, // 櫻坂の詩（EN1）
    1   // Nobody's fault（WEN1）
  ]
},{
  id: "20210617",
  name: "BACKS LIVE!! DAY2",
  date: "2021-06-17",
  venue: "舞浜アンフィシアター",
  setlist: [
    1,  // Nobody's fault
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    9,  // 偶然の答え
    11, // 君と僕と洗濯物
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    14, // 櫻坂の詩（EN1）
    6   // Buddies（WEN1）
  ]
},{
  id: "20210618",
  name: "BACKS LIVE!! DAY3",
  date: "2021-06-18",
  venue: "舞浜アンフィシアター",
   setlist: [
    1,  // Nobody's fault
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    9,  // 偶然の答え
    11, // 君と僕と洗濯物
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    14, // 櫻坂の詩（EN1）
    8   // BAN（WEN1）
  ]
},{
  id: "20210709",
  name: "W-KEYAKI FES.2021 DAY1",
  date: "2021-07-09",
  venue: "富士急ハイランド コニファーフォレスト",
 setlist: [
    1,  // Nobody's fault
    12, // Microscope
    5,  // 半信半疑
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    3,  // 最終の地下鉄に乗って
    4,  // Plastic regret
    13, // 思ったよりも寂しくない
    7,  // ブルームーンキス
    10, // それが愛なのね
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    14  // 櫻坂の詩（EN1）
 ]
},{
  id: "20210711",
  name: "W-KEYAKI FES.2021 DAY3",
  date: "2021-07-11",
  venue: "富士急ハイランド コニファーフォレスト",
 setlist: [
    10, // それが愛なのね
    2,  // なぜ 恋をして来なかったんだろう？
    11, // 君と僕と洗濯物
    4,  // Plastic regret
    9,  // 偶然の答え
    5,  // 半信半疑
    7,  // ブルームーンキス
    13, // 思ったよりも寂しくない
    1,  // Nobody's fault
    6,  // Buddies
    8,  // BAN
    14  // 櫻坂の詩（W-KEYAKIZAKAの詩）
  ]
},{
  id: "20210912",
  name: "1st TOUR 2021(福岡)DAY1",
  date: "2021-09-12",
  venue: "西日本総合展示場 新館",

  setlist: [
    16, // Dead end
    5,  // 半信半疑
    4,  // Plastic regret
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20210913",
  name: "1st TOUR 2021(福岡)DAY2",
  date: "2021-09-13",
  venue: "西日本総合展示場 新館",

  setlist: [
    16, // Dead end
    5,  // 半信半疑
    4,  // Plastic regret
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20210919",
  name: "1st TOUR 2021(愛知)DAY1",
  date: "2021-09-19",
  venue: "Aichi Sky Expo",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20210920",
  name: "1st TOUR 2021(愛知)DAY2",
  date: "2021-09-20",
  venue: "Aichi Sky Expo",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20211009",
  name: "1st TOUR 2021(大阪)DAY1",
  date: "2021-10-09",
  venue: "丸善インテックアリーナ",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    20, // 無言の宇宙（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20211010",
  name: "1st TOUR 2021(大阪)DAY2",
  date: "2021-10-10",
  venue: "丸善インテックアリーナ",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    20, // 無言の宇宙（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20211029",
  name: "1st TOUR 2021(埼玉)DAY1",
  date: "2021-10-29",
  venue: "さいたまスーパーアリーナ",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    17, // ソニア
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    20, // 無言の宇宙（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20211030",
  name: "1st TOUR 2021(埼玉)DAY2",
  date: "2021-10-30",
  venue: "さいたまスーパーアリーナ",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    17, // ソニア
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    20, // 無言の宇宙（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20211031",
  name: "1st TOUR 2021(埼玉)DAY3",
  date: "2021-10-31",
  venue: "さいたまスーパーアリーナ",

  setlist: [
    16, // Dead end
    4,  // Plastic regret
    5,  // 半信半疑
    12, // Microscope
    11, // 君と僕と洗濯物
    9,  // 偶然の答え
    7,  // ブルームーンキス
    3,  // 最終の地下鉄に乗って
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    17, // ソニア
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    8,  // BAN
    15, // 流れ弾
    20, // 無言の宇宙（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20211209",
  name: "1st YEAR ANNIVERSARY LIVE DAY1",
  date: "2021-12-09",
  venue: "日本武道館",

  setlist: [
    8,  // BAN
    21, // 美しきNervous
    5,  // 半信半疑
    10, // それが愛なのね
    9,  // 偶然の答え
    7,  // ブルームーンキス
    13, // 思ったよりも寂しくない
    4,  // Plastic regret
    3,  // 最終の地下鉄に乗って
    11, // 君と僕と洗濯物
    18, // On my way
    17, // ソニア
    20, // 無言の宇宙
    19, // ジャマイカビール
    16, // Dead end
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    1,  // Nobody's fault
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20211210",
  name: "1st YEAR ANNIVERSARY LIVE DAY2",
  date: "2021-12-10",
  venue: "日本武道館",

  setlist: [
    8,  // BAN
    21, // 美しきNervous
    5,  // 半信半疑
    10, // それが愛なのね
    9,  // 偶然の答え
    7,  // ブルームーンキス
    13, // 思ったよりも寂しくない
    12, // Microscope
    18, // On my way
    17, // ソニア
    20, // 無言の宇宙
    19, // ジャマイカビール
    16, // Dead end
    2,  // なぜ 恋をして来なかったんだろう？
    6,  // Buddies
    1,  // Nobody's fault
    15, // 流れ弾
    101,// EN1: ここにない足跡
    102,// EN2: 青空が違う
    14  // 櫻坂の詩（EN3）
  ]
},{
  id: "20220108",
  name: "3rd Single BACKS LIVE!! DAY1",
  date: "2022-01-08",
  venue: "東京ガーデンシアター",

  setlist: [
    17, // ソニア
    8,  // BAN
    5,  // 半信半疑
    2,  // なぜ 恋をして来なかったんだろう？
    3,  // 最終の地下鉄に乗って
    11, // 君と僕と洗濯物
    12, // Microscope
    9,  // 偶然の答え
    13, // 思ったよりも寂しくない
    21, // 美しきNervous
    20, // 無言の宇宙
    6,  // Buddies
    1,  // Nobody's fault
    16, // Dead end
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20220109",
  name: "3rd Single BACKS LIVE!! DAY2",
  date: "2022-01-09",
  venue: "東京ガーデンシアター",

  setlist: [
    17, // ソニア
    8,  // BAN
    5,  // 半信半疑
    2,  // なぜ 恋をして来なかったんだろう？
    3,  // 最終の地下鉄に乗って
    11, // 君と僕と洗濯物
    12, // Microscope
    9,  // 偶然の答え
    13, // 思ったよりも寂しくない
    21, // 美しきNervous
    20, // 無言の宇宙
    6,  // Buddies
    1,  // Nobody's fault
    16, // Dead end
    15, // 流れ弾
    14  // 櫻坂の詩（EN1）
  ]
},{
  id: "20220521",
  name: "渡邉理佐 卒業コンサート DAY1",
  date: "2022-05-21",
  venue: "国立代々木競技場 第一体育館",

  setlist: [
    20, // 無言の宇宙
    1,  // Nobody's fault
    3,  // 最終の地下鉄に乗って
    10, // それが愛なのね
    8,  // BAN
    103,// 6. 二人セゾン（※櫻坂46 songs 未登録のため除外）
    104,// 7. 手を繋いで帰ろうか（※櫻坂46 songs 未登録のため除外）
    102,// 8. 青空が違う（※櫻坂46 songs 未登録のため除外）
    105,// 9. 制服と太陽（※櫻坂46 songs 未登録のため除外）
    106,// 10. 世界には愛しかない（※櫻坂46 songs 未登録のため除外）
    7,  // ブルームーンキス
    9,  // 偶然の答え
    2,  // なぜ 恋をして来なかったんだろう？
    22, // 五月雨よ
    13, // 思ったよりも寂しくない
    6,  // Buddies
    23, // 僕のジレンマ
    107,// EN1. 太陽は見上げる人を選ばない（※櫻坂46 songs 未登録のため除外）
    108,// EN2. 危なっかしい計画（※櫻坂46 songs 未登録のため除外）
    109,// EN3. 風に吹かれても（※櫻坂46 songs 未登録のため除外）
  ]
},{
  id: "20220522",
  name: "渡邉理佐 卒業コンサート DAY2",
  date: "2022-05-22",
  venue: "国立代々木競技場 第一体育館",

  setlist: [
    20, // 無言の宇宙
    1,  // Nobody's fault
    3,  // 最終の地下鉄に乗って
    10, // それが愛なのね
    15, // 流れ弾
    103,// 6. 二人セゾン（※ songs 未登録のため除外）
    110,// 7. 僕たちの戦争（※ songs 未登録のため除外）
    102,// 8. 青空が違う（※ songs 未登録のため除外）
    105,// 9. 制服と太陽（※ songs 未登録のため除外）
    106,// 10. 世界には愛しかない（※ songs 未登録のため除外）
    7,  // ブルームーンキス
    9,  // 偶然の答え
    2,  // なぜ 恋をして来なかったんだろう？
    22, // 五月雨よ
    13, // 思ったよりも寂しくない
    6,  // Buddies
    23, // 僕のジレンマ
    111,// EN1. 割れたスマホ（※ songs 未登録のため除外）
    112,// EN2. 波打ち際を走らないか？（※ songs 未登録のため除外）
    101,// EN3. ここにない足跡（※ songs 未登録のため除外）
    102,// EN4. 青空が違う（※ songs 未登録のため除外）
    107,// EN5. 太陽は見上げる人を選ばない（※ songs 未登録のため除外）
    108// EN6. 危なっかしい計画（※ songs 未登録のため除外）
  ]
},{
  id: "20220819",
  name: "W-KEYAKI FES.2022 DAY1",
  date: "2022-08-19",
  venue: "富士急ハイランド コニファーフォレスト",

  setlist: [
    // 1. 太陽は見上げる人を選ばない（※ songs 未登録のため除外）
    6,  // Buddies
    2,  // なぜ 恋をして来なかったんだろう？
    3,  // 最終の地下鉄に乗って
    21, // 美しきNervous
    24, // I'm in
    17, // ソニア
    9,  // 偶然の答え
    22, // 五月雨よ
    13, // 思ったよりも寂しくない
    19, // ジャマイカビール
    26, // 制服の人魚
    25, // 断絶
    7,  // ブルームーンキス
    28, // 恋が絶滅する日
    27, // 車間距離
    114,// 17. NO WAR in the future（※ songs 未登録のため除外）
    1,  // Nobody's fault
    8,  // BAN
    33, // タイムマシーンでYeah!（EN1）
    14, // 櫻坂の詩（EN2）
    30  // 摩擦係数（WEN1）
  ]
},{
  id: "20220820",
  name: "W-KEYAKI FES.2022 DAY2",
  date: "2022-08-20",
  venue: "富士急ハイランド コニファーフォレスト",

  setlist: [
    107, // 太陽は見上げる人を選ばない
    6,   // Buddies
    2,   // なぜ 恋をして来なかったんだろう？
    12,  // Microscope
    10,  // それが愛なのね
    9,   // 偶然の答え
    22,  // 五月雨よ
    13,  // 思ったよりも寂しくない
    20,  // 無言の宇宙
    115, // コンセントレーション
    116, // カレイドスコープ
    7,   // ブルームーンキス
    28,  // 恋が絶滅する日
    27,  // 車間距離
    15,  // 流れ弾
    8,   // BAN
    117, // 音楽室に片想い（EN1）
    118, // バスルームトラベル（EN2）
    119, // バレエと少年（EN3）
    108  // 危なっかしい計画（EN4）
  ]
},{
  id: "20220929",
  name: "2nd TOUR 2022 `As you know?`(大阪) DAY1",
  date: "2022-09-29",
  venue: "丸善インテックアリーナ",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    13, // 思ったよりも寂しくない（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20220930",
  name: "2nd TOUR 2022 `As you know?`(大阪) DAY2",
  date: "2022-09-30",
  venue: "丸善インテックアリーナ",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    21, // 美しきNervous（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},,{
  id: "20221005",
  name: "2nd TOUR 2022 `As you know?`(広島) DAY1",
  date: "2022-10-05",
  venue: "広島サンプラザホール",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    13, // 思ったよりも寂しくない（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20221006",
  name: "2nd TOUR 2022 `As you know?`(広島) DAY2",
  date: "2022-10-06",
  venue: "広島サンプラザホール",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    21, // 美しきNervous（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},,{
  id: "20221015",
  name: "2nd TOUR 2022 `As you know?`(宮城) DAY1",
  date: "2022-10-15",
  venue: "セキスイハイムスーパーアリーナ",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    13, // 思ったよりも寂しくない（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20221016",
  name: "2nd TOUR 2022 `As you know?`(宮城) DAY2",
  date: "2022-10-16",
  venue: "セキスイハイムスーパーアリーナ",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    21, // 美しきNervous（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},,{
  id: "20221021",
    name: "2nd TOUR 2022 `As you know?`(愛知) DAY1",
  date: "2022-10-21",
  venue: "日本ガイシホール",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    13, // 思ったよりも寂しくない（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20221022",
  name: "2nd TOUR 2022 `As you know?`(愛知) DAY2",
  date: "2022-10-22",
  venue: "日本ガイシホール",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    21, // 美しきNervous（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},,{
  id: "20221025",
  name: "2nd TOUR 2022 `As you know?`(福岡) DAY1",
  date: "2022-10-25",
  venue: "西日本総合展示場 新館",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    13, // 思ったよりも寂しくない（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20221026",
  name: "2nd TOUR 2022 `As you know?`(福岡) DAY2",
  date: "2022-10-26",
  venue: "西日本総合展示場 新館",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    21, // 美しきNervous（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},,{
  id: "20221108",
  name: "2nd TOUR 2022 `As you know?`(東京) DAY1",
  date: "2022-11-08",
  venue: "東京ドーム",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    119,
    120,
    102,
    106,
    41
  ]
},{
  id: "20221109",
  name: "2nd TOUR 2022 `As you know?`(東京) DAY2",
  date: "2022-11-09",
  venue: "東京ドーム",

  setlist: [
    31, // 条件反射で泣けて来る
    8,  // BAN
    16, // Dead end
    25, // 断絶
    15, // 流れ弾
    33, // タイムマシーンでYeah!
    32, // One-way stairs
    34, // ずっと 春だったらなあ
    26, // 制服の人魚
    22, // 五月雨よ
    2,  // なぜ 恋をして来なかったんだろう？
    1,  // Nobody's fault
    24, // I'm in
    6,  // Buddies
    27, // 車間距離
    28, // 恋が絶滅する日
    30, // 摩擦係数
    121,
    122,
    41
  ]
},{
  id: "20221208",
  name: "2nd YEAR ANNIVERSARY ～Buddies感謝祭～ DAY1",
  date: "2022-12-08",
  venue: "日本武道館",

  setlist: [
    13, // 思ったよりも寂しくない
    11, // 君と僕と洗濯物
    3,  // 最終の地下鉄に乗って
    31, // 条件反射で泣けて来る
    1,  // Nobody's fault
    23, // 僕のジレンマ
    6   // Buddies
  ]
},{
  id: "20221209",
  name: "2nd YEAR ANNIVERSARY ～Buddies感謝祭～ DAY2",
  date: "2022-12-09",
  venue: "日本武道館",

  setlist: [
    13, // 思ったよりも寂しくない
    10, // それが愛なのね
    7,  // ブルームーンキス
    31, // 条件反射で泣けて来る
    1,  // Nobody's fault
    23, // 僕のジレンマ
    6,  // Buddies
    14  // 櫻坂の詩
  ]
},{
  id: "20230227",
  name: "SAKURAZAKA46 Live, AEON CARD with YOU! Vol.2",
  date: "2023-02-27",
  venue: "KT Zepp Yokohama",

  setlist: [
    22, // 五月雨よ
    21, // 美しきNervous
    11, // 君と僕と洗濯物
    18, // On my way
    19, // ジャマイカビール
    1,  // Nobody's fault
    20, // 無言の宇宙
    35  // 桜月（EN1）
  ]
},{
  id: "20230304",
  name: "三期生「おもてなし会」",
  date: "2023-03-04",
  venue: "ぴあアリーナMM",

  setlist: [
    1,  // Nobody's fault
    22, // 五月雨よ
    6,  // Buddies
    40, // 夏の近道
    8,  // BAN
    14, // 櫻坂の詩
    40  // 夏の近道（EN1）
  ]
},{
  id: "20230305",
  name: "三期生「おもてなし会」",
  date: "2023-03-05",
  venue: "ぴあアリーナMM",

  setlist: [
    1,  // Nobody's fault
    22, // 五月雨よ
    6,  // Buddies
    40, // 夏の近道
    8,  // BAN
    14, // 櫻坂の詩
    40  // 夏の近道（EN1）
  ]
},{
  id: "20230412",
  name: "3rd TOUR 2023(東京) DAY1",
  date: "2023-04-12",
  venue: "国立代々木競技場 第一体育館",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230413",
  name: "3rd TOUR 2023(東京) DAY2",
  date: "2023-04-13",
  venue: "国立代々木競技場 第一体育館",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    9,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230419",
  name: "3rd TOUR 2023(愛知) DAY1",
  date: "2023-04-19",
  venue: "日本ガイシホール",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230420",
  name: "3rd TOUR 2023(愛知) DAY2",
  date: "2023-04-20",
  venue: "日本ガイシホール",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    9,  // 偶然の答え
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230429",
  name: "3rd TOUR 2023(福岡) DAY1",
  date: "2023-04-29",
  venue: "福岡国際センター",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    9,  // 偶然の答え
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230430",
  name: "3rd TOUR 2023(福岡) DAY2",
  date: "2023-04-30",
  venue: "福岡国際センター",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    9,
    20,
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230523",
  name: "3rd TOUR 2023(神奈川) DAY1",
  date: "2023-05-23",
  venue: "ぴあアリーナMM",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230524",
  name: "3rd TOUR 2023(神奈川) DAY2",
  date: "2023-05-24",
  venue: "ぴあアリーナMM",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    9,  // 偶然の答え
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230525",
  name: "3rd TOUR 2023(神奈川) DAY3",
  date: "2023-05-25",
  venue: "ぴあアリーナMM",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230531",
  name: "3rd TOUR 2023(大阪) DAY1",
  date: "2023-05-31",
  venue: "大阪城ホール",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    9,  // 偶然の答え
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    6,  // Buddies（EN1）
    14  // 櫻坂の詩（EN2）
  ]
},{
  id: "20230601",
  name: "3rd TOUR 2023(大阪) DAY2",
  date: "2023-06-01",
  venue: "大阪城ホール",

  setlist: [
    36, // Cool
    5,  // 半信半疑
    30, // 摩擦係数
    10, // それが愛なのね
    28, // 恋が絶滅する日
    7,  // ブルームーンキス
    22, // 五月雨よ
    38, // もしかしたら真実
    37, // 無念
    40, // 夏の近道
    39, // 魂のLiar
    1,  // Nobody's fault
    2,  // なぜ 恋をして来なかったんだろう？
    15, // 流れ弾
    16, // Dead end
    31, // 条件反射で泣けて来る
    8,  // BAN
    35, // 桜月
    42, // Start over（EN1）
    6,  // Buddies（EN2）
    14  // 櫻坂の詩（EN3）
  ]
}

];

// =====================
// 2) DOM参照
// =====================
const liveListEl = document.getElementById("liveList");
const resultBodyEl = document.getElementById("resultBody");
const summaryEl = document.getElementById("summary");
const clearBtn = document.getElementById("clearBtn");
const setlistModal = document.getElementById("setlistModal");
const modalTitle = document.getElementById("modalTitle");
const modalSetlist = document.getElementById("modalSetlist");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const participationEl = document.getElementById("participation");

// =====================
// 3) ライブ一覧を描画
// =====================
function renderLiveList() {
  liveListEl.innerHTML = "";

  // 日付（id: YYYYMMDD）で新しい順に並べ替えて表示
  const sortedLives = Array.from(lives).sort((a, b) => String(b.id).localeCompare(String(a.id)));

  for (const live of sortedLives) {
    const row = document.createElement("div");
    row.className = "live-row";

    const label = document.createElement("label");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = live.id;
    cb.addEventListener("change", update);

    const name = document.createElement("span");
    name.textContent = live.name;

    label.appendChild(cb);
    label.appendChild(name);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "セトリ表示";
    btn.addEventListener("click", () => openSetlistModal(live));

    row.appendChild(label);
    row.appendChild(btn);

    liveListEl.appendChild(row);
  }
}


// =====================
// 4) 集計して表示
// =====================
function update() {
  const checkedIds = Array.from(
    liveListEl.querySelectorAll('input[type="checkbox"]:checked')
  ).map((i) => i.value);

  const selectedLives = lives.filter((l) => checkedIds.includes(l.id));

    // ===== 参加率（全体＋年別） =====
  const totalLives = lives.length;                 // 開催数（登録しているライブ数）
  const participatedLives = selectedLives.length;  // 参加数（チェック数）

  // 年別の開催数/参加数
  const byYear = new Map(); // year -> { total, participated }

  for (const live of lives) {
    const y = getYearFromLive(live);
    const cur = byYear.get(y) ?? { total: 0, participated: 0 };
    cur.total += 1;
    byYear.set(y, cur);
  }

  for (const live of selectedLives) {
    const y = getYearFromLive(live);
    const cur = byYear.get(y) ?? { total: 0, participated: 0 };
    cur.participated += 1;
    byYear.set(y, cur);
  }

  // 表示用：unknownは最後、年は降順
  const yearRows = Array.from(byYear.entries())
    .sort((a, b) => {
      if (a[0] === "unknown") return 1;
      if (b[0] === "unknown") return -1;
      return Number(b[0]) - Number(a[0]);
    });

  const allLine = `all: ${participatedLives} / ${totalLives} (${formatRate(participatedLives, totalLives)} %)`;

  // 表示要素を分割してレスポンシブに制御できるようにする
  const yearLines = yearRows
    .filter(([year]) => year !== "unknown")
    .map(([year, v]) => `${year}: ${v.participated} / ${v.total} (${formatRate(v.participated, v.total)} %)`);

  const parts = [`<span class="all">${escapeHtml(allLine)}</span>`, ...yearLines.map((y) => `<span class="year">${escapeHtml(y)}</span>`)];
  participationEl.innerHTML = `<div class="row"><div class="label">参加率</div><div class="value">${parts.join("")}</div></div>`;

  // songId -> count
  const counts = new Map();

  for (const live of selectedLives) {
    for (const songId of live.setlist) {
      // 未登録IDが混ざってても落ちないようにする（入力ミス対策）
      if (!songs[songId]) continue;

      counts.set(songId, (counts.get(songId) ?? 0) + 1);
    }
  }

  // 回数降順 → 同数は曲名昇順
  const rows = Array.from(counts.entries()).sort((a, b) => {
    const countDiff = b[1] - a[1];
    if (countDiff !== 0) return countDiff;
    return songs[a[0]].name.localeCompare(songs[b[0]].name, "ja");
  });

  resultBodyEl.innerHTML = rows
    .map(([songId, n]) => {
      const name = songs[songId].name;
      return `<tr><td>${escapeHtml(name)}</td><td>${n}</td></tr>`;
    })
    .join("");

  const totalSongs = rows.reduce((sum, [, n]) => sum + n, 0);

  summaryEl.textContent = `ライブ${selectedLives.length}件 / 総${totalSongs}曲 / ユニーク${rows.length}曲`;
}

// =====================
// 5) 全解除ボタン
// =====================
clearBtn.addEventListener("click", () => {
  liveListEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.checked = false;
  });
  update();
});

// =====================
// 6) HTMLエスケープ（曲名に記号が入っても安全）
// =====================
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c];
  });
}

// パーセンテージ表示を作る（小数1桁）
function formatRate(part, total) {
  if (!total) return "0.0";
  return ((part / total) * 100).toFixed(1);
}

function openSetlistModal(live) {
  modalTitle.textContent = `${live.name} のセットリスト`;

  // setlist: songId配列 -> 表示名へ
  const items = live.setlist
    .filter((songId) => songs[songId])
    .map((songId) => songs[songId].name);

  modalSetlist.innerHTML = items
    .map((name) => `<li>${escapeHtml(name)}</li>`)
    .join("");

  // <dialog> を表示
  if (typeof setlistModal.showModal === "function") {
    setlistModal.showModal();
  } else {
    // 万が一dialog非対応なら、開いたフラグだけでも（必要なら別方式に変更可能）
    setlistModal.setAttribute("open", "");
  }
}

// 閉じる
modalCloseBtn.addEventListener("click", () => setlistModal.close());

// Escで閉じた後の後始末（任意）
setlistModal.addEventListener("close", () => {
  modalSetlist.innerHTML = "";
});

function getYearFromLive(live) {
      // id は "YYYYMMDD" 前提
  return String(live.id).slice(0, 4);
}

// =====================
// 7) タブ切り替え機能（スマホ用）
// =====================
function switchTab(tabName) {
  // すべてのタブボタンと対応するペインをリセット
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".tab-pane").forEach((pane) => {
    pane.classList.remove("active");
  });

  // 選択されたタブをアクティブに
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
  document.getElementById(`${tabName}-pane`).classList.add("active");
}

// タブボタンのイベントリスナー
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switchTab(e.target.dataset.tab);
  });
});

// 初期化
renderLiveList();
update();
