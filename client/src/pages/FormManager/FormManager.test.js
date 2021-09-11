// import dependencies
import React from 'react';

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

// testing FormManager component
import FormManager from "./FormManager";

/* set up the test suite for Form Manager home page */
describe('Testing FormManager page components and actions', () => {
  test('Renders components for form manager page', () => {
    render(<FormManager/>)
    // expect a nav bar item 'Forms'
    expect(screen.getByText('Forms')).toBeInTheDocument();
    // expect 'Form Manager' header
    expect(screen.getByText('Form Manager')).toBeInTheDocument();
    // expect 'Search' placeholder text and button
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for forms...')).toBeInTheDocument();
    // expect 'Upload Form' button
    expect(screen.getByText('Upload Form')).toBeInTheDocument();
  });
});
