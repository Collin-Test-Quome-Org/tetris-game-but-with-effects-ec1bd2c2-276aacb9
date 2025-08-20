import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ProfileStats, ProfileBadges } from '@/components/ProfileStats'
import { ProfileEditForm } from '@/components/ProfileEditForm'
import { Loader2, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const COMPANY_VOICE = `Hey Block Master! Welcome to your Tetris Effects Profile. Here you'll find all your glorious stats, badges, and milestones as you stack, clear, and dazzle your way up the leaderboard. Ready to drop some more blocks or show off your style? Let's make those effects pop!`

const BADGE_LIST = [
  { name: 'First Clear', icon: <Sparkles className="w-5 h-5" />, achieved: true },
  { name: 'Level 10', icon: <Star className="w-5 h-5" />, achieved: false },
  { name: 'Combo Champ', icon: <Sparkles className="w-5 h-5" />, achieved: false },
]

export function ProfilePage() {
  const [profile, setProfile] = useState<{
    username: string
    avatarUrl: string
    stats: { totalScore: number; bestLevel: number; gamesPlayed: number; badges: string[] }
  } | null>(null)

  // Fake fetch profile
  useEffect(() => {
    setTimeout(() => {
      setProfile({
        username: 'BlockJuggler',
        avatarUrl: '/branding/assets/logo-2.png',
        stats: {
          totalScore: 189240,
          bestLevel: 17,
          gamesPlayed: 52,
          badges: ['First Clear'],
        },
      })
    }, 500)
  }, [])

  function handleSave({ username, avatarUrl }: { username: string; avatarUrl: string }) {
    setProfile(p => p ? { ...p, username, avatarUrl } : null)
    // Normally, you'd also PATCH to API here.
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-white to-[#f9f6f9]">
        <CardContent className="flex flex-col md:flex-row gap-8 md:items-center">
          <motion.div
            className="flex flex-col items-center gap-2 w-full md:w-1/3"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Avatar className="w-28 h-28 border-4 border-[#8B0836] shadow-md">
              <AvatarImage src={profile?.avatarUrl} />
              <AvatarFallback className="font-orbitron text-3xl bg-[#FB2C36]/20">{profile?.username?.[0]?.toUpperCase() ?? '?'}</AvatarFallback>
            </Avatar>
            <div className="flex gap-2 items-center mt-2">
              <span className="font-orbitron text-xl text-[#8B0836]">{profile?.username || <Loader2 className="animate-spin" />}</span>
              {profile && (
                <ProfileEditForm profile={{ username: profile.username, avatarUrl: profile.avatarUrl }} onSave={handleSave} />
              )}
            </div>
          </motion.div>
          <div className="flex-1">
            <p className="font-inter mb-4 text-gray-700 italic">{COMPANY_VOICE}</p>
            {profile ? (
              <>
                <ProfileStats stats={profile.stats} />
                <ProfileBadges badges={BADGE_LIST.map(b => ({ ...b, achieved: profile.stats.badges.includes(b.name) }))} />
              </>
            ) : (
              <div className="flex justify-center items-center h-32">
                <Loader2 className="animate-spin w-8 h-8 text-[#8B0836]" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
