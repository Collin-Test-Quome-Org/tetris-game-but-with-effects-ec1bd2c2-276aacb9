import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

export function TermsPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-b from-white to-[#f8f7fa] dark:from-[#1a141c] dark:to-[#2b202d] py-12">
      <Card className="w-full max-w-2xl shadow-xl border-2 border-[#ecd6e6] dark:border-[#2e1a26]">
        <CardHeader>
          <CardTitle className="font-orbitron font-bold text-3xl text-[#8B0836]">Terms of Service</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <ScrollArea className="h-[40vh] pr-2">
            <div className="space-y-4 text-base font-inter text-gray-800 dark:text-gray-100">
              <p><b>Welcome to Tetris Effects!</b> By playing, you agree to the following electrifying terms:</p>
              <h2 className="text-lg font-semibold mt-4">1. Use of Service</h2>
              <ul className="list-disc ml-6">
                <li>This game is for personal, non-commercial fun only.</li>
                <li>Be respectful to other players—let's keep the leaderboard friendly and competitive!</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4">2. User Content</h2>
              <ul className="list-disc ml-6">
                <li>When you upload scores, replays, or avatars, you confirm you have rights to share them.</li>
                <li>We reserve the right to moderate content for everyone's enjoyment.</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4">3. Ownership</h2>
              <p>
                All game visuals, effects, and code are property of the Tetris Effects team. Please don't copy, redistribute, or reverse-engineer our sparkling code magic.
              </p>
              <h2 className="text-lg font-semibold mt-4">4. Changes & Termination</h2>
              <p>
                We may update the game or these terms at any time. We'll let you know if anything major changes. If you break the rules, we may suspend your account—so play nice!
              </p>
              <h2 className="text-lg font-semibold mt-4">5. Liability</h2>
              <p>
                Tetris Effects is provided as-is, with no guarantees. We're not liable for lost scores, missed combos, or block-induced excitement!
              </p>
              <h2 className="text-lg font-semibold mt-4">6. Contact</h2>
              <p>
                Have questions? Drop us a line at <span className="font-mono text-sm text-[#8B0836]">support@tetriseffects.fun</span>.
              </p>
              <p>
                <span className="text-[#FB2C36] font-bold">Ready to stack, clear, and dazzle?</span> Let's play!
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
