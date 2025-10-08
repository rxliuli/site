import type { ProjectLink } from '@/types/project'
import { BiLogoEdge } from 'react-icons/bi'
import { SiDiscord, SiFirefox, SiGithub, SiGooglechrome, SiProducthunt, SiSafari, SiAppstore } from 'react-icons/si'
import { FaLink } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const IconMap: Record<ProjectLink['icon'], React.ComponentType<{ className: string }>> = {
  firefox: SiFirefox,
  chrome: SiGooglechrome,
  edge: BiLogoEdge,
  safari: SiSafari,
  discord: SiDiscord,
  producthunt: SiProducthunt,
  github: SiGithub,
  website: FaLink,
  vscode: VscVscode,
  appstore: SiAppstore,
}

export function ProjectIcon({ icon }: { icon: ProjectLink['icon'] }) {
  const Icon = IconMap[icon]
  return <Icon className="h-4 w-4" />
}

