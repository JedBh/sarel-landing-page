import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'

const WhatIs: React.FC = () => {
  const title = 'What is Sar-El Online?'
  const firstParagraph =
    'Sar-El Online is an online comprehensive booking platform which provides seamless access to all the services you may need for your FITs while traveling to Israel and other Middle Eastern countries. Our online platform includes multiple options for weekend packages, city breaks, private daily tours, a wide variety and classes of hotels, professional guided tours in many different languages, daily tours, set departure tours, specialized amenities, transfers and much more. Sar-El Online is offered exclusively to our partner travel agents around the world and delivers smooth and convenient shopping, booking and instant confirmations at attractive prices, terms & conditions.'
  const secondParagraph =
    'You can now serve your new and existing FIT clients with a click of a button! Register at …… and grow your business with Sar-El Online.'
  return (
    <>
      <AspectRatio
        ratio={960 / 360}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        backgroundImage={"url('/blob-scene-haikei.svg')"}
      >
        <Flex justifyContent={'center'}>
          <Grid m={22} p={8} templateColumns='repeat(2, 1fr)' gap={2}>
            <GridItem>
              <Heading
                variant={'gradient'}
                fontSize={'6xl'}
                color={'white'}
                mt={10}
              >
                {title}
              </Heading>
              <Text fontSize={'2xl'} color={'white'} mt={14} ml={10}>
                {firstParagraph}
              </Text>
            </GridItem>
            <GridItem p={12} m={30}>
              <Text fontSize={'2xl'} color={'white'} mt={10}>
                {secondParagraph}
              </Text>
              <Box mt={12} display={'flex'} justifyContent={'end'}>
                <Button variant='wavy'>Access to Sar-El Online Platform</Button>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </AspectRatio>
    </>
  )
}

export default WhatIs