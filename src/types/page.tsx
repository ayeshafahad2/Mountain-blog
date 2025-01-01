import { PortableTextBlock } from "sanity";

export type Author = {
  name: string,
  image: string,
  bio?: string,
  slug: {
    current: string,
  },
  _id?: number | string,
};

export type Blog = {
  _id: number,
  title: string,
  slug: string,
  summary: string,
  content: PortableTextBlock[],  
};