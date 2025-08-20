import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

export function SettingsForm({
  initialSettings = {
    controls: 'arrows',
    speed: 1,
    visualEffects: true,
    audioEffects: true
  },
  onSave
}: {
  initialSettings?: {
    controls: string
    speed: number
    visualEffects: boolean
    audioEffects: boolean
  }
  onSave?: (settings: any) => void
}) {
  const [controls, setControls] = useState(initialSettings.controls)
  const [speed, setSpeed] = useState(initialSettings.speed)
  const [visualEffects, setVisualEffects] = useState(initialSettings.visualEffects)
  const [audioEffects, setAudioEffects] = useState(initialSettings.audioEffects)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSave) {
      onSave({ controls, speed, visualEffects, audioEffects })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg">
      <h2 className="text-2xl font-orbitron font-bold text-[#8B0836]">Game Settings</h2>
      {/* Controls Layout */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="controls-layout" className="font-semibold">Controls</Label>
        <div className="flex items-center gap-6" id="controls-layout">
          <Button
            id="controls-arrows"
            type="button"
            variant={controls === 'arrows' ? 'default' : 'outline'}
            onClick={() => setControls('arrows')}
          >
            Arrow Keys
          </Button>
          <Button
            id="controls-wasd"
            type="button"
            variant={controls === 'wasd' ? 'default' : 'outline'}
            onClick={() => setControls('wasd')}
          >
            WASD
          </Button>
          <Button
            id="controls-touch"
            type="button"
            variant={controls === 'touch' ? 'default' : 'outline'}
            onClick={() => setControls('touch')}
          >
            Touch
          </Button>
        </div>
      </div>

      {/* Game Speed */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="speed-slider" className="font-semibold">Game Speed</Label>
        <div className="flex items-center gap-4">
          <Slider
            id="speed-slider"
            min={1}
            max={10}
            step={1}
            value={[speed]}
            onValueChange={v => setSpeed(v[0])}
            className="w-2/3"
          />
          <span className="text-[#8B0836] font-bold font-orbitron text-xl">{speed}</span>
        </div>
      </div>

      {/* Visual Effects Toggle */}
      <div className="flex items-center gap-4">
        <Switch
          id="visual-effects-toggle"
          checked={visualEffects}
          onCheckedChange={setVisualEffects}
        />
        <Label htmlFor="visual-effects-toggle" className="font-semibold">Enable Visual Effects</Label>
      </div>

      {/* Audio Effects Toggle */}
      <div className="flex items-center gap-4">
        <Switch
          id="audio-effects-toggle"
          checked={audioEffects}
          onCheckedChange={setAudioEffects}
        />
        <Label htmlFor="audio-effects-toggle" className="font-semibold">Enable Audio Effects</Label>
      </div>

      <Button id="save-settings" type="submit" className="w-full bg-[#8B0836] hover:bg-[#FB2C36] text-white font-bold py-2 px-4 rounded">
        Save Settings
      </Button>
    </form>
  )
}
