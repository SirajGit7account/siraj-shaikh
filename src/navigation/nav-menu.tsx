import { Link } from "@tanstack/react-router"

type NavMenuProps = {
  position: string // e.g., "top-10", "left-[20%]", etc.
  className?: string
  isFixed?: boolean // If true, menu stays fixed to viewport. If false, scrolls with content.
  orderoflinks: string[]
}

export default function NavMenu({
  position,
  orderoflinks
}: NavMenuProps) {  
  
  return (
    <div
      className={`absolute ${position} right-[50px] flex flex-col items-start gap-0 p-4 z-[120]`}
    >
      {orderoflinks.map((link, idx) => (
        <Link
          key={link}
          to={link}
          className={`text-white font-mono${idx !== orderoflinks.length - 1 ? ' mb-6' : ''}`}
        >
          {link}
        </Link>
      ))}
    </div>
  )
}
