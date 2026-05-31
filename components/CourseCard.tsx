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
                scale: 1.02,
                boxShadow:
                    "0 0 30px rgba(255,255,255,0.06), 0 0 60px rgba(120,119,198,0.05)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 p-6"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

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
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                        style={{ transformOrigin: "left" }}
                        className="h-full w-full rounded-full bg-white"
                    />
                </div>
            </div>
        </motion.article>
    );
}