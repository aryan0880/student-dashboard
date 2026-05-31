"use client";

import { motion } from "framer-motion";

// Generate 35 mock contribution activity levels (e.g. 7 days x 5 weeks)
const contributionLevels = [
  0, 1, 3, 2, 0, 1, 4,
  2, 0, 1, 3, 4, 2, 1,
  0, 2, 3, 1, 0, 4, 3,
  1, 4, 2, 0, 3, 1, 2,
  3, 0, 2, 4, 1, 0, 3
];

// Color mapping for activity levels
const getColorClass = (level: number) => {
  switch (level) {
    case 1:
      return "bg-emerald-950/40 border border-emerald-900/30";
    case 2:
      return "bg-emerald-800/50 border border-emerald-700/30";
    case 3:
      return "bg-emerald-600/70 border border-emerald-500/30";
    case 4:
      return "bg-emerald-400 border border-emerald-300/30 shadow-[0_0_10px_rgba(52,211,153,0.3)]";
    default:
      return "bg-zinc-800/40 border border-zinc-700/20";
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const cellVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.015,
        boxShadow:
          "0 0 30px rgba(255,255,255,0.06), 0 0 60px rgba(16,185,129,0.04)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-[32px] border border-white/10 bg-zinc-900 p-6 overflow-hidden flex flex-col justify-between h-full"
    >
      <div>
        <h2 className="text-xl font-semibold">Weekly Activity</h2>
        <p className="text-zinc-400 text-sm mt-1">Your learning consistency</p>
      </div>

      <div className="mt-6 flex flex-col justify-center">
        {/* Months labels */}
        <div className="flex justify-between text-[10px] text-zinc-500 mb-2 px-6">
          <span>Apr</span>
          <span>May</span>
        </div>

        <div className="flex gap-2 items-center justify-center">
          {/* Weekday indicators */}
          <div className="flex flex-col justify-between h-24 text-[9px] text-zinc-600 font-medium pr-1">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* Grid of Squares */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-flow-col grid-rows-7 gap-1.5"
          >
            {contributionLevels.map((level, index) => (
              <motion.div
                key={index}
                variants={cellVariants}
                whileHover={{ scale: 1.25, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`w-3.5 h-3.5 rounded-[3px] transition-colors duration-200 cursor-pointer ${getColorClass(
                  level
                )}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-end gap-1.5 text-[10px] text-zinc-500">
        <span>Less</span>
        <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-800/40 border border-zinc-700/20" />
        <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/40 border border-emerald-900/30" />
        <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800/50 border border-emerald-700/30" />
        <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600/70 border border-emerald-500/30" />
        <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
        <span>More</span>
      </div>
    </motion.article>
  );
}