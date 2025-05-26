import type { ProjectLink } from '@/types/project'
import { BiLogoEdge } from 'react-icons/bi'
import { SiDiscord, SiFirefox, SiGooglechrome, SiProducthunt, SiSafari } from 'react-icons/si'

const IconMap: Record<ProjectLink['icon'], React.ComponentType<{ className: string }>> = {
  firefox: SiFirefox,
  chrome: SiGooglechrome,
  edge: BiLogoEdge,
  safari: SiSafari,
  discord: SiDiscord,
  producthunt: SiProducthunt,
}

export function ProjectIcon({ icon }: { icon: ProjectLink['icon'] }) {
  const Icon = IconMap[icon]
  return <Icon className="h-4 w-4" />
}

