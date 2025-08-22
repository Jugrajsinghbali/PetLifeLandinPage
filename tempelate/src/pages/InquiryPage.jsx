import FooterSection from "../components/FooterSection"
import InquiryForm from "../components/InquiryForm"

export default function InquiryPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-72 bg-gray-800 text-white flex items-center justify-center">
                <img
                    src="/inquiry2.jpg"
                    alt="Inquiry Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 text-center">
                    <p className="text-lg">Contact</p>
                    <h1 className="text-4xl md:text-5xl font-bold">Inquiry</h1>
                </div>
            </section>

            <section className="max-w-lg mx-auto my-4 px-4">
                <div className="border-t border-gray-300 mb-6"></div>
                <InquiryForm className="text-sm" />
            </section>

            <section className="bg-[#FFF8E7] py-8">
                <FooterSection />
            </section>
        </div>
    )
}
