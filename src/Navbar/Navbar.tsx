import '../assets/images/logo.svg';

const Navbar = (): JSX.Element => {
    return <nav className="navbar">
        <ul className="navbar__list">
            <li className="navbar-item navbar__logo">
                <svg>
                    <use href='#logo' />
                </svg>
            </li>

            <li className="navbar-item navbar__services"><a href='#our-services'>SERVICES</a></li>

            <li className="navbar-item navbar__team"><a href='#our-team'>ABOUT US</a></li>

            {/* <li className="blog">
                <Link to='/'/>
            </li> */}
        </ul>
    </nav>;
};

export default Navbar;
