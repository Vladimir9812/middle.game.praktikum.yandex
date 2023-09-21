import { Center, Flex, Heading, Text } from '@chakra-ui/react';

type Properties = {
  componentName: string;
};

export function ErrorFallbackComponent(properties: Properties) {
  const { componentName } = properties;
  return (
    <Center bg="transparent" h="100%" color="initial">
      <Flex flexDirection="column">
        <Heading>
          An error occurred while loading the component
          <Text as="b">{`< ${componentName} >`}</Text>
        </Heading>
      </Flex>
    </Center>
  );
}
