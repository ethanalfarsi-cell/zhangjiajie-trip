const languages = [
  ["zh", "中文"],
  ["en", "English"],
  ["ko", "한국어"],
  ["ja", "日本語"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["es", "Español"],
  ["ru", "Русский"],
  ["ar", "العربية"]
];

const t = {
  zh: {
    brand: "张家界自由行地图",
    tagline: "选择路线，连接本地向导与服务",
    eyebrow: "ZHANGJIAJIE ROUTE PLANNER",
    headline: "为全球游客规划张家界路线",
    intro: "从天门山、国家森林公园到大峡谷玻璃桥，游客可以按天数、兴趣和体力自由选择路线。",
    start: "开始选择路线",
    contactGuide: "联系导游服务",
    plannerEyebrow: "PLAN",
    plannerTitle: "选择你的旅行偏好",
    reset: "重置",
    days: "旅行天数",
    style: "旅行风格",
    services: "可能需要的服务",
    spotsTitle: "景点选择",
    yourRoute: "YOUR ROUTE",
    duration: "预计时长",
    difficulty: "强度",
    tips: "旅行提示",
    askService: "我想咨询这条路线",
    recommendedEyebrow: "CURATED ROUTES",
    recommendedTitle: "推荐路线",
    leadEyebrow: "LOCAL SERVICE",
    leadTitle: "需要导游、包车、门票或酒店帮助？",
    leadText: "游客确认路线后，可以把需求发给 App 开发者或当地服务团队，获取人工定制建议。",
    name: "姓名",
    country: "国家/地区",
    travelDate: "出行日期",
    people: "人数",
    message: "需求说明",
    submit: "发送咨询",
    sent: "已生成咨询信息，可复制给开发者或当地服务团队。",
    mapHint: "点击地图上的圆点，快速选择张家界核心景点。",
    detectedLanguage: "根据您的位置推荐语言：",
    introVideoEyebrow: "ZHANGJIAJIE CINEMATIC VIEW",
    introVideoTitle: "先看见张家界，再选择你的路线",
    introVideoText: "云雾、峰林、天门与峡谷，将旅程的第一眼留给风景。",
    skipIntro: "跳过视频",
    watchIntro: "继续欣赏",
    playIntro: "播放视频",
    unmuteIntro: "开启声音",
    muteIntro: "关闭声音",
    videoLoading: "视频正在加载，请稍候...",
    videoReady: "视频已准备好，点击播放。",
    videoPlaying: "正在播放。",
    videoError: "视频加载失败，请检查视频文件是否已上传到 assets 文件夹。",
    uploadEyebrow: "TRAVELER VIDEOS",
    uploadTitle: "上传你的张家界旅行视频",
    uploadText: "游客可以提交自己的张家界旅行视频。所有视频需要后台审核通过后，才会展示到网站和 App。",
    reviewStep1: "1. 游客提交",
    reviewStep2: "2. 后台审核",
    reviewStep3: "3. 公开展示",
    uploadName: "姓名",
    uploadEmail: "邮箱/联系方式",
    uploadVideo: "选择视频",
    uploadCaption: "视频说明",
    submitVideo: "提交审核",
    videoPending: "视频已提交到待审核队列。正式上线后会进入后台审核系统。",
    videoRequired: "请选择一个视频文件。"
  },
  en: {
    brand: "Zhangjiajie Trip Map",
    tagline: "Choose routes and connect with local services",
    eyebrow: "ZHANGJIAJIE ROUTE PLANNER",
    headline: "Plan Zhangjiajie routes for global travelers",
    intro: "Select Tianmen Mountain, the National Forest Park, the Glass Bridge and more by days, interests and travel pace.",
    start: "Start planning",
    contactGuide: "Contact guide service",
    plannerEyebrow: "PLAN",
    plannerTitle: "Choose your travel preferences",
    reset: "Reset",
    days: "Trip length",
    style: "Travel style",
    services: "Optional services",
    spotsTitle: "Attractions",
    yourRoute: "YOUR ROUTE",
    duration: "Duration",
    difficulty: "Pace",
    tips: "Travel tip",
    askService: "Ask about this route",
    recommendedEyebrow: "CURATED ROUTES",
    recommendedTitle: "Recommended routes",
    leadEyebrow: "LOCAL SERVICE",
    leadTitle: "Need a guide, car, tickets or hotels?",
    leadText: "After choosing a route, travelers can send the request to the app owner or local service team for a custom plan.",
    name: "Name",
    country: "Country/Region",
    travelDate: "Travel date",
    people: "Travelers",
    message: "Request details",
    submit: "Send request",
    sent: "Request summary created. Share it with the app owner or local service team.",
    mapHint: "Tap a map point to add major Zhangjiajie attractions.",
    detectedLanguage: "Recommended by your location:",
    introVideoEyebrow: "ZHANGJIAJIE CINEMATIC VIEW",
    introVideoTitle: "See Zhangjiajie first, then choose your route",
    introVideoText: "Mist, sandstone peaks, Tianmen Mountain and canyon views open the journey.",
    skipIntro: "Skip video",
    watchIntro: "Keep watching",
    playIntro: "Play video",
    unmuteIntro: "Sound on",
    muteIntro: "Sound off",
    videoLoading: "Loading video, please wait...",
    videoReady: "Video is ready. Tap to play.",
    videoPlaying: "Playing.",
    videoError: "Video failed to load. Please check that the file is uploaded to the assets folder.",
    uploadEyebrow: "TRAVELER VIDEOS",
    uploadTitle: "Upload your Zhangjiajie travel video",
    uploadText: "Travelers can submit Zhangjiajie videos. Every video must be approved in the admin backend before it appears on the website and app.",
    reviewStep1: "1. Traveler submits",
    reviewStep2: "2. Admin review",
    reviewStep3: "3. Public display",
    uploadName: "Name",
    uploadEmail: "Email / Contact",
    uploadVideo: "Choose video",
    uploadCaption: "Video caption",
    submitVideo: "Submit for review",
    videoPending: "Video submitted to the review queue. After launch, it will enter the admin moderation system.",
    videoRequired: "Please choose a video file."
  },
  ko: {
    brand: "장자제 여행 지도",
    tagline: "여행 코스를 선택하고 현지 서비스와 연결",
    eyebrow: "ZHANGJIAJIE ROUTE PLANNER",
    headline: "세계 여행자를 위한 장자제 코스 설계",
    intro: "톈먼산, 국가삼림공원, 대협곡 유리다리 등을 일정, 관심사, 체력에 맞게 선택하세요.",
    start: "코스 선택 시작",
    contactGuide: "가이드 문의",
    plannerEyebrow: "PLAN",
    plannerTitle: "여행 선호도 선택",
    reset: "초기화",
    days: "여행 일수",
    style: "여행 스타일",
    services: "필요한 서비스",
    spotsTitle: "관광지 선택",
    yourRoute: "YOUR ROUTE",
    duration: "예상 시간",
    difficulty: "강도",
    tips: "여행 팁",
    askService: "이 코스 문의하기",
    recommendedEyebrow: "CURATED ROUTES",
    recommendedTitle: "추천 코스",
    leadEyebrow: "LOCAL SERVICE",
    leadTitle: "가이드, 차량, 티켓, 호텔이 필요하신가요?",
    leadText: "코스를 확정한 후 앱 운영자 또는 현지 서비스 팀에 맞춤 요청을 보낼 수 있습니다.",
    name: "이름",
    country: "국가/지역",
    travelDate: "여행 날짜",
    people: "인원",
    message: "요청 내용",
    submit: "문의 보내기",
    sent: "문의 요약이 생성되었습니다. 운영자 또는 현지 서비스 팀에 공유하세요.",
    mapHint: "지도 포인트를 눌러 장자제 주요 관광지를 추가하세요.",
    detectedLanguage: "위치 기반 추천 언어:",
    introVideoEyebrow: "ZHANGJIAJIE CINEMATIC VIEW",
    introVideoTitle: "장자제를 먼저 감상하고 코스를 선택하세요",
    introVideoText: "구름, 봉우리, 톈먼산과 협곡 풍경으로 여행의 첫 장면을 시작합니다.",
    skipIntro: "영상 건너뛰기",
    watchIntro: "계속 감상",
    playIntro: "영상 재생",
    unmuteIntro: "소리 켜기",
    muteIntro: "소리 끄기",
    videoLoading: "영상을 불러오는 중입니다...",
    videoReady: "영상이 준비되었습니다. 탭하여 재생하세요.",
    videoPlaying: "재생 중입니다.",
    videoError: "영상 로딩에 실패했습니다. assets 폴더에 업로드되었는지 확인하세요.",
    uploadEyebrow: "TRAVELER VIDEOS",
    uploadTitle: "장자제 여행 영상을 업로드하세요",
    uploadText: "여행자는 장자제 여행 영상을 제출할 수 있습니다. 모든 영상은 관리자 심사 후 웹사이트와 앱에 표시됩니다.",
    reviewStep1: "1. 여행자 제출",
    reviewStep2: "2. 관리자 심사",
    reviewStep3: "3. 공개 표시",
    uploadName: "이름",
    uploadEmail: "이메일 / 연락처",
    uploadVideo: "영상 선택",
    uploadCaption: "영상 설명",
    submitVideo: "심사 제출",
    videoPending: "영상이 심사 대기열에 제출되었습니다. 정식 출시 후 관리자 심사 시스템으로 전송됩니다.",
    videoRequired: "영상 파일을 선택하세요."
  }
};

const fallback = {
  ja: {
    brand: "張家界旅行マップ",
    tagline: "ルート選択と現地サービス相談",
    headline: "世界の旅行者向け張家界ルートプランナー",
    intro: "日数、興味、体力に合わせて主要観光地を自由に選べます。",
    start: "ルートを選ぶ",
    contactGuide: "ガイドに相談",
    detectedLanguage: "現在地に基づく推奨言語:"
  },
  fr: {
    brand: "Carte de voyage Zhangjiajie",
    tagline: "Choisir un itinéraire et contacter un service local",
    headline: "Planificateur d'itinéraires pour Zhangjiajie",
    intro: "Choisissez les sites selon la durée, vos intérêts et votre rythme.",
    start: "Commencer",
    contactGuide: "Contacter un guide",
    detectedLanguage: "Langue recommandée selon votre position :"
  },
  de: {
    brand: "Zhangjiajie Reisekarte",
    tagline: "Route wählen und lokale Services kontaktieren",
    headline: "Zhangjiajie-Routen für internationale Gäste",
    intro: "Wählen Sie Sehenswürdigkeiten nach Tagen, Interesse und Tempo.",
    start: "Route planen",
    contactGuide: "Guide kontaktieren",
    detectedLanguage: "Empfohlene Sprache nach Standort:"
  },
  es: {
    brand: "Mapa de viaje de Zhangjiajie",
    tagline: "Elige rutas y conecta con servicios locales",
    headline: "Planificador de rutas para Zhangjiajie",
    intro: "Elige atracciones según días, intereses y ritmo de viaje.",
    start: "Empezar",
    contactGuide: "Contactar guía",
    detectedLanguage: "Idioma recomendado por ubicación:"
  },
  ru: {
    brand: "Карта путешествия по Чжанцзяцзе",
    tagline: "Выберите маршрут и свяжитесь с местным сервисом",
    headline: "Маршруты по Чжанцзяцзе для туристов",
    intro: "Выбирайте достопримечательности по дням, интересам и темпу.",
    start: "Начать",
    contactGuide: "Связаться с гидом",
    detectedLanguage: "Рекомендуемый язык по местоположению:"
  },
  ar: {
    brand: "خريطة رحلة تشانغجياجيه",
    tagline: "اختر المسار وتواصل مع الخدمات المحلية",
    headline: "مخطط رحلات تشانغجياجيه للزوار",
    intro: "اختر المعالم حسب عدد الأيام والاهتمامات وسرعة الرحلة.",
    start: "ابدأ التخطيط",
    contactGuide: "تواصل مع مرشد",
    detectedLanguage: "اللغة المقترحة حسب موقعك:"
  }
};

const base = t.zh;
for (const [code] of languages) {
  if (!t[code]) t[code] = { ...base, ...fallback[code] };
}

const copy = {
  days: {
    zh: ["1天", "2天", "3天", "5天+"],
    en: ["1 day", "2 days", "3 days", "5+ days"],
    ko: ["1일", "2일", "3일", "5일+"]
  },
  styles: {
    zh: ["轻松", "摄影", "亲子", "深度"],
    en: ["Easy", "Photo", "Family", "Deep"],
    ko: ["여유", "사진", "가족", "깊이"]
  },
  services: {
    zh: ["导游", "包车", "门票", "酒店", "翻译"],
    en: ["Guide", "Car", "Tickets", "Hotel", "Translator"],
    ko: ["가이드", "차량", "티켓", "호텔", "통역"]
  }
};

const spots = [
  {
    id: "forest",
    color: "linear-gradient(135deg,#2f8a5f,#9ecf83)",
    hours: 7,
    zh: ["张家界国家森林公园", "袁家界、金鞭溪、天子山，适合第一次来张家界的核心路线。"],
    en: ["Zhangjiajie National Forest Park", "Yuanjiajie, Golden Whip Stream and Tianzi Mountain for first-time visitors."],
    ko: ["장자제 국가삼림공원", "위안자제, 금편계, 천자산을 포함한 대표 코스입니다."]
  },
  {
    id: "tianmen",
    color: "linear-gradient(135deg,#2a79a8,#b8d9e8)",
    hours: 6,
    zh: ["天门山", "索道、天门洞、玻璃栈道，城市附近最有标志性的半日到一日路线。"],
    en: ["Tianmen Mountain", "Cable car, Heaven's Gate and glass skywalk near the city."],
    ko: ["톈먼산", "케이블카, 천문동, 유리잔도가 있는 대표 명소입니다."]
  },
  {
    id: "canyon",
    color: "linear-gradient(135deg,#d88732,#f2d7a4)",
    hours: 4,
    zh: ["大峡谷玻璃桥", "适合刺激体验、拍照和轻量半日游，可与黄龙洞组合。"],
    en: ["Grand Canyon Glass Bridge", "A thrilling half-day option, easy to pair with Yellow Dragon Cave."],
    ko: ["대협곡 유리다리", "스릴과 사진 촬영에 좋은 반나절 코스입니다."]
  },
  {
    id: "cave",
    color: "linear-gradient(135deg,#855f46,#d8bb95)",
    hours: 3,
    zh: ["黄龙洞", "溶洞景观稳定，不太受天气影响，适合亲子和轻松路线。"],
    en: ["Yellow Dragon Cave", "A weather-friendly cave attraction for families and relaxed trips."],
    ko: ["황룡동", "날씨 영향이 적은 동굴 관광지로 가족 여행에 좋습니다."]
  },
  {
    id: "lake",
    color: "linear-gradient(135deg,#297f9e,#acd7d4)",
    hours: 3,
    zh: ["宝峰湖", "湖景、游船和山水画面，适合轻松拍照。"],
    en: ["Baofeng Lake", "Lake views, boat rides and relaxed photo stops."],
    ko: ["보봉호", "호수, 유람선, 산수 풍경을 즐기는 여유 코스입니다."]
  },
  {
    id: "phoenix",
    color: "linear-gradient(135deg,#8f5a93,#e5b8d8)",
    hours: 8,
    zh: ["凤凰古城", "适合延伸游，夜景和古城氛围强，通常安排在张家界之后。"],
    en: ["Fenghuang Ancient Town", "A strong add-on route for night views after Zhangjiajie."],
    ko: ["펑황고성", "야경과 고성 분위기가 좋은 연장 여행지입니다."]
  },
  {
    id: "hongjiang",
    color: "linear-gradient(135deg,#9a6632,#e0c09a)",
    hours: 5,
    zh: ["洪江古商城", "适合放在凤凰古城之后，感受明清商贸古城、会馆建筑和湘西历史人文。"],
    en: ["Hongjiang Ancient Commercial Town", "A cultural extension after Fenghuang, known for Ming-Qing trade history, guild halls and old streets."],
    ko: ["홍강고상성", "펑황고성 이후 연장 코스로 좋으며 명청 상업 역사, 회관 건축, 옛 거리를 느낄 수 있습니다."]
  }
];

const routePresets = [
  { id: "classic", spotIds: ["tianmen", "forest"], days: 2, level: 3 },
  { id: "family", spotIds: ["tianmen", "cave", "lake"], days: 2, level: 2 },
  { id: "deep", spotIds: ["forest", "tianmen", "canyon", "phoenix", "hongjiang"], days: 5, level: 4 }
];

const appConfig = window.ZJ_APP_CONFIG || {};
const contactConfig = appConfig.contact || {};
const languageLabels = Object.fromEntries(languages);
const countryLanguageMap = {
  CN: "zh",
  HK: "zh",
  MO: "zh",
  TW: "zh",
  SG: "zh",
  KR: "ko",
  JP: "ja",
  FR: "fr",
  BE: "fr",
  CA: "fr",
  DE: "de",
  AT: "de",
  CH: "de",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  PE: "es",
  CL: "es",
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  AE: "ar",
  SA: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
  JO: "ar",
  MA: "ar"
};

const state = {
  lang: detectLanguage(),
  detectedByIp: false,
  userSelectedLanguage: false,
  dayIndex: 1,
  styleIndex: 0,
  selected: new Set(["tianmen", "forest"]),
  services: new Set(["guide"])
};

function detectLanguage() {
  const urlLang = new URLSearchParams(location.search).get("language");
  if (urlLang && urlLang.toLowerCase().startsWith("zh")) return "zh";
  if (urlLang && urlLang.toLowerCase().startsWith("ko")) return "ko";
  if (urlLang && urlLang.toLowerCase().startsWith("en")) return "en";
  if (urlLang && urlLang.toLowerCase().startsWith("ja")) return "ja";
  if (urlLang && urlLang.toLowerCase().startsWith("fr")) return "fr";
  if (urlLang && urlLang.toLowerCase().startsWith("de")) return "de";
  if (urlLang && urlLang.toLowerCase().startsWith("es")) return "es";
  if (urlLang && urlLang.toLowerCase().startsWith("ru")) return "ru";
  if (urlLang && urlLang.toLowerCase().startsWith("ar")) return "ar";
  return "en";
}

function tr(key) {
  return t[state.lang][key] || t.en[key] || t.zh[key] || key;
}

function langCopy(group) {
  return copy[group][state.lang] || copy[group].en || copy[group].zh;
}

function spotText(spot) {
  return spot[state.lang] || spot.en || spot.zh;
}

function init() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  renderLanguageSelect();
  renderControls();
  renderSpots();
  renderRoutes();
  bindMap();
  bindLeadForm();
  bindIntroSplash();
  bindTravelerVideoForm();
  bindInstallPrompt();
  registerServiceWorker();
  applyLanguage();
  updateRoute();
  detectLanguageByIp();
}

function renderLanguageSelect() {
  const select = document.querySelector("#languageSelect");
  select.innerHTML = languages
    .map(([code, label]) => `<option value="${code}">${label}</option>`)
    .join("");
  select.value = state.lang;
  select.addEventListener("change", () => {
    state.lang = select.value;
    state.userSelectedLanguage = true;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    applyLanguage();
    renderControls();
    renderSpots();
    renderRoutes();
    updateRoute();
  });
}

function renderControls() {
  const dayTabs = document.querySelector("#dayTabs");
  const styleTabs = document.querySelector("#styleTabs");
  dayTabs.innerHTML = langCopy("days")
    .map((label, index) => `<button class="${index === state.dayIndex ? "active" : ""}" data-day="${index}">${label}</button>`)
    .join("");
  styleTabs.innerHTML = langCopy("styles")
    .map((label, index) => `<button class="${index === state.styleIndex ? "active" : ""}" data-style="${index}">${label}</button>`)
    .join("");

  dayTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.dayIndex = Number(button.dataset.day);
      renderControls();
      updateRoute();
    });
  });
  styleTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.styleIndex = Number(button.dataset.style);
      renderControls();
      updateRoute();
    });
  });

  const services = document.querySelector("#serviceChecks");
  const serviceKeys = ["guide", "car", "ticket", "hotel", "translator"];
  services.innerHTML = langCopy("services")
    .map((label, index) => {
      const key = serviceKeys[index];
      return `<label><input type="checkbox" value="${key}" ${state.services.has(key) ? "checked" : ""}> ${label}</label>`;
    })
    .join("");
  services.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      input.checked ? state.services.add(input.value) : state.services.delete(input.value);
      updateRoute();
    });
  });

  document.querySelector("#resetBtn").onclick = () => {
    state.dayIndex = 1;
    state.styleIndex = 0;
    state.selected = new Set(["tianmen", "forest"]);
    state.services = new Set(["guide"]);
    renderControls();
    renderSpots();
    updateRoute();
  };
}

function renderSpots() {
  const wrap = document.querySelector("#spotCards");
  wrap.innerHTML = spots
    .map((spot) => {
      const [name, desc] = spotText(spot);
      return `
        <article class="spot-card ${state.selected.has(spot.id) ? "active" : ""}" data-id="${spot.id}">
          <div class="spot-thumb" style="--thumb:${spot.color}"></div>
          <div>
            <h4>${name}</h4>
            <p>${desc}</p>
          </div>
        </article>
      `;
    })
    .join("");
  wrap.querySelectorAll(".spot-card").forEach((card) => {
    card.addEventListener("click", () => toggleSpot(card.dataset.id));
  });
}

function renderRoutes() {
  const wrap = document.querySelector("#routeCards");
  wrap.innerHTML = routePresets
    .map((route) => {
      const data = routeDetails(route);
      return `
        <article class="route-card">
          <h3>${data.name}</h3>
          <p>${data.summary}</p>
          <p>${data.duration} · ${data.levelText}</p>
          <button class="secondary-action" data-route="${route.id}">${tr("start")}</button>
        </article>
      `;
    })
    .join("");
  wrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = routePresets.find((route) => route.id === button.dataset.route);
      state.selected = new Set(preset.spotIds);
      state.dayIndex = Math.min(3, Math.max(0, preset.days - 1));
      renderControls();
      renderSpots();
      updateRoute();
      document.querySelector("#planner").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function bindMap() {
  document.querySelectorAll(".map-pin").forEach((pin) => {
    pin.addEventListener("click", () => toggleSpot(pin.dataset.spot));
  });
}

function toggleSpot(id) {
  if (state.selected.has(id) && state.selected.size > 1) {
    state.selected.delete(id);
  } else {
    state.selected.add(id);
  }
  renderSpots();
  updateRoute();
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = tr(node.dataset.i18n);
  });
  document.querySelector("#mapHint").textContent = tr("mapHint");
  const syncStatus = document.querySelector("#syncStatus");
  if (syncStatus) {
    const syncText = appConfig.syncText || {};
    syncStatus.textContent = syncText[state.lang] || syncText.en || "Website and app share the same content.";
  }
  const installBtn = document.querySelector("#installAppBtn");
  if (installBtn) {
    installBtn.textContent = state.lang === "zh" ? "安装App" : state.lang === "ko" ? "앱 설치" : "Install App";
  }
  updateDetectedLanguageText();
}

async function detectLanguageByIp() {
  if (new URLSearchParams(location.search).get("language")) return;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const response = await fetch("https://ipapi.co/json/", { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) return;

    const data = await response.json();
    const country = String(data.country_code || data.country || "").toUpperCase();
    const recommendedLang = countryLanguageMap[country] || "en";
    state.detectedByIp = true;

    if (!state.userSelectedLanguage && recommendedLang !== state.lang) {
      state.lang = recommendedLang;
      document.documentElement.lang = state.lang;
      document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
      document.querySelector("#languageSelect").value = state.lang;
      applyLanguage();
      renderControls();
      renderSpots();
      renderRoutes();
      updateRoute();
    } else {
      updateDetectedLanguageText(recommendedLang);
    }
  } catch (error) {
    state.detectedByIp = false;
    state.lang = state.userSelectedLanguage ? state.lang : "en";
    updateDetectedLanguageText("en");
  }
}

function updateDetectedLanguageText(recommendedLang = state.lang) {
  const node = document.querySelector("#detectedLanguageText");
  if (!node) return;
  const label = languageLabels[recommendedLang] || "English";
  node.textContent = `${tr("detectedLanguage")} ${label}`;
}

function routeDetails(route) {
  const names = route.spotIds.map((id) => spotText(spots.find((spot) => spot.id === id))[0]);
  const isZh = state.lang === "zh";
  const isKo = state.lang === "ko";
  const joiner = isZh || isKo ? " + " : " + ";
  const name = route.id === "classic"
    ? (isZh ? "经典首游路线" : isKo ? "첫 방문 클래식 코스" : "Classic first-trip route")
    : route.id === "family"
      ? (isZh ? "亲子轻松路线" : isKo ? "가족 여유 코스" : "Easy family route")
      : (isZh ? "深度延伸路线" : isKo ? "깊이 있는 연장 코스" : "Deep extension route");
  return {
    name,
    summary: names.join(joiner),
    duration: `${route.days}${isZh ? "天" : isKo ? "일" : route.days > 1 ? " days" : " day"}`,
    levelText: levelText(route.level)
  };
}

function updateRoute() {
  const selectedSpots = spots.filter((spot) => state.selected.has(spot.id));
  const names = selectedSpots.map((spot) => spotText(spot)[0]);
  const totalHours = selectedSpots.reduce((sum, spot) => sum + spot.hours, 0);
  const dayCount = state.dayIndex + 1;
  const level = Math.min(5, Math.max(1, Math.round(totalHours / Math.max(1, dayCount) / 2)));
  const routeName = makeCustomRouteName(names);

  document.querySelector("#routeName").textContent = routeName;
  document.querySelector("#routeBadge").textContent = langCopy("styles")[state.styleIndex];
  document.querySelector("#durationValue").textContent = durationText(totalHours, dayCount);
  document.querySelector("#difficultyValue").textContent = levelText(level);
  document.querySelector("#routeTips").textContent = makeTips(level, selectedSpots);
  document.querySelector("#routeSteps").innerHTML = names
    .map((name, index) => `<li>${dayStep(index, name)}</li>`)
    .join("");

  const selectedServiceLabels = Array.from(state.services).join(", ");
  const message = `${routeName}\n${names.join(" -> ")}\n${durationText(totalHours, dayCount)}\nServices: ${selectedServiceLabels}`;
  document.querySelector("textarea[name='message']").value = message;
  const whatsappNumber = contactConfig.whatsappNumber || "";
  const whatsappBase = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "https://wa.me/";
  document.querySelector("#whatsappLink").href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  document.querySelector("#emailLink").href = `mailto:${contactConfig.email || "service@example.com"}?subject=${encodeURIComponent(routeName)}&body=${encodeURIComponent(message)}`;
  document.querySelector("#wechatLink").href = "#contact";
  document.querySelector("#wechatLink").title = contactConfig.wechatText || "WeChat";
}

function makeCustomRouteName(names) {
  if (state.lang === "zh") return `${names[0]}等${names.length}站定制路线`;
  if (state.lang === "ko") return `${names[0]} 외 ${names.length}곳 맞춤 코스`;
  return `${names.length}-stop custom route`;
}

function durationText(hours, days) {
  if (state.lang === "zh") return `${days}天 / 约${hours}小时`;
  if (state.lang === "ko") return `${days}일 / 약 ${hours}시간`;
  return `${days} day${days > 1 ? "s" : ""} / about ${hours}h`;
}

function levelText(level) {
  if (state.lang === "zh") return ["轻松", "适中", "较满", "高强度", "挑战"][level - 1];
  if (state.lang === "ko") return ["여유", "보통", "빡빡함", "강함", "도전"][level - 1];
  return ["Easy", "Moderate", "Full", "Intense", "Challenging"][level - 1];
}

function dayStep(index, name) {
  const day = Math.min(index + 1, state.dayIndex + 1);
  if (state.lang === "zh") return `第${day}天：${name}`;
  if (state.lang === "ko") return `${day}일차: ${name}`;
  return `Day ${day}: ${name}`;
}

function makeTips(level, selectedSpots) {
  const hasForest = selectedSpots.some((spot) => spot.id === "forest");
  if (state.lang === "zh") {
    if (level >= 4) return "路线较满，建议安排包车和本地向导，提前确认门票与天气。";
    if (hasForest) return "森林公园建议预留完整一天，穿防滑鞋并尽量早出发。";
    return "这条路线节奏轻松，适合家庭、长辈和第一次到访游客。";
  }
  if (state.lang === "ko") {
    if (level >= 4) return "일정이 빡빡하므로 차량과 현지 가이드 예약을 권장합니다.";
    if (hasForest) return "국가삼림공원은 하루를 충분히 잡고 미끄럼 방지 신발을 준비하세요.";
    return "가족과 첫 방문객에게 적합한 여유로운 코스입니다.";
  }
  if (level >= 4) return "This is a full route. A private car and local guide are recommended.";
  if (hasForest) return "Reserve a full day for the Forest Park and start early with comfortable shoes.";
  return "This route is relaxed and works well for families and first-time visitors.";
}

function bindLeadForm() {
  document.querySelector("#leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const summary = [
      form.get("name"),
      form.get("country"),
      form.get("date"),
      `${form.get("people")} people`,
      form.get("message")
    ].filter(Boolean).join("\n");
    navigator.clipboard?.writeText(summary).catch(() => {});
    document.querySelector("#formResult").textContent = tr("sent");
  });
}

function bindIntroSplash() {
  const splash = document.querySelector("#introSplash");
  const video = document.querySelector("#introVideo");
  const skipButton = document.querySelector("#skipIntroBtn");
  const watchButton = document.querySelector("#watchIntroBtn");
  const unmuteButton = document.querySelector("#unmuteIntroBtn");
  const status = document.querySelector("#introVideoStatus");
  if (!splash || !video) return;

  const introConfig = appConfig.introVideo || {};
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const markNeedsTap = () => {
    if (!watchButton) return;
    watchButton.textContent = tr("playIntro");
    watchButton.classList.add("ready");
    video.controls = false;
    if (status) status.textContent = tr("videoReady");
  };

  const attemptPlay = () => {
    video.muted = true;
    if (status) status.textContent = tr("videoLoading");
    return video.play().then(() => {
      splash.classList.add("playing");
      if (status) status.textContent = tr("videoPlaying");
    }).catch(() => {
      splash.classList.remove("playing");
      markNeedsTap();
    });
  };

  const toggleSound = () => {
    video.muted = !video.muted;
    video.defaultMuted = video.muted;
    if (unmuteButton) {
      unmuteButton.textContent = video.muted ? tr("unmuteIntro") : tr("muteIntro");
      unmuteButton.classList.toggle("ready", !video.muted);
    }
    if (!video.paused) return;
    video.play().catch(() => {});
  };

  if (introConfig.poster) video.poster = introConfig.poster;
  loadIntroVideoSource(video, introConfig).then(attemptPlay).catch(markNeedsTap);

  const hideSplash = () => {
    splash.classList.add("hidden");
    video.pause();
  };

  skipButton?.addEventListener("click", hideSplash);
  watchButton?.addEventListener("click", () => {
    attemptPlay();
  });
  unmuteButton?.addEventListener("click", toggleSound);
  splash.addEventListener("touchstart", attemptPlay, { once: true, passive: true });
  splash.addEventListener("pointerdown", attemptPlay, { once: true });
  video.addEventListener("canplay", attemptPlay, { once: true });
  video.addEventListener("loadeddata", () => {
    if (status) status.textContent = tr("videoReady");
  });
  video.addEventListener("error", () => {
    splash.classList.remove("playing");
    if (status) status.textContent = tr("videoError");
    markNeedsTap();
  });
  video.addEventListener("ended", hideSplash);

  const maxDuration = Math.max(8, Number(introConfig.durationSeconds || 18));
  window.setTimeout(() => {
    if (!splash.classList.contains("hidden")) hideSplash();
  }, maxDuration * 1000);
}

async function loadIntroVideoSource(video, introConfig) {
  const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
  const isMobileWidth = window.matchMedia("(max-width: 768px)").matches;
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const preferMobileVideo = isMobileWidth ||
    Boolean(connection?.saveData) ||
    ["slow-2g", "2g", "3g"].includes(connection?.effectiveType);
  const desktopSrc = introConfig.src || "assets/zhangjiajie-intro.mp4";
  const desktopLandscapeSrc = introConfig.desktopLandscapeSrc || "";
  const mobileSrc = introConfig.mobileSrc || "";
  const mobilePortraitSrc = introConfig.mobilePortraitSrc || "";
  const mobileLandscapeSrc = introConfig.mobileLandscapeSrc || "";
  const candidates = isDesktop
    ? [desktopLandscapeSrc, desktopSrc, mobileLandscapeSrc, mobileSrc, "assets/zhangjiajie-intro.mp4.mp4"]
    : preferMobileVideo && isPortrait
      ? [mobilePortraitSrc, mobileSrc, desktopSrc, "assets/zhangjiajie-intro.mp4.mp4"]
      : preferMobileVideo
        ? [mobileLandscapeSrc, mobileSrc, desktopSrc, "assets/zhangjiajie-intro.mp4.mp4"]
        : [desktopLandscapeSrc, desktopSrc, mobileLandscapeSrc, mobileSrc, "assets/zhangjiajie-intro.mp4.mp4"];

  for (const src of Array.from(new Set(candidates.filter(Boolean)))) {
    if (await videoAssetExists(src)) {
      video.src = src;
      video.load();
      return src;
    }
  }

  video.src = desktopSrc;
  video.load();
  return desktopSrc;
}

async function videoAssetExists(src) {
  try {
    const response = await fetch(src, {
      method: "HEAD",
      cache: "no-store"
    });
    return response.ok;
  } catch (error) {
    return true;
  }
}

function bindTravelerVideoForm() {
  const form = document.querySelector("#travelerVideoForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const file = data.get("travelerVideo");
    if (!file || !file.name) {
      document.querySelector("#videoUploadResult").textContent = tr("videoRequired");
      return;
    }

    const pendingItem = {
      id: `video-${Date.now()}`,
      status: "pending_review",
      name: data.get("travelerName") || "",
      contact: data.get("travelerContact") || "",
      caption: data.get("travelerCaption") || "",
      fileName: file.name,
      fileSize: file.size,
      submittedAt: new Date().toISOString()
    };

    const endpoint = appConfig.moderation?.endpoint || "";
    if (endpoint) {
      await fetch(endpoint, {
        method: "POST",
        body: data
      }).catch(() => {});
    } else {
      const queue = JSON.parse(localStorage.getItem("zj_pending_videos") || "[]");
      queue.unshift(pendingItem);
      localStorage.setItem("zj_pending_videos", JSON.stringify(queue.slice(0, 20)));
    }

    form.reset();
    document.querySelector("#videoUploadResult").textContent = tr("videoPending");
  });
}

let deferredInstallPrompt = null;

function bindInstallPrompt() {
  const button = document.querySelector("#installAppBtn");
  if (!button) return;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    button.classList.add("ready");
  });

  button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      const message = state.lang === "zh"
        ? "上线到 HTTPS 网站后，手机浏览器会显示安装 App 入口。"
        : state.lang === "ko"
          ? "HTTPS 사이트에 배포하면 모바일 브라우저에서 앱 설치가 가능합니다."
          : "After publishing on HTTPS, mobile browsers can install this as an app.";
      alert(message);
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    button.classList.remove("ready");
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then((registration) => {
      registration.update().catch(() => {});
    }).catch(() => {});
  });
}

init();
