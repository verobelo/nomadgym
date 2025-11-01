import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import LanguageToggle from './LanguageToggle';
import { LanguageProvider } from '@/context/LanguageContext';

describe('LanguageToggle', () => {
  it('toggles language when clicked', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>
    );

    const button = screen.getByRole('button', { name: 'Toggle language' });
    expect(button).toHaveTextContent('ES');

    await user.click(button);
    expect(button).toHaveTextContent('EN');
  });
});
