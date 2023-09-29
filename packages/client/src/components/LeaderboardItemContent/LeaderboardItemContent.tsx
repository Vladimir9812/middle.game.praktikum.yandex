import { Box } from '@chakra-ui/react';

type Properties = {
  value: string | number;
  width: string;
  placeLetterSpacing: string;
};
export function LeaderboardItemContent({ value, width, placeLetterSpacing }: Properties) {
  return (
    <Box
      h="35px"
      background="white"
      borderRadius="5px"
      boxShadow="10px 5px 10px 2px rgba(0, 0, 0, 0.25)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="4px"
      width={width}
      letterSpacing={placeLetterSpacing}
    >
      {value}
    </Box>
  );
}
