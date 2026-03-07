import bannerImage from "../../assets/service_banner.png"

export default function Banner() {
    return (
        <div className="max-w-[100vw] overflow-hidden">
            <div className="h-[500px] bg-light relative">
                <div className="absolute inset-0 d">
                    <img src={bannerImage} alt="" className="object-bottom-right
                     scale-105 h-full w-full obeject-cover" />
                    <div className="absolute inset-0 bg-light/70 scale-110 z-50"></div>
                </div>
                <div className="relative grid grid-cols-30 md:grid-cols-12 z-50 h-full">
                    <div className="col-span-30 pr-6 md:pr-0 justify-end pb-8 gap-5 md:pb-12 lg:pb-20 flex-col col-start-2 flex items-start min-h-full h-full">
                        <span className="text-2xl title md:text-3xl lg:text-4xl font-semibold block max-w-xl leading-normal text-primary-dark">
                            We’ve mastered the B2B maze so you don’t have to!
                        </span>
                        <span className="text-primary-dark text-sm md:text-base block max-w-xl">
                            We simplify B2B complexities into strategic growth. By combining deep industry expertise with forward-thinking solutions
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}