import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

export function TermsPage() {
  return (
    <ScrollArea className="max-w-3xl mx-auto my-12 rounded-lg shadow-lg bg-white dark:bg-zinc-900">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-orbitron text-3xl text-[#8B0836]">Terms of Service</CardTitle>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="prose dark:prose-invert max-w-none font-inter text-zinc-700 dark:text-zinc-200">
          <p>Welcome, Block Architect, to <span className="font-semibold text-[#FB2C36]">Tetris Effects</span>. By accessing or using our game, you agree to the following:</p>
          <h2>1. Use of Service</h2>
          <ul>
            <li>For personal, non-commercial entertainment only.</li>
            <li>Do not attempt to disrupt, hack, or exploit the game or its community.</li>
          </ul>
          <h2>2. Accounts</h2>
          <ul>
            <li>Keep your login details confidential. You are responsible for your account's activity.</li>
            <li>We reserve the right to suspend accounts for rule violations or suspicious activity.</li>
          </ul>
          <h2>3. Content & Conduct</h2>
          <ul>
            <li>No bots, cheats, or unfair play. Celebrate honest stacking and clearing only!</li>
            <li>Respect fellow players; harassment or abusive behavior is not tolerated.</li>
          </ul>
          <h2>4. Intellectual Property</h2>
          <ul>
            <li>All game assets, effects, and code belong to the Tetris Effects team &mdash; blocks, beats, and brilliance!</li>
            <li>You may not reuse assets outside the game without permission.</li>
          </ul>
          <h2>5. Liability</h2>
          <ul>
            <li>Tetris Effects is provided as-is, with no warranty for uninterrupted play (though we strive for a smooth experience!).</li>
            <li>We are not liable for data loss, though we take every precaution to keep your scores safe.</li>
          </ul>
          <h2>6. Updates</h2>
          <p>We may update these terms as the game evolves. Continued play means you accept any changes.</p>
          <Separator className="my-6" />
          <p className="text-sm text-zinc-400">Last updated: June 2024 &mdash; Keep stacking, keep vibing, and may your lines be ever clear!</p>
        </CardContent>
      </Card>
    </ScrollArea>
  )
}
ns you accept the latest rules.</li>
              </ul>
              <h2 className="font-bold text-xl text-[#8B0836] mt-6 mb-2">5. Contact</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 font-inter">
                <li>Questions, concerns, or want to send us a high five? Reach us at support@tetriseffects.com</li>
              </ul>
              <p className="text-xs text-gray-400 font-inter">Last updated: June 2024</p>
            </motion.div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
