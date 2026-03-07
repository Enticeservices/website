export default function ServiceBanner({ title, subtitle }: { title: string, subtitle: string }) {
    return <div className="bg-linear-to-br from-primary-dark to-primary h-[30rem] grid grid-cols-30 md:grid-cols-12">
        <div className="flex gap-4 flex-col items-start justify-end col-start-2 pb-16 md:pb-20 lg:pb-24 col-end-30 md:col-end-12">
            <span className="text-light text-4xl font-bold">{title}</span>
            <span className="text-light text-sm md:text-base ">{subtitle}</span>
        </div>
    </div>
}