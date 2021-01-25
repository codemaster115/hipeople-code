import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchPhotoFormValues } from '../utils/interface';

type FormSearchPhotoProps = {
  onSubmit: SubmitHandler<SearchPhotoFormValues>;
};

const FormSearchPhoto: React.FC<FormSearchPhotoProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="search_photos">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearchAlt color="gray.300" />}
          />
          <Input
            name="query"
            placeholder="Search unsplash photos..."
            ref={register}
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default FormSearchPhoto;
