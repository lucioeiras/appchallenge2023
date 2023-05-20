import { Icon } from '@phosphor-icons/react'

interface TabProps {
  isActive: boolean,
  TabIcon: Icon
}

export default function Tab({ isActive, TabIcon }: TabProps) {
  const tabStyle = isActive
    ? 'p-8 cursor-pointer tab-active'
    : 'p-8 cursor-pointer hover:bg-slate-50 transition'

  return (
    <li className={tabStyle}>
      <TabIcon
        size={32}
        color={isActive ? "#A0CE4F": "#A0AEC0"}
        weight={isActive ? "duotone" : "regular"}
      />
    </li>
  )
}
