import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const RootLayout = () => {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default RootLayout;
