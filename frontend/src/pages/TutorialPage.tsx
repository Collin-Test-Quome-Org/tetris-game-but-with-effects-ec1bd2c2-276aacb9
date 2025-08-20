import { motion } from 'framer-motion'
import { TutorialStep } from '@/components/TutorialStep'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const tutorialSteps = [
  {
    title: 'Move Blocks',
    description: 'Use the arrow keys (← →) or swipe left/right to slide blocks across the grid. Quick moves mean more combos!',
    icon: 'move',
  },
  {
    title: 'Rotate with Style',
    description: 'Press the rotate key (↑ or Z/X) to spin blocks and fit them perfectly. Get creative with your placement!',
    icon: 'rotate',
  },
  {
    title: 'Drop To Score',
    description: 'Soft drop with ↓ for a gentle slide, or hard drop (Space) to slam blocks instantly for bonus points.',
    icon: 'drop',
  },
  {
    title: 'Pause the Action',
    description: 'Need a break? Press P or tap the pause button. Your progress is safe – style waits for no one!',
    icon: 'pause',
  },
  {
    title: 'Rack Up Mega Points',
    description: 'Clear lines, trigger effects, and chase high scores. Combos and speed boosts earn you epic effects!',
    icon: 'score',
  },
  {
    title: 'Master the Vibes',
    description: 'Every level unlocks new visual and audio effects. Play with headphones for full Tetris Effects energy!',
    icon: 'done',
    highlight: true,
  },
]

export function TutorialPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#FB2C36]/10 to-white">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="relative w-full h-64 mb-8"
      >
        <div style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }} className="bg-cover bg-center h-full">
          <div className="bg-black bg-opacity-40 h-full flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
              className="text-white text-4xl md:text-5xl font-orbitron font-bold tracking-widest drop-shadow-lg"
            >
              How to Play
            </motion.h1>
          </div>
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto px-4 space-y-8">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
              },
            },
          }}
        >
          {tutorialSteps.map((step, idx) => (
            <TutorialStep key={idx} {...step} />
          ))}
        </motion.div>
        <div className="flex justify-center pt-8">
          <Button asChild id="cta-play-now" size="lg" className="font-orbitron px-8 py-4 text-lg bg-[#8B0836] hover:bg-[#FB2C36] transition-colors ring-2 ring-[#8B0836]/50">
            <Link to="/play">Play Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
