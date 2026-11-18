'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Image as GalleryIcon, Settings, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Product", href: "/product", icon: Package },
    { name: "Gallery", href: "/gallery", icon: GalleryIcon },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
      {/* Leftside logo */}
      <div className="flex items-center">
        <h3 className="font-bold text-2xl text-white tracking-wide">
          Nexora<span className="text-blue-500">.</span>
        </h3>
      </div>

      {/* Center links with icons, pill background, and active light blue state */}
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Rightside action icons */}
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition">
          <Search size={20} />
        </button>
        
        <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 cursor-pointer hover:border-slate-500 transition">
          <User size={18} />
        </div>
      </div>
    </nav>
  );
}