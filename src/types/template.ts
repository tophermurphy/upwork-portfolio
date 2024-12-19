import type { Page } from "astro";

export interface ImageType {
    filename: string;
    alt?: string;
    widths?: number[];
    mobileWidth?: string;
    defaultWidth?: string;
}

export interface PageData {
    title: string;
    id: string;
    slug: string;
    type: string;
    subtitle: string;
    description: string;
    thumbnail: ImageType,
    roles?: string[];
    tools?: string[];
    platforms?: string[];
    headImages: ImageType[]
}

export interface PageContent {
        header?: string;
        body?: string[];
        images?: ImageType[];
        [key: string]: any;
}

export interface PageType extends PageData {
    content: {
        [key: string]: PageContent;
    }
}