import React from 'react';
import {render, screen} from '@testing-library/react';
import ProfilePage from "./ProfilePage";

test('renders profile page', () => {
    render(<ProfilePage userId={'1'}/>);
    const titleElement = screen.getByText('Profile');
    expect(titleElement).toBeInTheDocument();
});

test('renders profile page form', () => {
    render(<ProfilePage userId={'1'}/>);
    const userNameLabel = screen.getByText('User Name');
    const passwordLabel = screen.getByText('Password');
    const firstNameLabel = screen.getByText('First Name');
    const otherNameLabel = screen.getByText('Other Name');
    const mobilePhoneLabel = screen.getByText('Mobile Phone');
    const emailLabel = screen.getByText('E-mail');
    const companyLabel = screen.getByText('Company');

    // Address
    const addressGroupTitle = screen.getByText('Address');
    const streetLabel = screen.getByText('Street');
    const townLabel = screen.getByText('Town');
    const countyLabel = screen.getByText('County');
    const postCodeLabel = screen.getByText('Postcode');

    // Connection Preferences
    const connectionPreferencesLabel = screen.getByText('Connection Preferences');
    const smsChooseLabel = screen.getByText('SMS');
    const mailChooseLabel = screen.getByText('Mail');
    const emailChooseLabel = screen.getByText('E-mail');

    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(otherNameLabel).toBeInTheDocument();
    expect(mobilePhoneLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(companyLabel).toBeInTheDocument();


    // Address
    expect(addressGroupTitle).toBeInTheDocument();
    expect(streetLabel).toBeInTheDocument();
    expect(townLabel).toBeInTheDocument();
    expect(countyLabel).toBeInTheDocument();
    expect(postCodeLabel).toBeInTheDocument();

    // Connection Preferences
    expect(connectionPreferencesLabel).toBeInTheDocument();
    expect(smsChooseLabel).toBeInTheDocument();
    expect(mailChooseLabel).toBeInTheDocument();
    expect(emailChooseLabel).toBeInTheDocument();
});

test('renders Back and Edit Buttons', () => {
    render(<ProfilePage userId={'1'}/>);
    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();

    const backButton = screen.getByText('Back');
    expect(backButton).toBeInTheDocument();
});