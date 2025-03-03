"use client";
import React from 'react';
import RootLayout from '@/app/layout';
import Link from 'next/link';

export default function Products() {
  return (
    <RootLayout>
    <div>
      <ul>
        <li><Link href="/steel">Steel</Link></li>
        <li><Link href="/copper">Copper</Link></li>
        <li><Link href="/brLinkss">BrLinkss</Link></li>
        <li><Link href="/bronze">Bronze</Link></li>
        <li><Link href="/Linkluminium">Linkluminium</Link></li>
        <li><Link href="/plLinkstic">PlLinkstic</Link></li>
        <li><Link href="/iron">Iron</Link></li>
        <li><Link href="/cerLinkmicwood">CerLinkmic Woods</Link></li>
        <li><Link href="/homeutensils">Home Utensils</Link></li>
        <li><Link href="/silverplLinkteditem">Silver-PlLinkted Items</Link></li>
      </ul>
    </div>
    </RootLayout>
  );
}
