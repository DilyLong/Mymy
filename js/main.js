// 语言数据
const translations = {
    zh: {
        'nav.brand': '神经表观修饰课题组',
        'nav.home': '首页',
        'nav.research': '研究方向',
        'nav.members': '团队成员',
        'nav.publications': '发表论文',
        'nav.news': '新闻动态',
        'nav.gallery': '实验室',
        'nav.recruitment': '招生信息',
        'nav.contact': '联系方式',
        'home.title': '神经表观修饰课题组',
        'home.subtitle': '探索神经系统的表观遗传调控机制',
        'home.description': '我们致力于研究神经系统中表观遗传修饰的分子机制及其在神经发育、可塑性和疾病中的作用。通过多学科交叉研究，我们旨在揭示表观遗传调控在神经功能中的关键作用，为神经系统疾病的诊断和治疗提供新的理论基础和潜在靶点。',
        'home.learnMore': '了解更多',
        'research.title': '研究方向',
        'research.card1.title': 'DNA甲基化与神经发育',
        'research.card1.desc': '研究DNA甲基化修饰在神经干细胞分化和神经元成熟过程中的动态变化及其功能机制。',
        'research.card2.title': '组蛋白修饰与神经可塑性',
        'research.card2.desc': '探索组蛋白乙酰化、甲基化等修饰在突触可塑性和学习记忆中的调控作用。',
        'research.card3.title': '非编码RNA调控网络',
        'research.card3.desc': '研究miRNA、lncRNA等非编码RNA在神经系统中与表观修饰的相互作用网络。',
        'research.card4.title': '神经疾病表观遗传学',
        'research.card4.desc': '探索表观遗传异常在阿尔茨海默病、帕金森病等神经退行性疾病中的致病机制。',
        'members.title': '团队成员',
        'members.supervisor': '导师',
        'members.phd': '博士生',
        'members.master': '硕士生',
        'members.professor.title': '教授、博士生导师',
        'members.professor.bio': '主要从事神经表观遗传学研究，在DNA甲基化和组蛋白修饰领域有丰富的研究经验。',
        'members.phdStudent': '博士研究生',
        'members.phd1.bio': '研究方向：DNA甲基化在神经发育中的作用机制',
        'members.phd2.bio': '研究方向：组蛋白修饰与神经可塑性',
        'members.phd3.bio': '研究方向：非编码RNA在神经系统中的功能',
        'members.masterStudent': '硕士研究生',
        'members.master1.bio': '研究方向：神经疾病的表观遗传机制',
        'members.master2.bio': '研究方向：表观修饰酶的功能研究',
        'members.master3.bio': '研究方向：表观遗传与神经再生',
        'publications.title': '发表论文',
        'publications.viewDetails': '查看详情',
        'publications.pub1.title': 'DNA甲基化调控神经干细胞分化的分子机制',
        'publications.pub2.title': '组蛋白乙酰化在突触可塑性中的作用',
        'publications.pub3.title': '非编码RNA介导的表观遗传调控网络',
        'publications.pub4.title': '表观遗传异常在阿尔茨海默病中的致病机制',
        'news.title': '新闻动态',
        'news.readMore': '阅读更多',
        'news.news1.title': '课题组最新研究成果在Nature Neuroscience发表',
        'news.news1.content': '我们关于DNA甲基化调控神经干细胞分化的研究取得了重要进展，相关成果已发表在Nature Neuroscience期刊上。',
        'news.news2.title': '欢迎新同学加入课题组',
        'news.news2.content': '本学期有三位新同学加入我们的研究团队，欢迎他们的到来，期待共同推进神经表观遗传学研究。',
        'news.news3.title': '课题组参加国际神经科学大会',
        'news.news3.content': '课题组多名成员参加了在旧金山举行的国际神经科学大会，并进行了墙报展示和口头报告。',
        'gallery.title': '实验室',
        'gallery.item1': '实验室环境',
        'gallery.item2': '实验设备',
        'gallery.item3': '组会讨论',
        'gallery.item4': '学术交流',
        'gallery.item5': '团队活动',
        'gallery.item6': '实验操作',
        'recruitment.title': '招生信息',
        'recruitment.phd.title': '博士研究生招生',
        'recruitment.master.title': '硕士研究生招生',
        'recruitment.requirements': '招生要求：',
        'recruitment.directions': '研究方向：',
        'recruitment.training': '培养方式：',
        'recruitment.phd.req1': '具有生物学、医学或相关专业的硕士学位',
        'recruitment.phd.req2': '对神经科学和表观遗传学研究有浓厚兴趣',
        'recruitment.phd.req3': '具备良好的英语读写能力',
        'recruitment.phd.req4': '有相关研究经验者优先',
        'recruitment.phd.dir1': '神经表观遗传学机制研究',
        'recruitment.phd.dir2': '神经发育与可塑性',
        'recruitment.phd.dir3': '神经疾病表观遗传学',
        'recruitment.master.req1': '具有生物学、医学或相关专业的本科学位',
        'recruitment.master.req2': '对科学研究有热情，具备良好的学习能力',
        'recruitment.master.req3': '英语水平良好',
        'recruitment.master.req4': '有实验室经验者优先',
        'recruitment.master.train1': '提供系统的科研训练和指导',
        'recruitment.master.train2': '支持参加国内外学术会议',
        'recruitment.master.train3': '提供良好的科研环境和设备支持',
        'recruitment.contactText': '如有意向，欢迎通过以下方式联系我们：',
        'recruitment.contactBtn': '查看联系方式',
        'contact.title': '联系方式',
        'contact.address': '地址',
        'contact.postcode': '邮编',
        'contact.email': '邮箱',
        'contact.phone': '电话',
        'contact.social': '社交媒体',
        'contact.sendMessage': '发送消息',
        'contact.form.name': '姓名',
        'contact.form.email': '邮箱',
        'contact.form.subject': '主题',
        'contact.form.message': '消息',
        'contact.form.submit': '发送',
        'footer.brand': '神经表观修饰课题组',
        'footer.rights': '保留所有权利'
    },
    en: {
        'nav.brand': 'Neuroepigenetics Research Group',
        'nav.home': 'Home',
        'nav.research': 'Research',
        'nav.members': 'Members',
        'nav.publications': 'Publications',
        'nav.news': 'News',
        'nav.gallery': 'Lab',
        'nav.recruitment': 'Recruitment',
        'nav.contact': 'Contact',
        'home.title': 'Neuroepigenetics Research Group',
        'home.subtitle': 'Exploring Epigenetic Regulation Mechanisms in the Nervous System',
        'home.description': 'We are dedicated to studying the molecular mechanisms of epigenetic modifications in the nervous system and their roles in neural development, plasticity, and disease. Through interdisciplinary research, we aim to reveal the key role of epigenetic regulation in neural function, providing new theoretical foundations and potential targets for the diagnosis and treatment of nervous system diseases.',
        'home.learnMore': 'Learn More',
        'research.title': 'Research Directions',
        'research.card1.title': 'DNA Methylation and Neural Development',
        'research.card1.desc': 'Study the dynamic changes and functional mechanisms of DNA methylation modifications during neural stem cell differentiation and neuronal maturation.',
        'research.card2.title': 'Histone Modifications and Neural Plasticity',
        'research.card2.desc': 'Explore the regulatory roles of histone acetylation, methylation and other modifications in synaptic plasticity and learning and memory.',
        'research.card3.title': 'Non-coding RNA Regulatory Networks',
        'research.card3.desc': 'Research the interaction networks between non-coding RNAs (miRNA, lncRNA) and epigenetic modifications in the nervous system.',
        'research.card4.title': 'Neuroepigenetics of Neurological Diseases',
        'research.card4.desc': 'Explore the pathogenic mechanisms of epigenetic abnormalities in neurodegenerative diseases such as Alzheimer\'s and Parkinson\'s disease.',
        'members.title': 'Team Members',
        'members.supervisor': 'Supervisor',
        'members.phd': 'PhD Students',
        'members.master': 'Master Students',
        'members.professor.title': 'Professor, PhD Supervisor',
        'members.professor.bio': 'Mainly engaged in neuroepigenetics research, with rich research experience in DNA methylation and histone modification fields.',
        'members.phdStudent': 'PhD Student',
        'members.phd1.bio': 'Research: Mechanisms of DNA methylation in neural development',
        'members.phd2.bio': 'Research: Histone modifications and neural plasticity',
        'members.phd3.bio': 'Research: Functions of non-coding RNAs in the nervous system',
        'members.masterStudent': 'Master Student',
        'members.master1.bio': 'Research: Epigenetic mechanisms of neurological diseases',
        'members.master2.bio': 'Research: Functional studies of epigenetic modification enzymes',
        'members.master3.bio': 'Research: Epigenetics and neural regeneration',
        'publications.title': 'Publications',
        'publications.viewDetails': 'View Details',
        'publications.pub1.title': 'Molecular Mechanisms of DNA Methylation in Regulating Neural Stem Cell Differentiation',
        'publications.pub2.title': 'Role of Histone Acetylation in Synaptic Plasticity',
        'publications.pub3.title': 'Non-coding RNA-mediated Epigenetic Regulatory Networks',
        'publications.pub4.title': 'Pathogenic Mechanisms of Epigenetic Abnormalities in Alzheimer\'s Disease',
        'news.title': 'News',
        'news.readMore': 'Read More',
        'news.news1.title': 'Latest Research Published in Nature Neuroscience',
        'news.news1.content': 'Our research on DNA methylation regulation of neural stem cell differentiation has made important progress, and the results have been published in Nature Neuroscience.',
        'news.news2.title': 'Welcome New Members to the Group',
        'news.news2.content': 'Three new members joined our research team this semester. We welcome them and look forward to advancing neuroepigenetics research together.',
        'news.news3.title': 'Group Participates in International Neuroscience Conference',
        'news.news3.content': 'Several members of our group participated in the International Neuroscience Conference in San Francisco, presenting posters and oral presentations.',
        'gallery.title': 'Laboratory',
        'gallery.item1': 'Lab Environment',
        'gallery.item2': 'Equipment',
        'gallery.item3': 'Group Meeting',
        'gallery.item4': 'Academic Exchange',
        'gallery.item5': 'Team Activities',
        'gallery.item6': 'Experiments',
        'recruitment.title': 'Recruitment',
        'recruitment.phd.title': 'PhD Student Recruitment',
        'recruitment.master.title': 'Master Student Recruitment',
        'recruitment.requirements': 'Requirements:',
        'recruitment.directions': 'Research Directions:',
        'recruitment.training': 'Training:',
        'recruitment.phd.req1': 'Master\'s degree in biology, medicine or related fields',
        'recruitment.phd.req2': 'Strong interest in neuroscience and epigenetics research',
        'recruitment.phd.req3': 'Good English reading and writing skills',
        'recruitment.phd.req4': 'Research experience preferred',
        'recruitment.phd.dir1': 'Mechanisms of neuroepigenetics',
        'recruitment.phd.dir2': 'Neural development and plasticity',
        'recruitment.phd.dir3': 'Neuroepigenetics of neurological diseases',
        'recruitment.master.req1': 'Bachelor\'s degree in biology, medicine or related fields',
        'recruitment.master.req2': 'Passion for scientific research and good learning ability',
        'recruitment.master.req3': 'Good English proficiency',
        'recruitment.master.req4': 'Laboratory experience preferred',
        'recruitment.master.train1': 'Systematic research training and guidance',
        'recruitment.master.train2': 'Support for attending domestic and international conferences',
        'recruitment.master.train3': 'Excellent research environment and equipment support',
        'recruitment.contactText': 'If interested, please contact us through the following:',
        'recruitment.contactBtn': 'View Contact Information',
        'contact.title': 'Contact',
        'contact.address': 'Address',
        'contact.postcode': 'Postcode',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.social': 'Social Media',
        'contact.sendMessage': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send',
        'footer.brand': 'Neuroepigenetics Research Group',
        'footer.rights': 'All Rights Reserved'
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'zh';
document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';

// 语言切换功能
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 更新语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    }
}

// 深色模式功能
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) {
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggle) {
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
        }
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeToggle = document.getElementById('themeToggle');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (newTheme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// 初始化主题和语言
initTheme();
switchLanguage(currentLang);

// 主题切换按钮事件
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// 语言切换按钮事件
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        switchLanguage(newLang);
    });
}

// 导航栏功能
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// 移动端菜单切换
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 点击导航链接后关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = isDark 
            ? '0 2px 20px rgba(0, 0, 0, 0.5)' 
            : '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = isDark 
            ? '0 2px 10px rgba(0, 0, 0, 0.3)' 
            : '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 导航链接高亮
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 表单验证和提交
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // 简单的表单验证
        const errorMessages = {
            zh: {
                empty: '请填写所有必填字段',
                invalidEmail: '请输入有效的邮箱地址',
                success: '消息已发送！我们会尽快与您联系。'
            },
            en: {
                empty: 'Please fill in all required fields',
                invalidEmail: 'Please enter a valid email address',
                success: 'Message sent! We will contact you soon.'
            }
        };
        
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert(errorMessages[currentLang].empty);
            return;
        }
        
        // 邮箱格式验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert(errorMessages[currentLang].invalidEmail);
            return;
        }
        
        // 这里可以添加实际的表单提交逻辑
        // 例如：发送到服务器或使用邮件服务
        console.log('表单数据:', formData);
        
        // 显示成功消息
        alert(errorMessages[currentLang].success);
        
        // 重置表单
        contactForm.reset();
    });
}

// 页面加载时的动画
window.addEventListener('load', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    const cards = document.querySelectorAll('.research-card, .member-card, .publication-item, .news-card, .gallery-item, .recruitment-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 图片懒加载（如果将来添加真实图片）
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// 返回顶部按钮（可选功能）
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 创建返回顶部按钮
createBackToTopButton();

