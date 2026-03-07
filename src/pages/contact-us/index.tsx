import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import ContactForm from './contact-form'
import contactBg from '../../assets/contact_banner.mp4'
import serviceContactData from '../../data/service-contact.json'

export default function ContactUs() {
    const [searchParams] = useSearchParams()
    const serviceParam = searchParams.get('service') as keyof typeof serviceContactData | null
    const content = serviceParam && serviceContactData[serviceParam] ? serviceContactData[serviceParam] : serviceContactData['default']

    return (
        <div className=''>
            <Helmet>
                <title>Contact Us | Entice – Get in Touch</title>
                <meta name="description" content="Contact Entice for tailored B2B demand generation solutions. Reach out to our team to discuss lead generation, content marketing, BPO, or market research for your business." />
            </Helmet>
            <div className="relative 2xl:h-[36rem] lg:h-[32rem] md:h-[28rem] h-[24rem] grid grid-cols-32 md:grid-cols-12 bg-primary-dark overflow-hidden max-w-[100vw]">
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover"
                        src={contactBg}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className='absolute inset-0 bg-linear-to-b from-transparent via-primary-dark/70 to-primary-dark z-20'></div>
                </div>

                <div className='relative col-start-2 col-end-32 md:col-end-12 flex flex-col gap-2 pt-10 md:pt-16 pb-10 lg:py-20 justify-end h-full z-20'>
                    <span className='title text-3xl md:text-4xl xl:text-4xl xl:text-6xl font-medium text-light leading-snug max-w-xl'>Contact us</span>
                    <span className='text-sm md:text-base xl:text-base 2xl:text-xl text-white/90 leading-relaxed  pr-6 md:pr-0 pt-2 block max-w-xs'>Ready to scale your B2B growth? Let’s start the conversation.</span>
                </div>
            </div>

            {/* Service Info Block */}
            <div className='bg-primary/5 py-12 md:py-16'>
                <div className='grid grid-cols-30 md:grid-cols-12'>
                    <div className='col-start-2 col-end-30 md:col-end-12'>
                        {content.serviceInfo && (
                            <div>
                                <h4 className="text-xs font-bold text-primary-dark uppercase tracking-widest mb-3">
                                    {content.serviceInfo.subtitle}
                                </h4>
                                <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 title">
                                    {content.serviceInfo.title}
                                </h3>
                                <div className='grid md:grid-cols-2 pt-10 grid-cols-1 w-full gap-6'>
                                    <div className='grid gap-10 '>
                                        <p className="text-xs block max-w-md lg:text-base text-gray-700 leading-relaxed mb-2">
                                            {content.serviceInfo.description1}
                                        </p>
                                        <p className="text-xs block max-w-md lg:text-base text-gray-700 leading-relaxed">
                                            {content.serviceInfo.description2}
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p className="text-xs block max-w-md lg:text-base text-gray-700 leading-relaxed">
                                            {content.serviceInfo.description3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='2xl:py-32 xl:py-28  lg:py-24 md:py-20 py-16 '>
                <div className='grid grid-cols-26 md:grid-cols-12'>
                    <div className='col-start-2 col-end-26 md:col-end-12 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div className='lg:pt-10'>
                            <span className='2xl:text-5xl xl:text-4xl title lg:text-3xl text-2xl font-semibold leading-tight max-w-sm block text-primary-dark'>
                                Tired of shouting into the B2B void?
                            </span>

                            <span className='2xl:text-lg lg:text-base md:text-sm text-sm pr-6 md:pr-0 leading-relaxed max-w-md pt-4 md:pt-6 block text-primary-dark/90'>
                                Let’s make your brand the signal, not the noise. We’re a team of B2B storytellers, designers, and digital strategists who help tech companies cut through the clutter, connect with their ideal customers, and drive real business results.
                            </span>
                            <div className='pt-2 md:pt-6'>
                                <div className='grid gap-1 place-items-start pt-6'>
                                    <span className='text-sm md:text-sm'>Email:</span>
                                    <a
                                        href="mailto:info@enticeservices.com"
                                        className="lg:text-base md:text-base text-sm font-medium text-primary-dark hover:underline focus:underline"
                                    >
                                        info@enticeservices.com
                                    </a>
                                </div>
                                <div className='grid gap-1 place-items-start pt-6'>
                                    <span className='text-sm md:text-sm'>Phone:</span>
                                    <a
                                        href="tel:+918421882648"
                                        className='lg:text-base md:text-base text-sm font-medium text-primary-dark hover:underline focus:underline'
                                    >
                                        +91 8421882648
                                    </a>
                                </div>
                                <div className='grid gap-1 place-items-start pt-6'>
                                    <span className='text-sm md:text-sm'>Address:</span>
                                    <span className='lg:text-base pr-6 md:text-base text-sm font-medium text-primary-dark'>411 LMS finswell,Viman Nagar 411014</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
