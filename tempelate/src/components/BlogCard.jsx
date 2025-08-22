/* src/components/BlogCard.jsx */
export default function BlogCard({ img, date, title, tags }) {
    return (
        <div className="min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-sm text-gray-500">{date}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-800 line-clamp-2">
                    {title}
                </h3>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
