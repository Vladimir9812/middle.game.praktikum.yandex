import { Avatar, Grid, GridItem, Text } from '@chakra-ui/react';

import { Icons } from '@app/components';

import avatar from '../../../assets/images/avatar.png';
import style from '../Forum.module.css';

export function ForumTopicComment({ item }: any) {
  return (
    <Grid templateColumns="1fr 4fr" gridRowGap={5} pt={3} pb={3}>
      <GridItem className={style.topic_item_avatar}>
        <Avatar size="xl" name="Segun Adebayo" src={avatar} />
        <Text>{item.name}</Text>
        <Text>
          <Icons.Crown /> 123456
        </Text>
      </GridItem>
      <GridItem
        // className={currentClassName}
        // fontSize={fonSize}
        padding={5}
        bg="#fff"
      >
        {item.comment}
      </GridItem>
    </Grid>
  );
}
