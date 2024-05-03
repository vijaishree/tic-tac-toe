import React from 'react';
import { render,screen, fireEvent} from '@testing-library/react';
import Square from '../Square.js';

test('displays value in button' , ()=>{
    render(<Square value = "X" />);

    expect(screen.getByTestId('square').textContent).toBe("X");
})

test('handles click' ,async () => {
    const mockCallback = jest.fn(() => {});

    render(<Square onClick={mockCallback} />)

    fireEvent.click(screen.getByTestId("square"))

    expect(mockCallback.mock.calls.length).toBe(1);
})