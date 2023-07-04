import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_GIPHY_API;

export const useFetch = ({ keyword }: { keyword: string }) => {
  const [gifUrl, setGifUrl] = useState<string>('');
  const fetchGifs = async () => {
    try {
      const responce = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      );
      const { data } = await responce.json();
      console.log(data);

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (e) {
      setGifUrl('https://media.giphy.com/media/9xjTE4YYL0nm1fGdCl/giphy.gif');
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};
