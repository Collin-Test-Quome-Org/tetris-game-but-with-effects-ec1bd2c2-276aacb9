import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

export function TermsPage() {
  return (
    <ScrollArea className="max-w-2xl mx-auto my-8 p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-primary text-2xl">Terms of Service</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-6 mt-4">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-primary">Welcome to Tetris Effects!</h2>
              <p className="text-base">
                Before you start stacking, spinning, and clearing lines, please read these terms. By playing Tetris Effects, you agree to the following:
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">1. Gameplay</h3>
              <ul className="list-disc ml-6">
                <li>Play fair—no cheating, hacking, or exploiting bugs.</li>
                <li>Enjoy the effects, but don’t attempt to reverse engineer or redistribute them.</li>
              </ul>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">2. Account</h3>
              <ul className="list-disc ml-6">
                <li>Keep your login info secure. You’re responsible for your account’s activity.</li>
                <li>Profile avatars and usernames must be respectful and block-positive!</li>
              </ul>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">3. Content & Leaderboards</h3>
              <ul className="list-disc ml-6">
                <li>We may display your username and scores on public leaderboards.</li>
                <li>Content posted to chats or forums must be friendly, constructive, and safe-for-work.</li>
              </ul>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">4. Intellectual Property</h3>
              <p>
                All game art, effects, and code are property of Tetris Effects. Please don’t copy, modify, or distribute our assets.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">5. Liability</h3>
              <p>
                Tetris Effects is provided “as-is”—we aren’t liable for high-score heartbreaks, missed combos, or lost progress (but we’ll always try to help!).
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">6. Updates & Changes</h3>
              <p>
                We may update these terms as we add new features or blocks. We’ll let you know if anything major changes.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold text-secondary">7. Contact</h3>
              <p>
                Questions? Reach out any time at <span className="text-primary font-semibold">support@tetriseffects.app</span> — Our team of pixel-perfect pros are always happy to help!
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
