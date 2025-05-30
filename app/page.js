"use client";
import Landing from "@/components/Home/Landing";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./Shared/firebaseConfig";
import { useEffect, useState } from "react"


export default function Home() {
  const db =getFirestore(app);

  // const [posts, setPosts] = useState([])
  // useEffect(() =>{
  //   getPost();
  // },[getPost])

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setPosts(posts=>[...posts,doc.data()]);
});

  }
  return (
    <div>
      {/* {posts?<Landing posts={posts}/>:null} */}
    </div>
  );
}

