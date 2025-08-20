import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function PrivacyPolicy() {
  return (
    <Card className="max-w-2xl mx-auto my-10 shadow-lg">
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          <h1 className="font-orbitron font-bold text-3xl text-[#8B0836] mb-3">Privacy Policy</h1>
          <Separator className="mb-6" />

          <section className="space-y-4 text-base font-inter text-neutral-800">
            <p>
              Welcome to Tetris Effects! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your information as you experience the most electrifying twist on classic Tetris.
            </p>
            <h2 className="font-semibold text-lg mt-6">1. Information We Collect</h2>
            <ul className="list-disc ml-6">
              <li>Account details (username, email) provided during registration</li>
              <li>Gameplay stats and high scores</li>
              <li>Device and usage data (for improving the game)</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">2. How We Use Your Data</h2>
            <ul className="list-disc ml-6">
              <li>To personalize your gameplay and leaderboard experience</li>
              <li>To communicate important updates and offers</li>
              <li>To improve game performance and add new electrifying features</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">3. Sharing & Security</h2>
            <ul className="list-disc ml-6">
              <li>We never sell your data. Limited third-party partners help us run the game smoothly (e.g., analytics, hosting).</li>
              <li>Your data is protected using industry-standard security practices.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">4. Your Choices</h2>
            <ul className="list-disc ml-6">
              <li>You can update your profile or request data removal at any time via your Profile page.</li>
              <li>Contact us at privacy@tetriseffects.app for any privacy requests.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">5. Updates</h2>
            <p>
              We may update this policy as Tetris Effects evolves. We'll let you know about significant changes here or in-game.
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-center text-neutral-400">Last updated: June 2024</p>
          </section>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
