import React from 'react';

function Navbar() {
    return (
        <>
            <header className='navbar'>
                <div className='navbar__container'>
                    <img className='navbar__logo' src="src\assets\Frame 3992.png" alt="logo-icon" />
                    <nav className='navbar__nav'>
                        <ul className='navbar__ul'>
                            <li className='navbar__li navbar__li--blueColor'><a href="#">Home</a></li>
                            <li className='navbar__li'><a href="#">Listing</a></li>
                            <li className='navbar__li'><a href="#">Contact</a></li>
                            <li className='navbar__li'><a href="#">Agents</a></li>
                            <li className='navbar__li'><a href="#">About</a></li>
                            <li className='navbar__li'><a href="#">Blog</a></li>
                        </ul>
                    </nav>

                    <div className='navbar__leftSection'>
                        <button className='navbar__btn1'>Sign Up</button>
                        <button className='navbar__btn2'>Create A Listing</button>
                        <div className="navbar__leftSectionImg"><img src="src\assets\Cart.png" alt="cart-icon" /></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar