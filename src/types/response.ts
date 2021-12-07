import { MicroCMSListContent } from 'microcms-js-sdk';
import { AuthorType } from '@/types/author';
import { BlogType } from '@/types/blog';

type Base = {
    totalCount: number;
    offset: number;
    limit: number;
};

export type ContentBase = MicroCMSListContent;

export type Image = {
    url: string;
    height: number;
    width: number;
};

export type BlogResponse = Base & {
    content: {
        blogs: BlogType[];
    };
};

export type AuthorResponse = Base & {
    content: {
        authors: AuthorType[];
    };
};
