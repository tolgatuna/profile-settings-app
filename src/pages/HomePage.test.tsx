import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import HomePage from "./HomePage";

test('renders home page with title', () => {
    render(<HomePage/>);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
});

test('renders home page message', () => {
    render(<HomePage/>);
    const linkElement = screen.getByText('Welcome to the application. Hope you are well today.');
    expect(linkElement).toBeInTheDocument();
});
