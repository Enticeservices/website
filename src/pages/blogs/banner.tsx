export default function Banner() {
    return (
        <div className="relative h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[36rem] grid grid-cols-30 md:grid-cols-12 bg-primary-dark overflow-hidden max-w-[100vw]">
            <div className='relative col-start-2 col-end-30 md:col-end-12 flex flex-col gap-2 md:gap-6 pb-6 lg:py-20 justify-end h-full z-20'>
                <span className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight  title max-w-3xl'>Insights & Blog</span>
                <span className='text-sm md:text-base lg:text-xl pr-6 md:pr-0 xl:text-xl text-white/90 leading-relaxed pt-2 block max-w-2xl'>Stay updated with the latest trends, insights, and best practices in B2B demand generation and conversational AI.</span>
            </div>
        </div>
    )
}
