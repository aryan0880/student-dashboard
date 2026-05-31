"use client";

import { motion } from "framer-motion";

const activityData = [
    30, 60, 45, 80, 55, 75, 90,
];

export default function ActivityTile() {
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
            className="rounded-[32px] border border-white/10 bg-zinc-900 p-6 overflow-hidden"
        >
            <h2 className="text-xl font-semibold">
                Weekly Activity
            </h2>

            <p className="text-zinc-400 text-sm mt-1">
                Your learning consistency
            </p>

            <div className="mt-8 flex items-end justify-between h-40 gap-2">
                {activityData.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            scaleY: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scaleY: 1,
                            opacity: 1,
                        }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                        }}
                        style={{
                            height: `${value}%`,
                            transformOrigin: "bottom",
                        }}
                        className="w-full rounded-full bg-gradient-to-t from-zinc-500 to-white"
                    />
                ))}
            </div>
        </motion.article>
    );
}