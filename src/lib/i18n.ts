// Header items
type Header = HeaderSubProfileItem &
    HeaderHistoryItem &
    HeaderWorksItem &
    HeaderBusinessItem & {
        About: string;
        Works: string;
        Blogs: string;
        Contact: string;
    };

type HeaderSubProfileItem = {
    ProfileLabel: string;
    ProfileSubLabel: string;
};

type HeaderHistoryItem = {
    HistoryLabel: string;
    HistorySubLabel: string;
};

type HeaderWorksItem = {
    WorksLabel: string;
    WorksSubLabel: string;
};

type HeaderBusinessItem = {
    BusinessLabel: string;
    BusinessSubLabel: string;
};

type base = Header & {};

export type i18n = base & {};

/**
 * 日本語一覧
 */
export const ja: i18n = {
    // Header Main
    About: '私について',
    Works: '作品',
    Blogs: 'ブログ',
    Contact: 'お問い合わせ',
    // Header Sub
    ProfileLabel: 'プロフィール',
    ProfileSubLabel: '自己紹介について',
    HistoryLabel: '経歴',
    HistorySubLabel: '経歴について',
    WorksLabel: '制作物',
    WorksSubLabel: '作品一覧',
    BusinessLabel: 'お仕事',
    BusinessSubLabel: 'お仕事について',
};

/**
 * 英語一覧
 */
export const en: i18n = {
    // Header Main
    About: 'About',
    Works: 'Works',
    Blogs: 'Blogs',
    Contact: 'Contact',
    // Header Sub
    ProfileLabel: 'Profile',
    ProfileSubLabel: 'Self Introduction',
    HistoryLabel: 'History',
    HistorySubLabel: 'Career',
    WorksLabel: 'Works',
    WorksSubLabel: 'Work',
    BusinessLabel: 'Business',
    BusinessSubLabel: 'Business',
};
