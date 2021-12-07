import { BaseResponse, Image } from '@/types/response';

export type AuthorType = BaseResponse & {
    name: string;
    description: string;
    image: Image;
};
