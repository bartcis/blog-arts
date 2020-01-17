import pathToRegexp from 'path-to-regexp';
import { API_BASE_URL } from '../../configs';
import { GET_SINGLE_DOG_PATH } from './dogs-routes';
import { Request } from '../../utils/request';

export const getSingleDog = ({
  dogNameParam,
  abortController = new AbortController(),
}) => {
  const path = `${API_BASE_URL}${pathToRegexp.compile(GET_SINGLE_DOG_PATH)({
    dogNameParam,
  })}`;
  const { signal, abort } = abortController || {};
  const getData = new Request().get({
    path,
    config: {
      signal,
    },
  });

  return [getData, abort?.bind(abortController)];
};
