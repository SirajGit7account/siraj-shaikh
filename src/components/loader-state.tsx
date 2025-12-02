import { useState, useEffect } from 'react'

export default function LoaderState() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (percentage < 100) {
            const timeout = setTimeout(() => {
                setPercentage(prev => Math.min(prev + Math.floor(Math.random() * 7) + 1, 100));
            }, 30);
            return () => clearTimeout(timeout);
        }
    }, [percentage]);

    return percentage < 100 ? (
        <div className="absolute inset-0 flex items-start justify-center z-50 pt-12">
            <span className="text-4xl font-bold text-white/50 font-mono text-center flex items-center justify-center w-full">
                {percentage}%
            </span>
        </div>
    ) : null;
}