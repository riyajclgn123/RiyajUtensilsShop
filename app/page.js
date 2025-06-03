"use client";
import Landing from "@/components/Home/Landing";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import { useEffect, useState } from "react"


export default function HomePage() {
  return <Landing />;
}