"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="max-w-md w-full text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>

        <p className="text-zinc-400 mb-8">
          We couldn&apos;t load your dashboard data. This might be a temporary
          connection issue with our database.
        </p>

        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </motion.button>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 text-xs text-zinc-600 font-mono break-all">
            {error.message}
          </p>
        )}
      </motion.section>
    </main>
  );
}
