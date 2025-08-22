/* src/components/Footer.jsx */
export default function Footer() {
    return (
        <footer className="w-full ">
            {/* Top orange navigation bar */}
            <div className="bg-orange-600 text-white py-2">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 font-semibold">
                    <a href="#" className="hover:underline">New Videos</a>
                    <a href="#" className="hover:underline">Latest Articles</a>
                    <a href="#" className="hover:underline">New housing examples</a>
                    <a href="#" className="hover:underline">Popular article ranking</a>
                    <a href="#" className="hover:underline">Pet-friendly housing experts</a>
                    <a href="#" className="hover:underline">AMILIE MAGAZINE electronic version</a>
                    <a href="#" className="hover:underline">Pet-friendly housing materials</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">Inquiry</a>
                </div>
            </div>

            {/* Bottom section */}
            <div className="bg-white py-2">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3">
                    {/* Left links */}
                    <div className="flex gap-6 flex-wrap justify-center">
                        <a href="#" className="hover:underline">AMILIE</a>
                        <a href="#" className="hover:underline">Operating company</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-right">
                        Copyright © Pet Lifestyle Co., Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
