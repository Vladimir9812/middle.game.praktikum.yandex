/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Modal } from '@app/components';

it('should be render correctly if search CI', async () => {
  render(
    <Modal
      isOpen
      onClose={() => console.log(1)}
      size="xl"
      body={<div>123</div>}
      title="New topic"
    />,
  );
  screen.debug();
  expect(screen.getByText('123')).toBeInTheDocument();
});
