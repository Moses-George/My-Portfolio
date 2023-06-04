import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import Topfixedimage from "../components/Topfixedimage";
import rayImage from "../assets/rays_bg.png";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Layout = ({ children }) => {

    return (
        <AnimatePresence>
            <div className="main_container">
                <ScrollToTop />
                <Navbar />
                <Topfixedimage image={rayImage} />
                {children}
                <Footer />
            </div>
        </AnimatePresence>
    )
}

export default Layout;