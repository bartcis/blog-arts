import {compile} from 'path-to-regexp';
import {GET_ARTICLE_PATH} from './articles-routes';

export const useGetSingleArticle = ({ articleId, abortController = new AbortController()}) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/'
  const path = baseUrl + compile(GET_ARTICLE_PATH)({articleId});
  console.log(path);

  const { signal, abort } = abortController || {};
  const articleRequest = fetch(path, {
    signal: signal,
    method: 'GET',
  });

  return [articleRequest, abort?.bind(abortController)];
};
