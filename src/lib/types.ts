export interface FrontMatter {
  title: string;
  date: string;
  [key: string]: any;
}

export interface Post {
  slug: string;
  frontMatter: FrontMatter;
}
