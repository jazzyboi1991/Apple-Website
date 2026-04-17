import React from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="../../public/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="../../public/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="../../public/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
