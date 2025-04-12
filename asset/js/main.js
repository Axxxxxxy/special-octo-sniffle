// LIFF SDKの初期化とタブ切り替え処理
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // LIFF初期化（あなたのIDに書き換えてください）
    await liff.init({ liffId: "2007247007-nLAPoe1P" });

    // デバイス判定
    const isInClient = liff.isInClient();
    const os = liff.getOS();
    console.log("Is in LINE client:", isInClient);
    console.log("Operating System:", os);

    // タブ切り替え処理
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault(); // リンク無効化

        // すべてのタブを非アクティブに
        tabs.forEach((t) => {
          t.classList.remove("active");

          const img = t.querySelector("img");
          if (img) {
            img.src = img.src.replace("_active", "");
          }
        });

        // クリックされたタブをアクティブに
        tab.classList.add("active");
