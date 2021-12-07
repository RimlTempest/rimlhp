import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'riml',
    apiKey: String(process.env.NEXT_PUBLIC_MICROCMS_API_KEY),
});
