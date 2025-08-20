import { motion, AnimatePresence } from 'framer-motion'
import { EffectsLabSettings } from './EffectsLabControls'

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function EffectsLabPreview({ settings }: { settings: EffectsLabSettings }) {
  const particles = Array.from({ length: settings.particles }, (_, i) => i)
  // For demo, animate particles in a burst and fade out
  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-gradient-to-br from-[#8B0836]/10 to-[#FB2C36]/10 rounded-2xl overflow-hidden shadow-inner mt-6 mb-2">
      <AnimatePresence>
        {particles.map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              opacity: 0.9,
              scale: randomBetween(0.6, 1.2),
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: 0.3,
              x: randomBetween(-130, 130),
              y: randomBetween(-80, 80),
              scale: randomBetween(0.7, 1.7),
              rotate: randomBetween(-30, 30),
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2 + randomBetween(0, 0.5),
              repeat: Infinity,
              repeatType: 'mirror',
              delay: randomBetween(0, 0.7),
            }}
            style={{
              width: 16 + randomBetween(0, 16),
              height: 16 + randomBetween(0, 16),
              background: settings.glow
                ? `radial-gradient(circle at 60% 40%, ${settings.color}AA 70%, transparent 100%)`
                : settings.color,
              boxShadow: settings.glow
                ? `0 0 20px 6px ${settings.color}88`
                : undefined,
              filter: settings.glow ? 'blur(1px)' : 'none',
              zIndex: 1,
            }}
          />
        ))}
      </AnimatePresence>
      {/* Tetris block demo with shake effect */}
      <motion.div
        className="w-16 h-16 bg-[#8B0836] rounded-lg flex items-center justify-center shadow-2xl border-4 border-[#FB2C36]"
        style={{ position: 'absolute', left: '50%', top: '54%', transform: 'translate(-50%,-50%)', zIndex: 2 }}
        animate={{
          x: [0, settings.shake * 8, -settings.shake * 8, 0],
          rotate: [0, settings.shake * 6, -settings.shake * 6, 0],
        }}
        transition={{ duration: 0.4, repeat: Infinity, repeatType: 'mirror' }}
      >
        <div className="w-8 h-8 bg-[#FB2C36] rounded-sm shadow border-2 border-white"></div>
      </motion.div>
    </div>
  )
}
