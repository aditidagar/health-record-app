import { render, screen } from '@testing-library/react';
import App from './App';
import FormManager from "./pages/FormManager/FormManager";

test('renders app component', () => {
  render(<App />);
});

test('Renders FormManager component', () => {
  render(<FormManager />);
});