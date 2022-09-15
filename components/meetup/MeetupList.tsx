import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
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

  const BgColorTheme = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100');
  const ButtonBgColorTheme = useColorModeValue(
    'blackAlpha.200',
    'whiteAlpha.200'
  );
  const ButtonColorScheme = useColorModeValue('whiteAlpha', 'blackAlpha');

  return (
    <Fragment>
      {props.meetups.map((meetup, index) => (
        <Box
          key={index}
          mt={2}
          mb={8}
          borderWidth='1px'
          borderRadius='md'
          overflow='hidden'
          bgColor={BgColorTheme}
          pos='relative'
        >
          <AspectRatio ratio={16 / 9}>
            <Image src={meetup.image} alt={meetup.image} />
          </AspectRatio>
          <Box p={6}>
            <Box display='flex' alignItems='baseline'>
              <Badge px='2' colorScheme='red' variant='solid'>
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

            <Heading
              mt='1'
              fontWeight='semibold'
              lineHeight='tight'
              size='lg'
              noOfLines={1}
            >
              {meetup.title}
            </Heading>

            <Box opacity={0.8}>{meetup.description}</Box>

            <Flex pb={6}>
              <Button
                onClick={() => showDetailHandler(meetup.id)}
                bgColor={ButtonBgColorTheme}
                colorScheme={ButtonColorScheme}
                color='whiteAlpha'
                pos='absolute'
                bottom={2}
                right={2}
                variant='solid'
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
