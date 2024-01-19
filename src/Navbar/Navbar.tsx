import { Link } from 'react-router-dom';
import '../assets/images/logo.svg';

const Navbar = (): JSX.Element => {
    return <nav className="navbar">
        <ul className="navbar__list">
			<Link to='/'> 
				<li className="navbar-item navbar__logo">
					<svg>
						<use href='#logo' />
					</svg>
				</li>
			</Link>
            <li className="navbar-item navbar__services"><a href='#our-services'>SERVICES</a></li>

            <li className="navbar-item navbar__team"><a href='#our-team'>ABOUT US</a></li>
        </ul>
    </nav>;
};

export default Navbar;
