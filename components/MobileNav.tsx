"use client";

import { useState } from "react";
import { Home, BookOpen, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Activity",
    icon: BarChart3,
  },
];

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/10 px-6 py-2 flex justify-around items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative flex flex-col items-center gap-1 py-1 px-3 text-zinc-400 hover:text-white transition-colors"
          >
            {/* Shared layout active indicator for mobile nav */}
            {isActive && (
              <motion.div
                layoutId="active-mobile-pill"
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}
            <Icon size={20} className="relative z-10" />
            <span className="text-[10px] font-medium relative z-10">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
