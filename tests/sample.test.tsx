import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import React from "react";

import App from "../src/App";

describe('App', () => {

    it('renders headline', () => {
      render(<App />);
      const headline = screen.getByText(/Vite \+ React/i);
      expect(headline).toBeInTheDocument();
    });
  });