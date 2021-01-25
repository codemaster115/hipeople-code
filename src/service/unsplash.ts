import { createApi } from 'unsplash-js';

export const unsplash_api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
});

export const searchPhotos = async (
  query: string,
  perPage: number = 20,
  page: number = 1
) => {
  const { response, errors } = await unsplash_api.search.getPhotos({
    query,
    perPage,
    page,
  });
  if (errors?.length) throw new Error(errors[0]);
  return response!;
};
