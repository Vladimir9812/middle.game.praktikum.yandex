import { Box, Button, Center } from '@chakra-ui/react';

import { BACKGROUND_CONST } from '@app/utils';
import { Icons, Link } from '@app/components';
import { Routes } from '@app/const';

import styles from './Main.module.css';

const enum MainText {
  game = 'New game',
  leaders = 'Leaders',
  forum = 'forum',
  player = 'player',
}

export function MainPage() {
  return (
    <Center h="100vh">
      <Box bg={BACKGROUND_CONST} borderRadius="8px" w="50%">
        <Box as="nav" className={styles.nav} p="40px">
          <Button variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.GAME}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.ConsoleIcon />
              {MainText.game.toUpperCase()}
            </Link>
          </Button>
          <Button variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.LEADER_BOARD}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.CupIcon />
              {MainText.leaders.toUpperCase()}
            </Link>
          </Button>
          <Button variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.FORUM}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.ForumIcon />
              {MainText.forum.toUpperCase()}
            </Link>
          </Button>
          <Button variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.PROFILE}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.PlayerIcon />
              {MainText.player.toUpperCase()}
            </Link>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
