import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import NotFound from '@/app/not-found';
import { LanguageProvider } from '@/context/LanguageContext';

describe('NotFound', () => {
  const renderNotFoundComponent = () => {
    render(
      <LanguageProvider>
        <NotFound />
      </LanguageProvider>
    );
    return {
      heading: screen.getByRole('heading', { level: 1 }),
      backButton: screen.getByRole('button', { name: /back/i }),
    };
  };

  it('should have a heading of level 1', () => {
    const { heading } = renderNotFoundComponent();
    expect(heading).toBeInTheDocument();
  });

  it('should call window.history.back when back button is clicked', () => {
    const { backButton } = renderNotFoundComponent();
    expect(backButton).toBeInTheDocument();

    const goBack = vi.spyOn(window.history, 'back');
    fireEvent.click(backButton);
    expect(goBack).toHaveBeenCalledOnce();

    goBack.mockRestore();
  });
});
