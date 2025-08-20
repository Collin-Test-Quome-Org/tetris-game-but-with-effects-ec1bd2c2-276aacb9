import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Pencil, Image as ImageIcon } from 'lucide-react'

export function ProfileEditForm({ profile, onSave }: {
  profile: { username: string, avatarUrl: string },
  onSave: (data: { username: string, avatarUrl: string }) => void
}) {
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState(profile.username)
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({ username, avatarUrl })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button id="edit-profile-btn" variant="secondary" className="flex gap-2 items-center"><Pencil size={16} />Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={username} onChange={e => setUsername(e.target.value)} required autoFocus />
          </div>
          <div>
            <Label htmlFor="avatarUrl">Avatar Image URL</Label>
            <Input id="avatarUrl" value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)} />
            <div className="flex items-center gap-3 mt-2">
              <span className="font-medium text-xs text-muted-foreground">Preview:</span>
              <span className="inline-block w-10 h-10 rounded-full bg-muted overflow-hidden">
                {avatarUrl ? <img src={avatarUrl} className="w-10 h-10 object-cover rounded-full" /> : <ImageIcon className="w-10 h-10 text-muted-foreground" />}
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button id="save-profile-btn" type="submit" className="bg-[#8B0836] hover:bg-[#FB2C36] text-white">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
