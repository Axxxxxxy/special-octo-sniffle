// LIFF SDKの初期化
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // LIFF ID を指定して初期化
    await liff.init({ liffId: "2007247007-nLAPoe1P" });

    // LINEクライアント内かを判定
    const isInClient = liff.isInClient();
    console.log("Is in LINE client:", isInClient);

    // OS判定
    const os = liff.getOS();
    console.log("Operating System:", os);

    // タブ切り替えロジック
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();

        // すべてのタブを非アクティブにする
        tabs.forEach((t) => {
          t.classList.remove("active");
          const img = t.querySelector("img");
          if (img) {
            img.src = img.src.replace("_active", "");
          }
        });

        // 押されたタブだけアクティブに
        tab.classList.add("active");
        const img = tab.querySelector("img");
        if (img) {
          img.src = img.src.replace(".png", "_active.png");
        }
      });
    });

    // ▼ 初期状態：サービスタブを活性化
    const defaultServiceTab = document.querySelector('.tab img[src*="tab_service.png"]');
    if (defaultServiceTab) {
      defaultServiceTab.src = "images/tab_service_active.png";
      defaultServiceTab.closest(".tab").classList.add("active");
    }

  } catch (error) {
    console.error("LIFF Initialization failed:", error);
  }
});
