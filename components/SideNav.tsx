import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box } from '@primitives/Box'
import { Button } from '@primitives/Button'
import { useTheme } from '@lib/useTheme'
import {
  BackpackIcon,
  CodeIcon,
  ImageIcon,
  ActivityLogIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'

const NavButton = ({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactElement
  miniature?: boolean
}) => {
  const { pathname } = useRouter()
  return (
    <Box as='li'>
      <Link href={href} passHref>
        <Button
          as='a'
          active={pathname === href}
          css={{ textAlign: 'center' }}
          title={label}
          accessKey={label}
          aria-label={label}
        >
          {icon}
        </Button>
      </Link>
    </Box>
  )
}
NavButton.toString = () => '.nav-button'

export const SideNav: React.FC = () => {
  const [theme, setTheme] = useTheme()
  return (
    <Box
      as='nav'
      css={{
        backgroundColor: '$secondary',
        borderRight: '1px solid $text',
      }}
    >
      <Box
        as='ul'
        css={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          '& > :last-child': {
            marginTop: 'auto',
          },
        }}
      >
        <NavButton href='/' label='Resume' icon={<BackpackIcon />} />
        <NavButton href='/projects' label='Projects' icon={<CodeIcon />} />
        <NavButton href='/gallery' label='Gallery' icon={<ImageIcon />} />
        <NavButton href='/blog' label='Blog' icon={<ActivityLogIcon />} />
        <Box as='li'>
          <Button
            onClick={() => {
              setTheme()
            }}
            color='secondary'
          >
            {theme.className === 'dark' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
