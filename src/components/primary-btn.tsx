export default function PrimaryButton({ text, size = 'md', withIcon = true, onClick }: { onClick?: () => void, text: string, size?: 'sm' | 'md' | 'lg', withIcon?: boolean }) {
    return (
        <button onClick={() => onClick?.()} className={`bg-primary-dark outline outline-solid outline-offset-2 outline-primary cursor-pointer flex items-center justify-between gap-4 text-white rounded-full ring-offset-1 group ${size === 'lg' ? 'h-12 md:h-14 pl-8 pr-3 py-3 text-sm md:text-lg'
            : size === 'sm' ? 'text-xs h-8 pl-4 pr-1 py-1 gap-2'
                : 'text-sm md:text-base h-10 md:h-11 pl-6 pr-1 py-2'
            }`}>
            {text}
            {withIcon && (
                <div className={`grid place-items-center bg-secondary rounded-full ${size === 'sm' ? 'size-6' : 'size-7 md:size-9'}`}>
                    <svg width="21" height="12" className={`-rotate-45 group-hover:rotate-0 transition-all duration-300 ${size === 'sm' ? 'scale-50' : 'scale-60 md:scale-90'}`} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5388 0.228462L20.5028 5.19251C20.8075 5.49712 20.8075 5.99102 20.5028 6.29564L15.5388 11.2597C15.2341 11.5643 14.7402 11.5643 14.4357 11.2597C14.1311 10.955 14.1311 10.4611 14.4357 10.1565L18.0681 6.52409H0V4.96405H18.0681L14.4357 1.33158C14.1311 1.02697 14.1311 0.533085 14.4357 0.228462C14.7402 -0.076154 15.2341 -0.076154 15.5388 0.228462Z" fill="white" />
                    </svg>
                </div>
            )}
        </button>
    )
}