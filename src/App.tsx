import { useRef, type JSX } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainRouter from './Router/MainRouter';

export default function App (): JSX.Element {
	// const containerRef = useRef(null);

    return (
        <>
        	<Navbar />
			{/* <LocomotiveScrollProvider options={{ smooth: true }}> */}
				{/* <main data-scroll-container ref={containerRef}> */}

    	        	<MainRouter />
            	
				{/* </main> */}
			{/* </LocomotiveScrollProvider> */}
			<Footer />
        </>
    );
}
