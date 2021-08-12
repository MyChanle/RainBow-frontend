interface Response {}

interface Author {
  id: number;
  username: string;
  last_name: string;
  first_name: string;
  email: string;
  last_login: string;
  date_joined: string;
}

interface Category {
  id: number;
  url: string;
  title: string;
  created: string;
}

interface Avatar {
  id: number;
  content: string;
  url: string;
}

export interface IArticleListResponse extends Response {
  url: string;
  id: number;
  author: Author;
  title: string;
  created: string;
  updated: string;
  category?: Category;
  tags?: string[];
  avatar?: Avatar;
}

export interface IArticleDetailResponse extends Response {
  url: string;
  id: number;
  author: Author;
  body_html: string;
  toc_html: string;
  title: string;
  body: string;
  created: string;
  updated: string;
  category?: Category;
  tags?: string[];
  avatar?: Avatar;
}
