"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
    return (
        <motion.article
            whileHover={{
                scale: 1.015,
                boxShadow:
                    "0 0 30px rgba(255,255,255,0.06), 0 0 60px rgba(120,119,198,0.05)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 p-8 h-full"
        >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 blur-[100px]" />

            <div className="relative z-10">
                <p className="text-zinc-400 text-sm mb-3">
                    Welcome Back
                </p>

                <h1 className="text-4xl md:text-5xl font-bold">
                    Aryan 👋
                </h1>

                <p className="text-zinc-400 mt-4">
                    Keep your learning streak alive.
                </p>

                <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    🔥 7 Day Learning Streak
                </div>
            </div>
        </motion.article>
    );
}