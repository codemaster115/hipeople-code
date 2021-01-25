import React from 'react';
import { Box, Spinner, SpinnerProps } from '@chakra-ui/react';

interface Props extends SpinnerProps {
  fullScreen?: boolean;
}

const LoadingIndicator: React.FC<Props> = ({
  fullScreen = false,
  ...restProps
}: Props) => {
  const fullScreenProp = fullScreen
    ? {
        h: '100vh',
      }
    : {};

  return (
    <Box
      w="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      {...fullScreenProp}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        {...restProps}
      />
    </Box>
  );
};

export default LoadingIndicator;
