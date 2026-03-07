import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./header";
import Footer from "./components/footer";
import SubFooter from "./components/subfooter";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import ContactUs from "./pages/contact-us";
import TermsOfUse from "./pages/terms-of-use";
import PrivacyPolicy from "./pages/privacy-policy";
import CaseStudy from "./pages/case-study";
import MediaKit from "./pages/media-kit";
import Blogs from "./pages/blogs";
import BlogDetail from "./pages/blogs/blog-detail";
import type { ReactNode } from "react";
import CookieNotice from "./components/cookie-notice";
import LeadGenerationAndQualification from "./pages/services/lead-generation-and-qualification/page";
import BusinessProcessOutsourcing from "./pages/services/business-process-outsourcing/page";
import MarketResearchAndAnalysis from "./pages/services/market-research-and-analysis/page";
import ContentMarketing from "./pages/services/content-marketing/page";

function App() {

  const location = useLocation()

  const isServicesPage = location.pathname === "/services"
  const isAboutPage = location.pathname === "/about"



  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Header darkmode={isServicesPage || isAboutPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
            <Route path="/case-study" element={<PageWrapper><CaseStudy /></PageWrapper>} />
            <Route path="/media-kit" element={<PageWrapper><MediaKit /></PageWrapper>} />
            <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
            <Route path="/blogs/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><TermsOfUse /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/services/lead-generation-and-qualification" element={<PageWrapper><LeadGenerationAndQualification /></PageWrapper>} />
            <Route path="/services/business-process-outsourcing" element={<PageWrapper><BusinessProcessOutsourcing /></PageWrapper>} />
            <Route path="/services/market-research-and-analysis" element={<PageWrapper><MarketResearchAndAnalysis /></PageWrapper>} />
            <Route path="/services/content-marketing" element={<PageWrapper><ContentMarketing /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <SubFooter />
      <Footer />
      <CookieNotice />
    </div>
  );
}

export default App;



const animation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
