import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SCRIPT_URL } from '../../consts'

// Zod schema for form validation
const contactFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(1, 'Last name is required').min(2, 'Last name must be at least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    subject: z.string().min(1, 'Subject is required').min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters')
})

type ContactFormData = z.infer<typeof contactFormSchema>



export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })



    const onSubmit = async (data: ContactFormData) => {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                formType: "contact",
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                subject: data.subject,
                message: data.message,
                secret: "8f3a9c7b-42d1-4e92-a91b-1d93c6f7eab9"
            })
        });

        reset();
    };


    return (
        <div className=" p-3 md:p-4 max-w-2xl ml-auto bg-light lg:p-6 xl:p-8 rounded-2xl outline outline-offset-2 outline-primary-dark/20 border border-primary-dark/20">
            <h2 className="text-lg  md:text-lg lg:text-xl xl:text-2xl font-semibold text-primary-dark  mt-2 md:mt-0 mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                            className={`w-full px-3 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.firstName ? 'border-red-500' : 'border-primary/30'
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
                            className={`w-full px-3 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.lastName ? 'border-red-500' : 'border-primary/30'
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
                        className={`w-full px-3 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-primary/30'
                            }`}
                        placeholder="Enter your email address"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        {...register('subject')}
                        className={`w-full px-3 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-primary/30'
                            }`}
                        placeholder="Enter the subject of your message"
                    />
                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        className={`w-full px-3 py-2 border text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical ${errors.message ? 'border-red-500' : 'border-primary/30'
                            }`}
                        placeholder="Enter your message here..."
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full cursor-pointer py-3 px-4 outline outline-offset-2 outline-primary rounded-full transition-all duration-300 font-medium ${isSubmitting
                        ? 'bg-light cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-dark '
                        } text-white`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}