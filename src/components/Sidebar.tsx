import Image from 'next/image'

import {
  House,
  Lightning,
  ChartPie,
  ChartBarHorizontal,
  ChartLine,
  SignOut,
} from '@phosphor-icons/react'

import Tab from '@/components/Tab'

interface SidebarProps {
  tab: 'home' | 'speed' | 'consume' | 'historic' | 'total'
}

export default function Sidebar({ tab }: SidebarProps) {
  return (
    <aside className="flex flex-col justify-between w-24 items-center h-screen border border-slate-200 fixed top-0 left-0 z-40">
      <div className="p-8">
        <Image src="viasat-icon.svg" alt="ViaSat" width={40} height={32} />
      </div>

      <ul>
        <Tab TabIcon={House} isActive={tab === 'home' ? true : false} />
        <Tab TabIcon={Lightning} isActive={tab === 'speed' ? true : false} />
        <Tab TabIcon={ChartPie} isActive={tab === 'consume' ? true : false} />
        <Tab TabIcon={ChartBarHorizontal} isActive={tab === 'historic' ? true : false} />
        <Tab TabIcon={ChartLine} isActive={tab === 'total' ? true : false} />
      </ul>

      <div className="cursor-pointer p-8 transition hover:bg-slate-50">
        <SignOut size={32} color="#A0AEC0"  />
      </div>
    </aside>
  )
}
