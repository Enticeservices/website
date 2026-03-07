import { Helmet } from 'react-helmet-async'
import Banner from './banner2'
import AboutUs from './about-us'
import Process from './process'
import DataRepository from './data-repository'
import History from './history'
import WhyUs from './why-us'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Entice | B2B Demand Generation & Lead Generation Agency</title>
                <meta name="description" content="Entice is a B2B demand generation agency delivering high-intent leads through content syndication, BANT telemarketing, email nurture, and programmatic targeting powered by an 86M+ data repository." />
            </Helmet>
            <Banner />
            <AboutUs />
            <WhyUs />
            <Process />
            {/* <Stats /> */}
            <History />
            <DataRepository />
        </>
    )
}
