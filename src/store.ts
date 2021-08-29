import { createStore } from 'vuex'
import axios from 'axios'

interface UserProps {
  id: number;
  username: string;
  isLogin?: boolean;
}

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

export interface Article {
  url: string;
  id: number;
  author: Author;
  category: Category | null;
  tags: string[];
  avatar: Avatar | null;
  title: string;
  created: string;
  updated: string;
}

export interface ArticleListProps {
  count: number;
  next: string;
  previous: string | null;
  results: Article[];
}

export interface ArticleDetailProps {
  url: string;
  id: number;
  author: Author;
  category: Category | null;
  tags: string[];
  avatar: Avatar | null;
  body_html: string;
  toc_html: string;
  title: string;
  body: string;
  created: string;
  updated: string;
}

export interface GlobalDataProps {
  articleList: ArticleListProps;
  article: ArticleDetailProps;
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    articleList: {} as ArticleListProps,
    article: {} as ArticleDetailProps,
    user: {
      id: 1,
      username: 'root',
      isLogin: false
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true }
    },
    fetchArticleList(state, rawData) {
      state.articleList = rawData
    },
    fetchArticleDetail(state, rawData) {
      state.article = rawData
    }
  },
  actions: {
    async fetchArticleList({ commit }, page?: string) {
      const { data } = page ? await axios.get(`/api/article/?page=${page}`)
        : await axios.get('/api/article/')
      commit('fetchArticleList', data)
    },
    async fetchArticleDetail({ commit }, id) {
      const { data } = await axios.get(`/api/article/${id}`)
      commit('fetchArticleDetail', data)
    }
  }
})

export default store