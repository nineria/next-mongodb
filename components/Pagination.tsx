import { Button, Center, Flex, Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Pagination = ({ size }) => {
  const postsPerPage = 6;

  const totalPosts = Math.ceil(size / postsPerPage);

  return (
    <div>
      <PaginationList postsPerPage={postsPerPage} totalPosts={totalPosts} />
    </div>
  );
};

const PaginationList = ({ postsPerPage, totalPosts }) => {
  const router = useRouter();

  const currentPage = parseInt(router.asPath.replace(/\D/g, ''));

  const pageNumbers = [];

  for (let index = 0; index <= Math.ceil(postsPerPage / totalPosts); index++) {
    pageNumbers.push(index + 1);
  }

  if (currentPage > totalPosts)
    return (
      <Center>
        <Stack>
          <Heading my={10}>404 Page not found.</Heading>
          <Center>
            <Button onClick={() => router.push('/')}>Home page</Button>
          </Center>
        </Stack>
      </Center>
    );

  return (
    <div>
      <Flex justifyContent='center'>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            disabled={
              currentPage === number || (router.asPath === '/' && number === 1)
                ? true
                : false
            }
            size='md'
            onClick={() => router.push(`?page=${number}`)}
          >
            <a>{number}</a>
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export default Pagination;
