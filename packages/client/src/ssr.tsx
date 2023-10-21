import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { ChakraProvider } from '@chakra-ui/react';

import { setupStore } from '@app/store';
import { LoginPage } from '@app/pages';

import { theme } from './chakraTheme';

export function render(url: string) {
  const store = setupStore();
  return renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <LoginPage />;
        </ChakraProvider>
      </Provider>
    </StaticRouter>,
  );
}
