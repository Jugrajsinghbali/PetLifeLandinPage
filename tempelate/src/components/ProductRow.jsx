/* src/components/ProductRow.jsx */
import { useRef } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import ProductCard from "./ProductCard"

export default function ProductRow({ products, title = "Products" }) {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            })
        }
    }
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="relative w-full py-8">
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            {/* Scroll Row */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-12 scrollbar-hide"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition"
            >
                <ChevronLeftIcon className="w-6 h-6 text-orange-400" />
            </button>

            {/* Right Button */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition"
            >
                <ChevronRightIcon className="w-6 h-6 text-orange-400" />
            </button>
        </div>
    )
}
