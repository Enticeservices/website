interface DownloadCardProps {
    title: string
    subtitle: string
    thumbnail: string
    onDownloadClick: () => void
}

export default function DownloadCard({ title, subtitle, thumbnail, onDownloadClick }: DownloadCardProps) {
    return (
        <div className="bg-white border p-0.5 md:p-1 lg:p-2 flex flex-col border-gray-200 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-primary ">
            <div className="basis-40 md:basis-56 lg:basis-72 flex-0 bg-gray-200 border rounded-xl border-gray-300 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Fallback to gray background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Add a fallback text or icon
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-text flex items-center justify-center h-full text-gray-500';
                            fallback.textContent = 'Image not available';
                            parent.appendChild(fallback);
                        }
                    }}
                />
            </div>
            <div className="px-2 pt-4 flex flex-col flex-1 pb-4">
                <div className="flex-1">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
                    <p className="text-gray-600 mb-4 text-xs md:text-sm">{subtitle}</p>
                </div>
                <div className="pt-6">
                    <button
                        onClick={onDownloadClick}
                        className="w-full rounded-xl cursor-pointer bg-primary-dark text-white px-4 py-2.5 md:py-2 lg:py-3 text-xs md:text-sm hover:bg-primary-dark/90 
                        outline-2 outline-solid outline-offset-2 hover:outline-primary-dark transition-colors font-medium"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    )
}
