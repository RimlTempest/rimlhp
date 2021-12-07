import { AuthorType } from '@/types/author';
import { CategoryType } from '@/types/categories';
import { ContentBase, Image } from '@/types/response';

export type BlogType = ContentBase & {
    title?: string;
    category: CategoryType[] | [];
    toc_visible?: boolean;
    body: string;
    description?: string;
    og_image?: Image;
    writer: AuthorType;
    related_blogs?: BlogType[] | [];
    visible?: boolean;
};
