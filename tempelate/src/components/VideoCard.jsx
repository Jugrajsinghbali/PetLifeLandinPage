export default function VideoCard({ videoId, title, isAmilie }) {
    return (
        <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
            {isAmilie ? (
                // Amilie → redirect
                <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                </a>
            ) : (
                // Others → embed directly
                <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
            <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{title}</h3>
            </div>
        </div>
    )
}
