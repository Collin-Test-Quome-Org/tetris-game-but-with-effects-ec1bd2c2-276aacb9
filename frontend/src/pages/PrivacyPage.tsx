import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

export function PrivacyPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-white to-[#f8f7fa] dark:from-[#1a141c] dark:to-[#2b202d] py-12">
      <Card className="w-full max-w-2xl shadow-xl border-2 border-[#ecd6e6] dark:border-[#2e1a26]">
        <CardHeader>
          <CardTitle className="font-orbitron font-bold text-3xl text-[#8B0836]">Privacy Policy</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <ScrollArea className="h-[40vh] pr-2">
            <div className="space-y-4 text-base font-inter text-gray-800 dark:text-gray-100">
              <p><b>Last updated:</b> June 2024</p>
              <p>
                Welcome to <span className="text-[#FB2C36] font-semibold">Tetris Effects</span>! We are committed to protecting your privacy and ensuring a safe, delightful experience while you shape the future—one block at a time.
              </p>
              <h2 className="text-lg font-semibold mt-4">1. Information We Collect</h2>
              <ul className="list-disc ml-6">
                <li>Account information (username, email, avatar)</li>
                <li>Gameplay stats (scores, levels, replays, badges)</li>
                <li>Device/browser data (for optimization)</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4">2. How We Use Your Info</h2>
              <ul className="list-disc ml-6">
                <li>To show leaderboards and badges</li>
                <li>To personalize your game experience</li>
                <li>To improve gameplay and effects</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4">3. Sharing</h2>
              <p>We never sell your data. We only share anonymized scores for the leaderboard and never disclose personal details.</p>
              <h2 className="text-lg font-semibold mt-4">4. Cookies</h2>
              <p>
                We may use cookies for login sessions and to remember your settings. No tracking cookies—just pure play!
              </p>
              <h2 className="text-lg font-semibold mt-4">5. Your Rights</h2>
              <p>
                You're in control. You may update your profile or request your data be deleted at any time. Contact us via the in-app help widget or at <span className="font-mono text-sm text-[#8B0836]">support@tetriseffects.fun</span>.
              </p>
              <h2 className="text-lg font-semibold mt-4">6. Changes</h2>
              <p>
                This policy may update from time to time. We'll always notify you in-app if anything important changes. Thank you for being part of the most electrifying Tetris experience yet!
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
