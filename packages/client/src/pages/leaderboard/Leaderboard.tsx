import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import { LeaderboardItem } from '@app/components';

const data = [
  {
    place: 1,
    player: 'kot',
    score: 22_000,
  },
  {
    place: 2,
    player: 'cowboy',
    score: 18_500,
  },
  {
    place: 3,
    player: 'ROOTMAN',
    score: 9800,
  },
  {
    place: 4,
    player: 'JASTIN',
    score: 7200,
  },
  {
    place: 5,
    player: 'KROT_KASATKA',
    score: 5287,
  },
  {
    place: 6,
    player: 'KIOSK',
    score: 1800,
  },
];

export function LeaderboardPage() {
  const headingSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '7xl' });
  const gapSize = useBreakpointValue({ base: '55px', md: '35px', lg: '55px' });
  const maxH = useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' });

  return (
    <Flex h="100vh" display="flex" align="center" justify="flex-start" direction="column">
      <Heading as="h1" fontSize={headingSize} marginTop="10" fontWeight="400">
        Game masters
      </Heading>
      <Flex
        maxW="58.5rem"
        maxH={maxH}
        w="100%"
        // h="100vh" // Высота равна высоте окна (заменено на maxH)
        borderRadius="15"
        backgroundColor="lightBlue"
        pt={9}
        pb={9}
        pl={16}
        pr={16}
        direction="column"
        align="center"
        position="relative"
        gap={gapSize}
        overflowY="auto"
        marginBottom="96px"
      >
        <LeaderboardItem place="place" player="player" score="score" background="violet" isHeader />
        {data.map((item, index) => (
          <LeaderboardItem
            isHeader={false}
            key={item.place}
            place={item.place}
            player={item.player}
            score={item.score}
            background={index % 2 === 0 ? 'orange' : 'red'}
          />
        ))}
      </Flex>
    </Flex>
  );
}
