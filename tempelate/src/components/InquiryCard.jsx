import { Link } from "react-router-dom"
export default function InquiryCard() {
    return (
        <div className="bg-[#E99572] rounded-3xl p-8 text-center text-white relative max-w-3xl mx-auto mt-12 shadow-lg">
            {/* Paw prints (top left) */}
            <div className="absolute top-4 left-4 text-3xl">🐾</div>
            <div className="absolute top-12 left-10 text-2xl">🐾</div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Housing consultation desk
            </h2>

            {/* Description */}
            <p className="mb-6 text-lg">
                We offer free housing consultations to help pet lovers live happily
                together. Please feel free to contact us.
            </p>

            {/* Pet images */}
            <div className="flex justify-center gap-6 mb-6">
                <img src="/inquiry1.png" alt="Cat" className="h-20" />
                <img src="/inquiry1.png" alt="Dog" className="h-20" />
                <img src="/inquiry1.png" alt="Dog" className="h-20" />
            </div>

            {/* Inquiry button */}
                <Link
                    to="/inquiry"
                    className="inline-flex items-center justify-center bg-white text-[#E99572] font-semibold text-lg px-8 py-3 rounded-full shadow-md 
                 hover:bg-gray-100 transform transition-transform duration-300 hover:scale-110"
                >
                    inquiry <span className="ml-2">➝</span>
                </Link>

            {/* Paw prints (bottom right) */}
            <div className="absolute bottom-4 right-4 text-3xl">🐾</div>
            <div className="absolute bottom-12 right-10 text-2xl">🐾</div>
        </div>
    )

}
