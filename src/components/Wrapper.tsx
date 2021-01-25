import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

const Wrapper: React.FC<ContainerProps> = ({
  children,
  ...restProps
}: ContainerProps) => (
  <Container maxW="1280px" padding="60px" {...restProps}>
    {children}
  </Container>
);

export default Wrapper;
