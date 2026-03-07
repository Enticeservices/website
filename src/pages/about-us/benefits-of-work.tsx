import bg from "../../assets/card_bg.png"
import PrimaryButton from "../../components/primary-btn"
import { useNavigate } from "react-router"

export default function BenefitsOfWork() {
    const router = useNavigate()

    return (
        <div className="bg-light py-10 md:py-16 lg:py-20">
            <div className="grid grid-cols-30 md:grid-cols-12">

                <div className="  px-0 md:px-5 col-start-2 col-end-30 md:col-end-12">
                    <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden">

                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-no-repeat bg-bottom-right bg-contain opacity-20 md:opacity-100"
                            style={{ backgroundImage: `url(${bg})` }}
                        />

                        {/* Content */}
                        <div className="relative py-10 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 md:px-14">

                            {/* Heading */}
                            <h2 className="text-xl  title sm:text-2xl md:text-3xl font-semibold">
                                Benefits of Collaborating With Us
                            </h2>

                            {/* Articles */}
                            <div className="grid gap-8 md:gap-10 max-w-2xl pt-8 md:pt-10">

                                <article className="flex flex-col gap-3">
                                    <h3 className="text-lg  title sm:text-xl font-medium text-primary-dark">
                                        Dynamic & Agile Strategies:
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed">

                                        B2B Expertise: Our extensive experience in the B2B domain has endowed us with an in-depth understanding of the intricate dynamics that define this landscape. This knowledge empowers us to craft strategies and solutions that are meticulously tailored to your specific industry.

                                    </p>
                                </article>

                                <article className="flex flex-col gap-3">
                                    <h3 className="text-lg title  sm:text-xl font-medium text-primary-dark">
                                        Collaborative Partnership:
                                    </h3>
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        Your success is our success. We're committed to fostering transparent and collaborative relationships with our clients. Your goals and vision take center stage in everything we do.
                                    </p>
                                </article>
                                <div>
                                    <PrimaryButton size="sm" text="Get started" onClick={() => router("/contact")} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

