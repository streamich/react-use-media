import useMediaRaw from 'react-use/lib/useMedia';
import json2mq = require('json2mq');

export const createUseMedia = (query: string | object, targetWindow?: Window) => {
  if(typeof query !== 'string')
    query = json2mq(query);

  const useMedia = () => (useMediaRaw as any)(query as string, targetWindow);

  return useMedia;
};

export const useMedia = (query: string | object, targetWindow?: Window) => {
  return (useMediaRaw as any)(typeof query !== 'string' ? json2mq(query) : query, targetWindow);
};
