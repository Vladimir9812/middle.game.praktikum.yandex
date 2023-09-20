import type { KeyCode, InputKeysState } from './types';

export default class InputService {
  public readonly inputKeysState: Partial<InputKeysState> = {};

  private static _instance: InputService;

  private constructor() {
    this._attachKeyDownEvent();
    this._attachKeyUpEvent();
  }

  public static getInstance() {
    if (InputService._instance) {
      return InputService._instance;
    }
    InputService._instance = new InputService();
    return InputService._instance;
  }

  private _attachKeyDownEvent() {
    document.addEventListener('keydown', (event) => {
      const code = event.code as KeyCode;
      this.changeInputKeyState(code, true);
    });
  }

  private _attachKeyUpEvent() {
    document.addEventListener('keyup', (event) => {
      const code = event.code as KeyCode;
      this.changeInputKeyState(code, false);
    });
  }

  public getInputKeyState(key: KeyCode) {
    return !!this.inputKeysState[key];
  }

  public changeInputKeyState(key: KeyCode, value: boolean) {
    this.inputKeysState[key] = value;
  }

  public toggleInputKeyState(key: KeyCode) {
    this.changeInputKeyState(key, !this.inputKeysState[key]);
  }
}
