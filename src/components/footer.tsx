import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import footerBg from '../assets/footer_bg.svg'
import iso from '../assets/iso.png'
import certificate from '../assets/certificate.png'
import gdpr from '../assets/gdpr.png'
import ico from '../assets/ico.png'
import aicpa from '../assets/aicpa.png'


export default function Footer() {
    return (
        <div className="grid grid-cols-30 md:grid-cols-12 relative py-10 md:py-16 lg:py-20 xl:py-20 from-primary-dark to-primary-dark bg-linear-to-b">
            <div className="absolute top-0 left-0 w-full opacity-50 h-full">
                <img src={footerBg} alt="footer" className="w-full opacity-30 h-full object-cover" />
            </div>
            <footer className="text-white relative col-start-2 col-end-30 md:col-end-12">
                <div className="w-container">
                    <div className="flex lg:gap-20 lg:flex-row flex-col justify-between">
                        <div className="flex flex-col">
                            <img src={logo} alt="logo" className="2xl:size-32 xl:size-28 lg:size-24 size-20 invert " />
                            <span className='2xl:text-4xl xl:text-3xl text-2xl block pt-10 font-semibold italic text-white title'>Entice Service</span>
                            <span className='2xl:text-lg lg:text-base md:text-sm text-sm block pt-4 text-white'>Delivering leads
                                that sales welcome!</span>
                            <div className='grid grid-cols-3 md:grid-cols-5 items-start max-w-[200px] md:max-w-[400px] gap-5  pb-6 pt-5'>
                                <div className='grid '>
                                    <img className='h-20 w-auto object-contain object-start' src={iso} alt="" />
                                </div>
                                <div className='grid '>
                                    <img className='h-20 w-auto object-contain object-start' src={certificate} alt="" />
                                </div>
                                <div className='grid '>
                                    <img className='h-20 w-auto object-contain object-start' src={gdpr} alt="" />
                                </div>
                                <div className='grid '>
                                    <img className='h-20 w-auto object-contain object-start' src={aicpa} alt="" />
                                </div><div className='grid '>
                                    <img className='h-20 w-auto object-contain object-start' src={ico} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col items-start md:pr-10 md:gap-20 gap-5 lg:mt-0 mt-8">
                            <ul className="grid md:gap-7 place-items-start gap-5 text-white list-none w-full">
                                <li className="w-auto block">
                                    <Link className="2xl:text-base lg:text-base md:text-sm text-xs text-white block font-semibold uppercase text-opacity-90 text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/">Home</Link>
                                </li>
                                <li className="w-auto block">
                                    <Link className="2xl:text-base lg:text-base md:text-sm text-xs text-white block font-semibold uppercase text-opacity-90 text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/services">Services</Link>
                                </li>
                                <li className="w-auto block">
                                    <Link className="2xl:text-base lg:text-base md:text-sm text-xs text-white block font-semibold uppercase text-opacity-90 text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <ul className="md:gap-7 place-items-start lg:grid hidden gap-5 text-white list-none">
                                <li className="2xl:text-base lg:text-base md:text-sm text-xs font-semibold uppercase text-opacity-90">Solutions</li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/services/lead-generation-and-qualification">Lead Generation and Qualification</Link>
                                </li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/services/business-process-outsourcing">Business Process Outsourcing (BPO)</Link>
                                </li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/services/content-marketing">Content Marketing</Link>
                                </li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/services/market-research-and-analysis">Market Research and Analysis</Link>
                                </li>
                            </ul>
                            <ul className="grid md:gap-7 gap-5 place-items-start  text-white list-none">
                                <li className="2xl:text-base lg:text-base md:text-sm text-xs font-semibold uppercase text-opacity-90">Company</li>
                                <li>

                                    <Link className="2xl:text-base lg:text-base md:text-sm text-xs text-white block font-semibold uppercase text-opacity-90 text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/about">About Us</Link>


                                </li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/terms">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link className="2xl:text-base text-sm text-white block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none 
        focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all"
                                        to="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-3 md:flex-row flex-col pt-10 md:pt-16 lg:pt-20 xl:pt-28 justify-between items-start md:items-center blade-top-padding">
                        <h6 className="md:block hidden text-sm text-white whitespace-nowrap">©2026. All Rights Reserved.</h6>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/entice-business-support-services/" target="_blank" rel="noopener noreferrer">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-7 hover:fill-blue transition-all" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </a>
                        </div>
                        <h6 className="md:hidden block text-sm text-white whitespace-nowrap pt-6 md:pt-0">©2026. All Rights Reserved.</h6>
                    </div>
                </div>
            </footer>
        </div>
    )
}