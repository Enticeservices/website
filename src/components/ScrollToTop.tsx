import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        // Scroll to top when pathname changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Use 'smooth' for animated scrolling or 'instant' for immediate scroll
        })
    }, [pathname])

    // This component doesn't render anything
    return null
}
