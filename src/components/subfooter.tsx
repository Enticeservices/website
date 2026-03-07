import { useNavigate } from 'react-router'
import PrimaryButton from './primary-btn'

export default function SubFooter() {
    const navigate = useNavigate()
    return (
        <div className="relative 2xl:py-32 xl:py-28 lg:py-24 md:py-20 py-16  border-t border-primary-dark/20 ">
            <div className="absolute top-0 left-0 w-full h-full bg-light">
            </div>
            <div className="grid grid-cols-12 relative">
                <div className="col-start-2 grid place-items-center gap-6 text-center col-end-12">
                    <span className="2xl:text-5xl  title  px-10 md:px-0 text-balance xl:text-4xl lg:text-3xl text-2xl font-semibold leading-normal max-w-3xl block">
                        Ready to Stop Fishing and <br /> Start CATCHING?
                    </span>
                    <span className="2xl:text-xl lg:text-base md:text-sm text-sm leading-relaxed max-w-3xl block pb-4">
                        Let’s transform your B2B connections into conversions with  <br />strategies that actually move the needle.
                    </span>
                    <PrimaryButton text="Let's talk" onClick={() => navigate('/contact')} />
                </div>
            </div>
        </div>
    )
}