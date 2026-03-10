import { Helmet } from "react-helmet-async";
import banner from '../../assets/terms_banner.png'

export default function TermsOfUse() {
    return (
        <div className="">
            <Helmet>
                <title>Terms of Use | Entice</title>
                <meta name="description" content="Read Entice's Terms of Use to understand the rules and guidelines governing usage of our website and services." />
            </Helmet>
            <div className="  ">
                <div>
                    <div className="  relative flex items-center justify-center h-[16rem] lg:h-[24rem] xl:h-[30rem] pt-10 ">
                        <div className="absolute inset-0">
                            <img className="h-full w-full object-cover object-center" src={banner} alt="" />
                        </div>
                        <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold text-white mt-6 lg:mt-10">Terms of Use</h1>
                    </div>
                    <div className=" bg-light py-6 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
                        <div className="prose prose-lg max-w-4xl mx-auto  space-y-6">

                            <section>
                                <span className="text-primary-dark text-2xl md:text-3xl font-semibold">Terms of use</span>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">Acceptance of Terms</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    By accessing and using this website, you accept and agree to be bound by the terms
                                    and provision of this agreement. If you do not agree to abide by the above, please
                                    do not use this service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">2. Use License</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Permission is granted to temporarily download one copy of the materials on our
                                    website for personal, non-commercial transitory viewing only. This is the grant
                                    of a license, not a transfer of title.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">3. Disclaimer</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    The materials on our website are provided on an 'as is' basis. We make no
                                    warranties, expressed or implied, and hereby disclaim and negate all other
                                    warranties including without limitation, implied warranties or conditions of
                                    merchantability, fitness for a particular purpose, or non-infringement of
                                    intellectual property or other violation of rights.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">4. Limitations</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    In no event shall our company or its suppliers be liable for any damages
                                    (including, without limitation, damages for loss of data or profit, or due to
                                    business interruption) arising out of the use or inability to use the materials
                                    on our website, even if we or our authorized representative has been notified
                                    orally or in writing of the possibility of such damage.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">5. Contact Information</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    If you have any questions about these Terms of Use, please contact us at
                                    legal@company.com.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
