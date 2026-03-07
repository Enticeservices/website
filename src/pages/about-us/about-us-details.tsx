export default function AboutUsDetails() {
    return (
        <div className="bg-light py-10 md:py-16 lg:py-20">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-start-2 md:col-span-10 px-5 md:px-0">

                    {/* Heading */}
                    <span className="text-sm font-medium text-primary-dark block pb-3">What we do</span>
                    <h2 className="text-2xl sm:text-3xl title md:text-3xl lg:text-4xl font-semibold text-primary-dark">
                        Transforming Connections into <br className="md:block hidden" /> B2B Conversions!
                    </h2>

                    {/* Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-10">
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Entice is on a mission to redefine the B2B landscape. Our team of experts is wholly dedicated to providing customized solutions that propel your business towards growth, efficiency, and success.
                        </p>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            We offer comprehensive Business Process Outsourcing (BPO) solutions that help companies streamline their operations, enhancing their ability to focus on core business challenges and opportunities.
                        </p>
                    </div>
                </div>

                {/* Images Section */}
                <div className="col-span-12 md:col-start-2 md:col-span-10 px-5 md:px-0 pt-8 md:pt-12 lg:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">

                        <div className="md:col-span-2 h-64 md:h-80 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop"
                                className="h-full w-full object-cover"
                                alt="Team collaboration"
                            />
                        </div>

                        <div className="md:col-span-3 h-64 md:h-80 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                className="h-full w-full object-cover"
                                alt="Business discussion"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}