import { useEffect, useState } from "react"

const slides = [
    {
        id: 1,
        img: "/hero1.png",
        text: "Creating Pet-Friendly Homes for Every Family",
    },
    {
        id: 2,
        img: "/hero2.png",
        text: "A Happier Life Together with Pets",
    },
    {
        id: 3,
        img: "/hero1.png",
        text: "Safe, Sustainable, and Comfortable Living Spaces",
    },
    {
        id: 4,
        img: "/blog1.png",
        text: "Designs Made with Pets and People in Mind",
    },
]

export default function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000) // switch every 5s
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Zoom effect */}
                    <img
                        src={slide.img}
                        alt={slide.text}
                        className="w-full h-full object-cover transform scale-105 animate-zoom"
                    />

                    {/* Overlay text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <h1 className="text-4xl md:text-6xl font-bold text-white text-center max-w-3xl">
                            {slide.text}
                        </h1>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition ${current === index
                                ? "bg-white scale-125"
                                : "bg-gray-400/70 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            
            
        </div>
    )
}
