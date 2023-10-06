import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactTestRenderer from 'react-test-renderer';

import { Link } from './Link';
// const ReactTestRenderer = require('react-test-renderer');

it('hello jest', () => {
  const tree = ReactTestRenderer.create(
    <MemoryRouter>
      <Link to="/forum/3">3</Link>
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
