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

export default function Sidebar() {
    const [active, setActive] = useState("Home");

    return (
        <aside className="hidden md:flex w-20 lg:w-64 border-r border-white/10 bg-[#0a0a0a] p-4 flex-col">

            <h1 className="text-white text-xl font-bold mb-10 hidden lg:block">
                Dashboard
            </h1>

            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.name;

                    return (
                        <motion.button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            whileHover={{ scale: 1.03 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className={`relative flex items-center gap-4 rounded-2xl p-4 transition-colors ${
                                isActive
                                    ? "text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {/* Shared layout pill — snaps between active items */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-2xl bg-white/10 border border-white/10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                />
                            )}

                            <Icon size={22} className="relative z-10" />

                            <span className="hidden lg:block relative z-10">
                                {item.name}
                            </span>
                        </motion.button>
                    );
                })}
            </nav>
        </aside>
    );
}