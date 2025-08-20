import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const defaultSettings = {
  particles: 40,
  shake: 0.5,
  color: '#FB2C36',
  glow: true,
}

export function EffectsLabControls({ settings, setSettings }: {
  settings: typeof defaultSettings,
  setSettings: (next: typeof defaultSettings) => void
}) {
  return (
    <Card className="w-full max-w-xl mx-auto shadow-lg border-2 border-[#8B0836]/30 bg-white/80 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="font-orbitron font-bold text-[#8B0836] tracking-widest text-lg">Effect Controls</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="particles">Particle Count</Label>
          <Slider id="particles" min={0} max={100} step={1} value={[settings.particles]} onValueChange={([v]) => setSettings({ ...settings, particles: v })} />
          <div className="text-xs text-muted-foreground">{settings.particles} particles</div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="shake">Screen Shake Intensity</Label>
          <Slider id="shake" min={0} max={2} step={0.01} value={[settings.shake]} onValueChange={([v]) => setSettings({ ...settings, shake: v })} />
          <div className="text-xs text-muted-foreground">{settings.shake.toFixed(2)} (0 = none, 2 = max)</div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="color">Main Effect Color</Label>
          <Input id="color" type="color" value={settings.color} onChange={e => setSettings({ ...settings, color: e.target.value })} style={{ height: 40, width: 60, padding: 0, background: 'none', border: 'none' }} />
        </div>
        <div className="flex items-center gap-2">
          <Switch id="glow" checked={settings.glow} onCheckedChange={v => setSettings({ ...settings, glow: v })} />
          <Label htmlFor="glow">Enable Glow Effect</Label>
        </div>
        <Button id="reset-effects" variant="outline" className="mt-2" onClick={() => setSettings(defaultSettings)}>Reset to Default</Button>
      </CardContent>
    </Card>
  )
}

export type EffectsLabSettings = typeof defaultSettings
export const defaultEffectsLabSettings = defaultSettings
