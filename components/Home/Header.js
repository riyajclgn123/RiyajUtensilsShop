"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';


export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Avatar dropdown for reuse
  const avatarDropdown = (
    <div className="avatar items-center">
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost btn-circle">
          <Image
            src="/Images/logo.jpg"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <hr />
          <li>
            <Link href="/setting">Settings</Link>
          </li>
          <li>
            <button
              className="text-red-700 font-bold text-left w-full"
              onClick={() => signOut()}
              type="button"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </details>
    </div>
  );

  return (
    <header className="w-full bg-gray-800 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Images/logo.jpg"
                alt="logo"
                width={48}
                height={48}
                className="rounded-full border-2 border-yellow-400 shadow"
              />
            </Link>
            <span className="ml-3 text-xl font-extrabold text-yellow-400 tracking-tight hidden sm:block">
              Riyaj Utensils Shop
            </span>
          </div>

          {/* Centered Nav Menu */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-2 bg-gray-700 rounded-full px-6 py-2 shadow-lg border border-gray-600">
            <Link href="/" className="px-4 py-2 rounded-full text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition">
              Home
            </Link>
            <div className="relative">
  <button
    className="px-4 py-2 rounded-full text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition cursor-pointer select-none list-none"
    onClick={() => setProductsOpen((open) => !open)}
    onBlur={() => setTimeout(() => setProductsOpen(false), 150)} // closes on blur
    type="button"
  >
    Products
  </button>
  {productsOpen && (
    <ul className="absolute left-0 mt-2 menu dropdown-content bg-base-100 rounded-box z-50 w-56 p-2 shadow-lg text-yellow-500">
                      <li>
        <Link href="/products" onClick={() => setProductsOpen(false)}>All Products</Link>
      </li>
      <hr />
      <li>
        <Link href="/copper" onClick={() => setProductsOpen(false)}>Copper</Link>
      </li>
      <li>
        <Link href="/brass" onClick={() => setProductsOpen(false)}>Brass</Link>
      </li>
      <li>
        <Link href="/bronze" onClick={() => setProductsOpen(false)}>Bronze</Link>
      </li>
      <li>
        <Link href="/aluminium" onClick={() => setProductsOpen(false)}>Aluminium</Link>
      </li>
      <li>
        <Link href="/plastic" onClick={() => setProductsOpen(false)}>Plastic</Link>
      </li>
      <li>
        <Link href="/iron" onClick={() => setProductsOpen(false)}>Iron</Link>
      </li>
      <li>
        <Link href="/ceramicwood" onClick={() => setProductsOpen(false)}>Ceramic Woods</Link>
      </li>
      <li>
        <Link href="/homeutensils" onClick={() => setProductsOpen(false)}>Home Utensils</Link>
      </li>
      <li>
        <Link href="/silverplateditem" onClick={() => setProductsOpen(false)}>Silver-Plated Items</Link>
      </li>
    </ul>
  )}
</div>
            <Link href="/offers" className="px-4 py-2 rounded-full text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition">
              Offers
            </Link>
            <Link href="/aboutus" className="px-4 py-2 rounded-full text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/contacts" className="px-4 py-2 rounded-full text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition">
              Contacts
            </Link>
          </nav>

          {/* Avatar or Sign In */}
          <div className="hidden md:block">
            {session ? (
              avatarDropdown
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full text-yellow-400 hover:bg-gray-700 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            <svg
              className={`h-8 w-8 transition ${isOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-8 w-8 transition ${isOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar (overlay) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 z-40 flex flex-col items-center pt-28">
          <nav className="flex flex-col space-y-4 w-full max-w-xs mx-auto bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <Link href="/" className="px-4 py-3 rounded-xl text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition text-center" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <details className="dropdown w-full">
              <summary className="px-4 py-3 rounded-xl text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition cursor-pointer select-none text-center">
                Products
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-50 w-full p-2 shadow-lg text-yellow-500 mt-2">
                <li><Link href="/products" onClick={() => setIsOpen(false)}>All Products</Link></li>
                <hr />
                <li><Link href="/copper" onClick={() => setIsOpen(false)}>Copper</Link></li>
                <li><Link href="/brass" onClick={() => setIsOpen(false)}>Brass</Link></li>
                <li><Link href="/bronze" onClick={() => setIsOpen(false)}>Bronze</Link></li>
                <li><Link href="/aluminium" onClick={() => setIsOpen(false)}>Aluminium</Link></li>
                <li><Link href="/plastic" onClick={() => setIsOpen(false)}>Plastic</Link></li>
                <li><Link href="/iron" onClick={() => setIsOpen(false)}>Iron</Link></li>
                <li><Link href="/ceramicwood" onClick={() => setIsOpen(false)}>Ceramic Woods</Link></li>
                <li><Link href="/homeutensils" onClick={() => setIsOpen(false)}>Home Utensils</Link></li>
                <li><Link href="/silverplateditem" onClick={() => setIsOpen(false)}>Silver-Plated Items</Link></li>
              </ul>
            </details>
            <Link href="/offers" className="px-4 py-3 rounded-xl text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition text-center" onClick={() => setIsOpen(false)}>
              Offers
            </Link>
            <Link href="/aboutus" className="px-4 py-3 rounded-xl text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition text-center" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/contacts" className="px-4 py-3 rounded-xl text-lg font-semibold text-white hover:bg-yellow-400 hover:text-gray-900 transition text-center" onClick={() => setIsOpen(false)}>
              Contacts
            </Link>
            <div className="mt-6 flex justify-center">
              {session ? (
                avatarDropdown
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    signIn("google");
                  }}
                  className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
                >
                  Sign In
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}