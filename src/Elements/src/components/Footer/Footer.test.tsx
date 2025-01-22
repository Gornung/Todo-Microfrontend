import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('zeigt den richtigen Text an', () => {
    render(<Footer />);
    expect(screen.getByText('Immer alles erledigt. ;)')).toBeInTheDocument();
  });
});
