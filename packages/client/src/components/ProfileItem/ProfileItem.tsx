import { Flex, Text } from '@chakra-ui/react';

type Properties = {
  name: string;
  value: string | number;
  color?: string;
};

export function ProfileItem({ name, value, color }: Properties) {
  return (
    <Flex
      borderBottom="1px dashed"
      w="lg"
      justify="space-between"
      paddingBottom="2"
      paddingTop="6"
      align="center"
      fontWeight="700"
    >
      <Text fontSize="3xl" letterSpacing="widest">
        {name}
      </Text>
      {color ? (
        <Text fontSize="xl" color={color} letterSpacing="widest">
          {value}
        </Text>
      ) : (
        <Text fontSize="xl" letterSpacing="widest">
          {value}
        </Text>
      )}
    </Flex>
  );
}
