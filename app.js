// =====================
// 1) データ（ここを手入力で増やしていく）
// =====================

// 曲マスタ：songId -> 表示名
const songs = {
  s_over: { name: "Overture" },
  s_a: { name: "曲A" },
  s_b: { name: "曲B" },
  s_c: { name: "曲C" },
  s_d: { name: "曲D" },
  s_e: { name: "曲E" },
};

// ライブ：setlist は songId の配列にする（表記揺れ対策）
const lives = [
  {
    id: "2024-01-01_tokyo",
    name: "2024/01/01 東京ドーム",
    setlist: ["s_over", "s_a"],
  },
  {
    id: "2024-03-10_osaka",
    name: "2024/03/10 大阪城ホール",
    setlist: ["s_over", "s_b"],
  },
  {
    id: "2024-06-20_nagoya",
    name: "2024/06/20 名古屋",
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

// =====================
// 3) ライブ一覧を描画
// =====================
function renderLiveList() {
  liveListEl.innerHTML = "";

  for (const live of lives) {
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


// 初期化
renderLiveList();
update();
