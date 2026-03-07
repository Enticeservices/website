import { useNavigate } from "react-router"
import PrimaryButton from "../../components/primary-btn"

type Pointer = {
    title: string
    id: number
    description: string
    extra?: string
    slug?: string
}

export default function Pointers({ data, service }: { data: Array<Pointer>, service?: string }) {
    return (
        <section className="py-16 md:py-24 grid grid-cols-30 md:grid-cols-12">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <div className="grid grid-cols-1 divide-y-1 divide-solid divide-primary">
                    {data.map((pointer, index) => (
                        <Card pointer={pointer} service={service} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}


function Card({ pointer, service }: { pointer: Pointer, service?: string }) {
    const navigate = useNavigate()

    return <article>
        <div key={pointer.id} className="flex  h-full p-6 ">
            <div className="flex gap-6 basis-1/2">
                <div className="text-sm mt-1.5 font-bold text-primary/80 grid place-items-center bg-primary/5 size-8 rounded-full border border-primary/30 mb-6">
                    {pointer.id.toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark max-w-sm mb-4 leading-tight">{pointer.title}</h3>
            </div>
            <div className="basis-1/2 max-w-3xl">
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {pointer.description}
                </p>
                <PrimaryButton text="Get started" onClick={() => navigate(`/contact${pointer.slug ? `?service=${pointer.slug}` : service ? `?service=${service}` : ''}`, { state: {} })} size="sm" />
            </div>
            {pointer.extra && (
                <div className="mt-auto ">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {pointer.extra}
                    </span>
                </div>
            )}
        </div>
    </article>

}