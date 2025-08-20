import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function TermsOfService() {
  return (
    <Card className="max-w-2xl mx-auto my-10 shadow-lg">
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          <h1 className="font-orbitron font-bold text-3xl text-[#8B0836] mb-3">Terms of Service</h1>
          <Separator className="mb-6" />
          <section className="space-y-4 text-base font-inter text-neutral-800">
            <p>
              Welcome to Tetris Effects, where every drop is a spectacle! Please read these Terms of Service carefully before playing.
            </p>
            <h2 className="font-semibold text-lg mt-6">1. Acceptance</h2>
            <p>
              By accessing or using Tetris Effects, you agree to abide by these terms. If you disagree, please refrain from playing.
            </p>
            <h2 className="font-semibold text-lg mt-6">2. Account Usage</h2>
            <ul className="list-disc ml-6">
              <li>You are responsible for keeping your account credentials safe.</li>
              <li>All leaderboard scores must be earned through fair play—no bots, hacks, or cheats.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">3. Intellectual Property</h2>
            <ul className="list-disc ml-6">
              <li>All game assets, effects, and branding belong to Tetris Effects.</li>
              <li>Don’t use our logos or content without permission.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">4. Acceptable Use</h2>
            <ul className="list-disc ml-6">
              <li>No abusive language, offensive usernames, or disruptive gameplay.</li>
              <li>Respect other players—this is a community of block-dropping brilliance!</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">5. Changes & Termination</h2>
            <ul className="list-disc ml-6">
              <li>We reserve the right to update these terms or suspend accounts for rule violations.</li>
              <li>We'll notify users of significant changes via the app or email.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-6">6. Contact</h2>
            <p>
              Questions? Email us at support@tetriseffects.app. We're here to keep your stacking adventure smooth!
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-center text-neutral-400">Last updated: June 2024</p>
          </section>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
