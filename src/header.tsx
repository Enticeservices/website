import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from './assets/logo.png'

type HeaderProps = {
    darkmode?: boolean
}

export default function Header({ darkmode = false }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isMobileMenuOpen])

    function closeMobileMenu() {
        setIsMobileMenuOpen(false)
        setIsMobileResourcesOpen(false)
    }

    return (
        <>
            <header
                className={`grid fixed left-0 right-0 top-0 z-[9999000] grid-cols-12 md:h-20 h-16 lg:h-20 transition-colors duration-300
  ${darkmode || isScrolled || isMobileMenuOpen
                        ? 'bg-white/95 backdrop-blur-md text-primary-dark'
                        : 'bg-white/2 backdrop-blur-sm text-white'
                    }`}
            >
                <div className="col-start-2 col-end-12 flex items-center gap-3 justify-between">
                    <div className='flex-0 basis-48'>
                        <Link to="/" onClick={closeMobileMenu}>
                            <img
                                src={logo}
                                alt="logo"
                                className={`w-auto 2xl:h-20 lg:h-16 md:h-12 h-10 ${darkmode || isScrolled || isMobileMenuOpen ? '' : 'invert'
                                    }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className='hidden lg:flex items-center gap-8'>
                        <Link className='hover:underline text-inherit underline-offset-4 text-sm font-medium tracking-wide' to="/">Home</Link>
                        <Link className='hover:underline text-inherit underline-offset-4 text-sm font-medium tracking-wide' to="/about">About</Link>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className='hover:underline text-inherit underline-offset-4 text-sm font-medium tracking-wide flex items-center gap-1'
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Resources
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                                    <Link
                                        to="/case-study"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Case Study
                                    </Link>
                                    <Link
                                        to="/media-kit"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Media Kit
                                    </Link>
                                    <Link
                                        to="/blogs"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Blogs
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link className='hover:underline text-inherit underline-offset-4 text-sm font-medium tracking-wide' to="/services">Services</Link>
                        <Link className='hover:underline text-inherit underline-offset-4 text-sm font-medium tracking-wide' to="/contact">Contact Us</Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Full-page mobile overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[9998999] bg-white pt-12 overflow-y-auto lg:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            className="flex flex-col px-8 py-6 gap-1"
                        >
                            <Link
                                to="/"
                                onClick={closeMobileMenu}
                                className="py-4 text-sm font-medium text-primary-dark border-b border-gray-200 tracking-wide"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about"
                                onClick={closeMobileMenu}
                                className="py-4 text-sm font-medium text-primary-dark border-b border-gray-200 tracking-wide"
                            >
                                About
                            </Link>

                            {/* Resources accordion */}
                            <div className="border-b border-gray-200">
                                <button
                                    onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                                    className="w-full py-4 text-sm font-medium text-primary-dark tracking-wide flex items-center justify-between cursor-pointer"
                                >
                                    Resources
                                    <svg
                                        className={`size-4 mr-2 transition-transform duration-300 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isMobileResourcesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pb-3 flex flex-col gap-1">
                                                <Link
                                                    to="/case-study"
                                                    onClick={closeMobileMenu}
                                                    className="py-1.5 text-sm text-gray-600 hover:text-primary-dark transition-colors"
                                                >
                                                    Case Study
                                                </Link>
                                                <Link
                                                    to="/media-kit"
                                                    onClick={closeMobileMenu}
                                                    className="py-1.5 text-sm text-gray-600 hover:text-primary-dark transition-colors"
                                                >
                                                    Media Kit
                                                </Link>
                                                <Link
                                                    to="/blogs"
                                                    onClick={closeMobileMenu}
                                                    className="py-1.5 text-sm text-gray-600 hover:text-primary-dark transition-colors"
                                                >
                                                    Blogs
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/services"
                                onClick={closeMobileMenu}
                                className="py-4 text-sm font-medium text-primary-dark border-b border-gray-200 tracking-wide"
                            >
                                Services
                            </Link>

                            <Link
                                to="/contact"
                                onClick={closeMobileMenu}
                                className="py-4 text-sm font-medium text-primary-dark border-b border-gray-200 tracking-wide"
                            >
                                Contact Us
                            </Link>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}


