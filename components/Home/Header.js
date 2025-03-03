"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setIsClient(true); // Set isClient to true after mounting
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div>
      <section>
        <div className="flex justify-between p-2 border-b-[2px] border-red-700 bg-gray-500 items-center">
          <div className="flex justify-between">
            <Image
              src="/Images/logo.jpg"
              alt="logo"
              width={60}
              height={20}
              className="rounded-full"
            />
            <div className="flex-shrink-0 flex items-center mx-3">
              <h1 className="text-sm font-bold text-center text-black">
                Riyaj <br />
                Utensils <br />
                Shop
              </h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            className={`text-black top-16 left-0 w-full p-4  z-50 md:flex md:static md:w-auto md:p-0 md:space-x-6 md:items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="p-2 mx-7 text-2xl font-bold">
              <summary className="btn m-1">Home</summary>
            </Link>

            <button className="p-2 mx-7 text-2xl font-bold">
              <details className="dropdown">
                <summary className="btn m-1">Products</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-yellow-500">
                  <li>
                    <Link href="/products">Products </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/copper">Copper </Link>
                  </li>
                  <li>
                    <Link href="/brass">Brass </Link>
                  </li>
                  <li>
                    <Link href="/bronze">Bronze </Link>
                  </li>
                  <li>
                    <Link href="/aluminium">Aluminium </Link>
                  </li>
                  <li>
                    <Link href="/plastic">Plastic </Link>
                  </li>
                  <li>
                    <Link href="/iron">Iron </Link>
                  </li>
                  <li>
                    <Link href="/ceramicwood">Ceramic Woods </Link>
                  </li>
                  <li>
                    <Link href="/homeutensils">Home Utensils </Link>
                  </li>
                  <li>
                    <Link href="/silverplateditem">Silver-Plated Items </Link>
                  </li>
                </ul>
              </details>
            </button>

            <Link href="/offers" className="p-2 mx-7 text-2xl font-bold">
              <summary className="btn m-1">Offers</summary>
            </Link>

            <Link href="/aboutus" className="p-2 mx-7 text-2xl font-bold">
              <summary className="btn m-1">About Us</summary>
            </Link>

            <Link href="/contacts" className="p-2 mx-7 text-2xl font-bold">
              <summary className="btn m-1">Contacts</summary>
            </Link>
          </div>

      
          {session ? (
  

            <div className="avatar items-center">
              <details className="dropdown">
                <summary className="btn rounded">
                  {" "}
                  <img
                    src="/Images/logo.jpg"
                    alt="Tailwind-CSS-Avatar-component"
                    width={5}
                    height={5}
                  />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <Link href="/account"> Account </Link>
                  </li>
                  <li>
                    <Link href="/profile">Profile </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/setting">Settings </Link>
                  </li>
                  <li>
                    <Link href="/signout"
                      className="text-red-700 font-bold"
                      onClick={() => signOut()}
                    >
                      Sign Out
                     </Link>
                  </li>
                </ul>
              </details>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-black text-white p-2 m-2 rounded-full"
            >
              Sign In
            </button>
          )}

          <label
            className="btn btn-circle swap swap-rotate md:hidden p-2 text-3xl "
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </section>
    </div>
  );
}
