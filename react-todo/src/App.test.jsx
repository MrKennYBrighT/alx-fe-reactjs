import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // ✅ Import App instead of TodoList

test('adds a new todo item', () => {
  render(<App />); // ✅ Render App instead of TodoList
  const input = screen.getByPlaceholderText(/add new todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
