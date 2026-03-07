import { useEffect, useState } from 'react'
import DownloadCard from '../../components/shared/download-card'
import DownloadForm from '../../components/shared/download-form'
import { SCRIPT_URL } from '../../consts'
import { useForm } from 'react-hook-form'
import { getAbsUrl } from '../../utils'
import caseStudies from '../../../public/case-study/case-study.json'


export default function CaseStudyContent() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { reset } = useForm()
    const handleDownloadClick = (caseStudy: typeof caseStudies[0]) => {
        setSelectedCaseStudy(caseStudy)
    }


    const prefixThumbnail = "/case-study/thumbnails/"
    const prefixPdf = "/case-study/pdf-files/"



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
                formType: "case-study",
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                pdfUrl: getAbsUrl(prefixPdf + selectedCaseStudy?.pdfUrl as string),
                secret: "8f3a9c7b-42d1-4e92-a91b-1d93c6f7eab9",
                fileName: selectedCaseStudy?.title
            })
        });

        reset();

        setIsSubmitting(false)
        setSelectedCaseStudy(null)
    }

    const handleCloseForm = () => {
        setSelectedCaseStudy(null)
    }
    useEffect(() => {
        if (selectedCaseStudy) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [selectedCaseStudy])

    return (
        <div className="grid grid-cols-30 md:grid-cols-12 pt-10 md:pt-20 pb-16 md:pb-32 bg-white">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <div >
                    <p className="text-base title md:text-xl lg:text-2xl leading-tight pr-10 md:pr-0 text-primary0dark mb-8 md:mb-12">
                        Explore and download our detailed case studies.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((caseStudy, index) => (
                            <DownloadCard
                                key={index}
                                title={caseStudy.title}
                                subtitle={caseStudy.subtitle}
                                thumbnail={prefixThumbnail + caseStudy.thumbnail}
                                onDownloadClick={() => handleDownloadClick(caseStudy)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Download Form Modal */}
            {selectedCaseStudy && (
                <DownloadForm
                    title={selectedCaseStudy.title}
                    onSubmit={handleFormSubmit}
                    onClose={handleCloseForm}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    )
}


