// LIFF SDKの初期化
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // LIFF IDを指定して初期化
    await liff.init({ liffId: "2007247007-nLAPoe1P" });

    // LIFFアプリがLINE内で開かれているかを判定
    const isInClient = liff.isInClient();
    console.log("Is in LINE client:", isInClient);

    // OSの判定
    const os = liff.getOS();
    console.log("Operating System:", os);

    // タブ切り替え処理
    const tabs = document.querySelectorAll(".tab");
    const currentPath = window.location.pathname;

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const href = tab.getAttribute("href");
        if (href) {
          window.location.href = href;
        }
      });

      const img = tab.querySelector("img");
      const isActive = tab.classList.contains("active");

      if (tab.getAttribute("href") && currentPath.includes(tab.getAttribute("href"))) {
        tab.classList.add("active");
        // タブの画像を active 画像に差し替え
        if (img && img.src.includes("tab_service.png")) {
          img.src = "images/tab_service_active.png";
        } else if (img && img.src.includes("tab_menu.png")) {
          img.src = "images/tab_menu_active.png";
        }
      } else {
        tab.classList.remove("active");
        // タブの画像を inactive に戻す
        if (img && img.src.includes("tab_service_active.png")) {
          img.src = "images/tab_service.png";
        } else if (img && img.src.includes("tab_menu_active.png")) {
          img.src = "images/tab_menu.png";
        }
      }
    });
  } catch (error) {
    console.error("LIFF Initialization failed", error);
  }
});
