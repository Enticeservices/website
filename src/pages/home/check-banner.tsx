import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'
import PrimaryButton from '../../components/primary-btn'

export default function Banner2() {
    const vantaRef = useRef<HTMLDivElement>(null)
    const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE: THREE,
                    speed: 3.10,
                    zoom: 1,
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0x393663,    // --color-primary (#393663)
                    midtoneColor: 0x2E21E4,      // --color-primary (#393663)
                    lowlightColor: 0x030121,     // --color-primary-dark (#030121)
                    baseColor: 0x393663          // --color-primary (#393663)
                })
            )
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div ref={vantaRef} className="relative h-dvh pb-10 lg:pb-20 min-h-[500px] flex flex-col items-center justify-center  place-items-center gap-6">

            <h1 className=' relative text-6xl font-semibold text-transparent max-w-4xl bg-clip-text bg-linear-to-b from-white via-light  to-white leading-tight text-center'>
                Delivering Leads That <br /> Sales Welcome!

            </h1>

            <span className=' relative text-2xl font-normal text-white leading-tight block max-w-2xl text-center '>
                The Partner Agencies Trust to Fuel Data-Driven Demand Generation and Buyer Engagement</span>
            <div className='pt-5 relative'>
                <PrimaryButton size="lg" text="Build your next campaign" />
            </div>
        </div>
    )
}
