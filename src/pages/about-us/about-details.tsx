export default function AboutDetails() {
    return (
        <div className="grid grid-cols-32 md:grid-cols-12 bg-light py-12 md:py-16 lg:pt-20 xl:py-24">
            <div className="col-start-2  col-end-32 md:col-end-12">
                <span className="text-xl  title md:text-2xl pr-8  md:pr-0 lg:text-3xl font-medium leading-tight max-w-3xl block text-primary-dark">
                    We handle operational complexities to streamline workflows, enabling your team to focus on core priorities and high-value work.
                </span>
            </div>
            <div className="p-6 md:p-8 lgp-10 col-start-2  rounded-xl md:rounded-2xl xl:rounded-3xl mt-10 md:mt-16 lg:mt-20 bg-white col-end-32 md:col-end-12">
                <span className="text-xl md:text-2xl title lg:text-xl 2xl:text-xl leading-tight max-w-4xl block text-primary-dark">
                    Three Pillars of Excellence
                </span>
                <div className="flex lg:flex-row flex-col justify-between">
                    <article className="pt-16 md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-40 flex flex-col gap-4 lg:gap-6">
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 139 140"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-12 md:size-14 lg:size-16"
                        >
                            <circle cx="18.5" cy="18.5" r="18.5" fill="#1102E3" />
                            <circle cx="52.5" cy="52.5" r="18.5" fill="#FF4A45" />
                            <circle cx="18.5" cy="86.5" r="18.5" fill="#1102E3" />
                            <circle cx="52.5" cy="121.5" r="18.5" fill="#1102E3" />
                            <circle cx="85.5" cy="86.5" r="18.5" fill="#1102E3" />
                            <circle cx="120.5" cy="52.5" r="18.5" fill="#1102E3" />
                            <circle cx="85.5" cy="18.5" r="18.5" fill="#1102E3" />
                            <circle cx="120.5" cy="121.5" r="18.5" fill="#FF4A45" />
                        </svg>

                        <span className="text-xl title lg:text-xl 2xl:text-2xl pr-6 md:pr-0 text-primary-dark font-medium leading-tight">
                            Empowering B2B Growth
                        </span>

                        <span className="text-sm 2xl:text-base  pr-6 md:pr-20 max-w-md block leading-relaxed flex-1 text-primary-dark/90">
                            As a dedicated marketing services provider, we leverage our extensive database of 86M+ profiles to ignite business growth across industries.
                        </span>
                    </article>

                    <article className="pt-16 md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-40 flex flex-col gap-4 lg:gap-6">
                        <svg
                            width="83"
                            height="72"
                            viewBox="0 0 83 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-12 md:size-14 lg:size-16"
                        >
                            <path
                                d="M0 51.5C0 40.7304 8.73045 32 19.5 32V32C30.2696 32 39 40.7304 39 51.5V72H0V51.5Z"
                                fill="#1102E3"
                            />
                            <path
                                d="M44 51.5C44 40.7304 52.7304 32 63.5 32V32C74.2696 32 83 40.7304 83 51.5V72H44V51.5Z"
                                fill="#1102E3"
                            />
                            <circle cx="19.5" cy="15.5" r="13.5" fill="#1102E3" />
                            <rect
                                x="62.668"
                                width="20.0807"
                                height="20"
                                transform="rotate(43.1072 62.668 0)"
                                fill="#FF4A45"
                            />
                        </svg>

                        <span className="text-xl 2xl:text-2xl title text-primary-dark font-medium leading-tight max-w-xs">
                            Tailored Strategic Solutions
                        </span>

                        <span className="text-sm 2xl:text-base  pr-6 md:pr-20 max-w-md block leading-relaxed flex-1 text-primary-dark/90">
                            We reject one-size-fits-all tactics. Our strategies are meticulously engineered to address the specific market challenges and growth objectives unique to your business.
                        </span>
                    </article>

                    <article className="pt-16 md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-40 flex flex-col gap-4 lg:gap-6">
                        <svg
                            width="86"
                            height="85"
                            viewBox="0 0 86 85"
                            className="size-12 md:size-14 lg:size-16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M41.707 41L1.20703 0.5H41.707V41Z"
                                fill="#1102E3"
                                stroke="#1102E3"
                            />
                            <path
                                d="M41.707 83L1.20703 42.5H41.707V83Z"
                                fill="#1102E3"
                                stroke="#1102E3"
                            />
                            <path
                                d="M84.707 83L44.207 42.5H84.707V83Z"
                                fill="#1102E3"
                                stroke="#1102E3"
                            />
                            <path
                                d="M84.707 41L44.207 0.5H84.707V41Z"
                                fill="#FF4A45"
                                stroke="#FF4A45"
                            />
                        </svg>

                        <span className="text-xl title 2xl:text-2xl pr-6 md:pr-0 text-primary-dark font-medium leading-tight max-w-xs">
                            Data-Driven Performance
                        </span>

                        <span className="text-sm 2xl:text-base pr-6 md:pr-20 max-w-md block leading-relaxed flex-1 text-primary-dark/90">
                            We act as your strategic allies. By grounding every decision in data-driven insights, we ensure that every campaign delivers a tangible impact on your bottom line.
                        </span>
                    </article>
                </div>
            </div>
        </div>
    )
}
