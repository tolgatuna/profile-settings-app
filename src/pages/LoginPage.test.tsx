import React, {useState} from 'react';
import {render, screen} from '@testing-library/react';
import LoginPage from "./LoginPage";

test('renders login page with title', () => {
    render(<LoginPage setUserId={() => {}}/>);
    const linkElement = screen.getByText('Welcome to Profile Settings App');
    expect(linkElement).toBeInTheDocument();
});

test('renders login form elements', () => {
    render(<LoginPage setUserId={() => {}}/>);
    const userNameLabel = screen.getByLabelText('User Name:');
    const passwordLabel = screen.getByLabelText('Password:');
    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
});

test('error not visible at the beginning', () => {
    render(<LoginPage setUserId={() => {}}/>);
    const linkElement = screen.getByText('Can not login to page. Check your credentials');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveProperty('hidden', true);
});

test('renders submit button exist', () => {
    render(<LoginPage setUserId={() => {}}/>);
    const submit = screen.getByText('Submit');
    expect(submit).toBeInTheDocument();
});
