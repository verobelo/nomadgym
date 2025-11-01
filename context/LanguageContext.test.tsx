import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { useLanguage, LanguageProvider } from './LanguageContext';
import { renderHook, act } from '@testing-library/react';

describe('useLanguage', () => {
  it('throws an error when used outside of LanguageProvider', () => {
    const TestComponent = () => {
      useLanguage();
      return <div>Test</div>;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'useLanguage must be used within a LanguageProvider'
    );
  });

  it('toggles language between en and es', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe('en');

    act(() => {
      result.current.toggleLanguage();
    });

    expect(result.current.language).toBe('es');

    act(() => {
      result.current.toggleLanguage();
    });

    expect(result.current.language).toBe('en');
  });
});
