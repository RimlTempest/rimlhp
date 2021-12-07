import { useRouter } from 'next/router';
import { ja, en } from '@/lib/i18n';

export const useLocale = () => {
    const { locale } = useRouter();

    const t = locale === 'en' ? en : ja;

    return { locale, t };
};
