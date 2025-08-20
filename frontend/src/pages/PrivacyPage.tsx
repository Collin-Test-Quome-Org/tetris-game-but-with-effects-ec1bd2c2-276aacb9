import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

export function PrivacyPage() {
  return (
    <ScrollArea className="max-w-3xl mx-auto my-12 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-orbitron text-3xl text-[#8B0836]">Privacy Policy</CardTitle>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="prose dark:prose-invert max-w-none font-inter text-zinc-700 dark:text-zinc-200">
          <p>Welcome to <span className="font-semibold text-[#FB2C36]">Tetris Effects</span>! We are committed to protecting your privacy and providing a safe, immersive puzzle experience for every player.</p>
          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Account Info:</strong> Username, email, avatar (if you register).</li>
            <li><strong>Gameplay Data:</strong> Scores, levels, achievements, and replays.</li>
            <li><strong>Device Info:</strong> Non-personal data for analytics and performance.</li>
          </ul>
          <h2>How We Use Your Data</h2>
          <ul>
            <li>To personalize your gameplay experience and leaderboards.</li>
            <li>To improve the game's features and effects.</li>
            <li>For security, maintenance, and analytics.</li>
          </ul>
          <h2>Sharing & Security</h2>
          <ul>
            <li>We never sell your personal data.</li>
            <li>Data may be shared with trusted providers strictly for game functionality (e.g., cloud saves, leaderboards).</li>
            <li>We use modern encryption and security best practices.</li>
          </ul>
          <h2>Your Choices</h2>
          <ul>
            <li>You can edit or delete your account in your profile settings.</li>
            <li>Contact us for data requests or questions at <span className="underline">privacy@tetriseffects.com</span>.</li>
          </ul>
          <h2>Updates</h2>
          <p>We may update this policy to reflect new features or legal requirements. Check back for changes!</p>
          <Separator className="my-6" />
          <p className="text-sm text-zinc-400">Last updated: June 2024 &mdash; Experience the rhythm of privacy with every block drop! 🟪🟥</p>
        </CardContent>
      </Card>
    </ScrollArea>
  )
}
