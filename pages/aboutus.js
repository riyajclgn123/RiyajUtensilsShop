"use client";
import React from 'react';
import RootLayout from '@/app/layout';

export default function aboutus() {
  return (
    <RootLayout>
    <div className='bg-white pb-5  '>
    <div
  className="  hero  w-full h-[500px] bg-[url('/Images/bg11.jpg')] bg-cover ">
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="text-center">
      <h1 className=" mb-7  mt-30 text-5xl font-bold font-stretch-50% ">About Us</h1>
      <p className=" mb-7">
      Riyaj Utensils Shop is a trusted family-run business specializing in high-quality copper, brass, and steel kitchenware. With years of experience, we take pride in offering durable and beautifully crafted utensils that blend tradition with modern needs. Our commitment to quality, affordability, and customer satisfaction has made us a go-to destination for households and businesses alike. Explore our collection and experience excellence in every piece!
      </p>
      <button className="btn btn-primary"><link href="/products">See Our Products</link></button>
    </div>
  </div>
</div>
        <div className='flex justify-center items-center pt-5 '>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-2 p-2  h-140">
  <div className="carousel-item ">
    <img
      src="/Images/god1.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/Images/god2.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/Images/god3.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/Images/god4.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/Images/god5.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/Images/god6.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div>
</div>
    </div>
    </RootLayout>
  );
}
