"use client";

import { motion } from "framer-motion";

const stats = [
    {
        emoji: "🔥",
        value: "7 Days",
        label: "Learning Streak",
        gradient: "from-orange-500/20 to-red-500/5",
        border: "border-orange-500/20",
    },
    {
        emoji: "📚",
        value: "3",
        label: "Active Courses",
        gradient: "from-blue-500/20 to-indigo-500/5",
        border: "border-blue-500/20",
    },
    {
        emoji: "🎯",
        value: "68%",
        label: "Avg Progress",
        gradient: "from-emerald-500/20 to-teal-500/5",
        border: "border-emerald-500/20",
    },
];

const statVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 22,
            delay: 0.2 + i * 0.08,
        },
    }),
};

export default function HeroTile() {
    return (
        <motion.article
            whileHover={{
                scale: 1.015,
                boxShadow:
                    "0 0 40px rgba(255,255,255,0.06), 0 0 80px rgba(120,119,198,0.07)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 p-8 h-full flex flex-col justify-between"
        >
            {/* Ambient glow top-right */}
            <div className="absolute top-0 right-0 h-56 w-56 bg-purple-500/10 blur-[120px] pointer-events-none" />
            {/* Ambient glow bottom-left */}
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-indigo-500/10 blur-[100px] pointer-events-none" />

            {/* Top section — greeting */}
            <div className="relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, type: "spring", stiffness: 400, damping: 24 }}
                    className="text-zinc-500 text-xs font-medium tracking-widest uppercase mb-3"
                >
                    Welcome Back
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 380, damping: 22 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight"
                >
                    Aryan 👋
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.18, duration: 0.25 }}
                    className="text-zinc-400 mt-3 text-sm"
                >
                    Keep pushing — you're on a roll today.
                </motion.p>
            </div>

            {/* Bottom section — stat cards */}
            <div className="relative z-10 mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        custom={i}
                        variants={statVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.04, y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`relative overflow-hidden rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.gradient} backdrop-blur-sm p-3.5 flex flex-col gap-1 cursor-default`}
                    >
                        <span className="text-xl">{stat.emoji}</span>
                        <span className="text-white font-bold text-lg leading-none">
                            {stat.value}
                        </span>
                        <span className="text-zinc-400 text-[11px] font-medium leading-tight">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.article>
    );
}