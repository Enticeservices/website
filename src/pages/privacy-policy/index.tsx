import { Helmet } from "react-helmet-async";
import banner from "../../assets/privacy.png"

export default function PrivacyPolicy() {
    return (
        <div className="">
            <Helmet>
                <title>Privacy Policy | Entice</title>
                <meta name="description" content="Understand how Entice collects, uses, and protects your personal data. Our Privacy Policy outlines our GDPR-compliant practices for handling business and subscriber information." />
            </Helmet>
            <div className="  ">
                <div>
                    <div className="  relative flex items-center justify-center h-[16rem] lg:h-[24rem] xl:h-[30rem] pt-10 ">
                        <div className="absolute inset-0">
                            <img className="h-full w-full object-cover object-center" src={banner} alt="" />
                        </div>
                        <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold text-white mt-6 lg:mt-10">Privacy Policy</h1>
                    </div>
                    <div className=" bg-light py-6 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
                        <div className="prose prose-lg max-w-4xl mx-auto  space-y-6">

                            <section>
                                <span className="text-2xl md:text-3xl font-bold text-primary-dark">Privacy Policy</span>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">1. Introduction</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    At Entice Services ("Entice Business Support Services Pvt.Ltd."), your privacy is a priority. This Privacy Notice ("Notice") outlines our policies and practices concerning the collection and use of information that you submit to us or that we collect through various channels (such as our websites, written correspondence, including email, or through any of our global offices). When we use "Entice," "we," "us," or "our," it refers to our entire company, including our divisions, subsidiaries, and affiliates.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    This Notice aims to inform you about the types of personal data we collect, the purposes for which we use the data, and how we handle it. We also aim to fulfill the transparency obligation under the EU General Data Protection Regulation 2016/679 ("GDPR") and national laws implementing GDPR.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Please read this Notice carefully to understand our policies and practices regarding your data and how we treat it. If you do not agree with our policies and practices, your choice is not to use our websites or services. By accessing or using our websites, you agree to this Notice, subject to your rights as provided in this Notice or applicable law. This Notice may change from time to time (see Section 16 "Changes to Our Notice").
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">2. The Data We Collect</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Generally, we collect personal data from two groups: our marketing customers and subscribers. "Personal data" means information that personally identifies someone or relates to an identified or identifiable person, in accordance with applicable law.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>Business Customer Data:</strong> When we enter a relationship with our business customers, we collect personal data necessary to provide our services, such as name, business contact information (phone number, email address, mailing address), company name, job title, and billing information. We may also collect additional information provided by our customers when they communicate with us.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>Subscriber Data:</strong> We collect certain information about individuals who subscribe to our content, including name, business contact details (phone number, email address, mailing address), company name, and job title. This information may be publicly available or provided directly to us by customers or third-party providers, as allowed by applicable law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">3. How We Collect Your Personal Data</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>Through Entice Websites:</strong> Customers and leads may visit our websites and communicate with us. You can generally browse our websites without identifying yourself or revealing any personal data. However, you may choose to provide personal data (e.g., via 'say hello' or 'let’s connect' web forms). You may also make information requests or register to receive materials on our websites.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>From You:</strong> You may provide us additional personal data, for example, by contacting us by phone or mail or when registering for corporate events. In such cases, we collect your contact information and any communication details.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>From Other Sources:</strong> We may collect information, including personal data, from publicly available sources or other third parties. Such data will be treated per this Notice, and we will respect your rights as described herein.
                                </p>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    <strong>Through Your Browser or Device:</strong> We collect certain data automatically when you use our websites. For more details, see Section 9 ("Aggregate Information About Entice Online Visitors") and Section 10 ("Use of Cookies").
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">4. How We Use Your Personal Data</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We use the information you provide in connection with your business relationship with Entice for legitimate business purposes, including:
                                </p>
                                <ul className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4 list-disc pl-6">
                                    <li>To present our websites and their contents to you;</li>
                                    <li>To provide the services, products, or information you request;</li>
                                    <li>To better understand your needs and provide better service;</li>
                                    <li>To plan and host corporate events and to create online profiles for attendees;</li>
                                    <li>To contact you for market research or provide marketing information, with your consent;</li>
                                    <li>To carry out obligations or enforce rights arising from contracts between you and us;</li>
                                    <li>To prevent fraud, unauthorized transactions, claims, and other liabilities;</li>
                                    <li>To notify you about changes to our websites, products, or services;</li>
                                    <li>To comply with applicable legal requirements; and</li>
                                    <li>Otherwise, as described to you when you provide the data.</li>
                                </ul>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Credit card information is used solely for payment processing and related purposes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">5. Legal Basis for Processing Personal Data</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    The main grounds for processing your personal data under GDPR include:
                                </p>
                                <ul className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4 list-disc pl-6">
                                    <li><strong>Necessary for Contract Performance:</strong> To perform obligations related to providing a service or taking steps to enter into a contract.</li>
                                    <li><strong>Legal Obligation:</strong> To comply with legal requirements that may require processing or disclosing personal data to authorities.</li>
                                    <li><strong>Legitimate Interests:</strong> To process personal data for Entice's or a third party's legitimate interests, provided these interests are not overridden by your rights.</li>
                                    <li><strong>Consent:</strong> We may seek your consent to process personal data in certain ways.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">6. Sharing Your Personal Data</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We may share your personal data:
                                </p>
                                <ul className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4 list-disc pl-6">
                                    <li><strong>With Entice Affiliates:</strong> Both inside and outside the European Economic Area ("EEA").</li>
                                    <li><strong>With Third-Party Service Providers:</strong> We share data with trusted third parties who are bound by confidentiality obligations and use the data only for specified purposes.</li>
                                    <li><strong>With Our Customers:</strong> Lead information may be shared with customers, but sensitive personal data is not shared.</li>
                                    <li><strong>As Required by Law:</strong> We may disclose data in compliance with applicable law or legal processes.</li>
                                    <li><strong>To New Business Owners:</strong> If Entice merges or is acquired, data may be shared with new owners.</li>
                                    <li><strong>Otherwise with Your Consent:</strong> As described when you provide the data.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">7. Retention of Your Information</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We retain personal data for the time necessary to fulfill the purposes outlined in this Notice or as required by law. You may request that we stop processing or delete your personal data at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">8. Your Rights</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    You have rights concerning your personal data, including:
                                </p>
                                <ul className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4 list-disc pl-6">
                                    <li><strong>Access:</strong> Request a copy of your personal data.</li>
                                    <li><strong>Correction or Completion:</strong> Request rectification of inaccurate or incomplete data.</li>
                                    <li><strong>Erasure:</strong> Request deletion of personal data in certain circumstances.</li>
                                    <li><strong>Object or Restrict Processing:</strong> Object to or restrict how we use your data.</li>
                                    <li><strong>Data Portability:</strong> Receive personal data in a structured, machine-readable format.</li>
                                    <li><strong>Revoke Consent:</strong> Withdraw consent for specific processing activities.</li>
                                </ul>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    To exercise these rights, contact us using the details in the "Contact Us" section below.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">9. Aggregate Information About Entice Online Visitors</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We collect aggregate data regarding website usage to understand what is beneficial to users and improve our services. This information is not personally identifiable.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">10. Use of Cookies</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We use cookies to track behavior on our websites to improve performance and user experience. The data collected through cookies is anonymized unless you provide personal data.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">11. Complaints</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    If you are unhappy about our use of your data, contact us as described below. You may also lodge a complaint with the UK Information Commissioner’s Office or other relevant authorities.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">12. Security</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We implement measures to secure the personal data we collect and store. However, the safety of your data also depends on you, and we ask you not to share passwords provided by us.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">13. Third-Party Websites</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Our websites may contain links to third-party websites. We are not responsible for their privacy practices, and you should consult their policies directly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">14. Internet-Based Transfers</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    The use of the Internet to collect and process personal data involves transmission globally. We take measures to protect your data, but any transmission is at your own risk.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">15. Do Not Track</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Our websites do not respond to browser Do Not Track settings.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">16. Changes to Our Notice</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    We may update this Notice periodically. Changes will be posted on this page, and significant changes will be communicated through email or a website notice.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">17. California Privacy Rights (CCPA)</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    California residents may find more information about their rights under our Privacy Notice for California Residents.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">18. Children’s Privacy (COPPA)</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    Our services are not directed at children under 16, and we do not knowingly collect their data. If you believe we may have collected data from a child under 16, please contact us.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-base xl:text-2xl font-semibold text-primary-dark mb-2">19. Contact Us</h2>
                                <p className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4">
                                    For inquiries regarding our privacy practices or to exercise your rights, please contact us:
                                </p>
                                <ul className="text-primary-dark/90 text-sm md:text-base md:pr-6 pr-4 list-none pl-0">
                                    <li><strong>Privacy Team:</strong> <a href="mailto:DPO@enticeservices.com" className="text-primary underline">dpo@enticeservices.com</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
