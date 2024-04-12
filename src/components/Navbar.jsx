"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#f5f5f5] flex items-center justify-between px-4 py-2 shadow-md">
      <Link className="flex items-center" href="#">
        <ScissorsIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">Yarn Odyssey</span>
      </Link>
      <form className="flex-1 mx-8">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="w-full bg-white shadow-none appearance-none pl-8"
            placeholder="Search products..."
            type="search"
          />
        </div>
      </form>
      <nav className="flex items-center gap-6">
        <Link className="text-sm font-medium hover:underline" href="#">
          Yarn
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Needles
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Patterns
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Accessories
        </Link>
        <Link className="ml-4" href="#">
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>
      </nav>
    </header>
  )
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}