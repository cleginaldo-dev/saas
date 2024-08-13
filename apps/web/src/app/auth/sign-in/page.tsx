import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import githubIcon from '@/assets/github-icon.svg'
import Image from 'next/image'

export default function SignIn() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Senha</Label>
        <Input type="password" name="password" id="password" />

        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full">
        Sign in with email
      </Button>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign in with GitHub
      </Button>
    </form>
  )
}
