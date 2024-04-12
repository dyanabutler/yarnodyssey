"use client"
import Link from "next/link"

export default function Component() {
  return (
    <section
      className="w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage: "\"url('/placeholder.svg')\"",
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Our Online Store</h1>
        <p className="mt-4 text-xl md:text-2xl text-white">
          Discover our exclusive collection and enjoy member-only perks
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <Link
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href="#"
          >
            Shop
          </Link>
          <Link
            className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href="#"
          >
            Join for perks
          </Link>
        </div>
      </div>
    </section>
  )
}