import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { Photos } from 'unsplash-js/dist/methods/search/types/response';

import { searchPhotos } from './unsplash';

export const useSearchPhotos = (
  query: string,
  options?: UseInfiniteQueryOptions<Photos, unknown, Photos>
) =>
  useInfiniteQuery(
    ['search_photos', query],
    async ({ pageParam = 1 }) => {
      const res = await searchPhotos(query, 20, pageParam);
      return res;
    },
    {
      getPreviousPageParam: (firstPage, allPages) =>
        allPages.length > 1 ? allPages.length : false,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.total_pages! <= allPages.length ? false : allPages.length + 1,
      ...options,
    }
  );
