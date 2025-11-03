import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import PrivacyPolicy from '../app/privacy/page';

describe('PrivacyPolicy', () => {
  it('Renders PrivacyPolicy', () => {
    render(<PrivacyPolicy />);
  });

  it('displays the Privacy Policy heading', () => {
    const heading = screen.getByRole('heading', {
      name: /privacy policy/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders a link back to home', () => {
    render(<PrivacyPolicy />);
    const homeLinks = screen.getAllByRole('link', { name: /back to home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(homeLinks[0]).toHaveAttribute('href', '/');
  });
});
