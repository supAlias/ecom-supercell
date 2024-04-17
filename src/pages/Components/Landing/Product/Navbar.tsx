import React from "react";
import { LogIn, Menu, ShoppingBag } from "lucide-react";
import useActiveLink from "pages/Components/Navigation/Navbars/useActiveLink";
import { Link } from "react-router-dom";

// Image
import logoDark from "assets/images/logo-dark.png";
import logoLight from "assets/images/logo-light.png";

const Navbar = () => {

    const [isToggle, setIsToggle] = React.useState<boolean>(false);
    const [navClass, setNavClass] = React.useState<string>('');

    const { activeLink, handleLinkClick } = useActiveLink(".navbar-menu li.active");

    // scroll
    const scrollNavigation = () => {
        var scrollUp = document.documentElement.scrollTop;
        if (scrollUp >= 50) {
            setNavClass('is-sticky');
        } else {
            setNavClass('');
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', scrollNavigation, true);
        };
    }, []);

    return (
        <React.Fragment>
            <nav className={`fixed inset-x-0 top-0 z-50 flex items-center justify-center h-20 py-3 [&.is-sticky]:bg-white dark:[&.is-sticky]:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 [&.is-sticky]:shadow-lg [&.is-sticky]:shadow-slate-200/25 dark:[&.is-sticky]:shadow-zinc-700/30 navbar ${navClass}`} id="navbar">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto flex items-center self-center w-full">
                    <div className="shrink-0">
                        <Link to="/">
                            <img src={logoDark} alt="" className="block h-6 dark:hidden" />
                            <img src={logoLight} alt="" className="hidden h-6 dark:block" />
                        </Link>
                    </div>
                    <div className="mx-auto">
                        <ul id="navbar7" className={`absolute inset-x-0 z-20 items-center py-3 mt-px bg-white shadow-lg md:mt-0 dark:bg-zinc-800 dark:md:bg-transparent md:z-0 navbar-menu rounded-b-md md:shadow-none md:flex top-full ltr:ml-auto rtl:mr-auto md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0 ${!isToggle ? "hidden" : ""}`}>
                            <li>
                                <a href="#home"
                                    className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Home" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("/Home")}
                                >
                                    Home</a>
                            </li>
                            <li>
                                <a href="#product"
                                    className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Product" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("/Product")}
                                >
                                    Our Product</a>
                            </li>
                            <li>
                                <a href="#features"
                                    className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Features" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("/Features")}
                                >
                                    Features</a>
                            </li>
                            <li>
                                <a href="#about"
                                    className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/About" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("/About")}
                                >
                                    About Us</a>
                            </li>
                            <li>
                                <a href="#feedback"
                                    className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zinc-200 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Feedback" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("/Feedback")}
                                >
                                    Feedback</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <div className="ltr:ml-auto rtl:mr-auto md:hidden navbar-toggale-button">
                            <button type="button"
                                className="flex items-center  justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={() => setIsToggle(!isToggle)}>
                                <Menu></Menu>
                            </button>
                        </div>
                        <button type="button" className="text-slate-500 dark:text-zinc-300 hover:text-custom-500 dark:hover:text-custom-500 border-0 btn bg-gradient-to-r w-[36.39px] p-0 flex items-center justify-center">
                            <ShoppingBag className="inline-block size-4"></ShoppingBag></button>
                        <button type="button" className="text-white border-0 btn bg-gradient-to-r from-custom-500 to-purple-500 hover:text-white hover:from-purple-500 hover:to-custom-500">
                            <span className="align-middle">Sign In</span> <LogIn className="inline-block size-4 ltr:ml-1 rtl:mr-1"></LogIn></button>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;