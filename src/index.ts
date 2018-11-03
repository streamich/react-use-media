import useMediaRaw from 'react-use/lib/useMedia';
import json2mq from 'json2mq';

export const useMedia = (query: string | object) => {
  return useMediaRaw(typeof query !== 'string' ? json2mq(query) : query);
};
