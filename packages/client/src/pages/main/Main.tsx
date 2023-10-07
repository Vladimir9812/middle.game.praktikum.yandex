import { Box, Button, Center } from '@chakra-ui/react';

import { BACKGROUND_CONST } from '@app/utils';
import { Icons, Link } from '@app/components';
import { Routes, TEXT } from '@app/const';
import { useProtectedRoute } from '@app/hooks';

import styles from './Main.module.css';

export function MainPage() {
  useProtectedRoute();

  return (
    <Center h="100vh">
      <Box bg={BACKGROUND_CONST} as="nav" borderRadius="8px" w="50%">
        <Box as="ul" className={styles.nav} p="40px">
          <Button as="li" variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.GAME}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.ConsoleIcon />
              {TEXT.gameLink}
            </Link>
          </Button>
          <Button as="li" variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.LEADER_BOARD}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.CupIcon />
              {TEXT.leadersLink}
            </Link>
          </Button>
          <Button as="li" variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.FORUM}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.ForumIcon />
              {TEXT.forumLink}
            </Link>
          </Button>
          <Button as="li" variant="link" className={styles['nav-button']} borderRadius={0}>
            <Link
              to={Routes.PROFILE}
              color="black"
              className={styles['nav-button__link']}
              fontSize={48}
              fontWeight="normal"
            >
              <Icons.PlayerIcon />
              {TEXT.playerLink}
            </Link>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
