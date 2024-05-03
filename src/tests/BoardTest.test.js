import { render, fireEvent, screen } from '@testing-library/react'
import  Board  from '../Board.js';
import waitForExpect from 'wait-for-expect';

test('initiates a blank board', async () => {

    render(<Board />)

    const squares = screen.queryAllByTestId('square')
    expect(squares.length).toBe(9)

    expect(squares[0].textContent).toBe("")
    expect(squares[1].textContent).toBe("")
    expect(squares[2].textContent).toBe("")
    expect(squares[3].textContent).toBe("")
    expect(squares[4].textContent).toBe("")
    expect(squares[5].textContent).toBe("")
    expect(squares[6].textContent).toBe("")
    expect(squares[7].textContent).toBe("")
    expect(squares[8].textContent).toBe("")

    const stat = screen.queryAllByTestId("status");
    await waitForExpect(() => {
        expect(stat[0].textContent).toBe('Next Chance X');
    }, 2000, 50);
    
})

test('changes value on click' , async() =>{
    render(<Board />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[4])
    expect(squares[0].textContent).toBe('X');
    expect(squares[4].textContent).toBe('O');
    
})

test('click not allowed on used square' , async() =>{
    render(<Board />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    expect(squares[0].textContent).toBe('X');
    fireEvent.click(squares[0])
    expect(squares[0].textContent).toBe('X');
    
})

test("declares X as winner" , async () => {
    render(<Board />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[1])
    fireEvent.click(squares[4])
    fireEvent.click(squares[2])
    fireEvent.click(squares[8])

    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Winner X');
    }, 2000, 50);
})

test("declares O as winner" , async () => {
    render(<Board />)

    const squares = screen.queryAllByTestId('square')

    fireEvent.click(squares[0])
    fireEvent.click(squares[3])
    fireEvent.click(squares[6])
    fireEvent.click(squares[4])
    fireEvent.click(squares[7])
    fireEvent.click(squares[5])

    await waitForExpect(() => {
        expect(screen.getByTestId('status').textContent).toBe('Winner O');
    }, 2000, 50);
})
