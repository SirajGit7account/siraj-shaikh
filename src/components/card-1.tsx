export default function Card1({ className = '' }: { className?: string }) {
    return (
        <div className={`w-80 h-80 bg-white/5 rounded-lg flex items-center justify-center z-10 ${className}`}>
            {/* Card content will go here */}
            <p className="text-white">Card 1</p>
        </div>
    )
}