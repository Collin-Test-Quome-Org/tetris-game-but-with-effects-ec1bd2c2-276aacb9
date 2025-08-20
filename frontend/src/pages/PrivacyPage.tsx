import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

export function PrivacyPage() {
  return (
    <ScrollArea className="max-w-2xl mx-auto my-8 p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-primary text-2xl">Privacy Policy</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 mt-4">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-primary">Welcome to Tetris Effects!</h2>
              <p className="text-base">
                At Tetris Effects, your privacy is as important to us as a perfectly timed T-spin! We value your trust and want to ensure that your data is always in safe hands while you chase high scores and dazzling effects.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">1. What We Collect</h3>
              <p>
                We collect only the essentials: username, scores, and preferences. No unnecessary blocks in your stack—just what we need for a smooth and personalized experience.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">2. How We Use Your Data</h3>
              <ul className="list-disc ml-6">
                <li>To save your high scores and progress</li>
                <li>To personalize effects and themes</li>
                <li>To improve your gameplay experience and celebrate your wins</li>
              </ul>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">3. Data Sharing</h3>
              <p>
                We never sell or share your personal info with third parties. Your blocks, your business! The only exception is leaderboard display—your username and score may be shown to other players.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">4. Cookies & Storage</h3>
              <p>
                We use local storage to remember your settings and theme preferences—so every session feels just right!
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">5. Your Choices</h3>
              <p>
                You can edit your profile, clear your data, or contact us for any privacy-related requests. We believe in player control, on and off the board!
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">6. Updates</h3>
              <p>
                We may update this policy to keep pace with new features. We’ll always notify you if anything major changes.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">7. Contact</h3>
              <p>
                Got questions? Drop us a line at <span className="text-primary font-semibold">privacy@tetriseffects.app</span>. We’re here to keep your gameplay and your info safe!
              </p>
            </section>
            <Separator />
            <div className="text-center text-xs text-muted-foreground pt-4">© {new Date().getFullYear()} Tetris Effects. All rights reserved.</div>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
