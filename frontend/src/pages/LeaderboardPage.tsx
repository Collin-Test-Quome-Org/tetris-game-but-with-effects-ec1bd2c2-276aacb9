import { LeaderboardTable } from '@/components/LeaderboardTable'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export function LeaderboardPage() {
  return (
    <motion.main initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gradient-to-b from-white to-[#fff5f7] pb-16">
      <section className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}>
        <div className="bg-black/60 h-52 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 text-4xl text-white font-orbitron font-bold tracking-wide drop-shadow-lg">
              <Flame className="text-secondary w-10 h-10 animate-pulse" />
              Hall of Fame
            </span>
            <span className="text-white/80 font-inter text-lg max-w-lg text-center mt-2">
              The fiercest stackers and gravity-defying block champs! Here are the top scores, hottest streaks, and your friends' latest wins.
            </span>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-[-60px] z-10 relative">
        <LeaderboardTable />
      </section>
      <footer className="mt-16 text-center text-muted-foreground">
        <span className="text-xs">Tetris Effects &copy; 2024 — Powered by Stackwave, Inc.</span>
      </footer>
    </motion.main>
  )
}
