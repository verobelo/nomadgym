import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import NotFound from '@/app/not-found';
import { LanguageProvider } from '@/context/LanguageContext';

describe('NotFound', () => {
  it('should have a heading of level 1', () => {
    render(
      <LanguageProvider>
        <NotFound />
      </LanguageProvider>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
