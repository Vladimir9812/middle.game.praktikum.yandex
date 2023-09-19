import { Flex } from '@chakra-ui/react';

type Properties = {
  name: string;
  value: string | number;
  color?: string;
};

export function ProfileItem({ name, value, color }: Properties) {
  return (
    <Flex
      borderBottom="1px dashed"
      w="508px"
      justify="space-between"
      paddingBottom="9px"
      paddingTop="23px"
      align="center"
      fontWeight="700"
    >
      <span style={{ fontSize: '28px', letterSpacing: '5.6px' }}>{name}</span>
      {color ? (
        // eslint-disable-next-line max-len
        <span style={{ fontSize: '20px', color: `${color}`, letterSpacing: '4px' }}>{value}</span>
      ) : (
        <span style={{ fontSize: '20px', letterSpacing: '4px' }}>{value}</span>
      )}
    </Flex>
  );
}
