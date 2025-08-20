import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const mockLeaderboard = {
  overall: [
    { id: 1, name: 'BlockStar', avatar: '/branding/assets/logo-2.png', score: 20450, level: 10, country: 'US', badges: ['🔥', '👑'] },
    { id: 2, name: 'Tetromaster', avatar: '/branding/assets/logo-1.png', score: 18300, level: 9, country: 'JP', badges: ['⚡'] },
    { id: 3, name: 'BerryBlitz', avatar: '/branding/assets/logo-0.png', score: 14200, level: 8, country: 'DE', badges: [] },
    { id: 4, name: 'PixelQueen', avatar: '', score: 12950, level: 8, country: 'FR', badges: ['👑'] },
    { id: 5, name: 'RedRush', avatar: '', score: 11000, level: 7, country: 'UK', badges: [] },
    { id: 6, name: 'StackAttack', avatar: '', score: 10500, level: 7, country: 'BR', badges: [] },
    { id: 7, name: 'ChromaKing', avatar: '', score: 10200, level: 6, country: 'IN', badges: ['⚡'] },
    { id: 8, name: 'LaserBlock', avatar: '', score: 9700, level: 6, country: 'CA', badges: [] },
    { id: 9, name: 'CosmoDrop', avatar: '', score: 9000, level: 5, country: 'AU', badges: [] },
    { id: 10, name: 'TetriSage', avatar: '', score: 8400, level: 5, country: 'KR', badges: [] }
  ],
  friends: [
    { id: 1, name: 'BerryBlitz', avatar: '/branding/assets/logo-0.png', score: 14200, level: 8, country: 'DE', badges: [] },
    { id: 2, name: 'RedRush', avatar: '', score: 11000, level: 7, country: 'UK', badges: [] },
    { id: 3, name: 'StackAttack', avatar: '', score: 10500, level: 7, country: 'BR', badges: [] },
  ],
  perLevel: {
    'Level 7': [
      { id: 1, name: 'RedRush', avatar: '', score: 11000, level: 7, country: 'UK', badges: [] },
      { id: 2, name: 'StackAttack', avatar: '', score: 10500, level: 7, country: 'BR', badges: [] },
    ],
    'Level 8': [
      { id: 1, name: 'BerryBlitz', avatar: '/branding/assets/logo-0.png', score: 14200, level: 8, country: 'DE', badges: [] },
      { id: 2, name: 'PixelQueen', avatar: '', score: 12950, level: 8, country: 'FR', badges: ['👑'] },
    ]
  }
}

const levels = Object.keys(mockLeaderboard.perLevel)

export function LeaderboardTable() {
  const [tab, setTab] = useState('overall')
  const [levelTab, setLevelTab] = useState(levels[0])

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="text-primary font-orbitron font-bold tracking-wide text-2xl">Leaderboard</span>
          <Badge variant="secondary" className="ml-2">Powered Up!</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="w-full flex justify-between mb-4">
            <TabsTrigger id="tab-overall" value="overall">Overall</TabsTrigger>
            <TabsTrigger id="tab-friends" value="friends">Friends</TabsTrigger>
            <TabsTrigger id="tab-per-level" value="perLevel">Per Level</TabsTrigger>
          </TabsList>
          <TabsContent value="overall">
            <ScrollArea className="h-72 pr-2">
              <motion.ol initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: 0.2 }} className="space-y-2">
                {mockLeaderboard.overall.map((user, idx) => (
                  <motion.li
                    layout
                    key={user.id}
                    className={
                      `flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all ` +
                      (idx < 3 ? 'border-2 border-yellow-400 shadow-lg' : 'border')
                    }
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                  >
                    <span className="font-bold text-lg w-8 text-center mr-2 text-secondary">{idx + 1}</span>
                    <Avatar className="mr-3">
                      {user.avatar ? (
                        <AvatarImage src={user.avatar} />
                      ) : (
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      )}
                    </Avatar>
                    <span className="font-semibold flex-1">{user.name}</span>
                    <span className="w-20 text-center font-mono">{user.score.toLocaleString()}</span>
                    <span className="w-10 text-center">{user.level}</span>
                    <span className="w-10 text-center">{user.country}</span>
                    <div className="flex ml-2 space-x-1">
                      {user.badges.map((b, i) => <span key={i} title="Badge">{b}</span>)}
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="friends">
            <ScrollArea className="h-72 pr-2">
              <motion.ol initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', delay: 0.2 }} className="space-y-2">
                {mockLeaderboard.friends.map((user, idx) => (
                  <motion.li
                    layout
                    key={user.id}
                    className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all border"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                  >
                    <span className="font-bold text-lg w-8 text-center mr-2 text-secondary">{idx + 1}</span>
                    <Avatar className="mr-3">
                      {user.avatar ? (
                        <AvatarImage src={user.avatar} />
                      ) : (
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      )}
                    </Avatar>
                    <span className="font-semibold flex-1">{user.name}</span>
                    <span className="w-20 text-center font-mono">{user.score.toLocaleString()}</span>
                    <span className="w-10 text-center">{user.level}</span>
                    <span className="w-10 text-center">{user.country}</span>
                  </motion.li>
                ))}
              </motion.ol>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="perLevel">
            <TabsList className="mb-2 flex flex-wrap gap-1 bg-transparent">
              {levels.map(lvl => (
                <TabsTrigger id={`tab-${lvl.replace(/\s/g, '-')}`} key={lvl} value={lvl} onClick={() => setLevelTab(lvl)}>{lvl}</TabsTrigger>
              ))}
            </TabsList>
            <ScrollArea className="h-56 pr-2">
              <ol className="space-y-2">
                {mockLeaderboard.perLevel[levelTab].map((user, idx) => (
                  <li
                    key={user.id}
                    className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all border"
                  >
                    <span className="font-bold text-lg w-8 text-center mr-2 text-secondary">{idx + 1}</span>
                    <Avatar className="mr-3">
                      {user.avatar ? (
                        <AvatarImage src={user.avatar} />
                      ) : (
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      )}
                    </Avatar>
                    <span className="font-semibold flex-1">{user.name}</span>
                    <span className="w-20 text-center font-mono">{user.score.toLocaleString()}</span>
                    <span className="w-10 text-center">{user.level}</span>
                    <span className="w-10 text-center">{user.country}</span>
                  </li>
                ))}
              </ol>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="flex justify-end mt-6">
          <Button id="btn-view-replays" asChild variant="ghost">
            <a href="/replay/123">
              View Top Replay
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
