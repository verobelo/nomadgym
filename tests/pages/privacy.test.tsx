import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import PrivacyPolicy from '@/app/privacy/page';
import { LanguageProvider } from '@/context/LanguageContext';

describe('PrivacyPolicy', () => {
  it('Renders PrivacyPolicy', () => {
    render(
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>
    );
  });

  it('displays the Privacy Policy heading', () => {
    render(
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>
    );
    const heading = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders a link back to home', () => {
    render(
      <LanguageProvider>
        <PrivacyPolicy />
      </LanguageProvider>
    );
    const homeLinks = screen.getAllByRole('link', { name: /back to home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toHaveAttribute('href', '/');
  });
});
