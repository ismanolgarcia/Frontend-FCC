export const getQuote = async () => {
  try {
    const apiUrl = 'https://dummyjson.com/quotes/random';
    const resp = await fetch(apiUrl);

    const data = await resp.json();
    const { id, author, quote } = data;

    return {
      id,
      author,
      quote,
    };
  } catch (error) {
    console.log(error);
  }
};
