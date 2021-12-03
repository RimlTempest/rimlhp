// 環境変数からgoogle analyticsのIDを取得
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

// IDが取得できない場合を想定する
export const existsGaId = GA_TRACKING_ID !== '';

// PVを測定する
export const pageview = (path: string): void => {
    if (!GA_TRACKING_ID) return;
    window.gtag('config', GA_TRACKING_ID, {
        page_path: path,
    });
};

// イベントタイプ
type ContactEventType = {
    action: 'submit_form';
    category: 'contact';
};

type ClickEventType = {
    action: 'click';
    category: 'other';
};

export type GaEventType = (ContactEventType | ClickEventType) & {
    label?: Record<string, string | number | boolean>;
    value?: string;
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }: GaEventType) => {
    if (!existsGaId) {
        return;
    }

    window.gtag('event', action, {
        event_category: category,
        event_label: JSON.stringify(label),
        value,
    });
};
