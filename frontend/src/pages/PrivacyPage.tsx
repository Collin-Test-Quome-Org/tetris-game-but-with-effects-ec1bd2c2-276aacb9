import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

export function PrivacyPage() {
  return (
    <ScrollArea className="mx-auto max-w-2xl p-6 mt-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-2xl border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-3xl text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-5 space-y-6 text-base leading-relaxed font-inter text-gray-800">
            <p>
              At Tetris Effects, your privacy matters to us. We are committed to protecting your personal data and ensuring a safe, secure, and engaging experience.
            </p>
            <h2 className="font-semibold text-lg mt-4 text-primary">Information We Collect</h2>
            <ul className="list-disc ml-6">
              <li>Basic account information (username, avatar)</li>
              <li>Game performance data (scores, levels, stats)</li>
              <li>Usage data (settings, preferences, gameplay actions)</li>
            </ul>
            <h2 className="font-semibold text-lg mt-4 text-primary">How We Use Your Data</h2>
            <ul className="list-disc ml-6">
              <li>To provide you with a personalized and dynamic Tetris experience</li>
              <li>To display leaderboards, stats, and achievements</li>
              <li>To improve our app and develop new effects and features</li>
            </ul>
            <h2 className="font-semibold text-lg mt-4 text-primary">Data Sharing</h2>
            <p>
              We do <span className="font-bold">not</span> sell your data. Your data is only shared with trusted service providers as needed to operate the game. All third parties adhere to strict privacy standards.
            </p>
            <h2 className="font-semibold text-lg mt-4 text-primary">Cookies & Tracking</h2>
            <p>
              We use cookies and local storage to remember your settings and progress. No third-party tracking or advertising cookies are used.
            </p>
            <h2 className="font-semibold text-lg mt-4 text-primary">Your Rights</h2>
            <ul className="list-disc ml-6">
              <li>Access, update, or delete your account info at any time</li>
              <li>Request data export or deletion by contacting us</li>
            </ul>
            <p>
              Questions or concerns? Contact our privacy team at <span className="font-semibold text-secondary">privacy@tetriseffects.app</span>.
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-gray-400">Last updated: June 2024</p>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
