import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useGetSingleArticle} from '../../api/';
import './Articles.scss';

export const Articles = () => {
  const [state, setState] = useState([]);
  const [articleId, setArticleId] = useState(2);
  const [articleRequest, abortArticleRequest] = useGetSingleArticle({articleId: articleId});
  const abortFuncs = useRef([]);

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
    const abortClickRequests = () => {
      abortFuncs.current.map(abort => abort());
    }

    apiCall('https://jsonplaceholder.typicode.com/posts/1');

    return () => {
      abortClickRequests();
      abortController.abort();
    };
  }, [setState]);

  const fetchOnClick = async () => {
    try {
      abortFuncs.current.unshift(abortArticleRequest);

      const newArticleRequest = await articleRequest;
      const newArticle = await newArticleRequest.json();

      setState([...state, newArticle]);
      setArticleId(articleId +1);
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <>
      <Link className='article_link' to="/destroy">Destroy Component</Link>
      <button onClick={fetchOnClick}>Get article</button>
      {state.map(article=> (
        <article key={article?.id} className='article'>
          <h1>{article?.title}</h1>
          <p>{article?.body}</p>
        </article> 
      ))}
    </>
  );
};
