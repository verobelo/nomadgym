import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Home from './page';
import { LanguageProvider } from '@/context/LanguageContext';

describe('Home', () => {
  it('has a h1 heading', () => {
    render(
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    );
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
