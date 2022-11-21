import Head from 'next/head';
import {
  Box,
  Container,
  Text,
  Code,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      page: 1,
      pageSize: 10,
    },
  });

  const onApplyFilters = (values) => {
    console.log('values', values);
    router.replace({
      query: Object.assign({}, router.query, values),
    });
  };

  return (
    <Container className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Box as="main">
        <Box mb="8">
          <Code>{JSON.stringify(router.query)}</Code>
        </Box>
        <Box>
          <Text>Controls</Text>
          <VStack as="form" onSubmit={handleSubmit(onApplyFilters)}>
            <FormControl>
              <FormLabel>Page</FormLabel>
              <Input id="page" type="number" {...register('page')} />
            </FormControl>
            <Button type="submit" width="full">
              Apply Filters
            </Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}
