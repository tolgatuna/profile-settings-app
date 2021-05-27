import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import OtherPage from "./OtherPage";

test('renders other page with title', () => {
    render(<OtherPage/>);
    const linkElement = screen.getByText('Other');
    expect(linkElement).toBeInTheDocument();
});

test('renders other page message', () => {
    render(<OtherPage/>);
    const linkElement = screen.getByText('Welcome To Other Page');
    expect(linkElement).toBeInTheDocument();
});