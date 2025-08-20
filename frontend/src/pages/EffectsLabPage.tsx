import { useState } from 'react'
import { EffectsLabControls, defaultEffectsLabSettings, EffectsLabSettings } from '@/components/EffectsLabControls'
import { EffectsLabPreview } from '@/components/EffectsLabPreview'
import { Button } from '@/components/ui/button'
import { Sparkles, FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'

export function EffectsLabPage() {
  const [settings, setSettings] = useState<EffectsLabSettings>(defaultEffectsLabSettings)
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-white via-[#FFF8FA] to-[#FFDDE7] pb-8">
      <div className="max-w-3xl mx-auto pt-10 px-3">
        <motion.div initial={{opacity: 0, y: 24}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#FB2C36]/80 p-2 rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={28} />
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold tracking-tight text-[#8B0836]">Effects Lab</h1>
          </div>
          <div className="text-lg text-muted-foreground max-w-xl mb-6">
            Unleash the spectacle! Experiment with <span className="text-[#FB2C36] font-medium">visual</span> & <span className="text-[#FB2C36] font-medium">audio</span> effects that power up every game. Dial up the dazzle—see how particles, glows, and shakes transform your Tetris world. All changes update live!
          </div>
        </motion.div>
        <EffectsLabPreview settings={settings} />
        <EffectsLabControls settings={settings} setSettings={setSettings} />
        <div className="flex items-center gap-2 justify-center mt-7">
          <FlaskConical className="text-[#8B0836]" />
          <span className="font-orbitron text-base text-[#8B0836]">TETRIS EFFECTS: Designed for the bold. Play with every sensation!</span>
        </div>
        <div className="mt-10 flex justify-center">
          <Button id="play-now-link" to="/play" asChild>
            <a href="/play" className="font-bold tracking-widest">Play Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
