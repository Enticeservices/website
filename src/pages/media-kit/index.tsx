import { Helmet } from 'react-helmet-async'
import Banner from './banner'
import MediaKitContent from './media-kit-content'

export default function MediaKit() {
    return (
        <div>
            <Helmet>
                <title>Media Kit | Entice – Brand Assets & Press Resources</title>
                <meta name="description" content="Access Entice's official media kit including brand guidelines, logos, press materials, and company information for journalists, partners, and analysts." />
            </Helmet>
            <Banner />
            <MediaKitContent />
        </div>
    )
}
