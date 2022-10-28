import { render, screen } from '@testing-library/react';
import Products from '../components/Products';

describe('test the Products component', () =>{
    test('render the products with a Add to Basket button', () =>{
        render(<Products />);
        const buttonList = screen.findAllByRole('button');
        console.log(buttonList);
        expect(buttonList).toHaveLength(4);
    })
})