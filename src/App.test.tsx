import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders welcome profile settings app', () => {
    render(<App/>);
    const linkElement = screen.getByText('Welcome to Profile Settings App');
    expect(linkElement).toBeInTheDocument();
});
