// إدارة الأهداف باستخدام localStorage + دعم تعدد اللغة (عربي / إنجليزي)
const GOALS_KEY = 'micro_goals_list';
const TIMELINE_KEY = 'micro_goals_timeline';
const LANG_KEY = 'micro_goals_lang';

// ترجمة النصوص
const translations = {
    ar: {
        // عام
        nav_home: 'الرئيسية',
        nav_goals: 'أهدافي',
        nav_timeline: 'خط الزمن',
        nav_tips: 'نصائح',
        footer_main: 'صُنع بحب لمساعدة كل شخص يبغى يبدأ من الصفر 💛',
        footer_goals: 'تذكّر: هدف صغير أفضل من لا شيء 🌱',
        footer_timeline: 'كل نقطة على خط الزمن = خطوة حقيقية سويتها 👣',
        footer_tips: 'ابدأ اليوم بهدف واحد صغير… والباقي بيجي مع الوقت 💫',

        // الصفحة الرئيسية
        index_page_title: 'مكتبة الأهداف الصغيرة',
        index_title: 'مكتبة الأهداف الصغيرة',
        index_subtitle: 'خطوات بسيطة… تغيّر حياتك بالكامل ✨',
        index_hero_title: 'حوّل أحلامك الكبيرة إلى أشياء صغيرة يومية',
        index_hero_text: 'فكرة الموقع بسيطة ومبتكرة: بدال ما تحط هدف ضخم وتنساه، نجزّئ الهدف إلى مهام صغيرة جدًا تقدر تنجزها في أقل من ١٠ دقائق.',
        index_hero_button: 'ابدأ بإضافة أول هدف لك',
        index_card1_title: 'أهداف دقيقة واحدة',
        index_card1_text: 'أبسط نوع من الأهداف. مثال: أشرب كأس ماء، أرتب طاولتي، أرسل رسالة شكر.',
        index_card2_title: 'أهداف ٥ دقائق',
        index_card2_text: 'قراءة فقرة، مراجعة كلمة إنجليزية، كتابة فكرة في الملاحظات.',
        index_card3_title: 'أهداف ١٠ دقائق',
        index_card3_text: 'تمرين بسيط، مراجعة خطة اليوم، تنظيف ركن صغير من الغرفة.',
        index_how_title: 'كيف تشتغل الفكرة؟',
        index_how_1: 'اختَر هدف بسيط من صفحة أهدافي.',
        index_how_2: 'حدّد المدة: دقيقة – ٥ دقائق – ١٠ دقائق.',
        index_how_3: 'أنجزه وسجّله في خط الزمن.',
        index_how_4: 'شوي شوي… تشوف تراكم إنجازاتك بدون ضغط.',

        // صفحة الأهداف
        goals_page_title: 'أهدافي - مكتبة الأهداف الصغيرة',
        goals_title: 'أهدافي',
        goals_subtitle: 'أضف أهداف صغيرة وخفيفة تقدر تسويها اليوم.',
        goals_add_title: 'إضافة هدف جديد',
        goals_label_title: 'عنوان الهدف',
        goals_placeholder_title: 'مثال: أشرب كأس ماء',
        goals_label_duration: 'المدة المتوقعة',
        goals_duration_1: '١ دقيقة',
        goals_duration_5: '٥ دقائق',
        goals_duration_10: '١٠ دقائق',
        goals_label_category: 'التصنيف',
        goals_cat_health: 'صحة',
        goals_cat_study: 'تعلم',
        goals_cat_work: 'عمل',
        goals_cat_life: 'حياة يومية',
        goals_add_button: 'إضافة الهدف',
        goals_note_storage: 'كل الأهداف تحفظ في جهازك فقط (باستخدام المتصفح).',
        goals_list_title: 'قائمة الأهداف',
        goals_filter_label: 'فرز حسب المدة:',
        goals_filter_all: 'الكل',
        goals_no_goals: 'لا توجد أهداف حتى الآن، أضف هدفك الأول بالأعلى ✨',
        goals_done_button: 'تم الإنجاز',
        goals_delete_button: 'حذف',
        goals_alert_title_required: 'اكتب عنوان الهدف أولاً',
        goals_duration_text_1: 'دقيقة',
        goals_duration_text_5: '٥ دقائق',
        goals_duration_text_10: '١٠ دقائق',
        goals_category_health: 'صحة',
        goals_category_study: 'تعلم',
        goals_category_work: 'عمل',
        goals_category_life: 'حياة يومية',

        // صفحة خط الزمن
        timeline_page_title: 'خط الزمن - مكتبة الأهداف الصغيرة',
        timeline_title: 'خط الزمن',
        timeline_subtitle: 'هنا تشوف تاريخ إنجازاتك الصغيرة، يوم بعد يوم.',
        timeline_how_title: 'كيف تستخدم خط الزمن؟',
        timeline_how_text: 'لما تنجز هدف من صفحة أهدافي وتعلّم إنه منجز، يضاف تلقائيًا لخط الزمن مع تاريخ ووقت الإنجاز.',
        timeline_list_title: 'إنجازاتي',
        timeline_note_empty: 'لسه ما في إنجازات مسجلة. جرّب تكمل هدف من صفحة "أهدافي".',
        timeline_date_separator: ' • ',

        // صفحة النصائح
        tips_page_title: 'نصائح - مكتبة الأهداف الصغيرة',
        tips_title: 'نصائح وخدع صغيرة',
        tips_subtitle: 'كيف تخلي الأهداف الصغيرة أسلوب حياة؟',
        tips_tip1_title: '١. لا تستهين بالشيء الصغير',
        tips_tip1_text: 'دقيقة يوميًا لمدة سنة = ٦ ساعات تقريبًا! هذا وقت كافي تتعلم فيه شيء جديد بالكامل.',
        tips_tip2_title: '٢. اربط الهدف بعادة موجودة',
        tips_tip2_text: 'مثال: بعد ما أشرب قهوتي الصباحية، أكتب سطر واحد في مذكرتي.',
        tips_tip3_title: '٣. خفف توقعاتك',
        tips_tip3_text: 'مو لازم كل يوم يكون إنجاز خارق. الأهم إنك ما توقف تمامًا.',
        tips_tip4_title: '٤. كافئ نفسك',
        tips_tip4_text: 'بعد ما تلتزم بأهداف صغيرة لمدة أسبوع، كافئ نفسك بشيء تحبه (بس بدون مبالغة 😄).',
        tips_faq_title: 'أسئلة شائعة',
        tips_q1: 'هل تنحذف بياناتي لو سكرت المتصفح؟',
        tips_a1: 'لا، كل البيانات مخزنة في المتصفح نفسه، وتظل موجودة إلى أن تمسحها يدويًا من الإعدادات.',
        tips_q2: 'هل يشتغل الموقع بدون إنترنت؟',
        tips_a2: 'نعم، بعد ما تفتح الصفحات مرة واحدة، تقدر تستخدمها حتى لو انقطع الاتصال.',
        tips_q3: 'هل أحد غيري يقدر يشوف أهدافي؟',
        tips_a3: 'لا، كل شيء محفوظ على جهازك فقط ولا أحد يقدر يطلع عليه.',

        // رسائل ديناميكية
        timeline_item_duration_label: 'المدة',
    },
    en: {
        // General
        nav_home: 'Home',
        nav_goals: 'My Goals',
        nav_timeline: 'Timeline',
        nav_tips: 'Tips',
        footer_main: 'Made with love to help anyone who wants to start from zero 💛',
        footer_goals: 'Remember: a tiny goal is better than no goal 🌱',
        footer_timeline: 'Every dot on the timeline = a real step you took 👣',
        footer_tips: 'Start today with one small goal… the rest will follow 💫',

        // Index
        index_page_title: 'Micro Goals Library',
        index_title: 'Micro Goals Library',
        index_subtitle: 'Small steps… big life changes ✨',
        index_hero_title: 'Turn big dreams into tiny daily actions',
        index_hero_text: 'The idea is simple and fresh: instead of one huge goal you forget, we break it into tiny tasks you can finish in less than 10 minutes.',
        index_hero_button: 'Start by adding your first goal',
        index_card1_title: '1-minute goals',
        index_card1_text: 'Super small actions. Example: drink a glass of water, tidy your desk, send a thank-you message.',
        index_card2_title: '5-minute goals',
        index_card2_text: 'Read a short paragraph, review a new word, write down a quick idea.',
        index_card3_title: '10-minute goals',
        index_card3_text: 'Do a simple workout, review your plan for the day, clean a small corner of your room.',
        index_how_title: 'How does it work?',
        index_how_1: 'Pick a simple goal from the “My Goals” page.',
        index_how_2: 'Choose the duration: 1, 5, or 10 minutes.',
        index_how_3: 'Complete it and log it in the timeline.',
        index_how_4: 'Over time, you’ll see your progress pile up without pressure.',

        // Goals page
        goals_page_title: 'My Goals - Micro Goals Library',
        goals_title: 'My Goals',
        goals_subtitle: 'Add tiny, light goals you can do today.',
        goals_add_title: 'Add a new goal',
        goals_label_title: 'Goal title',
        goals_placeholder_title: 'Example: drink a glass of water',
        goals_label_duration: 'Expected duration',
        goals_duration_1: '1 minute',
        goals_duration_5: '5 minutes',
        goals_duration_10: '10 minutes',
        goals_label_category: 'Category',
        goals_cat_health: 'Health',
        goals_cat_study: 'Learning',
        goals_cat_work: 'Work',
        goals_cat_life: 'Daily life',
        goals_add_button: 'Add goal',
        goals_note_storage: 'All goals are saved only on your device (browser storage).',
        goals_list_title: 'Goals list',
        goals_filter_label: 'Filter by duration:',
        goals_filter_all: 'All',
        goals_no_goals: 'No goals yet. Add your first goal above ✨',
        goals_done_button: 'Done',
        goals_delete_button: 'Delete',
        goals_alert_title_required: 'Please type a goal title first',
        goals_duration_text_1: '1 minute',
        goals_duration_text_5: '5 minutes',
        goals_duration_text_10: '10 minutes',
        goals_category_health: 'Health',
        goals_category_study: 'Learning',
        goals_category_work: 'Work',
        goals_category_life: 'Daily life',

        // Timeline page
        timeline_page_title: 'Timeline - Micro Goals Library',
        timeline_title: 'Timeline',
        timeline_subtitle: 'See the history of your tiny achievements, day by day.',
        timeline_how_title: 'How to use the timeline?',
        timeline_how_text: 'When you mark a goal as done on the “My Goals” page, it is automatically added here with date and time.',
        timeline_list_title: 'My achievements',
        timeline_note_empty: 'No achievements recorded yet. Try finishing a goal from the "My Goals" page.',
        timeline_date_separator: ' • ',

        // Tips page
        tips_page_title: 'Tips - Micro Goals Library',
        tips_title: 'Tiny tips & tricks',
        tips_subtitle: 'How to make micro goals a lifestyle?',
        tips_tip1_title: '1. Never underestimate small actions',
        tips_tip1_text: 'One minute a day for a year ≈ 6 hours! Enough time to learn something completely new.',
        tips_tip2_title: '2. Attach a goal to an existing habit',
        tips_tip2_text: 'For example: after my morning coffee, I will write one line in my journal.',
        tips_tip3_title: '3. Lower your expectations',
        tips_tip3_text: 'You don’t have to be amazing every single day. The important thing is not to stop.',
        tips_tip4_title: '4. Reward yourself',
        tips_tip4_text: 'After sticking to small goals for a week, reward yourself with something you like (without overdoing it 😄).',
        tips_faq_title: 'Frequently asked questions',
        tips_q1: 'Will my data be lost if I close the browser?',
        tips_a1: 'No. Everything is saved in your browser and stays until you clear it manually.',
        tips_q2: 'Does the website work offline?',
        tips_a2: 'Yes. After you open the pages once, you can use them even if the internet goes down.',
        tips_q3: 'Can anyone else see my goals?',
        tips_a3: 'No. Everything is stored locally on your device and nobody else can see it.',

        // Dynamic messages
        timeline_item_duration_label: 'Duration',
    }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'ar';

function t(key) {
    const pack = translations[currentLang] || translations.ar;
    return pack[key] || key;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تحديث النصوص العامة
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (value) {
            el.textContent = value;
        }
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = t(key);
        if (value) {
            el.placeholder = value;
        }
    });

    // عناوين الصفحات (title tag)
    const pageTitleEl = document.querySelector('title[data-i18n]');
    if (pageTitleEl) {
        const key = pageTitleEl.getAttribute('data-i18n');
        const value = t(key);
        if (value) {
            pageTitleEl.textContent = value;
        }
    }

    // زر التبديل
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = lang === 'ar' ? 'EN' : 'عربي';
        toggle.setAttribute('title', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }

    // إعادة رسم القوائم التي تحتوي على نص ديناميكي
    renderGoals();
    renderTimeline();
}

function initLanguage() {
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('langToggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const next = currentLang === 'ar' ? 'en' : 'ar';
                applyLanguage(next);
            });
        }
        applyLanguage(currentLang);
    });
}

// إدارة الأهداف
function loadGoals() {
    try {
        const data = localStorage.getItem(GOALS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveGoals(goals) {
    localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
}

function loadTimeline() {
    try {
        const data = localStorage.getItem(TIMELINE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveTimeline(items) {
    localStorage.setItem(TIMELINE_KEY, JSON.stringify(items));
}

function addGoal() {
    const titleInput = document.getElementById('goalTitle');
    const durationSelect = document.getElementById('goalDuration');
    const categorySelect = document.getElementById('goalCategory');

    if (!titleInput || !durationSelect || !categorySelect) return;

    const title = titleInput.value.trim();
    const duration = durationSelect.value;
    const category = categorySelect.value;

    if (!title) {
        alert(t('goals_alert_title_required'));
        return;
    }

    const goals = loadGoals();
    const newGoal = {
        id: Date.now(),
        title,
        duration,
        category,
        createdAt: new Date().toISOString(),
        done: false
    };

    goals.push(newGoal);
    saveGoals(goals);
    titleInput.value = '';
    renderGoals();
}

function markGoalDone(id) {
    const goals = loadGoals();
    const goal = goals.find(g => g.id === id);
    if (!goal) return;

    goal.done = true;
    saveGoals(goals);

    const timeline = loadTimeline();
    timeline.unshift({
        id: Date.now(),
        title: goal.title,
        duration: goal.duration,
        category: goal.category,
        doneAt: new Date().toISOString()
    });
    saveTimeline(timeline);

    renderGoals();
    renderTimeline();
}

function deleteGoal(id) {
    let goals = loadGoals();
    goals = goals.filter(g => g.id !== id);
    saveGoals(goals);
    renderGoals();
}

function renderGoals() {
    const container = document.getElementById('goalsContainer');
    if (!container) return;

    const filterSelect = document.getElementById('filterDuration');
    const filterValue = filterSelect ? filterSelect.value : 'all';

    const goals = loadGoals();
    container.innerHTML = '';

    const filtered = goals.filter(goal => {
        if (filterValue === 'all') return true;
        return goal.duration === filterValue;
        });

    if (filtered.length === 0) {
        const li = document.createElement('li');
        li.className = 'note';
        li.textContent = t('goals_no_goals');
        container.appendChild(li);
        return;
    }

    filtered.forEach(goal => {
        const li = document.createElement('li');
        li.className = 'goal-item';

        const main = document.createElement('div');
        main.className = 'goal-main';

        const title = document.createElement('span');
        title.className = 'goal-title';
        title.textContent = goal.title + (goal.done ? ' ✅' : '');

        const meta = document.createElement('span');
        meta.className = 'goal-meta';

        let durationText;
        if (goal.duration === '1') durationText = t('goals_duration_text_1');
        else if (goal.duration === '5') durationText = t('goals_duration_text_5');
        else durationText = t('goals_duration_text_10');

        const categoryMap = {
            health: t('goals_category_health'),
            study: t('goals_category_study'),
            work: t('goals_category_work'),
            life: t('goals_category_life')
        };

        meta.textContent = `${durationText} • ${categoryMap[goal.category] || ''}`;

        main.appendChild(title);
        main.appendChild(meta);

        const actions = document.createElement('div');
        actions.className = 'goal-actions';

        if (!goal.done) {
            const doneBtn = document.createElement('button');
            doneBtn.className = 'done';
            doneBtn.textContent = t('goals_done_button');
            doneBtn.onclick = () => markGoalDone(goal.id);
            actions.appendChild(doneBtn);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = t('goals_delete_button');
        deleteBtn.onclick = () => deleteGoal(goal.id);
        actions.appendChild(deleteBtn);

        li.appendChild(main);
        li.appendChild(actions);

        container.appendChild(li);
    });
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    const timeline = loadTimeline();
    container.innerHTML = '';

    if (timeline.length === 0) {
        const p = document.createElement('p');
        p.className = 'note';
        p.textContent = t('timeline_note_empty');
        container.appendChild(p);
        return;
    }

    timeline.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';

        const h3 = document.createElement('h3');
        h3.textContent = item.title;

        const meta = document.createElement('div');
        meta.className = 'timeline-meta';

        const date = new Date(item.doneAt);
        const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
        const dateStr = date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        const timeStr = date.toLocaleTimeString(locale, {
            hour: '2-digit',
            minute: '2-digit'
        });

        let durationText;
        if (item.duration === '1') durationText = t('goals_duration_text_1');
        else if (item.duration === '5') durationText = t('goals_duration_text_5');
        else durationText = t('goals_duration_text_10');

        meta.textContent = `${dateStr}${t('timeline_date_separator')}${timeStr} (${durationText})`;

        div.appendChild(h3);
        div.appendChild(meta);

        container.appendChild(div);
    });
}

// تشغيل عند تحميل الصفحة
initLanguage();
document.addEventListener('DOMContentLoaded', () => {
    renderGoals();
    renderTimeline();
});
