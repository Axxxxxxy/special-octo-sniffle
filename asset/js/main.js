document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    adjustUIForDevice();

    if (typeof liff !== 'undefined') {
        initializeLIFF();
    } else {
        console.log("LIFF SDKが見つかりません。開発モードで実行中。");
    }

    window.addEventListener('resize', adjustUIForDevice);
});

function initTabs() {
    const tabService = document.querySelector('.tab-service');
    const tabMenu = document.querySelector('.tab-menu');
    setActiveTab('service'); // デフォルトはサービス

    if (tabService) {
        tabService.addEventListener('click', function(e) {
            e.preventDefault();
            setActiveTab('service');
        });
    }

    if (tabMenu) {
        tabMenu.addEventListener('click', function(e) {
            e.preventDefault();
            setActiveTab('menu');
        });
    }
}

function setActiveTab(tabName) {
    const tabService = document.querySelector('.tab-service');
    const tabMenu = document.querySelector('.tab-menu');
    if (!tabService || !tabMenu) return;

    tabService.classList.remove('active');
    tabMenu.classList.remove('active');
    tabService.querySelector('img').src = 'images/tab_service.png';
    tabMenu.querySelector('img').src = 'images/tab_menu.png';

    if (tabName === 'service') {
        tabService.classList.add('active');
        tabService.querySelector('img').src = 'images/tab_service_active.png';
    } else {
        tabMenu.classList.add('active');
        tabMenu.querySelector('img').src = 'images/tab_menu_active.png';
    }
}

function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) || (window.innerWidth <= 768)) {
        return 'mobile';
    }
    if (/iPad/.test(userAgent) || (/Android/.test(userAgent) && !/Mobile/.test(userAgent)) || (window.innerWidth > 768 && window.innerWidth <= 1024)) {
        return 'tablet';
    }
    return 'desktop';
}

function adjustUIForDevice() {
    const deviceType = detectDevice();
    const body = document.body;
    body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    body.classList.add(`device-${deviceType}`);
    console.log(`検出されたデバイス: ${deviceType}`);
}

function initializeLIFF() {
    liff.init({
        liffId: "2007247007-nLAPoe1P" // ← あなたの本番IDに置き換え済み
    }).then(() => {
        console.log("LIFFが正常に初期化されました");
        if (liff.isInClient()) {
            console.log("LINEアプリ内で実行中");
        } else {
            console.log("外部ブラウザで実行中");
        }
    }).catch((error) => {
        console.error("LIFF初期化に失敗しました", error);
    });
}
