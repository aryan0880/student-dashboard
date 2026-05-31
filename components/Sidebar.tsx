"use client";

import { useState, useEffect } from "react";
import { Home, BookOpen, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Auto-collapse sidebar on tablet view (width between 768px and 1024px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                setIsCollapsed(true);
            } else if (window.innerWidth > 1024) {
                setIsCollapsed(false);
            }
        };

        // Check on mount
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.aside
            animate={{ width: isCollapsed ? 80 : 256 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
            }}
            className="hidden md:flex border-r border-white/10 bg-[#0a0a0a] p-4 flex-col justify-between relative overflow-hidden"
        >
            <div className="flex flex-col">
                {/* Header / Brand */}
                <div className="flex items-center justify-between h-10 mb-8 px-2">
                    <AnimatePresence mode="wait">
                        {!isCollapsed && (
                            <motion.h1
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="text-white text-xl font-bold whitespace-nowrap"
                            >
                                Dashboard
                            </motion.h1>
                        )}
                    </AnimatePresence>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="rounded-lg p-1.5 hover:bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors ml-auto"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = active === item.name;

                        return (
                            <div key={item.name} className="relative group">
                                <motion.button
                                    onClick={() => setActive(item.name)}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className={`relative flex items-center rounded-2xl p-4 transition-colors w-full ${
                                        isCollapsed ? "justify-center" : "justify-start gap-4"
                                    } ${
                                        isActive
                                            ? "text-white"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {/* Shared layout pill */}
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

                                    <Icon size={22} className="relative z-10 flex-shrink-0" />

                                    <AnimatePresence mode="wait">
                                        {!isCollapsed && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="relative z-10 whitespace-nowrap"
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                {/* Tooltip for Collapsed Mode */}
                                {isCollapsed && (
                                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-zinc-950 border border-white/10 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap shadow-xl">
                                        {item.name}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* Premium user/badge or logout button placeholder at bottom */}
            <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex-shrink-0 flex items-center justify-center font-bold text-sm">
                    AS
                </div>
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="flex flex-col overflow-hidden whitespace-nowrap"
                        >
                            <span className="text-xs font-semibold">Aryan Sonawane</span>
                            <span className="text-[10px] text-zinc-500">Student</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.aside>
    );
}