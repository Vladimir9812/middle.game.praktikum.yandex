/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from '@app/components';

test('opens the modal when isOpen is true', () => {
  const onClose = jest.fn();
  const title = 'Test Modal';
  const body = 'Test body content';
  const { getByText } = render(
    <Modal onClose={onClose} isOpen size="lg" body={body} title={title} />,
  );

  const modalTitle = getByText('Test Modal');
  const modalBody = getByText('Test body content');

  expect(modalTitle).toBeInTheDocument();
  expect(modalBody).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn();
  const title = 'Test Modal';
  const body = 'Test body content';
  const { getByTestId } = render(
    <Modal onClose={onClose} isOpen size="lg" body={body} title={title} />,
  );

  const closeButton = getByTestId('modal-close-btn');
  fireEvent.click(closeButton);

  expect(onClose).toHaveBeenCalled();
});

test('renders the Modal component with expected structure', () => {
  const onClose = jest.fn();
  const title = 'Test Modal';
  const body = 'Test body content';
  render(<Modal onClose={onClose} isOpen size="lg" body={body} title={title} />);
  expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  expect(screen.getByTestId('modal-header')).toBeInTheDocument();
  expect(screen.getByTestId('modal-close-btn')).toBeInTheDocument();
  expect(screen.getByTestId('modal-body')).toBeInTheDocument();
});
