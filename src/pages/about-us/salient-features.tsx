export default function SalientFeatures() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white border-t border-primary-dark/20 border-b">
            <div className="overflow-hidden ">
                <img src="https://plus.unsplash.com/premium_photo-1764691462865-58e39f630d4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project" className="w-full h-full object-cover object-center min-h-[320px]" />
            </div>
            <div>
                <div className='px-4 md:w-10/12 mx-auto py-10 md:py-16 lg:py-20 xl:py-24'>
                    <span className='text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl leading-tight font-medium text-primary-dark max-w-md block'>We Handle the Hustle, You Handle the Growth</span>
                    <div className='grid text-primary-dark gap-4 lg:gap-8 pt-6 md:pt-8 lg:pt-10'>
                        <span className="text-base md:text-lg pr-6 md:pr-0 leading-relaxed text-primary-dark/90 block max-w-xl">


                            Entice is redefining the B2B landscape with custom solutions engineered for your success. Our team provides the strategic momentum needed to accelerate growth and turn your biggest objectives into measurable results.

                        </span>

                        <span className="text-base md:text-lg pr-6 md:pr-0 leading-relaxed text-primary-dark/90 block max-w-xl pt-4 md:pt-6">we offer comprehensive Business Process Outsourcing (BPO) solutions that help companies streamline their operations, enhancing their ability to focus on core business challenges and opportunities.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

