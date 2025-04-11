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

    // タブボタンの切り替え処理
    const tabs = document.querySelectorAll(".tab");
    const currentPath = window.location.pathname;

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const href = tab.getAttribute("href");
        window.location.href = href;
      });

      // 現在のパスに応じてactiveクラスを付与
      if (tab.getAttribute("href") && currentPath.includes(tab.getAttribute("href"))) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  } catch (error) {
    console.error("LIFF Initialization failed", error);
  }
});
