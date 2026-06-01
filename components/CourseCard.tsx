"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface CourseCardProps {
    title: string;
    progress: number;
    icon_name: string;
}

export default function CourseCard({
    title,
    progress,
    icon_name,
}: CourseCardProps) {

    const Icon =
        (Icons as any)[icon_name] || Icons.BookOpen;

    return (
        <motion.article
            whileHover={{
                scale: 1.04,
                boxShadow:
                    "0 0 30px rgba(255,255,255,0.06), 0 0 60px rgba(120,119,198,0.05)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/90 p-6"
        >
            {/* Gradient Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

            {/* SVG Noise Grain Texture */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Glow Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-white/10 p-3">
                        <Icon size={24} />
                    </div>

                    <span className="text-sm text-zinc-400">
                        {progress}%
                    </span>
                </div>

                <h2 className="mt-6 text-xl font-semibold">
                    {title}
                </h2>

                {/* Animated Progress Bar — uses scaleX to avoid layout shifts */}
                <div className="mt-5 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                        initial={{
                            scaleX: 0,
                            opacity: 0.5,
                        }}
                        animate={{
                            scaleX: progress / 100,
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                        }}
                        style={{ transformOrigin: "left" }}
                        className="h-full w-full rounded-full bg-white"
                    />
                </div>
            </div>
        </motion.article>
    );
}