import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

export default function MeetupList(props) {
  const router = useRouter();

  const showDetailHandler = (id) => {
    router.push('/' + id);
  };

  const BadgeColorScheme = useColorModeValue('pink', 'teal');
  const BgColorTheme = useColorModeValue('#fff', '#222');

  return (
    <Fragment>
      {props.meetups.map((meetup, index) => (
        <Box
          key={index}
          my={2}
          borderWidth='1px'
          borderRadius='md'
          overflow='hidden'
          bgColor={BgColorTheme}
        >
          <Image src={meetup.image} alt={meetup.image} />
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme={BadgeColorScheme}>
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
                {new Date(meetup.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
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
                onClick={() => showDetailHandler(meetup.id)}
                colorScheme='gray'
                mt={2}
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
