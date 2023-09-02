import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark justify-content-center"  data-bs-theme="dark">

                <ul className='navbar-nav flex-row gap-5' >
                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/service">Service</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/blog">Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar