import { Badge, Box, Image } from '@chakra-ui/react';
import React, { Fragment } from 'react';

export default function MeetupList({ meetups }) {
  return (
    <Fragment>
      {meetups.map((meetup, index) => (
        <Box
          key={index}
          my={2}
          maxW='sm'
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
          </Box>
        </Box>
      ))}
    </Fragment>
  );
}
