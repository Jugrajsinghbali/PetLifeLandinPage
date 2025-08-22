import { useRef } from "react"
import VideoCard from "./VideoCard"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export default function VideoRow({ videos, rowTitle }) {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

    return (
        <div className="my-12 relative">
            <h2 className="text-2xl font-bold mb-4 px-2">{rowTitle}</h2>

            {/* Left Button */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition"
            >
                <ChevronLeftIcon className="w-6 h-6 text-orange-400" />
            </button>

            {/* Video List */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth px-12 py-2 scrollbar-hide"
            >
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        videoId={video.id}
                        title={video.title}
                        isAmilie={video.isAmilie}
                    />
                ))}
            </div>

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
