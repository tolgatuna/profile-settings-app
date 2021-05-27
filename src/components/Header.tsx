import React from "react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'

const PAGE_HOME = 'home';
const PAGE_PROFILE = 'profile';
const PAGE_OTHER = 'other';

type HeaderProps = {
    logout: () => void
}

const Header = ({logout}: HeaderProps) => {
    const history = useHistory();
    const [activePage, setActivePage] = useState<string>('home');

    useEffect(() => {
        // First initialize of header component:
        updateActivePage(history.location.pathname)

        function updateActivePage(pathname: string) {
            if (pathname === '/' || pathname === '')
                setActivePage(PAGE_HOME);
            else if (pathname === '/profile')
                setActivePage(PAGE_PROFILE);
            else if (pathname === '/other')
                setActivePage(PAGE_OTHER);
        }

        return history.listen((location) => {
            updateActivePage(location.pathname);
        })
    }, [history])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${activePage === PAGE_HOME ? 'active' : ''}`} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activePage === PAGE_PROFILE ? 'active' : ''}`} to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activePage === PAGE_OTHER ? 'active' : ''}`} to="/other">
                            Other
                        </Link>
                    </li>
                </ul>
                <button type='button' className='btn btn-outline-danger' onClick={logout}>Logout</button>
            </div>
        </nav>
    );
}

export default Header;