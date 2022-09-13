import { Badge, Box, Button, Center, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function MeetupList(props) {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/' + props.id);
  };

  return (
    <Fragment>
      {props.meetups.map((meetup, index) => (
        <Box
          key={index}
          my={2}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <Image src={meetup.image} alt={meetup.image} />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {new Date().toISOString().slice(0, 10)}
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {meetup.title}
            </Box>

            <Box>{meetup.description}</Box>

            <Flex justifyContent='end'>
              <Button
                onClick={showDetailHandler}
                colorScheme='teal'
                mt={2}
                size='sm'
              >
                Read more
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </Fragment>
  );
}
