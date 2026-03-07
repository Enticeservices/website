export default function WhyUs() {
    return (
        <div className="bg-light grid grid-cols-30 md:grid-cols-12 pb-20 rounded-lg md:rounded-2xl lg:rounded-3xl">
            <div className="col-start-2 grid grid-cols-1 md:grid-cols-7 bg-white ring-0 ring-primary-dark/10 ring-offset-2 hover:ring-2 transition-all duration-300 mt-2 rounded-lg md:rounded-xl gap-y-10 lg:rounded-2xl md:col-end-12 col-end-30 p-1 md:p-2 lg:p-4">
                <div className="col-span-4 pl-4 md:pl-6 lg:pl-8 xl:pl-10  pt-6 md:py-10 lg:py-16 xl:py-20">
                    <span className="title text-xl md:text-2xl lg:text-3xl text-primary-dark font-medium  leading-normal block max-w-md">
                        We Redefine B2B Marketing. You Focus on Closing Deals.
                    </span>
                    <span className="text-xs md:text-sm lg:text-sm font-light text-primary-dark block max-w-sm pt-10 pb-4">Entice is a B2B Demand Generation & Lead Generation Agency that bridges the gap between marketing and sales.</span>
                    <span className="text-xs md:text-sm lg:text-sm font-light text-primary-dark block max-w-sm">  We deliver sales-ready leads through data-driven strategies, multi-channel outreach, and continuous optimization.</span>
                    <span className="title text-base md:text-lg pt-8 pb-3 flex items-center font-light text-primary-dark font-bold gap-2 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                        What sets us apart? </span>

                    <span className="text-xs md:text-sm font-light text-primary-dark/90 block max-w-sm">We treat your marketing budget as an investment — and we ensure it delivers measurable ROI, every single time.</span>
                </div>
                <div className="col-span-3 overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1764690690771-b4522d66b433?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover object-center" alt="" />
                </div>
            </div>
        </div>
    )
}