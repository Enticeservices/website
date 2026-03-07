export default function DataRepository() {
    return (
        <div className="grid grid-cols-30 md:grid-cols-12 py-12  md:py-16 bg-radial from-primary to-primary-dark lg:py-24">
            <div className="col-start-2 md:col-end-12 col-end-29">
                <span className="text-2xl title md:text-2xl xl:text-3xl font-semibold leading-tight max-w-3xl block text-light">
                    Data That Works. Insights That Win.
                </span>
                <span className="text-xs md:text-sm lg:text-base pt-6 leading-relaxed max-w-md block text-light/90">
                    We navigate the intricate layers of global business data to transform raw information into actionable insights that guide your strategic decision-making.
                </span>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 col-start-2 pt-8 lg:pt-16  col-end-30 md:col-end-12 max-w-6xl">
                <DataCard title="Growth in revenue" value="30%" />
                <DataCard title="Global B2B Audience" value="50M+" />
                <DataCard title="Leads Processed <br /> Annually" value="500k+" />
                <DataCard title="Data Compliant" value="100%" />
            </div>
        </div>
    )
}

function DataCard({ value, title }: { value: string, title: string }) {
    return (
        <div className="space-y-3 border-l-2 py-4 flex flex-col border-primary-dark/80 pl-4 md:pl-6 lg:pl-10 col-span-1">
            <span className="text-3xl  lg:text-4xl flex-1 font-semibold leading-tight max-w-3xl block  from-secondary bg-linear-to-b text-transparent bg-clip-text to-secondary-light">{value}</span>
            <span dangerouslySetInnerHTML={{ __html: title }} className="text-sm md:text-sm lg:textbase font-medium text-light"></span>
        </div>
    )
}
