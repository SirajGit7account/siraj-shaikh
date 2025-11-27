type NameTextProps = {
  className?: string
}

export default function NameText({ className = '' }: NameTextProps) {
  return (
    <div 
      className={`
        absolute
        text-2xl
        font-mono
        text-white/60
        pointer-events-none
        z-[101]
        ${className}
      `}
    >
      Siraj Shaikh
    </div>
  )
}

