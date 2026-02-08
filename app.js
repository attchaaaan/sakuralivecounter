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
  100: { name: "君がサヨナラ言えたって・・・" }
};

// ライブ：setlist は songId の配列にする（表記揺れ対策）
const lives = [
  {
    id: "20240101",
    name: "2024/01/01 東京ドーム",
    setlist: ["s_over", "s_a"],
  },
  {
    id: "20240310",
    name: "2024/03/10 大阪城ホール",
    setlist: ["s_over", "s_b"],
  },
  {
    id: "20240620",
    name: "2024/06/20 名古屋",
    setlist: ["s_c", "s_e"],
  },
  {
    id: "20230620",
    name: "2023/06/20 名古屋",
    setlist: ["s_c", "s_e"],
  },

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


// 初期化
renderLiveList();
update();
