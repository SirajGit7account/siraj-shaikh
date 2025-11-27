export default function Card1({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-full border-1 border-white/10 w-40 h-40 bg-white/5 rounded-3xl flex items-center justify-center z-10 ${className}`}>
            {/* Card content will go here */}
            <p className="text-white">Card 1</p>
        </div>
    )
}