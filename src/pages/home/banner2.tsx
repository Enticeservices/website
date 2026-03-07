import PrimaryButton from '../../components/primary-btn'
import bgVideo from '../../assets/banner_video.mp4'
import { useNavigate } from "react-router-dom"

export default function Banner2() {

  const navigate = useNavigate()



  return (
    <div className="relative lg:h-dvh pb-10 lg:pb-20 min-h-[450px] md:min-h-[500px] flex flex-col items-center justify-center  place-items-center gap-4 md:gap-6">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className=' absolute inset-0 bg-linear-to-b from-primary-dark/30 to-primary-dark'></div>
      </div>
      <h1 className='relative title px-7 pt-24 md:pt-12 lg:pt-0 text-3xl md:text-5xl xl:text-6xl font-semibold text-transparent max-w-4xl bg-clip-text bg-linear-to-b from-white via-light  to-white leading-tight text-center'>
        Delivering Leads that  <br className='md:block hidden' /> Sales Welcome
      </h1>

      <span className=' relative text-lg md:text-xl lg:text-xl px-8 font-normal text-white leading-normal block max-w-2xl text-center '>
        Comprehensive Demand Generation with ROI in Mind</span>
      <div className='pt-5 relative'>
        <div className='md:block hidden'>
          <PrimaryButton onClick={() => navigate("/contact")} size="lg" text="Build your next campaign" />
        </div>
        <div className='md:hidden block'>
          <PrimaryButton onClick={() => navigate("/contact")} size="sm" text="Build your next campaign" />
        </div>

      </div>
    </div>
  )
}
