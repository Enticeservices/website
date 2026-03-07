declare module 'vanta/dist/vanta.topology.min' {
    interface VantaTopologyOptions {
        el: HTMLElement | null
        p5: unknown
        mouseControls?: boolean
        touchControls?: boolean
        gyroControls?: boolean
        minHeight?: number
        minWidth?: number
        scale?: number
        scaleMobile?: number
        color?: number
        backgroundColor?: number
    }

    interface VantaEffect {
        destroy: () => void
    }

    export default function TOPOLOGY(options: VantaTopologyOptions): VantaEffect
}

declare module 'vanta/dist/vanta.fog.min' {
    interface VantaFogOptions {
        el: HTMLElement | null
        THREE: unknown
        mouseControls?: boolean
        touchControls?: boolean
        gyroControls?: boolean
        minHeight?: number
        minWidth?: number
        speed?: number
        zoom?: number
        highlightColor?: number
        midtoneColor?: number
        lowlightColor?: number
        baseColor?: number
    }

    interface VantaEffect {
        destroy: () => void
    }

    export default function FOG(options: VantaFogOptions): VantaEffect
}

declare module 'p5' {
    const p5: unknown
    export = p5
}

