import { AuthorType } from '@/types/author';
import { CategoryType } from '@/types/categories';
import { BaseResponse, Image } from '@/types/response';

export type BlogType = BaseResponse & {
    title: string;
    category: CategoryType[] | [];
    toc_visible: boolean;
    body: string;
    description: string;
    og_image: Image;
    writer: AuthorType;
    related_blogs: BlogType[] | [];
    visible: boolean;
};
