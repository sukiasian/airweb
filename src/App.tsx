import { type JSX } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainRouter from './Router/MainRouter';

export default function App (): JSX.Element {
    return (
        <>
            <Navbar />

            <MainRouter />

            <Footer />
        </>
    );
}
