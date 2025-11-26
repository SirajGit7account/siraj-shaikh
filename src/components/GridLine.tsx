// Simple reusable grid line component
// Use this to draw lines anywhere on your page

type GridLineProps = {
  orientation: 'horizontal' | 'vertical'
  position: string // e.g., "top-10", "left-[20%]", etc.
  className?: string
  isFixed?: boolean // If true, line stays fixed to viewport. If false, scrolls with content.
}

export default function GridLine({ 
  orientation, 
  position, 
  className = '',
  isFixed = false
}: GridLineProps) {
  const positionType = isFixed ? 'fixed' : 'absolute'
  
  if (orientation === 'horizontal') {
    // Horizontal line: full width from edge to edge
    return (
      <div 
        className={`${positionType} ${position} left-0 right-0 h-[1px] bg-white/10 pointer-events-none z-[100] ${className}`}
      />
    )
  } else {
    // Vertical line: full height from top to bottom
    return (
      <div 
        className={`${positionType} ${position} top-0 bottom-0 w-[1px] bg-white/10 pointer-events-none z-[100] ${className}`}
      />
    )
  }
}

