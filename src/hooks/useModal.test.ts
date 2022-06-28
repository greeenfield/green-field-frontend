import { renderHook } from '@testing-library/react-hooks';

import { useModal } from './useModal';

describe('useModal custom hook test', () => {
  test('visible의 default value는 false여야 한다.', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.visible).toBe(false);
  });
  test('open 실행 시 visible이 true여야 한다.', () => {
    const { result } = renderHook(() => useModal());

    result.current.open();

    expect(result.current.visible).toBe(true);
  });

  test('close 실행 시 visible이 false여야 한다.', () => {
    const { result } = renderHook(() => useModal());

    result.current.close();

    expect(result.current.visible).toBe(false);
  });
});
