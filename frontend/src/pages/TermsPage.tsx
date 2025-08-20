import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

export function TermsPage() {
  return (
    <ScrollArea className="mx-auto max-w-2xl p-6 mt-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-2xl border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-3xl text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-5 space-y-6 text-base leading-relaxed font-inter text-gray-800">
            <h2 className="font-semibold text-lg mt-4 text-primary">Welcome to Tetris Effects!</h2>
            <p>
              By accessing or using Tetris Effects, you agree to these terms. Please read them carefully—no blocky surprises!
            </p>
            <h2 className="font-semibold text-lg mt-4 text-primary">Use of Our Service</h2>
            <ul className="list-disc ml-6">
              <li>Play fairly! No cheating, exploiting, or using bots.</li>
              <li>All content is for your personal, non-commercial use.</li>
              <li>Respect other players and our community guidelines.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-4 text-primary">Accounts & Content</h2>
            <ul className="list-disc ml-6">
              <li>You are responsible for your account security.</li>
              <li>We may display your username, avatar, and scores on leaderboards.</li>
              <li>We reserve the right to moderate or remove content or accounts that violate these terms.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-4 text-primary">Intellectual Property</h2>
            <ul className="list-disc ml-6">
              <li>The game code, effects, and visuals are owned by us. Don't copy or redistribute without permission.</li>
            </ul>
            <h2 className="font-semibold text-lg mt-4 text-primary">Disclaimer & Limitation of Liability</h2>
            <p>
              We provide Tetris Effects "as is" and do not guarantee it will be error-free or uninterrupted. We are not liable for damages resulting from use of the service.
            </p>
            <h2 className="font-semibold text-lg mt-4 text-primary">Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use means you accept the new terms.
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-gray-400">Last updated: June 2024</p>
          </CardContent>
        </Card>
      </motion.div>
    </ScrollArea>
  )
}
