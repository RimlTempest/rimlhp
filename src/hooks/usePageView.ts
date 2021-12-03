import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { existsGaId, pageview } from '../lib/gtag';

/// Next.js製のサイトはSPAであるため、ページを遷移するときにJavaScriptでURLを書き換えます。
/// その際、Google Analyticsはアクセスした最初のページしかページビュー測定のイベントを送信しません。
/// つまり、ユーザーがサイト内を回遊したときの各ページのPVを測定できないのです。
/// この問題は、Next.jsのRouterを使えば解決できます。
/// RouterのURL書き換えが完了した時に発火するrouteChangeCompleteイベントのコールバックとしてpageview関数を設定します。

const usePageView = () => {
    const router = useRouter();

    useEffect(() => {
        if (!existsGaId) {
            return;
        }

        const handleRouteChange = (path: string) => {
            pageview(path);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};

export default usePageView;
