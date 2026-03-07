import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Zod schema for form validation
const downloadFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    phone: z.string().optional(),
})

type DownloadFormData = z.infer<typeof downloadFormSchema>

interface DownloadFormProps {
    title: string
    onSubmit: (data: DownloadFormData) => Promise<void>
    onClose: () => void
    isSubmitting?: boolean
}

export default function DownloadForm({ title, onSubmit, onClose, isSubmitting = false }: DownloadFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DownloadFormData>({
        resolver: zodResolver(downloadFormSchema)
    })

    const handleFormSubmit = async (data: DownloadFormData) => {
        await onSubmit(data)
        reset()
    }

    return (
        <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-primary-dark">Download {title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-700 hover:text-gray-900 text-2xl cursor-pointer size-10 border border-gray-300 rounded-full grid place-items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Please provide your details to download this resource.
                    </p>

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                        {/* First Name and Last Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    {...register('firstName')}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.firstName ? 'border-red-500' : 'border-primary/30'
                                        }`}
                                    placeholder="Enter your first name"
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    {...register('lastName')}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.lastName ? 'border-red-500' : 'border-primary/30'
                                        }`}
                                    placeholder="Enter your last name"
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-primary/30'
                                    }`}
                                placeholder="Enter your email address"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Phone (Optional) */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                {...register('phone')}
                                className="w-full px-3 py-2 border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-3 pt-4">

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex-1 py-3 px-4 cursor-pointer rounded-lg transition-colors font-medium ${isSubmitting
                                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                                    : 'bg-primary-dark hover:bg-primary-dark/90 text-white'
                                    }`}
                            >
                                {isSubmitting ? 'Processing...' : 'Download'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
