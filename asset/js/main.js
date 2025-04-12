// LIFF SDKの初期化とタブ切り替え
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // LIFF初期化
    await liff.init({ liffId: "2007247007-nLAPoe1P" });

    // デバイス判定
    const isInClient = liff.isInClient();
    const os = liff.getOS();
    console.log("Is in LINE client:", isInClient);
    console.log("Operating System:", os);

    // タブの切り替え機能
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault(); // リンク無効化

        // すべてのタブを非アクティブにし、画像を_offに戻す
        tabs.forEach((t) => {
          t.classList.remove("active");

          const img = t.querySelector("img");
          if (img) {
            const src = img.getAttribute("src");
            img.setAttribute("src", src.replace("_active", ""));
          }
        });

        // クリックされたタブをアクティブに、画像も_activeに
        tab.classList.add("active");

        const img = tab.querySelector("img");
        if (img) {
          const src = img.getAttribute("src");
          if (!src.includes("_active")) {
            const ext = src.slice(src.lastIndexOf("."));
            const base = src.slice(0, src.lastIndexOf("."));
            img.setAttribute("src", `${base}_active${ext}`);
          }
        }
      });
    });
  } catch (error) {
    console.error("LIFF initialization failed", error);
  }
});
