import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

const NavHeader = () => {
  return (
    <Link href='/' passHref>
      <a className='ml-4 text-2xl font-bold'>Ishaan Bharal</a>
    </Link>
  )
}

const NavButton = ({ href, label }: { href: string; label: string }) => {
  const { pathname } = useRouter()
  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          pathname === href ? 'bg-blueGray-200 dark:bg-blueGray-700' : '',
          'flex items-center p-2 my-4 transition-colors rounded-sm',
          'hover:text-gray-800 hover:bg-blueGray-300 dark:hover:text-white dark:hover:bg-blueGray-600'
        )}
      >
        <span className='mx-4 text-lg font-normal'>{label}</span>
      </a>
    </Link>
  )
}

export const Navigation = () => {
  return (
    <div className='flex flex-row justify-around fixed'>
      <div className='w-60 h-screen bg-white dark:bg-blueGray-800'>
        <div className='flex items-center justify-start mx-6 my-10'>
          <NavHeader />
        </div>
        <nav className='my-10 px-6 '>
          <NavButton href='/resume' label='Resume' />
          <NavButton href='/projects' label='Projects' />
          <NavButton href='/gallery' label='Gallery' />
          <NavButton href='/blog' label='Blog' />
        </nav>
        <div className='px-6 justify-end'>
          <button className='bg-blueGray-600 p-2 rounded-sm'>Settings</button>
        </div>
      </div>
    </div>
  )
}
