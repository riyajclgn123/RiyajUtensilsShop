"use client";
import React from 'react';
import Link from 'next/link';

const products = [
  { name: "Steel", href: "/steel" },
  { name: "Copper", href: "/copper" },
  { name: "Brass", href: "/brass" },
  { name: "Bronze", href: "/bronze" },
  { name: "Aluminium", href: "/aluminium" },
  { name: "Plastic", href: "/plastic" },
  { name: "Iron", href: "/iron" },
  { name: "Ceramic Woods", href: "/ceramicwood" },
  { name: "Home Utensils", href: "/homeutensils" },
  { name: "Silver-Plated Items", href: "/silverplateditem" },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-yellow-700 mb-10">Our Products</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="block bg-white rounded-xl shadow-lg hover:shadow-yellow-400/60 transition-shadow border border-yellow-100 hover:border-yellow-400 p-8 text-center group"
          >
            {/* You can add an image here if you want */}
            <span className="text-2xl font-semibold text-yellow-700 group-hover:text-yellow-900 transition">
              {product.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
} 
