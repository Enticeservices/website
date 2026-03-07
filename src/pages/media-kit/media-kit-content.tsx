import { useState } from 'react'
import DownloadCard from '../../components/shared/download-card'
import DownloadForm from '../../components/shared/download-form'
import { SCRIPT_URL } from '../../consts'
import { useForm } from 'react-hook-form'
import { getAbsUrl } from '../../utils'
import mediaKitItems from '../../../public/media-kit/media-kit.json'


export default function MediaKitContent() {
    const [selectedMediaKit, setSelectedMediaKit] = useState<typeof mediaKitItems[0] | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { reset } = useForm()
    const handleDownloadClick = (mediaKit: typeof mediaKitItems[0]) => {
        setSelectedMediaKit(mediaKit)
    }


    const prefixThumbnail = "/media-kit/thumbnails/"
    const prefixPdf = "/media-kit/pdf-files/"

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFormSubmit = async (formData: any) => {
        setIsSubmitting(true)

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                formType: "media-kit",
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                pdfUrl: getAbsUrl(prefixPdf + selectedMediaKit?.pdfUrl as string),
                secret: "8f3a9c7b-42d1-4e92-a91b-1d93c6f7eab9",
                fileName: selectedMediaKit?.title
            })
        });

        reset();

        setIsSubmitting(false)
        setSelectedMediaKit(null)
    }

    const handleCloseForm = () => {
        setSelectedMediaKit(null)
    }

    return (
        <div className="grid grid-cols-30 md:grid-cols-12 pt-10 md:pt-20 pb-16 md:pb-32 bg-white">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <div>
                    <p className="text-base title md:text-xl lg:text-2xl leading-tight pr-10 md:pr-0 text-primary0dark mb-8 md:mb-12">
                        Download our brand assets and guidelines.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mediaKitItems.map((mediaKit, index) => (
                            <DownloadCard
                                key={index}
                                title={mediaKit.title}
                                subtitle={mediaKit.subtitle}
                                thumbnail={prefixThumbnail + mediaKit.thumbnail}
                                onDownloadClick={() => handleDownloadClick(mediaKit)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Download Form Modal */}
            {selectedMediaKit && (
                <DownloadForm
                    title={selectedMediaKit.title}
                    onSubmit={handleFormSubmit}
                    onClose={handleCloseForm}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    )
}
