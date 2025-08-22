/* src/components/ProductCard.jsx */
export default function ProductCard({ img, name, price, rating, tags, description, onClick }) {
    return (
        <div
            className="min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition"
            onClick={onClick}
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter') onClick && onClick(); }}
        >
            {/* Image */}
            <div className="relative">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-500 font-bold text-xl">${price}</span>
                    <span className="text-xs text-gray-400">({rating}★)</span>
                </div>
                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                    {tags && tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
