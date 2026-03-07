import { Helmet } from "react-helmet-async";
import Stats from "../home/stats"
import AboutServices from "./about"
import Banner from "./banner"

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services | Entice – B2B Lead Generation & Marketing Solutions</title>
                <meta name="description" content="Explore Entice's full suite of B2B services: lead generation, business process outsourcing, content marketing, and market research — all powered by an 86M+ verified data repository." />
            </Helmet>
            <Banner />
            <Stats />
            <AboutServices />
        </>
    )
}
