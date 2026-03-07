import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cookie_consent";

export default function CookieNotice() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            setTimeout(() => setVisible(true), 0);
        }
    }, []);

    function handleAccept() {
        localStorage.setItem(STORAGE_KEY, "accepted");
        setVisible(false);
    }

    function handleReject() {
        localStorage.setItem(STORAGE_KEY, "rejected");
        setVisible(false);
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[min(600px,calc(100%-2rem))]"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 px-6  py-3 lg:py-5 flex flex-col gap-2 md:gap-3 lg:gap-4">
                        <span className="text-lg xl:text-2xl font-semibold text-primary-dark">Cookie Notice</span>
                        <p className=" text-xs  pr-8 md:text-base xl:text-lg text-black leading-relaxed">
                            We use cookies to improve your experience. By continuing to use
                            this site you agree to our{" "}
                            <a href="/privacy" className="text-primary font-semibold decoration-from-font underline-offset-4 pl-1 hover:text-secondary transition-colors duration-300 underline">
                                Privacy Policy
                            </a>
                            .
                        </p>

                        <div className="flex items-center pt-4 gap-3 justify-end">
                            <button
                                onClick={handleReject}
                                className="px-4 py-2 text-xs md:text-sm font-medium rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer "
                            >
                                Reject
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-primary-dark text-white hover:bg-primary transition-colors cursor-pointer"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

