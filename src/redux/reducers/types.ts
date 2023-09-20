export interface NewsCardType {
    title: string;
    link: string;
    keywords: Array<string>;
    creator: Array<string>;
    video_url: null | string;
    description: string;
    content: string;
    pubDate: string;
    fuul_description: string;
    image_url: null | string;
    sourse_id: string;
    country: Array<string>;
    category: Array<string>;
    language: string;
};

export type InitialStateType = {
    newsData: Array<NewsCardType>;
};