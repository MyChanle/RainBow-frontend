interface Request {}

export interface IArticleDetailRequest extends Request {
  url: string;
  id: string | string[];
}

export interface IArticleListRequest extends Request {
  url: string;
}
