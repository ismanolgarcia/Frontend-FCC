import { useEffect, useState } from 'react';
import { getQuote } from '../api/getQuote';

export const useFetchQuoute = () => {
  const [quoteData, setQuoteData] = useState({
    id: '',
    author: '',
    quote: '',
  });

  const getFetchQuote = async () => {
    const quote = await getQuote();
    setQuoteData(quote);
  };

  useEffect(() => {
    getFetchQuote();
  }, []);

  const { id, author, quote } = quoteData;

  return {
    id,
    author,
    quote,
    getFetchQuote,
  };
};
