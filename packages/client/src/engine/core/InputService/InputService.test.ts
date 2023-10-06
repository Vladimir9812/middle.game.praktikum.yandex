import { InputService } from '@app/engine';

enum KeyCode {
  KeyA = 'KeyA',
}

describe('InputService', () => {
  it('should create an instance of InputService', () => {
    const inputService = InputService.getInstance();
    expect(inputService).toBeInstanceOf(InputService);
  });

  it('should toggle input key state correctly', () => {
    const inputService = InputService.getInstance();
    const keyCode = KeyCode.KeyA;

    inputService.toggleInputKeyState(keyCode);
    expect(inputService.getInputKeyState(keyCode)).toBe(true);
    inputService.toggleInputKeyState(keyCode);
    expect(inputService.getInputKeyState(keyCode)).toBe(false);
  });
});
