export default function ProductPage() {
    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Product Introduction</h1>

            {/* Hero section */}
            <div className="mb-8">
                <img
                    src="/flooring.jpg"
                    alt="Light brown wood flooring in a sunlit modern living room with a relaxed and welcoming atmosphere"
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            {/* Content sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Why choose our flooring?</h2>
                    <p className="text-gray-700">
                        Our pet-friendly flooring is designed with durability, comfort, and
                        safety in mind. It reduces scratches, provides better grip, and is
                        easy to clean.
                    </p>
                </div>
                <div>
                    <img
                        src="/chart1.png"
                        alt="Bar chart showing customer survey results with high satisfaction ratings for durability, comfort, and ease of cleaning"
                        className="rounded-lg shadow"
                    />
                </div>
            </div>

            {/* More examples */}
            <h2 className="text-2xl font-semibold mb-4">Customer Homes</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <img
                    src="/home11.png"
                    alt="Spacious living room with large windows, light wood flooring, and a playful dog lying on a rug in a cozy home environment"
                    className="rounded-lg shadow bg-amber-50 w-xs fit-cover"
                />
                <img
                    src="/home2.png"
                    alt="Modern kitchen with pet-friendly flooring, a cat sitting near a dining table, and bright natural light creating a cheerful mood"
                    className="rounded-lg shadow bg-amber-50 w-xs fit-cover"
                />
                <img
                    src="/flooring.jpg"
                    alt="Light brown wood flooring in a sunlit modern living room with a relaxed and welcoming atmosphere"
                    className="rounded-lg shadow bg-amber-50 w-xs fit-cover"
                />
            </div>
        </div>
    )
}
