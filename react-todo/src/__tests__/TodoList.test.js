import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add new todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/learn react/i);
    expect(todoItem).toHaveStyle('text-decoration: none');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-Write Tests');

    fireEvent.click(deleteButton);
    expect(screen.queryByText(/write tests/i)).not.toBeInTheDocument();
  });
});
