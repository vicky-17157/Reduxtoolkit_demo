import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('render Home component in the document', () =>{
    const element = render(<Home />);
    const childElement = component.getByLabelText("Everything you need, all in one place")
    expect(childElement).toBeInTheDocument();
    
})