'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import FeatureCards from "@/components/FeatureCards";
import { Sparkles, ChevronLeft, ChevronRight, Box, Headphones, BatteryCharging, ShieldCheck, Zap } from "lucide-react";

// Local images data structure
const galleryData = [
  {
    id: 1,
    type: '3d',
    title: 'Interactive 3D View',
    thumb: '/images/thumb1.jpg', // Local public folder image
    features: [
      { icon: Box, title: "360° Inspection", desc: "Drag and rotate to view every angle in high detail." },
      { icon: Zap, title: "Real-time Lighting", desc: "Dynamic reflections and studio-grade shaders." },
    ]
  },
  {
    id: 2,
    type: 'image',
    src: '/images/slide1.png',
    thumb: '/images/thumb1.png',
    title: 'Front Angle View',
    features: [
      { icon: Headphones, title: "Spatial Audio", desc: "Custom dynamic drivers with rich acoustic balance." },
      { icon: ShieldCheck, title: "Build Quality", desc: "Crafted with lightweight aerospace aluminum." },
    ]
  },
  {
    id: 3,
    type: 'image',
    src: '/images/slide2.png',
    thumb: '/images/thumb2.png',
    title: 'Side Angle View',
    features: [
      { icon: Headphones, title: "Ergonomic Design", desc: "Memory foam ear cushions for all-day comfort." },
      { icon: BatteryCharging, title: "Battery Life", desc: "Up to 40 hours continuous playback on a single charge." },
    ]
  },
  {
    id: 4,
    type: 'image',
    src: '/images/slide3.png',
    thumb: '/images/thumb3.png',
    title: 'Close-up View',
    features: [
      { icon: Zap, title: "Active Noise Control", desc: "Dual mic active noise cancelling technology." },
      { icon: ShieldCheck, title: "Sweat & Water Proof", desc: "IPX4 rated for workout and outdoor protection." },
    ]
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [productColor, setProductColor] = useState('#3b82f6');

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const currentItem = galleryData[activeIndex];

 return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative overflow-hidden">
      <Navbar />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 lg:px-12 py-8 items-center relative z-10">
        
        {/* Left Section */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
              <Sparkles size={14} /> Premium Headphones
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Feel the Sound in <span className="text-blue-600">3D</span>
            </h1>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Immersive spatial audio. Premium ergonomic design. Next-level listening experience.
            </p>

            <button 
              onClick={() => setActiveIndex(0)}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 active:scale-95"
            >
              <Box size={18} /> Explore in 3D
            </button>
          </div>

          {/* Thumbnails */}
          <div className="pt-6 border-t border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Gallery Preview</span>
              <span className="font-mono">{activeIndex + 1} / {galleryData.length}</span>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-2 py-1">
                {galleryData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeIndex === index ? 'border-blue-600 scale-105' : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {item.type === '3d' ? (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        3D
                      </div>
                    ) : (
                      <img src={item.thumb} alt={item.title} className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-1">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section with Light Blue Circle Glow & Smaller Container */}
        <div className="lg:col-span-6 flex flex-col items-center relative justify-center">
          {/* Light Blue Circle Design Backdrop */}
          <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] bg-blue-100/70 rounded-full blur-2xl -z-10"></div>
          
          <div className="w-full max-w-[420px] h-[360px] md:h-[420px]">
            <ImageSlider 
              currentItem={currentItem} 
              productColor={productColor} 
              onColorChange={setProductColor} 
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3">
          <FeatureCards features={currentItem.features} />
        </div>

      </main>
    </div>
  );
}