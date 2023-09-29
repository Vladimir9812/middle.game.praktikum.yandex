import { Flex } from '@chakra-ui/react';

import { LeaderboardItemContent } from '../LeaderboardItemContent/LeaderboardItemContent';

type Properties = {
  place: string | number;
  player: string;
  score: string | number;
  background?: string;
  isHeader: boolean;
};
export function LeaderboardItem({ place, player, score, background, isHeader }: Properties) {
  const formattedPlace = isHeader ? String(place).toUpperCase() : place;
  const formattedPlayer = isHeader ? player.toUpperCase() : player;
  const formattedScore = isHeader ? String(score).toUpperCase() : score;
  return (
    <Flex
      background={background}
      w="100vh"
      h="100vh"
      alignItems="center"
      justifyContent="space-between"
      padding="7px 46px 8px 16px"
      borderRadius={isHeader ? '5px' : ''}
      fontWeight="700"
      fontSize="28px"
      maxWidth="3xl"
      maxHeight="3.125rem"
    >
      <LeaderboardItemContent
        value={formattedPlace}
        width="97px"
        placeLetterSpacing={isHeader ? '2.8px' : ''}
      />
      <LeaderboardItemContent
        value={formattedPlayer.toUpperCase()}
        width="375px"
        placeLetterSpacing={isHeader ? '4.2px' : ''}
      />
      <LeaderboardItemContent
        value={formattedScore}
        width="135px"
        placeLetterSpacing={isHeader ? '7px' : ''}
      />
    </Flex>
  );
}
