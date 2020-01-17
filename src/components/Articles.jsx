import React, {useState, useEffect} from 'react';
import {useGetSingleArticle} from '../api/';
import './Articles.scss';

export const Articles = () => {
  const [state, setState] = useState([]);
  const [articleRequest, abortArticleRequest] = useGetSingleArticle({articleId: '2'});

  useEffect(() => {
    const abortController = new AbortController();
    const {signal} = abortController;

    const apiCall = async path => {
      try {
        const request = await fetch(path, {
          signal: signal,
          method: 'GET',
        });
        const response = await request.json();
        setState([response]);
      } catch (e) {
        if (!signal?.aborted) {
          console.error(e);
        }
      }
    };

    apiCall('https://jsonplaceholder.typicode.com/posts/1');

    return () => {
      abortController.abort();
    };
  }, [setState]);

  return (
    <>
      {state.map(article=> (
        <article key={article?.id} className='article'>
          <h1>{article?.title}</h1>
          <p>{article?.body}</p>
        </article> 
      ))}
    </>
  );
};
