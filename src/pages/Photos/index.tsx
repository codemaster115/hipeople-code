import React, { useMemo, useState } from 'react';
import { Box, Image, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Wrapper from '../../components/Wrapper';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useSearchPhotos } from '../../service/hooks';
import FormSearchPhoto from '../../Forms/FormSearchPhoto';
import { SearchPhotoFormValues } from '../../utils/interface';

const Photos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, fetchNextPage, hasNextPage } = useSearchPhotos(
    searchQuery,
    {
      enabled: !!searchQuery.length,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const handleSubmit = (values: SearchPhotoFormValues) => {
    setSearchQuery(values.query);
  };

  const photos = useMemo(
    () =>
      data?.pages
        .map((page) => page?.results!)
        .reduce((pv, cv) => [...pv, ...cv]) || [],
    [data?.pages]
  );

  return (
    <Wrapper>
      <Text as="h1" fontSize="30px">
        Unsplash photos
      </Text>
      <FormSearchPhoto onSubmit={handleSubmit} />
      <Box mt={3}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <InfiniteScroll
            dataLength={photos?.length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage!}
            loader={
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            }
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {photos?.map((pic) => (
                  <Image
                    key={pic.id}
                    alt={pic.alt_description || ''}
                    src={pic.urls.full}
                    p="1"
                    borderRadius="10px"
                    srcSet={Object.values(pic.urls).join(',')}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </InfiniteScroll>
        )}
      </Box>
    </Wrapper>
  );
};

export default Photos;
