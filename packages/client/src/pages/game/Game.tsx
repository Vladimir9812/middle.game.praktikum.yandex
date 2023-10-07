import { useState } from 'react';
import { Box } from '@chakra-ui/react';

import { EngineCanvas } from '@app/components';

enum GameState {
  NotStarted,
  Started,
  Stopped,
}

function NotStartedPageView() {
  return <Box>Not Started</Box>;
}

function StoppedPageView() {
  return <Box>Stopped</Box>;
}

const PageView = {
  [GameState.NotStarted]: <NotStartedPageView />,
  [GameState.Started]: <EngineCanvas />,
  [GameState.Stopped]: <StoppedPageView />,
};

export function GamePage() {
  const [gameState, setGameState] = useState<GameState>(GameState.NotStarted);
  return PageView[gameState];
}
