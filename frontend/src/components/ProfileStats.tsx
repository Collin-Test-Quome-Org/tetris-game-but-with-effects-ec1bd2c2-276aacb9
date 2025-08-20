import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, Gamepad2 } from 'lucide-react'

export function ProfileStats({ stats }: { stats: {
  totalScore: number
  bestLevel: number
  gamesPlayed: number
  badges: string[]
}}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card className="bg-gradient-to-br from-[#8B0836]/10 to-[#FB2C36]/10">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <Trophy className="text-[#8B0836] w-7 h-7" />
          <CardTitle className="text-lg font-orbitron">Total Score</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold font-orbitron">{stats.totalScore.toLocaleString()}</CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-[#8B0836]/10 to-[#FB2C36]/10">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <Award className="text-[#FB2C36] w-7 h-7" />
          <CardTitle className="text-lg font-orbitron">Best Level</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold font-orbitron">{stats.bestLevel}</CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-[#8B0836]/10 to-[#FB2C36]/10">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <Gamepad2 className="text-[#8B0836] w-7 h-7" />
          <CardTitle className="text-lg font-orbitron">Games Played</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold font-orbitron">{stats.gamesPlayed}</CardContent>
      </Card>
    </div>
  )
}

export function ProfileBadges({ badges }: { badges: { name: string, icon: React.ReactNode, achieved: boolean }[] }) {
  return (
    <div className="mt-8">
      <h3 className="font-orbitron text-lg mb-2 text-[#8B0836]">Badges</h3>
      <div className="flex flex-wrap gap-3">
        {badges.length === 0 && (
          <span className="text-muted-foreground">No badges earned yet—time to light up the leaderboard!</span>
        )}
        {badges.map((badge, idx) => (
          <Badge
            key={idx}
            className={`flex items-center gap-2 px-3 py-2 text-base ${badge.achieved ? 'bg-[#FB2C36] text-white' : 'bg-muted text-muted-foreground opacity-50'}`}
          >
            {badge.icon}
            {badge.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
