// إعدادات اللغة
const language = 'ar';

const translations = {
  ar: {
    siteTitle: 'ذكائي',
    heroTitle: 'منصتك العربية لأفضل أدوات الذكاء الاصطناعي',
    heroDesc: 'اكتشف، جرّب، وابدأ استخدام أقوى مواقع الذكاء الاصطناعي في العالم، في مكان واحد وباللغة العربية.',
    cta: 'ابدأ استخدام الذكاء الاصطناعي',
    nav: ["الرئيسية", "الأدوات", "تواصل معنا"],
    filterAll: 'الكل',
    visit: 'زيارة الموقع →',
    noTools: 'لا توجد أدوات في هذا التصنيف حالياً.',
    contact: 'تواصل معنا',
    contactDesc: 'للاقتراحات أو الإبلاغ عن مشكلة:',
    rights: 'جميع الحقوق محفوظة',
    email: 'info@zekai.ai',
    categories: {
      "كتابة": "كتابة",
      "صور": "صور",
      "صوت": "صوت",
      "فيديو": "فيديو",
      "برمجة": "برمجة",
      "تسويق": "تسويق",
      "ترجمة": "ترجمة",
      "ترفيه": "ترفيه",
      "تصميم": "تصميم",
      "محادثة": "محادثة",
      "تعليم": "تعليم"
    }
  }
};

const baseCategories = [
  "كتابة", "صور", "صوت", "فيديو", "برمجة", "تسويق", "ترجمة", "ترفيه", "تصميم", "محادثة", "تعليم"
];

// قائمة أدوات الذكاء الاصطناعي الحقيقية
const aiSites = [
  // كتابة
  { name: "ChatGPT", desc: "محادثة وكتابة نصوص وتلخيص وذكاء عام.", url: "https://chat.openai.com/", category: "كتابة" },
  { name: "Google Bard", desc: "مساعد ذكي من جوجل للبحث والإجابة.", url: "https://bard.google.com/", category: "كتابة" },
  { name: "QuillBot", desc: "إعادة صياغة وتلخيص النصوص.", url: "https://quillbot.com/", category: "كتابة" },
  { name: "Grammarly", desc: "تصحيح وتحسين الكتابة.", url: "https://www.grammarly.com/", category: "كتابة" },
  { name: "Jasper", desc: "كتابة محتوى تسويقي وإبداعي.", url: "https://www.jasper.ai/", category: "كتابة" },
  { name: "Notion AI", desc: "مساعد ذكي لإدارة الملاحظات والمهام.", url: "https://www.notion.so/product/ai", category: "كتابة" },
  { name: "Copy.ai", desc: "كتابة محتوى تسويقي تلقائي.", url: "https://www.copy.ai/", category: "كتابة" },
  { name: "Rytr", desc: "كتابة محتوى تلقائي.", url: "https://rytr.me/", category: "كتابة" },
  { name: "Wordtune", desc: "تحسين وإعادة صياغة النصوص.", url: "https://www.wordtune.com/", category: "كتابة" },
  { name: "Scribbr", desc: "تدقيق لغوي للأبحاث والرسائل.", url: "https://www.scribbr.com/", category: "كتابة" },
  { name: "ShortlyAI", desc: "كتابة وتلخيص نصوص طويلة.", url: "https://www.shortlyai.com/", category: "كتابة" },
  // صور
  { name: "Midjourney", desc: "توليد صور احترافية بالذكاء الاصطناعي.", url: "https://www.midjourney.com/", category: "صور" },
  { name: "DALL·E", desc: "توليد صور من النصوص.", url: "https://www.bing.com/images/create/", category: "صور" },
  { name: "Stable Diffusion", desc: "توليد صور واقعية من النصوص.", url: "https://stablediffusionweb.com/", category: "صور" },
  { name: "Canva AI", desc: "تصميم صور ومنشورات تلقائياً.", url: "https://www.canva.com/ai-image-generator/", category: "صور" },
  { name: "Remove.bg", desc: "إزالة خلفية الصور تلقائياً.", url: "https://www.remove.bg/", category: "صور" },
  { name: "PhotoRoom", desc: "تعديل الصور وإزالة الخلفية.", url: "https://www.photoroom.com/", category: "صور" },
  { name: "Dream by WOMBO", desc: "توليد صور فنية من النصوص.", url: "https://www.wombo.art/", category: "صور" },
  { name: "Magic Eraser", desc: "إزالة عناصر من الصور بسهولة.", url: "https://magiceraser.io/", category: "صور" },
  { name: "Cleanup.pictures", desc: "تنظيف الصور من العناصر غير المرغوبة.", url: "https://cleanup.pictures/", category: "صور" },
  { name: "Photopea AI", desc: "تعديل الصور أونلاين بذكاء اصطناعي.", url: "https://www.photopea.com/", category: "صور" },
  // صوت
  { name: "ElevenLabs", desc: "توليد أصوات بشرية واقعية.", url: "https://elevenlabs.io/", category: "صوت" },
  { name: "Murf.ai", desc: "توليد أصوات احترافية للتعليق الصوتي.", url: "https://murf.ai/", category: "صوت" },
  { name: "Otter.ai", desc: "تفريغ وتحويل الصوت إلى نص.", url: "https://otter.ai/", category: "صوت" },
  { name: "AIVA", desc: "تأليف موسيقى بالذكاء الاصطناعي.", url: "https://www.aiva.ai/", category: "صوت" },
  { name: "Soundful", desc: "توليد موسيقى تلقائياً.", url: "https://soundful.com/", category: "صوت" },
  { name: "Play.ht", desc: "تحويل النص إلى صوت واقعي.", url: "https://play.ht/", category: "صوت" },
  { name: "Lovo.ai", desc: "توليد أصوات واقعية من النصوص.", url: "https://lovo.ai/", category: "صوت" },
  // فيديو
  { name: "Descript", desc: "تحرير فيديو وصوت تلقائي وذكي.", url: "https://www.descript.com/", category: "فيديو" },
  { name: "Synthesia", desc: "إنشاء فيديوهات واقعية من نصوص.", url: "https://www.synthesia.io/", category: "فيديو" },
  { name: "RunwayML", desc: "تحرير فيديو احترافي بالذكاء الاصطناعي.", url: "https://runwayml.com/", category: "فيديو" },
  { name: "Lumen5", desc: "تحويل مقالات إلى فيديو تلقائياً.", url: "https://lumen5.com/", category: "فيديو" },
  { name: "Pictory", desc: "تحويل نصوص إلى فيديو تلقائياً.", url: "https://pictory.ai/", category: "فيديو" },
  { name: "Fliki", desc: "تحويل النص إلى فيديو وصوت.", url: "https://fliki.ai/", category: "فيديو" },
  { name: "Remove Video Background", desc: "إزالة خلفية الفيديو تلقائياً.", url: "https://www.unscreen.com/", category: "فيديو" },
  // برمجة
  { name: "Hugging Face", desc: "مكتبة ضخمة لنماذج الذكاء الاصطناعي مفتوحة المصدر.", url: "https://huggingface.co/", category: "برمجة" },
  { name: "GitHub Copilot", desc: "مساعد برمجي لكتابة الكود واقتراح حلول.", url: "https://github.com/features/copilot", category: "برمجة" },
  { name: "Tabnine", desc: "مساعد برمجي لكتابة الكود.", url: "https://www.tabnine.com/", category: "برمجة" },
  // تسويق
  { name: "SurferSEO", desc: "تحسين محركات البحث SEO تلقائياً.", url: "https://surferseo.com/", category: "تسويق" },
  { name: "Peppertype.ai", desc: "كتابة محتوى تسويقي تلقائي.", url: "https://www.peppertype.ai/", category: "تسويق" },
  { name: "Frase.io", desc: "تحليل وتحسين محتوى المواقع.", url: "https://www.frase.io/", category: "تسويق" },
  { name: "CopyMonkey", desc: "كتابة وصف منتجات لمتاجر إلكترونية.", url: "https://copymonkey.ai/", category: "تسويق" },
  // ترجمة
  { name: "DeepL", desc: "ترجمة نصوص عالية الجودة بالذكاء الاصطناعي.", url: "https://www.deepl.com/translator", category: "ترجمة" },
  { name: "Google Translate", desc: "ترجمة نصوص ومواقع فورية.", url: "https://translate.google.com/", category: "ترجمة" },
  // ترفيه
  { name: "AI Dungeon", desc: "ألعاب قصص تفاعلية بالذكاء الاصطناعي.", url: "https://play.aidungeon.io/", category: "ترفيه" },
  // تصميم
  { name: "Looka", desc: "توليد شعارات (لوجو) احترافية.", url: "https://looka.com/", category: "تصميم" },
  { name: "LogoAI", desc: "توليد لوجو ومواد براندنج.", url: "https://logoai.com/", category: "تصميم" },
  { name: "Designs.ai", desc: "توليد تصاميم وفيديوهات تلقائياً.", url: "https://designs.ai/", category: "تصميم" },
  // محادثة
  { name: "Replika", desc: "محادثة مع روبوت ذكي ودعم نفسي.", url: "https://replika.com/", category: "محادثة" },
  // تعليم
  { name: "Socratic by Google", desc: "مساعد دراسي ذكي للطلاب.", url: "https://socratic.org/", category: "تعليم" }
];

const categories = ['الكل', ...baseCategories];
let selectedCategory = 'الكل';

function getCategoryKey(label) {
  return label === 'الكل' ? 'all' : label;
}

function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="logo">${translations.ar.siteTitle}</div>
    <div class="nav">
      ${translations.ar.nav.map((txt, i) => `<a href='${i===0?"#":"#sites"}' class='${i===0?"active":""}'>${txt}</a>`).join('')}
    </div>
    <button class="toggle-mode" title="تبديل الوضع" aria-label="تبديل الوضع">
      <span id="mode-icon">🌙</span>
    </button>
  `;
  return nav;
}

function renderHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <h1>${translations.ar.heroTitle}</h1>
    <p>${translations.ar.heroDesc}</p>
    <button class="cta-btn" onclick="document.getElementById('sites').scrollIntoView({behavior:'smooth'})">${translations.ar.cta}</button>
  `;
  return hero;
}

function renderFilter() {
  const filter = document.createElement('div');
  filter.className = 'filter-bar';
  filter.style = 'display:flex;gap:1rem;justify-content:center;margin:2rem 0 1rem 0;flex-wrap:wrap;';
  filter.innerHTML = categories.map(cat => `
    <button class="filter-btn${selectedCategory === cat ? ' active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');
  filter.onclick = e => {
    if (e.target.classList.contains('filter-btn')) {
      selectedCategory = e.target.getAttribute('data-cat');
      renderApp();
      setTimeout(() => {
        document.getElementById('sites').scrollIntoView({behavior:'smooth'});
      }, 100);
    }
  };
  return filter;
}

function renderSitesList() {
  const section = document.createElement('section');
  section.className = 'sites-list';
  section.id = 'sites';
  let filtered = selectedCategory === 'الكل'
    ? aiSites
    : aiSites.filter(site => site.category === selectedCategory);
  section.innerHTML = filtered.length ? filtered.map(site => `
    <div class="site-card" tabindex="0" onclick="window.open('${site.url}', '_blank')">
      <div class="site-icon">
        <img src="https://www.google.com/s2/favicons?domain=${site.url}&sz=64" alt="${site.name}" 
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>'"/>
      </div>
      <div class="site-content">
        <div class="site-title">${site.name}</div>
        <div class="site-desc">${site.desc}</div>
        <div class="site-link">${translations.ar.visit}</div>
      </div>
    </div>
  `).join('') : `<div style="text-align:center;width:100%;font-size:1.2rem;color:#f43f5e;">${translations.ar.noTools}</div>`;
  return section;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.style = 'text-align:center;padding:2rem 0 1rem 0;color:#94a3b8;font-size:1rem;';
  footer.innerHTML = `${translations.ar.rights} &copy; ${translations.ar.siteTitle} ${new Date().getFullYear()}`;
  return footer;
}

function renderContact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.style = 'text-align:center;margin:3rem 0 1rem 0;';
  section.innerHTML = `
    <h2 style="font-size:1.3rem;font-weight:700;margin-bottom:1rem;">${translations.ar.contact}</h2>
    <p>${translations.ar.contactDesc} <a href="mailto:${translations.ar.email}" style="color:var(--color-primary);text-decoration:underline;">${translations.ar.email}</a></p>
  `;
  return section;
}

function setupModeToggle() {
  const btn = document.querySelector('.toggle-mode');
  const icon = document.getElementById('mode-icon');
  function setMode(dark) {
    if (dark) {
      document.body.classList.add('dark');
      icon.textContent = '☀️';
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark');
      icon.textContent = '🌙';
      localStorage.setItem('mode', 'light');
    }
  }
  btn.onclick = () => setMode(!document.body.classList.contains('dark'));
  setMode(localStorage.getItem('mode') === 'dark');
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(renderNavbar());
  app.appendChild(renderHero());
  app.appendChild(renderFilter());
  app.appendChild(renderSitesList());
  app.appendChild(renderContact());
  app.appendChild(renderFooter());
  setupModeToggle();
}

document.body.dir = 'rtl';
renderApp(); 