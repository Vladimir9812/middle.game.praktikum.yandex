import { Box, Heading, Text } from '@chakra-ui/react';

import { EngineCanvas, FormButton } from '@app/components';
import { GameState } from '@app/types';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { gameStateActions } from '@app/store';

function GameNotStartedPageView() {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score);

  const onPlayClick = () => {
    dispatch(gameStateActions.setGameState(GameState.Started));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center" flexDirection="column" gap="40">
        <Heading>Ready?</Heading>
        <Text fontSize="2xl">Your highest score: {score.score}</Text>
        <FormButton label="Play" onClick={onPlayClick} />
      </Box>
    </Box>
  );
}

function GameStaredPageView() {
  const dispatch = useAppDispatch();
  const onStopClick = () => {
    dispatch(gameStateActions.setGameState(GameState.Stopped));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="10"
    >
      <EngineCanvas />
      <FormButton label="Stop" onClick={onStopClick} />
    </Box>
  );
}

function GameStoppedPageView() {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score);

  const onPlayAgainClick = () => {
    dispatch(gameStateActions.setGameState(GameState.Started));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="10"
    >
      <Box textAlign="center">
        <Heading>Your current score: {score.score}</Heading>
        <Text>Your highest score: {score.score}</Text>
      </Box>
      <FormButton label="Play Again" onClick={onPlayAgainClick} />
    </Box>
  );
}

const PageView = {
  [GameState.NotStarted]: <GameNotStartedPageView />,
  [GameState.Started]: <GameStaredPageView />,
  [GameState.Stopped]: <GameStoppedPageView />,
};

export function GamePage() {
  const gameState = useAppSelector((state) => state.gameState);
  return PageView[gameState.gameSate];
}
