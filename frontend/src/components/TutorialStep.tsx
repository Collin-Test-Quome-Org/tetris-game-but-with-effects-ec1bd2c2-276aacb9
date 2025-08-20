import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Move, RotateCw, Pause, Play, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ReactNode> = {
  move: <Move className="w-6 h-6 text-[#8B0836]" />, // left/right
  rotate: <RotateCw className="w-6 h-6 text-[#FB2C36]" />,
  drop: <ArrowRight className="w-6 h-6 text-[#8B0836] rotate-90" />, // soft drop
  pause: <Pause className="w-6 h-6 text-[#FB2C36]" />,
  play: <Play className="w-6 h-6 text-[#8B0836]" />,
  score: <Award className="w-6 h-6 text-[#FB2C36]" />,
  done: <CheckCircle className="w-6 h-6 text-green-600" />,
}

export type TutorialStepType = {
  title: string
  description: string
  icon: keyof typeof ICON_MAP
  highlight?: boolean
}

export function TutorialStep({
  title,
  description,
  icon,
  highlight = false,
}: TutorialStepType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={cn(
        'w-full',
        highlight && 'ring-2 ring-[#FB2C36] rounded-xl shadow-xl scale-105',
      )}
    >
      <Card className="bg-white/80 backdrop-blur-md border-2 border-[#8B0836]/10 hover:shadow-2xl transition-shadow">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <span>{ICON_MAP[icon]}</span>
          <CardTitle className="text-[#8B0836] font-orbitron text-lg tracking-wide">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 font-inter">
          {description}
        </CardContent>
      </Card>
    </motion.div>
  )
}
