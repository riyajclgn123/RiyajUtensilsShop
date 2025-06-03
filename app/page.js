"use client";
import Landing from "@/components/Home/Landing";
import Link from 'next/link';
import Image from 'next/image';

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import { useEffect, useState } from "react"


export default function HomePage() {
  return <Landing />;
}