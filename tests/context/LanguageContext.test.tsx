import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { useLanguage, LanguageProvider } from '@/context/LanguageContext';
import { renderHook, act } from '@testing-library/react';

describe('useLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

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

  it('restores language from localStorage on mount', () => {
    localStorage.setItem('nomadgym-language', 'es');

    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe('es');
  });

  it('returns the key when translation is missing', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translation = result.current.t('nonexistent.key' as any);

    expect(translation).toBe('nonexistent.key');
  });
});
