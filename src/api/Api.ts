import axios from "axios";

import { IArticleListRequest, IArticleDetailRequest } from "./Request"
import { IArticleListResponse, IArticleDetailResponse } from "./Response"

export const getArticleDetail = async (
    request: IArticleDetailRequest): Promise<IArticleDetailResponse> => {
  return await axios.get(request.url + request.id)
  .then(response => {
      console.log("ArticleDetail:" + response.data);
      return response.data;
    }
  )
  .catch((e) => {
    console.log(`Error occrued on getArticleDetail when id=${request.id}`)
    console.log("Error Message" + e)
  });
}

export const getArticleList = async (
    request: IArticleListRequest): Promise<IArticleListResponse> => {
  return await axios.get(request.url)
  .then(response => {
      console.log("getArticleList: " + response.data);
      return response.data;
    }
  )
  .catch(e => {
    console.log("Error occrued on getArticleList");
    console.log("Error Message" + e)
  });
}
