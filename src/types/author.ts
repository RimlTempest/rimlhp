import { ContentBase, Image } from '@/types/response';

export type AuthorType = ContentBase & {
    name: string;
    description: string;
    image: Image;
};
