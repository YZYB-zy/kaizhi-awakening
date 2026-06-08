// 卡牌图片映射 - 新版卡牌标题到图片路径
// 基于 qxrg-game.html 中最新44张卡牌数据

const cardImageMap = {
    // ===== energy/ 文件夹 - E/I 外向/内向维度 =====
    '朋友聊天':     'cards/energy/01-朋友聊天.png',
    '周末计划':     'cards/energy/02-周末计划.png',
    '派对新人':     'cards/energy/03-派对新人.png',
    '午休时光':     'cards/energy/04-午休时光.png',
    '工作会议':     'cards/energy/05-工作会议 (id 33).png',
    '团队建设':     'cards/energy/06-团队建设 (id 34).png',
    '新环境':       'cards/energy/07-新环境 (id 35).png',
    '社交聚会':     'cards/energy/08-社交聚会 (id 29).png',

    // ===== info/ 文件夹 - S/N 感觉/直觉维度 =====
    '学做新菜':     'cards/info/01-学做新菜.png',
    '拼大型乐高':   'cards/info/02-拼大型乐高.png',
    '阅读偏好':     'cards/info/03-阅读偏好.png',
    '装修房间':     'cards/info/04-装修房间.png',
    '投资理财':     'cards/info/05-投资理财 (id 36).png',
    '学新技能':     'cards/info/06-学新技能 (id 37).png',
    '健康方案':     'cards/info/07-健康方案 (id 38).png',

    // ===== decision/ 文件夹 - T/F 思考/情感维度 =====
    '朋友吵架':     'cards/decision/01-朋友吵架.png',
    '朋友求助':     'cards/decision/02-朋友求助.png',
    '选生日礼物':   'cards/decision/03-选生日礼物.png',
    '选室友':       'cards/decision/04-选室友.png',
    '同事犯错':     'cards/decision/05-同事犯错 (id 39).png',
    '慈善捐款':     'cards/decision/06-慈善捐款 (id 40).png',
    '好友创业':     'cards/decision/07-好友创业 (id 41).png',
    '朋友减肥':     'cards/decision/08-朋友减肥 (id 27).png',

    // ===== lifestyle/ 文件夹 - J/P 判断/感知维度 =====
    '旅行计划':     'cards/lifestyle/01-旅行计划.png',
    '赶飞机':       'cards/lifestyle/02-赶飞机.png',
    '周末清单':     'cards/lifestyle/03-周末清单.png',
    '搬家整理':     'cards/lifestyle/04-搬家整理.png',
    '年终总结':     'cards/lifestyle/05-年终总结 (id 42).png',
    '突发状况':     'cards/lifestyle/06-突发状况 (id 43).png',
    '未来规划':     'cards/lifestyle/07-未来规划 (id 44).png',
    '旅行决策':     'cards/lifestyle/08-旅行决策 (id 28).png',
};

/**
 * 根据卡牌标题加载对应图片到 #card-image 中
 * @param {string} cardTitle - 卡牌标题文字
 */
function loadCardImage(cardTitle) {
    const cardImageEl = document.getElementById('card-image');
    if (!cardImageEl) return;

    const imgPath = cardImageMap[cardTitle];

    if (imgPath) {
        cardImageEl.innerHTML = `<img src="${imgPath}" 
             alt="${cardTitle}" 
             class="w-full h-full object-cover rounded-lg"
             onerror="this.parentElement.innerHTML='<span class=\\'text-3xl sm:text-4xl\\'>🎴</span>'"
             loading="lazy">`;
    } else {
        // 没有匹配的图片，显示默认占位符
        cardImageEl.innerHTML = '<span class="text-3xl sm:text-4xl">🎴</span>';
    }
}

/**
 * 监听卡牌标题变化，自动加载对应图片
 * 使用 MutationObserver 兼容不修改主脚本的方案
 */
function initCardImageObserver() {
    const cardTitleEl = document.getElementById('card-title');
    if (!cardTitleEl) return;

    // 首次加载（如果已有内容）
    if (cardTitleEl.textContent.trim()) {
        loadCardImage(cardTitleEl.textContent.trim());
    }

    // 监听标题文字变化
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'characterData' || mutation.type === 'childList') {
                const title = cardTitleEl.textContent.trim();
                if (title) {
                    loadCardImage(title);
                }
            }
        }
    });

    observer.observe(cardTitleEl, {
        characterData: true,
        childList: true,
        subtree: true
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initCardImageObserver);
