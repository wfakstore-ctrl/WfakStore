const productsData = [
    // --------------------------------------------------
    // 1. ألعاب قيمنق (Gaming)
    // --------------------------------------------------
    { id: 1, name: "كرة القدم كأس العالم قطر", description: "كرة قدم رسمية بتصميم كأس العالم قطر.", price: 19, category: "gaming" },
    { id: 2, name: "ماوس Meetion - M361", description: "ماوس ألعاب سلكي بتصميم مريح.", price: 11.25, category: "gaming" }, // 3$ * 3.75 (افتراض سعر الصرف)
    { id: 3, name: "وحدة تحكم الجيل الجديد 'الصاروخ'", description: "وحدة تحكم لاسلكية بتصميم مريح واستجابة فائقة.", price: 299, category: "gaming" },
    { id: 4, name: "سماعة رأس 'الصدى' الاحترافية", description: "صوت محيطي 7.1 نقي، ميكروفون بخاصية إلغاء الضوضاء.", price: 450, category: "gaming" },
    { id: 5, name: "ماوس 'البرق' للألعاب", description: "ماوس خفيف الوزن بدقة 16000 DPI.", price: 180, category: "gaming" },
    { id: 6, name: "لوحة مفاتيح ميكانيكية 'المحارب'", description: "مفاتيح ميكانيكية سريعة الاستجابة، مقاومة للماء والغبار.", price: 550, category: "gaming" },
    { id: 7, name: "شاشة 'الرؤية' 27 بوصة", description: "شاشة منحنية بمعدل تحديث 144 هرتز وزمن استجابة 1 مللي ثانية.", price: 1899, category: "gaming" },
    { id: 8, name: "كرسي ألعاب 'العرش' الفاخر", description: "كرسي مريح بمسند ظهر قابل للإمالة حتى 180 درجة.", price: 1200, category: "gaming" },
    { id: 9, name: "حزمة ألعاب 'البقاء'", description: "مجموعة من 5 ألعاب فيديو شهيرة من نوع البقاء والمغامرات.", price: 350, category: "gaming" },
    { id: 10, name: "قرص صلب خارجي 'التخزين السريع'", description: "سعة 2 تيرابايت، سرعة نقل بيانات فائقة.", price: 499, category: "gaming" },

    // --------------------------------------------------
    // 2. عطور (Perfumes)
    // --------------------------------------------------
    { id: 11, name: "عطر فوران", description: "عطر فاخر بتركيبة مميزة.", price: 144, category: "perfumes" },
    { id: 12, name: "عطر قائد الفرسان", description: "عطر رجالي قوي وجذاب.", price: 29.9, category: "perfumes" },
    { id: 13, name: "عطور مشكلة علب صغيرة", description: "مجموعة عطور متنوعة في علب صغيرة.", price: 336.3, category: "perfumes" },
    { id: 14, name: "عطر LEGEND للجند", description: "عطر أسطوري بتركيبة فريدة.", price: 433, category: "perfumes" },
    { id: 15, name: "عطر موصوف", description: "عطر شرقي فاخر.", price: 545, category: "perfumes" },
    { id: 16, name: "عطر عاشق العود", description: "عطر عود مركز يدوم طويلاً.", price: 650, category: "perfumes" },
    { id: 17, name: "عطر خمرة", description: "عطر دافئ ومغري.", price: 750, category: "perfumes" },
    { id: 18, name: "ماركولي", description: "عطر ماركولي الفاخر.", price: 850, category: "perfumes" },
    { id: 19, name: "بيور ديزاير", description: "عطر بيور ديزاير الجذاب.", price: 950, category: "perfumes" },
    { id: 20, name: "جنسس", description: "عطر جنسس المميز.", price: 48, category: "perfumes" },
    { id: 21, name: "اورا", description: "عطر اورا المنعش.", price: 47, category: "perfumes" },
    { id: 22, name: "115 امبير", description: "عطر 115 امبير القوي.", price: 44, category: "perfumes" },
    { id: 23, name: "فلوريدا", description: "عطر فلوريدا الزهري.", price: 33, category: "perfumes" },
    { id: 24, name: "سوفاج", description: "عطر سوفاج الرجالي الشهير.", price: 45, category: "perfumes" },
    { id: 25, name: "ادريس", description: "عطر ادريس الفاخر.", price: 47, category: "perfumes" },
    { id: 26, name: "نسيم", description: "عطر نسيم الخفيف.", price: 48, category: "perfumes" },
    { id: 27, name: "جمان", description: "عطر جمان المميز.", price: 47, category: "perfumes" },
    { id: 28, name: "احساس", description: "عطر احساس الرقيق.", price: 47, category: "perfumes" },
    { id: 29, name: "مسيرة", description: "عطر مسيرة الجذاب.", price: 47, category: "perfumes" },
    { id: 30, name: "شالين نافي علبه - دبي", description: "عطر شالين نافي من دبي.", price: 45, category: "perfumes" },
    { id: 31, name: "عود مود", description: "عطر عود مود الشرقي.", price: 47, category: "perfumes" },
    { id: 32, name: "ريما مركز", description: "عطر ريما المركز.", price: 47, category: "perfumes" },
    { id: 33, name: "وحيلك", description: "عطر وحيلك الفريد.", price: 17.6, category: "perfumes" },
    { id: 80, name: "بخور نعمة العروس", description: "بخور فاخر برائحة مميزة.", price: 6, category: "perfumes" },
    { id: 81, name: "بخور جالين", description: "بخور جالين العطري.", price: 6, category: "perfumes" },
    { id: 82, name: "بخور وحائق العود", description: "بخور وحائق العود الفاخر.", price: 8, category: "perfumes" },
    { id: 83, name: "بخور 'الضيافة الملكية'", description: "بخور طبيعي عالي الجودة.", price: 120, category: "perfumes" },

    // --------------------------------------------------
    // 3. أجهزة إلكترونية (Electronics)
    // --------------------------------------------------
    { id: 34, name: "مسبح اطفال intex (الكبير)", description: "مسبح أطفال كبير من Intex.", price: 40, category: "electronics" },
    { id: 35, name: "مسبح اطفال intex (الوسط)", description: "مسبح أطفال متوسط من Intex.", price: 27, category: "electronics" },
    { id: 36, name: "مسبح اطفال intex (الصغير)", description: "مسبح أطفال صغير من Intex.", price: 22, category: "electronics" },
    { id: 37, name: "آلة عد الفلوس", description: "آلة عد نقود إلكترونية.", price: 425, category: "electronics" },
    { id: 38, name: "مكيف صحراوي متنقل", description: "مكيف صحراوي صغير ومحمول.", price: 32, category: "electronics" },
    { id: 39, name: "مكيف مع فواحة (كبير)", description: "مكيف هواء مع خاصية الفواحة، حجم كبير.", price: 33, category: "electronics" },
    { id: 40, name: "مكيف مع فواحة (صغير)", description: "مكيف هواء مع خاصية الفواحة، حجم صغير.", price: 28, category: "electronics" },
    { id: 41, name: "آلة حاسبة CASIO", description: "آلة حاسبة علمية من CASIO.", price: 75, category: "electronics" }, // 20$ * 3.75
    { id: 42, name: "طابعة Eco Tank L3250", description: "طابعة إبسون Eco Tank L3250.", price: 446.25, category: "electronics" }, // 119$ * 3.75
    { id: 43, name: "LAMINATOR", description: "آلة تغليف حراري (Laminator).", price: 225, category: "electronics" }, // 60$ * 3.75
    { id: 44, name: "ساعة ذكية 'النبض'", description: "تتبع اللياقة البدنية، مراقبة النوم، وإشعارات الهاتف.", price: 650, category: "electronics" },
    { id: 45, name: "شاحن متنقل 'القوة' 20000mAh", description: "شاحن متنقل بسعة كبيرة، يدعم الشحن السريع.", price: 199, category: "electronics" },
    { id: 46, name: "كاميرا مراقبة منزلية 'اليقظة'", description: "كاميرا بدقة 1080p، رؤية ليلية، وتخزين سحابي آمن.", price: 320, category: "electronics" },
    { id: 47, name: "مكبر صوت بلوتوث 'الرعد'", description: "صوت قوي ونقي، مقاوم للماء، وبطارية تدوم حتى 10 ساعات.", price: 450, category: "electronics" },
    { id: 48, name: "جهاز عرض (بروجكتور) محمول", description: "جهاز عرض صغير الحجم، مثالي للعروض التقديمية.", price: 999, category: "electronics" },
    { id: 49, name: "قلم ذكي للكتابة الرقمية", description: "قلم عالي الدقة متوافق مع الأجهزة اللوحية.", price: 150, category: "electronics" },
    { id: 50, name: "منظم كابلات مغناطيسي", description: "مجموعة من 5 قطع لتنظيم كابلات الشاحن.", price: 45, category: "electronics" },
    { id: 51, name: "محول USB-C متعدد المنافذ", description: "محول يضيف منافذ HDMI، USB 3.0، وقارئ بطاقات.", price: 180, category: "electronics" },
    { id: 52, name: "سماعات أذن لاسلكية 'الحرية'", description: "سماعات صغيرة الحجم، صوت عالي الجودة.", price: 399, category: "electronics" },
    { id: 53, name: "مصباح مكتبي ذكي", description: "مصباح LED بـ 3 مستويات إضاءة.", price: 120, category: "electronics" },

    // --------------------------------------------------
    // 4. منتجات عناية شخصية (Personal Care)
    // --------------------------------------------------
    { id: 54, name: "شامبو شعر امبريزا", description: "شامبو شعر بتركيبة منعشة.", price: 17.6, category: "personal_care" },
    { id: 55, name: "كريم شعر فاتيكا 140 مل", description: "كريم شعر مغذي من فاتيكا، حجم 140 مل.", price: 7, category: "personal_care" },
    { id: 56, name: "مزيل العرق FA", description: "مزيل عرق فعال من FA.", price: 6, category: "personal_care" },
    { id: 57, name: "شامبوهات هاي كلاس 950 مل", description: "شامبو هاي كلاس حجم كبير 950 مل.", price: 5.50, category: "personal_care" },
    { id: 58, name: "شامبوهات هاي كلاس 400 مل", description: "شامبو هاي كلاس حجم 400 مل.", price: 5.50, category: "personal_care" },
    { id: 59, name: "شامبو شعر فاتيكا 900 مل", description: "شامبو شعر فاتيكا حجم 900 مل.", price: 44, category: "personal_care" },
    { id: 60, name: "كريم تفتيح البشرة Efem", description: "كريم لتفتيح البشرة من Efem.", price: 44, category: "personal_care" },
    { id: 61, name: "شامبو شعر فاتيكا 400 مل", description: "شامبو شعر فاتيكا حجم 400 مل.", price: 6, category: "personal_care" },
    { id: 62, name: "Smooth Miral", description: "منتج Smooth Miral للعناية.", price: 6, category: "personal_care" },
    { id: 63, name: "كلوركس صغير", description: "عبوة كلوركس صغيرة.", price: 6, category: "personal_care" },
    { id: 64, name: "كريم جسم Papaya", description: "كريم جسم بخلاصة البابايا.", price: 6, category: "personal_care" },
    { id: 65, name: "مناديل معقمة Dettol", description: "مناديل ديتول معقمة.", price: 7, category: "personal_care" },
    { id: 66, name: "فازلين الاصلي (50 جرام - 50 جرام)", description: "عبوتان من فازلين الأصلي 50 جرام.", price: 6, category: "personal_care" },
    { id: 67, name: "شامبو شعر sunsilk (كبير)", description: "شامبو صانسيلك حجم كبير.", price: 7, category: "personal_care" },
    { id: 68, name: "شامبو شعر headshoudrn (كبير)", description: "شامبو هيد آند شولدرز حجم كبير.", price: 8, category: "personal_care" },
    { id: 69, name: "كريم الجلسرين", description: "كريم الجلسرين لترطيب البشرة.", price: 8, category: "personal_care" },
    { id: 70, name: "فرشاة أسنان كهربائية 'النظافة'", description: "فرشاة بتقنية الموجات فوق الصوتية.", price: 250, category: "personal_care" },
    { id: 71, name: "مجموعة العناية بالبشرة 'الإشراق'", description: "تتضمن غسول، تونر، وكريم مرطب.", price: 300, category: "personal_care" },
    { id: 72, name: "ماكينة حلاقة رجالية متعددة الاستخدامات", description: "ماكينة 5 في 1 للحلاقة والتشذيب.", price: 420, category: "personal_care" },
    { id: 73, name: "قناع الوجه بالطين البركاني", description: "قناع ينظف المسام بعمق، يزيل الشوائب.", price: 85, category: "personal_care" },
    { id: 74, name: "زيت الأرغان النقي للشعر", description: "زيت طبيعي 100% لترطيب وتغذية الشعر.", price: 110, category: "personal_care" },
    { id: 75, name: "جهاز تدليك الرقبة والكتفين", description: "جهاز تدليك حراري يعمل على تخفيف التوتر.", price: 550, category: "personal_care" },
    { id: 76, name: "واقي شمسي بعامل حماية 50+", description: "تركيبة خفيفة وغير دهنية، توفر حماية عالية.", price: 95, category: "personal_care" },
    { id: 77, name: "مجموعة مناشف قطنية فاخرة", description: "3 مناشف ناعمة وعالية الامتصاص.", price: 160, category: "personal_care" },
    { id: 78, name: "مقشر الجسم بالسكر والقهوة", description: "مقشر طبيعي يزيل الجلد الميت وينشط الدورة الدموية.", price: 70, category: "personal_care" },
    { id: 79, name: "ميزان رقمي ذكي للوزن", description: "ميزان يربط بالهاتف لتتبع الوزن.", price: 130, category: "personal_care" },
];