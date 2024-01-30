import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainRouter from './Router/MainRouter';
import { useEffect } from 'react';
import CookieConsent from './CookieConsent/CookieConsent';

export default function App (): JSX.Element {
    return (
        <>
        	<Navbar />
    	    <MainRouter />
			<Footer />
			<CookieConsent />
        </>
    );
}
