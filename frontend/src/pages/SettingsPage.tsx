import { SettingsForm } from '@/components/SettingsForm'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

// Simulate fetching user settings (could use MSW in the future)
const userSettings = {
  controls: 'arrows',
  speed: 5,
  visualEffects: true,
  audioEffects: true
}

export function SettingsPage() {
  const [saved, setSaved] = useState(false)

  const handleSave = (settings: any) => {
    // Normally: save to backend
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <motion.div
      key="settings-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col items-center justify-start bg-gradient-to-b from-[#fff] to-[#ffe5ed] dark:from-zinc-900 dark:to-zinc-950 pt-8 pb-16"
    >
      <Card className="w-full max-w-2xl shadow-xl border-2 border-[#8B0836]/20">
        <CardContent>
          <SettingsForm
            initialSettings={userSettings}
            onSave={handleSave}
          />
          {saved && (
            <motion.div
              id="settings-saved-notification"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex items-center gap-2 mt-8 text-green-600 bg-green-50 dark:bg-green-900/40 rounded-lg px-4 py-3 shadow"
            >
              <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-400" />
              <span className="font-semibold">Settings saved!</span>
            </motion.div>
          )}
        </CardContent>
      </Card>
      <div className="mt-10 text-center opacity-70 font-inter">
        <p className="text-sm">Tweak your game, your way. <span className="text-[#8B0836] font-bold">Tetris Effects</span> is all about you!</p>
      </div>
    </motion.div>
  )
}
